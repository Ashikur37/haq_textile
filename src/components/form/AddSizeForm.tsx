"use client"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { useState, useTransition } from "react";
import { z } from "zod"
import { FormItem, Input, Textarea } from "../ui/form";
import UploadIamge from "./UploadImage";
import { useRouter } from "next/navigation";
import { Skeleton } from "@/components/ui/skeleton";
import { sizeSchema } from "@/lib/validations/size";
import { addSizeAction } from "@/app/_actions/size";

export default function AddSizeForm() {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const { register, handleSubmit,
        formState: { errors }
    } = useForm<z.infer<typeof sizeSchema>>({
        resolver: zodResolver(sizeSchema)
    });
    const onSubmit = async (data: z.infer<typeof sizeSchema>) => {
        startTransition(async () => {
            await addSizeAction(data);
            router.push('/admin/sizes');
        })
    }
    return isPending ? <Skeleton className="h-6 w-20" /> : <form onSubmit={handleSubmit(onSubmit)}>
        <FormItem label="Name" message={errors.name?.message} >
            <Input
                aria-invalid={!!errors.name}
                placeholder="Type Size name here."
                {...register("name")}
            />
        </FormItem>
        <Button variant={"destructive"} disabled={isPending}>
            Add Size
        </Button>
    </form>

}