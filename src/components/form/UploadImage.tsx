"use client"
// @ts-ignore
import { CldUploadButton } from "next-cloudinary";
import { useState } from "react";
import PreviewImage from "@/components/form/PreviewImage";
import ImageUploadButton from "@/components/form/ImageUploadButton";

interface UploadImageProps{
    uploadImage:(val:string)=>void,
    oldUrl:string,
    size:string
}
export default function UploadIamge({
  uploadImage,
  oldUrl = "",
  size = "400*400",
}: UploadImageProps) {
  const [imageUrl, setImageUrl] = useState<string>(oldUrl);
  const upload = (data: any, err: any) => {
    // if (!err) {
      console.log(data);
      setImageUrl(data.info.secure_url);
      uploadImage(data.info.secure_url);
    // }
    console.log(err);
  };

  const clearImage = () => {
    setImageUrl("");
    uploadImage("");
  };
  return (
    <div>
      {imageUrl ? (
        <PreviewImage clearImage={clearImage} imageUrl={imageUrl} />
      ) : (
        <div className="upload_btn">
          <CldUploadButton uploadPreset="images" onUpload={upload}>
            <ImageUploadButton size={size} />
          </CldUploadButton>
        </div>
      )}
    </div>
  );
}
