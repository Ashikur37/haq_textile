import { AttributeTable } from "@/components/attribute-table";
import { db } from "@/lib/db";

export default async function AttributeList(){
    const attributes=await db.attribute.findMany({
        orderBy:{
            id:"desc"
        }
    });
    return <>
        <AttributeTable attributes={attributes}/>
    </>
}