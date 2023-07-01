import { ProductTable } from "@/components/product-table";
import { db } from "@/lib/db";

export default async function ProductList(){
    const products=await db.product.findMany();
    return <>
        <ProductTable products={products}/>
    </>
}