"use client"
import React, { useRef, useState } from "react";
import { Product } from "@prisma/client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";

interface FeatureProductsProps {
    products: Product[]
}
export default function FeatureProducts({ products }: FeatureProductsProps) {
    return <div className="container flex flex-col justify-center">
        <h1 className="text-center font-bold text-3xl ">
            Featured Product
        </h1>
        <div className="mt-2">
        <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
        >
            {
                products.map(product => <div key={product.id}>
                    <SwiperSlide>
                        <div>
                            <Link href={`/product/${product.slug}`}>
                            <Image src={product.image!} alt={product.name} width={300} height={400}/>
                            </Link>
                            {product.name}
                        </div>
                        </SwiperSlide>

                </div>)
            }

        </Swiper>
        </div>

    </div>
}