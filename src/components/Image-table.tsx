"use client"
import { Image as DbImage } from "@prisma/client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useTransition } from "react";
import { toast } from "sonner";
import { deleteImageAction } from "@/app/_actions/image";
import { Skeleton } from "./ui/skeleton";
interface ImageTableProps {
    images: DbImage[]
}
export const ImageTable = ({ images }: ImageTableProps) => {
    const [isPending, startTransition] = useTransition();
    const deleteImage = (id: number) => {
        startTransition(async () => {
            await deleteImageAction(id);
            toast.success("Image deleted");
        })
    }
    return <table>
        <thead>
            <tr>
                <th>Image</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {
                isPending?<Skeleton className="h-6 w-20" />:images.map((image) => <tr key={image.id}>
                <td>
                    <Image src={image.image!} alt={image.image!} width={100} height={100} />
                </td>
                <td>
                    <Button
                        variant={"outline"}
                        onClick={() => deleteImage(image.id)}
                    >
                        Delete
                    </Button>
                </td>
            </tr>)
            }
        </tbody>
    </table>
}