"use client"
import UploadIamge from "@/components/form/UploadImage";
import { Button } from "../ui/button";
import { useState, useTransition } from "react";
import { Icons } from "../icons";
import { addImageAction } from "@/app/_actions/image";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function AddImageForm() {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const [image, setImage] = useState<string>("");
    const addImage = () => {
        if (!image) {
            toast.error("Please upload image");
            return;
        }
        startTransition(async () => {
            await addImageAction({
                image
            });
            router.push('/admin/images');
        })
    }
    return <>
        <UploadIamge
            uploadImage={setImage}
            oldUrl=""
            size="400X400"
        />
        <Button className="w-fit" disabled={isPending} onClick={addImage}>
            {isPending && (
                <Icons.spinner
                    className="mr-2 h-4 w-4 animate-spin"
                    aria-hidden="true"
                />
            )}
            Add Image
            <span className="sr-only">Add Image</span>
        </Button>
    </>
}