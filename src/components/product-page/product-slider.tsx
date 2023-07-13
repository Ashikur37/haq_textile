"use client"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import Image from 'next/image';

interface ProductSliderProps {
    images: string[] | undefined;
    thumbnailImage:string
}
export default function ProductSlider({ images,thumbnailImage }: ProductSliderProps) {
    return <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        pagination={{
            clickable: true,
        }}
        onSwiper={(swiper) => console.log(swiper)}
    >
         <SwiperSlide>
                <Image src={thumbnailImage} alt="" width={1000} height={1200}/>
            </SwiperSlide>
        {images?.map((image, index) => (
            <SwiperSlide key={index}>
                <Image src={image} alt="" width={1000} height={1200}/>
            </SwiperSlide>
        ))}
    </Swiper>

}