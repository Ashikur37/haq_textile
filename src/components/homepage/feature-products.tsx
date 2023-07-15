"use client"
import React, { useRef, useState } from "react";
import { Product, Price } from "@prisma/client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";
import { getMaxPrice, getMinPrice } from "@/lib/utils";
interface ProductWithPrices extends Product {
    prices: Price[];
}
interface FeatureProductsProps {
    products: ProductWithPrices[]
}
export default function FeatureProducts({ products }: FeatureProductsProps) {
    return <div className="container flex flex-col justify-center">
        <h1 className="text-center font-bold text-3xl my-4">
            Featured Product
        </h1>
        <div className="mt-2  ">
            <Swiper
                spaceBetween={30}
                breakpoints={{
                    // when window width is >= 640px
                    640: {
                        width: 640,
                        slidesPerView: 1,
                    },
                    // when window width is >= 768px
                    768: {
                        width: 768,
                        slidesPerView: 2,
                    },
                    // when window width is >= 1024px
                    1024: {
                        width: 1024,
                        slidesPerView: 3,
                    }
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {
                    products.map(product => <div key={product.id}>
                        <SwiperSlide>
                            <div className="flex flex-col">
                                <Link href={`/product/${product.slug}`}>
                                    <Image src={product.image!} alt={product.name} width={300} height={400} />
                                </Link>
                                <span>
                                    {product.name}
                                </span>
                                <div className="flex justify-between mt-2 w-full">
                                    <span >
                                        ${getMinPrice(product.prices)}-
                                        ${getMaxPrice(product.prices)}
                                    </span>
                                    <div className="flex items-center space-x-1">
                                       
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                    </div>)
                }
            </Swiper>
        </div>
    </div>
}