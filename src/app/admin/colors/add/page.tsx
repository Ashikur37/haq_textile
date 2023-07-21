export const runtime = 'edge'
import FormWrapper from "@/components/form-wrapper";
import AddColorForm from "@/components/form/AddColorForm";


export default function AddColor() {
    return (<FormWrapper title="Add Color" subTitle="add new Color">
        <AddColorForm />
    </FormWrapper>)
}