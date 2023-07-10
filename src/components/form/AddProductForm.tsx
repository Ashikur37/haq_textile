"use client"
import { ProductSchema } from "@/lib/validations/product";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { useState, useTransition } from "react";
import { addProductAction } from "@/app/_actions/product";
import { z } from "zod"
import { FormItem, Input, Textarea } from "../ui/form";
import UploadIamge from "./UploadImage";
import { useRouter } from "next/navigation";
import { Skeleton } from "@/components/ui/skeleton";

export default function AddProductForm() {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const [image, setImage] = useState("");
    const { register, handleSubmit,
        formState: { errors }
    } = useForm<z.infer<typeof ProductSchema>>({
        resolver: zodResolver(ProductSchema)
    });
    const onSubmit = async (data: z.infer<typeof ProductSchema>) => {
        startTransition(async () => {
            await addProductAction({
                ...data,
                image
            });
            router.push('/admin/products');
        })
    }
    return isPending ? <Skeleton className="h-6 w-20" /> : <form onSubmit={handleSubmit(onSubmit)}>
        <FormItem label="Name" message={errors.name?.message} >
            <Input
                aria-invalid={!!errors.name}
                placeholder="Type product name here."
                {...register("name")}
            />
        </FormItem>
        {/* <FormItem label="Price From" message={errors.price_from?.message} >
            <Input
                type="number"
                aria-invalid={!!errors.price_from}
                placeholder="Type product price from here."
                {...register("price_from", { valueAsNumber: true })}
            />
        </FormItem>
        <FormItem label="Price To" message={errors.price_to?.message} >
            <Input
                type="number"
                aria-invalid={!!errors.price_to}
                placeholder="Type product price to here."
                {...register("price_to", { valueAsNumber: true })}
            />
        </FormItem> */}
        <FormItem label="Description" message={errors.description?.message} >
            <Textarea
                aria-invalid={!!errors.description}
                placeholder="Description"
                {...register("description")}
            />
        </FormItem>
        <UploadIamge
            uploadImage={setImage}
            oldUrl=""
            size="400X400"
        />
        <Button variant={"destructive"} disabled={isPending}>
            Add Product
        </Button>
    </form>

}