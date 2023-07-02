"use client"
import { Product } from "@prisma/client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useTransition } from "react";
import { toast } from "sonner";
import { Skeleton } from "./ui/skeleton";
import { deleteProductAction, featureProductAction } from "@/app/_actions/product";
import { TableCell } from "./ui/table";

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
    const featureProduct = (id: number, featured: boolean) => {
        startTransition(async () => {
            await featureProductAction(id, featured);
            toast.success("Image deleted");
        })
    }
    return isPending?<Skeleton className="h-6 container" /> :<table className="w-full caption-bottom text-sm">
    <thead className="[&_tr]:border-b">
        <tr>
            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">#</th>
            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">Name</th>
            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">Image</th>
            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">Price</th>
            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
                Description
            </th>
            <th>Featured</th>
            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">Action</th>
        </tr>
    </thead>
    <tbody className="[&_tr:last-child]:border-0">
        {
             products.map((product) => <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted" key={product.id}>
                <TableCell>
                    {product.id}
                </TableCell>
                <TableCell>
                    {product.name}
                </TableCell>

                <TableCell>
                    <Image src={product.image!} alt={product.image!} width={100} height={100} />
                </TableCell>
                <TableCell>
                    {`${product.price_from}-${product.price_to}`}
                </TableCell>
                <TableCell>
                    {product.description}
                </TableCell>
                <TableCell>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" className="sr-only peer" checked={product.featured}
                            onChange={e => featureProduct(product.id, e.target.checked)}
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    </label>
                </TableCell>
                <TableCell>
                    <Button
                        variant={"outline"}
                        onClick={() => deleteProduct(product.id)}
                    >
                        Delete
                    </Button>
                </TableCell>
            </tr>)
        }
    </tbody>
</table>
}