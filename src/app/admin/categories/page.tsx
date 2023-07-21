import { CategoryTable } from "@/components/category-table";
import { db } from "@/lib/db";

export default async function CategoryList() {
    const categories = await db.category.findMany({
        orderBy: {
            id: "desc"
        },
        include: {
            parent: true
        }
    });
    return <>
        <CategoryTable categories={categories} />
    </>
}