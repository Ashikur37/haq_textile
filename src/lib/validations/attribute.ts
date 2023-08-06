import * as z from "zod"

export const attributeSchema = z.object({
    name: z.string().min(1),
    value: z.string().min(0).optional(),
})