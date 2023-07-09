"use server"
import { z } from "zod"

import { db } from "@/lib/db"
import { revalidatePath } from "next/cache"
import { categorySchema } from "@/lib/validations/category"
import slug from 'slug';

export async function addcategoryAction(input: z.infer<typeof categorySchema>) {
 const res= await db.category.create({
    data: {
      name: input.name,
      slug:slug(input.name),
      parent_id:input.parent_id
    },
  })
  revalidatePath("/admin/categories")
  return res.name;
}
export async function deleteCategoryAction(id:number) {

  await db.category.delete({
    where:{
      id
    }
  })
  revalidatePath("/admin/categories")
 }
