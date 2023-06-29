"use client"
import { FileDialog } from "@/components/file-dialog";
import type { OurFileRouter } from "@/app/api/uploadthing/core"
import { FileWithPreview } from "@/types";
import { generateReactHelpers } from "@uploadthing/react/hooks"
import React from "react";
import { useForm } from "react-hook-form";

export default function AddImage(){
    // const form = useForm<Inputs>({
    //     resolver: zodResolver(productSchema),
    //     defaultValues: {
    //       category: "skateboards",
    //     },
    //   })
    const { useUploadThing } = generateReactHelpers<OurFileRouter>()
    const [files, setFiles] = React.useState<FileWithPreview[] | null>(null)
    const [isPending, startTransition] = React.useTransition()
  
    // uploadthing
    const { isUploading, startUpload } = useUploadThing("productImage")
    return <>
        <FileDialog
              setValue={(val)=>{console.log(val)}}
              name="images"
              maxFiles={3}
              maxSize={1024 * 1024 * 4}
              files={files}
              setFiles={setFiles}
              isUploading={isUploading}
              disabled={isPending}
            />
    </>
}