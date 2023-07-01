"use client"
import { Product } from "@prisma/client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useTransition } from "react";
import { toast } from "sonner";
import { Skeleton } from "./ui/skeleton";
import { deleteProductAction } from "@/app/_actions/product";

interface ProductTableProps {
    products: Product[]
}

export const ProductTable = ({ products }: ProductTableProps) => {
    const [isPending, startTransition] = useTransition();
    const deleteProduct = (id: number) => {
        startTransition(async () => {
            await deleteProductAction(id);
            toast.success("Image deleted");
        })
    }
    return <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Image</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {
                isPending?<Skeleton className="h-6 w-20" />:products.map((product) => <tr key={product.id}>
                    <td>
                        {product.name}
                    </td>
                <td>
                    <Image src={product.image!} alt={product.image!} width={100} height={100} />
                </td>
                <td>
                    <Button
                        variant={"outline"}
                        onClick={() => deleteProduct(product.id)}
                    >
                        Delete
                    </Button>
                </td>
            </tr>)
            }
        </tbody>
    </table>
}