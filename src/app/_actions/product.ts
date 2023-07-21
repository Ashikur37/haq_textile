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
interface EditProductActionType extends AddProductActionType {
  productId: number
}
export async function addProductAction(input: AddProductActionType) {
  const product = await db.product.create({
    data: {
      name: input.name,
      image: input.image,
      description: input.description,
      slug: slug(input.name),
      min_order: input.min_order,
    },
  })
  if (input.prices) {
    await db.price.createMany({
      data: input.prices?.map((price) => ({
        label: price.label,
        unitPrice: price.unitPrice,
        productId: product.id,
      })),
    })
  }
  if (input.categories) {
    await db.categoriesOnProducts.createMany({
      data: input.categories?.map((category) => ({
        categoryId: category,
        productId: product.id,
      })),
    })
  }

  await db.productImage.createMany({
    data: input.images?.map((image) => ({
      image,
      productId: product.id,
    })),
  })
  //colors
  if (input.colors) {
    await db.colorsOnProducts.createMany({
      data: input.colors?.map((color) => ({
        colorId: color.colorId,
        productId: product.id,
        extra: color.extra,
      })),
    })
  }
  //sizes
  if (input.sizes) {
    await db.sizesOnProducts.createMany({
      data: input.sizes?.map((size) => ({
        sizeId: size.sizeId,
        productId: product.id,
        extra: size.extra,
      })),
    })
  }
  //times
  if (input.times) {
    await db.leadTime.createMany({
      data: input.times?.map((leadTime) => ({
        quantity: leadTime.quantity,
        productId: product.id,
        time: leadTime.time,
      })),
    })
  }
  revalidatePath("/admin/products")
  return product.image
}
export async function editProductAction(input: EditProductActionType) {
  const { productId } = input
  const product = await db.product.update({
    where: {
      id: productId,
    },
    data: {
      name: input.name,
      image: input.image,
      description: input.description,
      min_order: input.min_order,
    },
  })
  if (input.prices) {
    await db.price.deleteMany({
      where: {
        productId,
      },
    })
    await db.price.createMany({
      data: input.prices?.map((price) => ({
        label: price.label,
        unitPrice: price.unitPrice,
        productId: product.id,
      })),
    })
  }
  if (input.categories) {
    await db.categoriesOnProducts.deleteMany({
      where: {
        productId,
      },
    })
    await db.categoriesOnProducts.createMany({
      data: input.categories?.map((category) => ({
        categoryId: category,
        productId: product.id,
      })),
    })
  }
  if (input.images) {
    await db.productImage.deleteMany({
      where: {
        productId,
      },
    })
    await db.productImage.createMany({
      data: input.images?.map((image) => ({
        image,
        productId: product.id,
      })),
    })
  }
  //colors
  if (input.colors) {
    await db.colorsOnProducts.deleteMany({
      where: {
        productId,
      },
    })
    await db.colorsOnProducts.createMany({
      data: input.colors?.map((color) => ({
        colorId: color.colorId,
        productId: product.id,
        extra: color.extra,
      })),
    })
  }
  //sizes
  if (input.sizes) {
    await db.sizesOnProducts.deleteMany({
      where: {
        productId,
      },
    })
    await db.sizesOnProducts.createMany({
      data: input.sizes?.map((size) => ({
        sizeId: size.sizeId,
        productId: product.id,
        extra: size.extra,
      })),
    })
  }
  //times
  if (input.times) {
    await db.leadTime.deleteMany({
      where: {
        productId,
      },
    })

    await db.leadTime.createMany({
      data: input.times?.map((leadTime) => ({
        quantity: leadTime.quantity,
        productId: product.id,
        time: leadTime.time,
      })),
    })
  }
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
