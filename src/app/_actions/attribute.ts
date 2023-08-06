"use server"
import { z } from "zod"

import { db } from "@/lib/db"
import { revalidatePath } from "next/cache"
import { attributeSchema } from "@/lib/validations/attribute"

export async function addAttributeAction(input: z.infer<typeof attributeSchema>) {
 const res= await db.attribute.create({
    data: {
      name: input.name,
    },
  })
  revalidatePath("/admin/attributes")
  return res.name;
}
export async function deleteAttributeAction(id:number) {

  await db.attribute.delete({
    where:{
      id
    }
  })
  revalidatePath("/admin/attributes")
 }
