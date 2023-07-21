export const runtime = 'edge'
import { SizeTable } from "@/components/size-table";
import { db } from "@/lib/db";

export default async function SizeList(){
    const sizes=await db.size.findMany({
        orderBy:{
            id:"desc"
        }
    });
    return <>
        <SizeTable sizes={sizes}/>
    </>
}