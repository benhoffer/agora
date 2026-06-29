import { mutation } from "./_generated/server";
import { v } from "convex/values";
import { internal } from "./_generated/api";

export const create = mutation({
  args: {
    persona: v.string(),
    fields: v.any(),
  },
  handler: async (ctx, args) => {
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
