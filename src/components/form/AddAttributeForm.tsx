"use client"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import {  useTransition } from "react";
import { z } from "zod"
import { FormItem, Input } from "../ui/form";
import { useRouter } from "next/navigation";
import { Skeleton } from "@/components/ui/skeleton";
import { attributeSchema } from "@/lib/validations/attribute";
import { addAttributeAction } from "@/app/_actions/attribute";

export default function AddAttributeForm() {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const { register, handleSubmit,
        formState: { errors }
    } = useForm<z.infer<typeof attributeSchema>>({
        resolver: zodResolver(attributeSchema)
    });
    const onSubmit = async (data: z.infer<typeof attributeSchema>) => {
        startTransition(async () => {
            await addAttributeAction(data);
            router.push('/admin/attributes');
        })
    }
    return isPending ? <Skeleton className="h-6 w-20" /> : <form onSubmit={handleSubmit(onSubmit)}>
        <FormItem label="Name" message={errors.name?.message} >
            <Input
                aria-invalid={!!errors.name}
                placeholder="Type Attribute name here."
                {...register("name")}
            />
        </FormItem>
        <Button variant={"destructive"} disabled={isPending}>
            Add Attribute
        </Button>
    </form>

}