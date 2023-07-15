import CategorySection from "@/components/homepage/category-section";
import FeatureProducts from "@/components/homepage/feature-products";
import Hero from "@/components/homepage/hero";
import { db } from "@/lib/db";

export default async function Home() {
  const images = await db.image.findMany({
    orderBy: {
      id: "desc"
    }
  })
  const categories = await db.category.findMany({
    where: {
      parent_id: null
    },
    include: {
      products: {
        take: 5,
        orderBy: {
          productId: "desc"
        },
        include: {
          product: {
            include: {
              prices: true
            }
          }
        },
      }
    }
  })
  const featureProducts = await db.product.findMany({
    where: {
      featured: true
    },
    include: {
      prices: true
    }
  });
  return (
    <>
      <Hero images={images} />
      <FeatureProducts products={featureProducts} />
      <CategorySection categories={categories} />
    </>
  )
}
