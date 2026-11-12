import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const getVisitors = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("visitors").order("desc").collect();
  },
});

export const logVisitor = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    phone: v.optional(v.string()),
    relation: v.optional(v.string()),
    timestamp: v.string(),
    actions: v.array(v.string()),
    device: v.optional(v.string()),
    city: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const existing = await ctx.db
      .query("visitors")
      .filter((q) => q.eq(q.field("email"), args.email))
      .first();

    if (existing) {
      await ctx.db.patch(existing._id, {
        timestamp: args.timestamp,
        actions: Array.from(new Set([...existing.actions, ...args.actions])),
      });
      return existing._id;
    }

    return await ctx.db.insert("visitors", args);
  },
});
