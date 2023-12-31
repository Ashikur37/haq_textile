"use client"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { useState, useTransition } from "react";
import { z } from "zod"
import { FormItem, Input, Textarea } from "../ui/form";
import { useRouter } from "next/navigation";
import { Skeleton } from "@/components/ui/skeleton";
import { categorySchema } from "@/lib/validations/category";
import { addcategoryAction } from "@/app/_actions/category";
import Select from 'react-select'
interface AddCategoryFormProps {
    categories: {
        id: number,
        name: string
    }[]
}
export default function AddCategoryForm({ categories }: AddCategoryFormProps) {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const [parentId, setParentId] = useState<number | null>(null)
    const { register, handleSubmit,
        formState: { errors }
    } = useForm<z.infer<typeof categorySchema>>({
        resolver: zodResolver(categorySchema)
    });
    const onSubmit = async (data: z.infer<typeof categorySchema>) => {
        startTransition(async () => {
            await addcategoryAction({
                ...data,
                parent_id: parentId ?? undefined
            });
            router.push('/admin/categories');
        })
    }
    return isPending ? <Skeleton className="h-6 w-20" /> : <form onSubmit={handleSubmit(onSubmit)}>
        <FormItem label="Name" message={errors.name?.message} >
            <Input
                aria-invalid={!!errors.name}
                placeholder="Type Category name here."
                {...register("name")}
            />
        </FormItem>
        <FormItem label="Parent Category" message={errors.parent_id?.message} >
            <Select
            
                options={
                    [
                        {
                            value: null,
                            label: "Select parent category"
                        },
                        ...categories.map(category => ({
                            value: category.id,
                            label: category.name
                        }))
                    ]
                }
                onChange={cat => setParentId(cat?.value!)}
            />
        </FormItem>
        <Button variant={"destructive"} disabled={isPending}>
            Add Category
        </Button>
    </form>

}