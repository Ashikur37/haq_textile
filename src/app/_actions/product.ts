"use server"

import { revalidatePath } from "next/cache"
import { z } from "zod"
import slug from 'slug';
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
      description: input.description,
      slug:slug(input.name)
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
export async function featureProductAction(id:number,featured:boolean){
  await db.product.update({
    data:{
      featured
    },
    where:{
      id
    }
  })
  revalidatePath("/admin/products")
  revalidatePath("/")
}
