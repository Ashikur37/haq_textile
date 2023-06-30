import * as z from "zod"

export const imageSchema = z.object({
    image: z.string().min(1, {
    message: "Must be at least 1 character",
  }),
})