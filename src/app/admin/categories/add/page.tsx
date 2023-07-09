import FormWrapper from "@/components/form-wrapper";
import AddCategoryForm from "@/components/form/AddCategoryForm";


export default function AddCategory() {
    return (<FormWrapper title="Add Category" subTitle="add new category">
        <AddCategoryForm />
    </FormWrapper>)
}