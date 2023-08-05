import * as z from "zod"

export const ProductSchema = z.object({
  name: z
    .string()
    .min(5, { message: "Too short name" })
    .max(500, { message: "Too long name" }),

  // image:z.string(),
  description: z.string().min(1).optional(),
  min_order: z.number().int().min(1),
  featured: z.boolean().optional(),
  categories: z.array(
    z.number()
  ).optional(),
  colors: z.array(
    z.object({
      colorId: z.number().int().positive(),
      extra: z.number().int().positive(),

    })
  ).optional(),
  prices: z.array(
    z.object({
      label: z.string().min(1),
      unitPrice: z.number().positive(),
    })
  ).optional(),
  sizes: z.array(
    z.object({
      sizeId: z.number().int().positive(),
      extra: z.number().int().positive(),

    })
  ).optional(),
  times: z.array(
    z.object({
      quantity: z.string().min(1),
      time: z.string().min(1),
    })
  ).optional(),
  // featured:z.boolean()
})
