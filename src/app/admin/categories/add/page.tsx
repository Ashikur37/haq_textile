import FormWrapper from "@/components/form-wrapper";
import AddCategoryForm from "@/components/form/AddCategoryForm";
import { db } from "@/lib/db";


export default async function AddCategory() {
    const categories = await db.category.findMany({
        orderBy: {
            name: "asc"
        },
        select: {
            id: true,
            name: true
        }
    });
    return (<FormWrapper title="Add Category" subTitle="add new category">
        <AddCategoryForm categories={categories}/>
    </FormWrapper>)
}