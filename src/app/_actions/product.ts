"use server"

import { revalidatePath } from "next/cache"
import slug from "slug"
import { z } from "zod"

import { deleteImageFromCloudinary } from "@/lib/cloudinary"
import { db } from "@/lib/db"
import { ProductSchema } from "@/lib/validations/product"

interface AddProductActionType extends z.infer<typeof ProductSchema> {
  image: string
  images: string[]
}
export async function addProductAction(input: AddProductActionType) {
  const product = await db.product.create({
    data: {
      name: input.name,
      image: input.image,
      description: input.description,
      slug: slug(input.name),
    },
  })
  if (input.prices) {
    await db.price.createMany({
      data: input.prices?.map((price) => ({
        label: price.label,
        unitPrice: price.unitPrice!,
        productId: product.id,
      })),
    })
  }
  await db.categoriesOnProducts.createMany({
    data: input.categories?.map((category) => ({
      categoryId: category,
      productId: product.id,
    })),
  })
  await db.productImage.createMany({
    data: input.images?.map((image) => ({
      image,
      productId: product.id,
    })),
  })
  //colors

  
  //sizes


  //times


  revalidatePath("/admin/products")
  return product.image
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
export async function featureProductAction(id: number, featured: boolean) {
  await db.product.update({
    data: {
      featured,
    },
    where: {
      id,
    },
  })
  revalidatePath("/admin/products")
  revalidatePath("/")
}
