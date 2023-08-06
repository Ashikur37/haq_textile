"use client"
import { ProductSchema } from "@/lib/validations/product";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { useState, useTransition } from "react";
import {  editProductAction } from "@/app/_actions/product";
import { z } from "zod"
import { FormItem, Input, Textarea } from "../ui/form";
import UploadIamge from "./UploadImage";
import { useRouter } from "next/navigation";
import { Skeleton } from "@/components/ui/skeleton";
import Select from 'react-select'
import { v4 as uuid } from 'uuid';
import { Product } from "@prisma/client";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
interface EditProductFormProps {
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
    }[],
    attributes: {
        id: number,
        name: string
    }[],
    product:Product&any
}
interface ProductWithColorOrSize {
    id: number;
    extra: number,
    key: string
}
interface ProductWithAttribute {
    id: number;
    value: string,
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
interface Gallery {
    url: string,
    key: string
}
const modules = {
    toolbar: [
      [{ header: '1' }, { header: '2' }, { font: [] }],
      [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link', 'image', 'video'],
      ['clean'],
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
  }

export default function EditProductForm({ categories, colors, sizes,product,attributes }: EditProductFormProps) {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const [image, setImage] = useState<string>(product.image);
    const [description, setDescription] = useState<string>(product.description);

    const [productCategories, setProductCategories] = useState<number[]>(
        product.categories.map((productCategory:any)=>productCategory.categoryId)
    );

    const [productColors, setProductColors] = useState<ProductWithColorOrSize[]>(
        product.colors.map((productColor:any)=>({
            id: productColor.colorId,
            extra: productColor.extra,
            key: uuid()
        }))
    );
    const [productAttributes, setProductAttributes] = useState<ProductWithAttribute[]>(
        product.attributes.map((productAttribute:any)=>({
            id: productAttribute.attributeId,
            value: productAttribute.value,
            key: uuid()
        }))
    );
    const [productSizes, setProductSizes] = useState<ProductWithColorOrSize[]>(
        product.sizes.map((productSize:any)=>({
            id: productSize.sizeId,
            extra: productSize.extra,
            key: uuid()
        }))
    );

    const [productPrices, setProductPrices] = useState<ProductPrice[]>(
        product.prices.map((productPrice:any)=>({
            label: productPrice.label,
            unitPrice: productPrice.unitPrice,
            key: uuid()
        }))
    );
    const [productTimes, setProductTimes] = useState<LeadTime[]>(
        product.times.map((productTime:any)=>({
            quantity: productTime.quantity,
            time: productTime.time,
            key: uuid()
        }))
    );
    const [images, setImages] = useState<Gallery[]>(
        product.images.map((productImage:any)=>({
            url: productImage.image,
            key: uuid()
        }))
    );

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
    const addAttribute = () => {
        setProductAttributes([
            ...productAttributes,
            {
                id: 0,
                value: "",
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
    const addTime = () => {
        setProductTimes([
            ...productTimes,
            {
                quantity: "",
                time: "",
                key: uuid()

            }
        ])
    }
    const addPrice = () => {
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
            await editProductAction({
                ...data,
                productId:product.id,
                description,
                image,
                images: images.map(image => image.url),
                categories: productCategories,
                sizes: productSizes.map(size => ({
                    sizeId: size.id,
                    extra: parseFloat(size.extra.toString())
                })),
                colors: productColors.map(color => ({
                    colorId: color.id,
                    extra: parseFloat(color.extra.toString())
                })),
                attributes: productAttributes.map(attribute => ({
                    attributeId: attribute.id,
                    value: attribute.value
                })),
                prices: productPrices.map(price => ({
                    label: price.label,
                    unitPrice:parseFloat(price.unitPrice.toString())
                })),
                times: productTimes.map(time => ({
                    quantity: time.quantity,
                    time: time.time
                }))
            });
            router.push('/admin/products');
        })
    }
    return isPending ? <Skeleton className="h-6 w-20" /> : <form onSubmit={handleSubmit(onSubmit)}>
        <FormItem label="Name" message={errors.name?.message} >
            <Input
                aria-invalid={!!errors.name}
                placeholder="Type product name here."
                {...register("name",{value:product.name})}
            />
        </FormItem>
        <FormItem label="Category" message={errors.categories?.message} >
            <Select
                isMulti
                defaultValue={
                    categories.filter(category=>product.categories.map((cat:any)=>cat.categoryId).includes(category.id)).map(category=>({
                        label:category.name,
                        value:category.id
                    }))
                }
                options={
                    [
                        {
                            value: 0,
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
        <FormItem label="Min order" message={errors.min_order?.message} >
            <Input
                aria-invalid={!!errors.min_order}
                placeholder="Type min order here."
                {...register("min_order",{ valueAsNumber: true,value:product.min_order })}
            />
        </FormItem>
        <FormItem label="Colors" message={errors.colors?.message} >
            {
                productColors.map(productColor => <div key={productColor.key} className="flex gap-2 my-2">
                    <Select
                        className="w-1/2"
                        defaultValue={
                            {
                            value:productColor.id,
                            label: colors.filter(color=>color.id==productColor.id)[0]?.name
                            }
                        }
                        options={
                            [
                                {
                                    value: 0,
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
                        value={productColor.extra}
                        type="number"
                        step="0.1"
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
        <FormItem label="Attributes" message={errors.attributes?.message} >
            {
                productAttributes.map(productAttribute => <div key={productAttribute.key} className="flex gap-2 my-2">
                    <Select
                        className="w-1/2"
                        defaultValue={
                            {
                            value:productAttribute.id,
                            label: attributes.filter(attribute=>attribute.id==productAttribute.id)[0]?.name
                            }
                        }
                        options={
                            [
                                {
                                    value: 0,
                                    label: "Select Attribute"
                                },
                                ...attributes.map(attribute => ({
                                    value: attribute.id,
                                    label: attribute.name
                                }))
                            ]
                        }
                        onChange={(val) => setProductAttributes(productAttributes.map(c => productAttribute.key == c.key ? {
                            id: val?.value!,
                            value: c.value,
                            key: c.key
                        } : c))}
                    />
                    <Input
                        className="w-1/2"
                        placeholder="Value"
                        value={productAttribute.value}
                        type="text"
                        step="0.1"
                        onChange={(e) => setProductAttributes(productAttributes.map(c => productAttribute.key == c.key ? {
                            id: c.id,
                            value: e.target.value,
                            key: c.key
                        } : c))
                        }
                    />
                    <Button
                        variant="destructive"
                        onClick={() => setProductAttributes(productAttributes.filter(c => c.key !== productAttribute.key))}
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
                onClick={addAttribute}
            >
                Add more
            </Button>
        </FormItem>
        <FormItem label="Sizes" message={errors.sizes?.message} >
            {
                productSizes.map(productSize => <div key={productSize.key} className="flex gap-2 my-2">
                    <Select
                        className="w-1/2"
                        defaultValue={
                            {
                            value:productSize.id,
                            label: sizes.filter(size=>size.id==productSize.id)[0]?.name
                            }
                        }
                        options={
                            [
                                {
                                    value: 0,
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
                        value={productSize.extra}
                        type="number"
                        step="0.1"
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
                        value={productPrice.label}
                        onChange={(e) => setProductPrices(productPrices.map(c => productPrice.key == c.key ? {
                            unitPrice: c.unitPrice,
                            label: e.target.value,
                            key: c.key
                        } : c))
                        }
                    />
                    <Input
                        className="w-1/2"
                        placeholder="Unit price"
                        value={productPrice.unitPrice}
                        type="number"
                        step="0.1"
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
                        value={productTime.quantity}
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
                        value={productTime.time}
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
        <ReactQuill modules={modules} theme="snow" value={description} onChange={setDescription} />
        {/* <FormItem label="Description" message={errors.description?.message} >
            {product.description}
            <Textarea
                aria-invalid={!!errors.description}
                placeholder="Description"
                {...register("description",{value:product.description})}
            />
        </FormItem> */}
        <FormItem label="Thumbnail Image" message="" >
            <UploadIamge
                uploadImage={setImage}
                oldUrl={image}
                size="400X400"
            />
        </FormItem>
        <FormItem label="Gallery" message="" >
            {/* <UploadIamgeMulti
                uploadImage={setImages}
                oldUrls={[]}
                size="400X400"
            /> */}
            {
                images.map((productImage) => <UploadIamge
                    key={productImage.key}
                    uploadImage={
                        (val) => {
                            setImages(
                                images.map(image => image.key == productImage.key ? {
                                    key: image.key,
                                    url: val
                                }
                                    : image
                                )
                            )
                        }
                    }
                    oldUrl={productImage.url}
                    size="400X400"
                />)
            }
            <Button
                variant="destructive"
                className="ml-auto"
                type="button"
                onClick={() => setImages([
                    ...images,
                    {
                        key: uuid(),
                        url: ""
                    }
                ])}
            >
                Add more
            </Button>
        </FormItem>
        <Button variant={"destructive"} disabled={isPending}>
            Update Product
        </Button>
    </form>

}