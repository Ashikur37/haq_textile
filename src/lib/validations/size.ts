import * as z from "zod"

export const sizeSchema = z.object({
    name: z.string().min(1),
    extra: z.number().min(0).optional(),
})