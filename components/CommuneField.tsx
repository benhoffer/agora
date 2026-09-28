"use client";

import { useEffect, useId, useRef, useState } from "react";

interface Commune {
  nom: string;
  code: string; // INSEE
  codeDepartement: string;
  codesPostaux?: string[];
  population?: number;
}

const API = "https://geo.api.gouv.fr/communes";
const FIELDS = "nom,code,codeDepartement,codesPostaux,population";

function display(c: Commune): string {
  return `${c.nom} (${c.codeDepartement})`;
}

/**
 * Commune picker backed by the State's geo API (geo.api.gouv.fr).
 *
 * The point is the INSEE code, not the name: dozens of communes share a name
 * ("Saint-Martin"), and a typed name cannot tell them apart, so requests keyed
 * on text split one commune in two and merge two communes into one. Picking a
 * suggestion submits `<name>_insee`, `<name>_departement` and
 * `<name>_population` alongside the display name.
 *
 * With `strict`, a value that was typed but not picked fails native form
 * validation, so the submission always carries a code.
 */
export default function CommuneField({
  name,
  label,
  placeholder,
  required,
  strict,
  inputStyle,
  labelStyle,
  messages,
}: {
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  strict?: boolean;
  inputStyle: (focused: boolean) => React.CSSProperties;
  labelStyle: React.CSSProperties;
  messages: { required: string; noResults: string; searching: string };
}) {
  const id = useId();
  const listId = `${id}-list`;
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Commune[]>([]);
  const [selected, setSelected] = useState<Commune | null>(null);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(-1);
  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState(false);

  // Search, debounced; a newer keystroke aborts the older request so a slow
  // response cannot overwrite a fresher one.
  useEffect(() => {
    const q = query.trim();
    if (selected || q.length < 2 || /^\d{1,4}$/.test(q)) {
      setResults([]);
      setLoading(false);
      return;
    }
    const ctrl = new AbortController();
    setLoading(true);
    const timer = setTimeout(async () => {
      const params = /^\d{5}$/.test(q)
        ? `codePostal=${q}`
        : `nom=${encodeURIComponent(q)}&boost=population`;
      try {
        const res = await fetch(`${API}?${params}&fields=${FIELDS}&limit=8`, { signal: ctrl.signal });
        const data = res.ok ? ((await res.json()) as Commune[]) : [];
        setResults(data);
        setActive(data.length ? 0 : -1);
      } catch {
        if (!ctrl.signal.aborted) setResults([]);
      } finally {
        if (!ctrl.signal.aborted) setLoading(false);
      }
    }, 200);
    return () => {
      clearTimeout(timer);
      ctrl.abort();
    };
  }, [query, selected]);

  // Strict mode: anything short of a picked commune is invalid.
  useEffect(() => {
    const el = inputRef.current;
    if (!el) return;
    el.setCustomValidity(strict && !selected && query.trim() !== "" ? messages.required : "");
  }, [strict, selected, query, messages.required]);

  const choose = (c: Commune) => {
    setSelected(c);
    setQuery(display(c));
    setOpen(false);
    setResults([]);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!open || results.length === 0) {
      if (e.key === "ArrowDown" && results.length) setOpen(true);
      return;
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => (i + 1) % results.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => (i - 1 + results.length) % results.length);
    } else if (e.key === "Enter" && active >= 0) {
      e.preventDefault();
      choose(results[active]);
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  };

  const showList = open && focused && results.length > 0;
  const status =
    focused && !selected && query.trim().length >= 2
      ? loading
        ? messages.searching
        : results.length === 0
          ? messages.noResults
          : ""
      : "";

  return (
    <div style={{ position: "relative" }}>
      <label htmlFor={id} style={labelStyle}>
        {label}
      </label>
      <input
        ref={inputRef}
        id={id}
        type="text"
        role="combobox"
        aria-autocomplete="list"
        aria-expanded={showList}
        aria-controls={listId}
        aria-activedescendant={showList && active >= 0 ? `${listId}-${active}` : undefined}
        autoComplete="off"
        placeholder={placeholder}
        required={required}
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setSelected(null);
          setOpen(true);
        }}
        onKeyDown={onKeyDown}
        onFocus={() => {
          setFocused(true);
          setOpen(true);
        }}
        onBlur={() => setFocused(false)}
        style={inputStyle(focused)}
      />

      {/* What is submitted. Non-strict fields fall back to the typed text. */}
      <input type="hidden" name={name} value={selected ? display(selected) : strict ? "" : query.trim()} />
      <input type="hidden" name={`${name}_insee`} value={selected?.code ?? ""} />
      <input type="hidden" name={`${name}_departement`} value={selected?.codeDepartement ?? ""} />
      <input
        type="hidden"
        name={`${name}_population`}
        value={selected?.population != null ? String(selected.population) : ""}
      />

      <ul
        id={listId}
        role="listbox"
        aria-label={label}
        hidden={!showList}
        style={{
          position: "absolute",
          zIndex: 10,
          left: 0,
          right: 0,
          margin: 0,
          padding: 0,
          listStyle: "none",
          background: "#fffdf6",
          border: "1px solid var(--color-line)",
          borderTop: "none",
          maxHeight: "16rem",
          overflowY: "auto",
        }}
      >
        {results.map((c, i) => (
          <li
            key={c.code}
            id={`${listId}-${i}`}
            role="option"
            aria-selected={i === active}
            onMouseDown={(e) => {
              // Keep focus in the input so blur does not close the list first.
              e.preventDefault();
              choose(c);
            }}
            onMouseEnter={() => setActive(i)}
            style={{
              padding: "0.6rem 1rem",
              cursor: "pointer",
              fontFamily: "var(--font-sans)",
              fontSize: "0.875rem",
              color: "var(--color-text)",
              background: i === active ? "var(--color-gold-dim)" : "transparent",
            }}
          >
            {display(c)}
            {c.codesPostaux?.[0] && (
              <span style={{ color: "var(--color-muted)", marginLeft: "0.5rem", fontSize: "0.78rem" }}>
                {c.codesPostaux[0]}
                {c.codesPostaux.length > 1 ? "…" : ""}
              </span>
            )}
          </li>
        ))}
      </ul>

      <p
        aria-live="polite"
        style={{
          minHeight: status ? undefined : 0,
          margin: status ? "0.35rem 0 0" : 0,
          fontFamily: "var(--font-sans)",
          fontSize: "0.75rem",
          color: "var(--color-muted)",
        }}
      >
        {status}
      </p>
    </div>
  );
}
