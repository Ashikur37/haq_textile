"use server"
import { z } from "zod"

import { db } from "@/lib/db"
import { imageSchema } from "@/lib/validations/image"
import { revalidatePath } from "next/cache"

export async function addImageAction(input: z.infer<typeof imageSchema>) {
 const res= await db.image.create({
    data: {
      image: input.image,
    },
  })
  revalidatePath("/admin/images")
  return res.image;
}
export async function deleteImageAction(id:number) {
  await db.image.delete({
    where:{
      id
    }
  })
   revalidatePath("/admin/images")
 }
