export const runtime = 'edge'
import FormWrapper from "@/components/form-wrapper";
import AddSizeForm from "@/components/form/AddSizeForm";


export default function AddSize() {
    return (<FormWrapper title="Add Size" subTitle="add new Size">
        <AddSizeForm />
    </FormWrapper>)
}