import { CategoryTable } from "@/components/category-table";
import { db } from "@/lib/db";

export default async function ProductList(){
    const categories=await db.category.findMany({
        orderBy:{
            id:"desc"
        }
    });
    return <>
        <CategoryTable categories={categories}/>
    </>
}