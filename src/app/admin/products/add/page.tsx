import AddProductForm from "@/components/form/AddProductForm";
import { db } from "@/lib/db";

export default async function AddProduct(){
    const categories = await db.category.findMany({
        orderBy: {
            name: "asc"
        },
        select: {
            id: true,
            name: true
        }
    });
    const colors = await db.color.findMany({
        orderBy: {
            name: "asc"
        },
        select: {
            id: true,
            name: true,
            code:true
        }
    });
    const sizes = await db.size.findMany({
        orderBy: {
            name: "asc"
        },
        select: {
            id: true,
            name: true
        }
    });
    return <div>
        <AddProductForm categories={categories} colors={colors} sizes={sizes}/>
    </div>
}