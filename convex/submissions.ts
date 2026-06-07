import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const create = mutation({
  args: {
    persona: v.string(),
    fields: v.any(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("submissions", {
      persona: args.persona,
      fields: args.fields,
    });
  },
});
