import { ConvexHttpClient } from "convex/browser";
import { api } from "@/convex/_generated/api";
import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const PERSONA_LABELS: Record<string, string> = {
  citizen: "Citizen — Municipality Request",
  government: "Government — Demo / RFI",
  ngo: "NGO — Request AGORA",
};

const PERSONA_SUBJECT_PREFIX: Record<string, string> = {
  citizen: "[Citizen request]",
  government: "[Gov RFI/Demo]",
  ngo: "[NGO request]",
};

function buildEmailHtml(
  persona: string,
  fields: Record<string, string>
): string {
  const personaLabel = PERSONA_LABELS[persona] ?? persona;
  const rows = Object.entries(fields)
    .filter(([, v]) => v)
    .map(
      ([key, value]) => `
      <tr>
        <td style="padding:8px 12px;border-bottom:1px solid #222;color:#9e9585;font-size:12px;text-transform:uppercase;letter-spacing:1px;white-space:nowrap;width:180px;">
          ${key.replace(/_/g, " ")}
        </td>
        <td style="padding:8px 12px;border-bottom:1px solid #222;color:#f0ebe0;font-size:14px;">
          ${value}
        </td>
      </tr>`
    )
    .join("");

  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8" /></head>
<body style="margin:0;padding:0;background:#0c0b09;font-family:'Inter',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:40px auto;">
    <tr>
      <td style="padding:32px 32px 24px;border-bottom:1px solid rgba(201,168,76,0.3);">
        <span style="font-size:24px;font-weight:600;color:#c9a84c;letter-spacing:4px;">AGORA</span>
      </td>
    </tr>
    <tr>
      <td style="padding:24px 32px 8px;">
        <p style="margin:0;font-size:13px;color:#9e9585;letter-spacing:2px;text-transform:uppercase;">New Inquiry</p>
        <h2 style="margin:8px 0 0;font-size:20px;color:#f0ebe0;font-weight:400;">${personaLabel}</h2>
      </td>
    </tr>
    <tr>
      <td style="padding:16px 32px 32px;">
        <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #222;border-radius:2px;">
          ${rows}
        </table>
      </td>
    </tr>
    <tr>
      <td style="padding:16px 32px;border-top:1px solid rgba(201,168,76,0.15);">
        <p style="margin:0;font-size:11px;color:#555;text-align:center;">
          Submitted via AGORA · ${new Date().toUTCString()}
        </p>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { persona, fields } = body as {
      persona: string;
      fields: Record<string, string>;
    };

    if (!persona || !fields) {
      return NextResponse.json(
        { error: "Missing persona or fields." },
        { status: 400 }
      );
    }

    // 1. Store in Convex
    const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);
    await convex.mutation(api.submissions.create, { persona, fields });

    // 2. Send notification email via Resend
    const resend = new Resend(process.env.RESEND_API_KEY);
    const personaLabel = PERSONA_LABELS[persona] ?? persona;

    const { error: emailError } = await resend.emails.send({
      from: "AGORA <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL!,
      subject: `${PERSONA_SUBJECT_PREFIX[persona] ?? "[AGORA]"} ${personaLabel}`,
      html: buildEmailHtml(persona, fields),
    });

    if (emailError) {
      // Submission already saved — log email failure but don't fail the request
      console.error("Resend email error:", emailError);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
