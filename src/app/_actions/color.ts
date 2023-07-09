"use server"
import { z } from "zod"

import { db } from "@/lib/db"
import { revalidatePath } from "next/cache"
import { colorSchema } from "@/lib/validations/color"

export async function addColorAction(input: z.infer<typeof colorSchema>) {
 const res= await db.color.create({
    data: {
      name: input.name,
      code:input.code
    },
  })
  revalidatePath("/admin/colors")
  return res.code;
}
export async function deleteColorAction(id:number) {

  await db.color.delete({
    where:{
      id
    }
  })
  revalidatePath("/admin/colores")
 }
