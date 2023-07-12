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
import Select from 'react-select'
import { v4 as uuid } from 'uuid';
import UploadIamgeMulti from "./UploadImageMulti";
interface AddProductFormProps {
    categories: {
        id: number,
        name: string
    }[],
    colors: {
        id: number,
        code: string,
        name: string
    }[],
    sizes: {
        id: number,
        name: string
    }[]
}
interface ProductWithColorOrSize {
    id: number;
    extra: number,
    key: string
}
interface ProductPrice {
    label: string,
    unitPrice: number
    key: string
}
interface LeadTime {
    quantity: string,
    time: string
    key: string
}
export default function AddProductForm({ categories, colors, sizes }: AddProductFormProps) {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const [image, setImage] = useState<string>("");
    const [productCategories, setProductCategories] = useState<number[]>([]);
    const [productColors, setProductColors] = useState<ProductWithColorOrSize[]>([
        {
            id: 0,
            extra: 0,
            key: uuid()
        }
    ]);
    const [productSizes, setProductSizes] = useState<ProductWithColorOrSize[]>([
        {
            id: 0,
            extra: 0,
            key: uuid()
        }
    ]);
    const [productPrices, setProductPrices] = useState<ProductPrice[]>([
        {
            label: "",
            unitPrice: 0,
            key: uuid()
        }
    ]);
    const [productTimes, setProductTimes] = useState<LeadTime[]>([
        {
            quantity: "",
            time: "",
            key: uuid()
        }
    ]);
    const [images, setImages] = useState<string[]>([]);
    const { register, handleSubmit,
        formState: { errors }
    } = useForm<z.infer<typeof ProductSchema>>({
        resolver: zodResolver(ProductSchema)
    });
    const addColor = () => {
        setProductColors([
            ...productColors,
            {
                id: 0,
                extra: 0,
                key: uuid()

            }
        ])
    }
    const addSize = () => {
        setProductSizes([
            ...productSizes,
            {
                id: 0,
                extra: 0,
                key: uuid()

            }
        ])
    }
    const addPrice = () => {
        setProductTimes([
            ...productTimes,
            {
                quantity: "",
                time: "",
                key: uuid()

            }
        ])
    }
    const addTime = () => {
        setProductPrices([
            ...productPrices,
            {
                label: "",
                unitPrice: 0,
                key: uuid()

            }
        ])
    }
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
        <FormItem label="Category" message={errors.categories?.message} >
            <Select
                isMulti
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
                onChange={cats => setProductCategories(cats?.map(c => c.value!) || [])}
            />
        </FormItem>
        <FormItem label="Colors" message={errors.colors?.message} >
            {
                productColors.map(productColor => <div key={productColor.key} className="flex gap-2 my-2">
                    <Select
                        className="w-1/2"
                        options={
                            [
                                {
                                    value: null,
                                    label: "Select Color"
                                },
                                ...colors.map(color => ({
                                    value: color.id,
                                    label: color.name
                                }))
                            ]
                        }
                        onChange={(val) => setProductColors(productColors.map(c => productColor.key == c.key ? {
                            id: val?.value!,
                            extra: c.extra,
                            key: c.key
                        } : c))}
                    />
                    <Input
                        className="w-1/2"
                        placeholder="Extra price"
                        type="number"
                        onChange={(e) => setProductColors(productColors.map(c => productColor.key == c.key ? {
                            id: c.id,
                            extra: e.target.value as unknown as number,
                            key: c.key
                        } : c))
                        }
                    />
                    <Button
                        variant="destructive"
                        onClick={() => setProductColors(productColors.filter(c => c.key !== productColor.key))}
                        className="ml-auto"
                        type="button"
                    >
                        X
                    </Button>
                </div>)
            }
            <Button
                variant="destructive"
                className="ml-auto"
                type="button"
                onClick={addColor}
            >
                Add more
            </Button>
        </FormItem>
        <FormItem label="Sizes" message={errors.sizes?.message} >
            {
                productSizes.map(productSize => <div key={productSize.key} className="flex gap-2 my-2">
                    <Select
                        className="w-1/2"
                        options={
                            [
                                {
                                    value: null,
                                    label: "Select Size"
                                },
                                ...sizes.map(size => ({
                                    value: size.id,
                                    label: size.name
                                }))
                            ]
                        }
                        onChange={(val) => setProductSizes(productSizes.map(c => productSize.key == c.key ? {
                            id: val?.value!,
                            extra: c.extra,
                            key: c.key
                        } : c))}
                    />
                    <Input
                        className="w-1/2"
                        placeholder="Extra price"
                        type="number"
                        onChange={(e) => setProductSizes(productSizes.map(c => productSize.key == c.key ? {
                            id: c.id,
                            extra: e.target.value as unknown as number,
                            key: c.key
                        } : c))
                        }
                    />
                    <Button
                        variant="destructive"
                        onClick={() => setProductSizes(productSizes.filter(c => c.key !== productSize.key))}
                        className="ml-auto"
                        type="button"
                    >
                        X
                    </Button>
                </div>)
            }
            <Button
                variant="destructive"
                className="ml-auto"
                type="button"
                onClick={addSize}
            >
                Add more
            </Button>
        </FormItem>
        <FormItem label="Prices" message={errors.prices?.message} >
            {
                productPrices.map(productPrice => <div key={productPrice.key} className="flex gap-2 my-2">
                    <Input
                        className="w-1/2"
                        placeholder="Price label"
                        type="text"
                        onChange={(e) => setProductPrices(productPrices.map(c => productPrice.key == c.key ? {
                            unitPrice: c.unitPrice,
                            label: e.target.value,
                            key: c.key
                        } : c))
                        }
                    />
                    <Input
                        className="w-1/2"
                        placeholder="Price label"
                        type="number"
                        onChange={(e) => setProductPrices(productPrices.map(c => productPrice.key == c.key ? {
                            label: c.label,
                            unitPrice: e.target.value as unknown as number,
                            key: c.key
                        } : c))
                        }
                    />
                    <Button
                        variant="destructive"
                        onClick={() => setProductPrices(productPrices.filter(c => c.key !== productPrice.key))}
                        className="ml-auto"
                        type="button"
                    >
                        X
                    </Button>
                </div>)
            }
            <Button
                variant="destructive"
                className="ml-auto"
                type="button"
                onClick={addPrice}
            >
                Add more
            </Button>
        </FormItem>
        <FormItem label="Lead Times" message={errors.times?.message} >
            {
                productTimes.map(productTime => <div key={productTime.key} className="flex gap-2 my-2">
                    <Input
                        className="w-1/2"
                        placeholder="Quantity"
                        type="text"
                        onChange={(e) => setProductTimes(productTimes.map(c => productTime.key == c.key ? {
                            time: c.time,
                            quantity: e.target.value,
                            key: c.key
                        } : c))
                        }
                    />
                    <Input
                        className="w-1/2"
                        placeholder="Time"
                        type="text"
                        onChange={(e) => setProductTimes(productTimes.map(c => productTime.key == c.key ? {
                            quantity: c.quantity,
                            time: e.target.value,
                            key: c.key
                        } : c))
                        }
                    />
                    <Button
                        variant="destructive"
                        onClick={() => setProductTimes(productTimes.filter(c => c.key !== productTime.key))}
                        className="ml-auto"
                        type="button"
                    >
                        X
                    </Button>
                </div>)
            }
            <Button
                variant="destructive"
                className="ml-auto"
                type="button"
                onClick={addTime}
            >
                Add more
            </Button>
        </FormItem>

        <FormItem label="Description" message={errors.description?.message} >
            <Textarea
                aria-invalid={!!errors.description}
                placeholder="Description"
                {...register("description")}
            />
        </FormItem>
        <FormItem label="Thumbnail Image" message="" >
            <UploadIamge
                uploadImage={setImage}
                oldUrl=""
                size="400X400"
            />
        </FormItem>
        <FormItem label="Gallery" message="" >
            <UploadIamgeMulti
                uploadImage={setImages}
                oldUrls={[]}
                size="400X400"
            />
        </FormItem>
        <Button variant={"destructive"} disabled={isPending}>
            Add Product
        </Button>
    </form>

}