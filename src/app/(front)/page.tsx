import Hero from "@/components/hero";
import { db } from "@/lib/db";

export default async function Home() {
  const images=await db.image.findMany({
    orderBy:{
     id:"desc" 
    }
  })
  return (
   <>
    <Hero images={images}/>
   </>
  )
}
