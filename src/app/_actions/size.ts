"use server"
import { z } from "zod"

import { db } from "@/lib/db"
import { revalidatePath } from "next/cache"
import { sizeSchema } from "@/lib/validations/size"

export async function addSizeAction(input: z.infer<typeof sizeSchema>) {
 const res= await db.size.create({
    data: {
      name: input.name,
    },
  })
  revalidatePath("/admin/sizes")
  return res.name;
}
export async function deleteSizeAction(id:number) {

  await db.color.delete({
    where:{
      id
    }
  })
  revalidatePath("/admin/sizes")
 }
