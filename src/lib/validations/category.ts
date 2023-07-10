import * as z from "zod"

export const categorySchema = z
  .object({
    name: z.string().min(1),
    parent_id: z.number().int().positive().optional(),
    category:z.object({
      value:z.number().int().positive().optional(),
      label:z.string().min(1).optional()
    })
  })
//   .refine(
//     (data) => {
//       // Custom validation for checking if parent category exists
//       if (data.parent_id === undefined) return true // No parent category specified
//       // Custom logic to check if the parent category exists in the database
//       // You can perform a database query here or use any other validation logic
      
//       const parentCategoryExists = true // Replace with your logic to check parent category existence
//       return parentCategoryExists
//     },
//     {
//       message: "Parent category does not exist",
//       path: ["parent_id"],
//     }
//   )
