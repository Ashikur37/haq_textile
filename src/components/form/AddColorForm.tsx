"use client"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import {  useTransition } from "react";
import { z } from "zod"
import { FormItem, Input } from "../ui/form";
import { useRouter } from "next/navigation";
import { Skeleton } from "@/components/ui/skeleton";
import { colorSchema } from "@/lib/validations/color";
import { addColorAction } from "@/app/_actions/color";

export default function AddColorForm() {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const { register, handleSubmit,
        formState: { errors }
    } = useForm<z.infer<typeof colorSchema>>({
        resolver: zodResolver(colorSchema)
    });
    const onSubmit = async (data: z.infer<typeof colorSchema>) => {
        startTransition(async () => {
            await addColorAction(data);
            router.push('/admin/colors');
        })
    }
    return isPending ? <Skeleton className="h-6 w-20" /> : <form onSubmit={handleSubmit(onSubmit)}>
        <FormItem label="Name" message={errors.name?.message} >
            <Input
                aria-invalid={!!errors.name}
                placeholder="Type Color name here."
                {...register("name")}
            />
        </FormItem>
        <FormItem label="Color Code" message={errors.code?.message} >
            <Input
                type="color"
                aria-invalid={!!errors.name}
                {...register("code")}
            />
        </FormItem>
        <Button variant={"destructive"} disabled={isPending}>
            Add Color
        </Button>
    </form>

}