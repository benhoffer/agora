import { mutation } from "./_generated/server";
import { v } from "convex/values";
import { internal } from "./_generated/api";

const MAX_FIELDS = 20;
const MAX_KEY = 40;
const MAX_VALUE = 5000;

/**
 * Public by necessity: the site's /api/contact route calls it through
 * ConvexHttpClient, which can only reach public functions. That route is
 * itself unauthenticated, so making this internal would add nothing — the
 * protection has to be here. Previously `fields` was `v.any()`, so anyone with
 * the deployment URL could store arbitrary, unbounded documents.
 */
export const create = mutation({
  args: {
    persona: v.union(v.literal("citizen"), v.literal("government"), v.literal("ngo")),
    fields: v.record(v.string(), v.string()),
  },
  handler: async (ctx, args) => {
    const entries = Object.entries(args.fields);
    if (
      entries.length > MAX_FIELDS ||
      entries.some(([k, val]) => k.length > MAX_KEY || val.length > MAX_VALUE)
    ) {
      throw new Error("Submission too large.");
    }

    const id = await ctx.db.insert("submissions", {
      persona: args.persona,
      fields: args.fields,
    });

    await ctx.scheduler.runAfter(0, internal.googleSheets.appendRow, {
      persona: args.persona,
      fields: args.fields,
      submittedAt: Date.now(),
    });

    return id;
  },
});
