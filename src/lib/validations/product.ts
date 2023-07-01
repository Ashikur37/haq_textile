import * as z from 'zod';
export const ProductSchema = z.object({
    name: z.string().min(5, { message: 'Too short name' }).max(30,{message:'Too long name'}),
    price_from:z.number(),
    price_to:z.number(),
    // image:z.string(),
    description:z.string(),
    featured:z.boolean()
  });