import * as z from "zod"

export const ProductSchema = z.object({
  name: z
    .string()
    .min(5, { message: "Too short name" })
    .max(30, { message: "Too long name" }),

  // image:z.string(),
  description: z.string().min(1),
  min_order: z.number().int().min(1),
  featured: z.boolean().optional(),
  categories: z.array(
    z.object({
      categoryId: z.number().int().positive(),
    })
  ),
  colors: z.array(
    z.object({
      colorId: z.number().int().positive(),
    })
  ),
  prices: z.array(
    z.object({
      quantity: z.number().int().positive(),
      unitPrice: z.number().positive(),
    })
  ),
  sizes: z.array(
    z.object({
      sizeId: z.number().int().positive(),
    })
  ),
  times: z.array(
    z.object({
      quantity: z.string().min(1),
      time: z.string().min(1),
    })
  ),
  // featured:z.boolean()
})
