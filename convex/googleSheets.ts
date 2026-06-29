"use node";

import { internalAction } from "./_generated/server";
import { v } from "convex/values";
import { createSign } from "crypto";

async function getAccessToken(): Promise<string> {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL!;
  const rawKey = process.env.GOOGLE_PRIVATE_KEY!.replace(/\\n/g, "\n");

  const now = Math.floor(Date.now() / 1000);
  const header = Buffer.from(JSON.stringify({ alg: "RS256", typ: "JWT" })).toString("base64url");
  const payload = Buffer.from(
    JSON.stringify({
      iss: email,
      scope: "https://www.googleapis.com/auth/spreadsheets",
      aud: "https://oauth2.googleapis.com/token",
      exp: now + 3600,
      iat: now,
    })
  ).toString("base64url");

  const toSign = `${header}.${payload}`;
  const signer = createSign("RSA-SHA256");
  signer.update(toSign);
  const signature = signer.sign(rawKey, "base64url");
  const jwt = `${toSign}.${signature}`;

  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: jwt,
    }),
  });

  const data = (await res.json()) as { access_token: string };
  return data.access_token;
}

export const appendRow = internalAction({
  args: {
    persona: v.string(),
    fields: v.any(),
    submittedAt: v.number(),
  },
  handler: async (_ctx, args) => {
    const token = await getAccessToken();
    const sheetId = process.env.GOOGLE_SHEET_ID!;

    const fields = args.fields as Record<string, string>;
    const timestamp = new Date(args.submittedAt).toLocaleString("en-US", {
      timeZone: "America/New_York",
    });

    // Fixed columns + remaining fields as "key: value" pairs
    const name = fields.name ?? "";
    const email = fields.email ?? "";
    const extras = Object.entries(fields)
      .filter(([k]) => k !== "name" && k !== "email")
      .map(([k, v]) => `${k.replace(/_/g, " ")}: ${v}`)
      .join("  |  ");

    const row = [timestamp, args.persona, name, email, extras];

    const res = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/A1:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ values: [row] }),
      }
    );

    if (!res.ok) {
      const err = await res.text();
      throw new Error(`Google Sheets API error: ${err}`);
    }
  },
});
