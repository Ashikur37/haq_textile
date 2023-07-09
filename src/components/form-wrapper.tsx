import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
interface FormWrapperProps {
    title: string;
    subTitle: string;
    children: React.ReactNode;
}
export default function FormWrapper({ title,subTitle, ...props }:FormWrapperProps) {
    return <Card>
        <CardHeader className="space-y-1">
            <CardTitle className="text-2xl">{title}</CardTitle>
            <CardDescription>{subTitle}</CardDescription>
        </CardHeader>
        <CardContent>
            {props.children}
        </CardContent>
    </Card>
}