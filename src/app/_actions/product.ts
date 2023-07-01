"use server"

import { revalidatePath } from "next/cache"
import { z } from "zod"

import { deleteImageFromCloudinary } from "@/lib/cloudinary"
import { db } from "@/lib/db"
import { ProductSchema } from "@/lib/validations/product"

interface AddProductActionType extends z.infer<typeof ProductSchema>{
  image:string
}
export async function addProductAction(input:AddProductActionType ) {
  const res = await db.product.create({
    data: {
      name: input.name,
      image: input.image,
      price_from: input.price_from,
      price_to: input.price_to,
      description: input.description,
      featured: input.featured ?? false,
    },
  })
  revalidatePath("/admin/products")
  return res.image
}
export async function deleteProductAction(id: number) {
  const product = await db.product.findUnique({
    where: {
      id,
    },
  })
  await deleteImageFromCloudinary(product?.image!)
  await db.product.delete({
    where: {
      id,
    },
  })
  revalidatePath("/admin/products")
}
