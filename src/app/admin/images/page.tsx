
import { ImageTable } from "@/components/Image-table";
import { db } from "@/lib/db"


export default async function ImageList(){
    const images=await db.image.findMany();
  
    return <>
        <ImageTable images={images}/>
    </>
}