import EditProductForm from "@/components/form/EditProductForm";
import { db } from "@/lib/db";
interface EditProductProps {
    params: {
        id: string
    }
}
export default async function EditProduct({params}:EditProductProps){
    const product = await db.product.findFirst({
        where: {
             id:parseInt(params.id)
        },
        include:{
            prices:true,
            images:true,
            categories:{
                select:{
                    categoryId:true
                }
            },
            colors:true,
            sizes:true,
            times:true,
            
        }
    });
    
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
        <EditProductForm product={product} categories={categories} colors={colors} sizes={sizes}/>
    </div>
}