import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  visitors: defineTable({
    name: v.string(),
    email: v.string(),
    phone: v.optional(v.string()),
    relation: v.optional(v.string()),
    timestamp: v.string(),
    actions: v.array(v.string()),
    device: v.optional(v.string()),
    city: v.optional(v.string()),
  }),
});
