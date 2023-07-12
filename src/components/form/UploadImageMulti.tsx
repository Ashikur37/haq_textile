"use client"
// @ts-ignore
import { CldUploadButton } from "next-cloudinary";
import { useState } from "react";
import PreviewImage from "@/components/form/PreviewImage";
import ImageUploadButton from "@/components/form/ImageUploadButton";

interface UploadIamgeMultiProps {
    uploadImage: (val: string[]) => void,
    oldUrls: [],
    size: string
}
export default function UploadIamgeMulti({
    uploadImage,
    oldUrls = [],
    size = "400*400",
}: UploadIamgeMultiProps) {
    const [imageUrls, setImageUrls] = useState<string[]>(oldUrls);
    const upload = (data: any, err: any) => {
        // if (!err) {
        setImageUrls([
            ...imageUrls,
            data.info.secure_url
        ]);
        uploadImage(imageUrls);
        // }
        console.log(err);
    };

    const clearImage = (url: string) => {
        setImageUrls(
            imageUrls.filter((item) => {
                return item !== url;
            })
        );
        setImageUrls(imageUrls);
    };
    return (
        <div>
            {imageUrls.length > 0 ? (
                imageUrls.map((imageUrl, index) => (

                    <PreviewImage key={index} clearImage={() => clearImage(imageUrl)} imageUrl={imageUrl} />
                ))
            ) : (
                <div className="upload_btn">
                    <CldUploadButton options={
                        {
                            // cropping:true
                        }
                    } uploadPreset="images" onUpload={upload}>
                        <ImageUploadButton size={size} />
                    </CldUploadButton>
                </div>
            )}
        </div>
    );
}
