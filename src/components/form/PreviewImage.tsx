import Image from "next/image";

interface PreviewImageProps{
    clearImage:()=>void,
    imageUrl:string
}
export default function PreviewImage({ clearImage, imageUrl }: PreviewImageProps) {
    return (
      <div className="relative">
        <span onClick={clearImage} className="absolute top-0 right-0">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 24C5.38327 24 0 18.6167 0 12C0 5.38327 5.38327 0 12 0C18.6167 0 24 5.38327 24 12C24 18.6167 18.6167 24 12 24ZM16.3448 8.96019C16.4341 8.87533 16.5056 8.77344 16.5549 8.66054C16.6042 8.54763 16.6304 8.426 16.632 8.3028C16.6336 8.1796 16.6105 8.05733 16.5641 7.9432C16.5177 7.82907 16.4489 7.72539 16.3617 7.63827C16.2746 7.55115 16.1709 7.48235 16.0568 7.43592C15.9427 7.38951 15.8204 7.3664 15.6972 7.36798C15.574 7.36956 15.4524 7.39578 15.3395 7.44511C15.2266 7.49444 15.1247 7.56587 15.0398 7.65519L12 10.6944L8.96019 7.65519C8.78567 7.48939 8.55329 7.39832 8.31259 7.4014C8.07188 7.40448 7.84191 7.50147 7.67169 7.67169C7.50147 7.84191 7.40448 8.07188 7.4014 8.31258C7.39832 8.55329 7.48939 8.78567 7.65519 8.96019L10.6944 12L7.65519 15.0398C7.48939 15.2143 7.39832 15.4467 7.4014 15.6874C7.40448 15.9281 7.50147 16.1581 7.67169 16.3283C7.84191 16.4985 8.07188 16.5955 8.31259 16.5986C8.55329 16.6017 8.78567 16.5106 8.96019 16.3448L12 13.3056L15.0398 16.3448C15.2143 16.5106 15.4467 16.6017 15.6874 16.5986C15.9281 16.5955 16.1581 16.4985 16.3283 16.3283C16.4985 16.1581 16.5955 15.9281 16.5986 15.6874C16.6017 15.4467 16.5106 15.2143 16.3448 15.0398L13.3056 12L16.3448 8.96019Z"
              fill="#FF3838"
            />
          </svg>
        </span>
        <Image  src={imageUrl} alt="img" width={300} height={300}/>
      </div>
    );
  }
  