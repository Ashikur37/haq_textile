import FeatureProducts from "@/components/homepage/feature-products";
import Hero from "@/components/homepage/hero";
import { db } from "@/lib/db";

export default async function Home() {
  const images=await db.image.findMany({
    orderBy:{
     id:"desc" 
    }
  })
  const featureProducts=await db.product.findMany({
    where:{
      featured:true
    }
  });
  return (
   <>
    <Hero images={images}/>
    <FeatureProducts products={featureProducts}/>
   </>
  )
}
