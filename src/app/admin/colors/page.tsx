export const runtime = 'edge'
import { ColorTable } from "@/components/color-table";
import { db } from "@/lib/db";

export default async function ColorList(){
    const colors=await db.color.findMany({
        orderBy:{
            id:"desc"
        }
    });
    return <>
        <ColorTable colors={colors}/>
    </>
}