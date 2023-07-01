"use server"
import { z } from "zod"

import { db } from "@/lib/db"
import { imageSchema } from "@/lib/validations/image"
import { revalidatePath } from "next/cache"
import { deleteImageFromCloudinary } from "@/lib/cloudinary"

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
  const image=await db.image.findUnique({
    where:{
      id
    }
  });
  await  deleteImageFromCloudinary(image?.image!);
  await db.image.delete({
    where:{
      id
    }
  })
  revalidatePath("/admin/images")
 }
