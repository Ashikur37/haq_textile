export const runtime = 'edge'
import AddImageForm from "@/components/form/AddImageForm";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AddImage() {
    return <Card>
        <CardHeader className="space-y-1">
            <CardTitle className="text-2xl">Add  Image</CardTitle>
            <CardDescription>Add a new image for carousel</CardDescription>
        </CardHeader>
        <CardContent>
            <AddImageForm />
        </CardContent>
    </Card>
}