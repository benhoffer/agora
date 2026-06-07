import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  submissions: defineTable({
    persona: v.string(),
    fields: v.any(),
  }),
});
