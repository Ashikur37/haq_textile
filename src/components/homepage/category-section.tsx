"use client"
import { CategoriesOnProducts, Category, Price, Product } from "@prisma/client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import Link from "next/link";
import Image from "next/image";
import { getMaxPrice, getMinPrice } from "@/lib/utils";
interface CategoryWithPrices extends Category {
    products: CategoriesOnProducts[];
}
interface CategoryWithProductAndPrices extends CategoryWithPrices {
    products: (CategoriesOnProducts & {
        product: Product & {
            prices: Price[];
        };
    })[];
}
interface CategorySectionProps {
    categories: CategoryWithProductAndPrices[];
}

export default function CategorySection({ categories }: CategorySectionProps) {
    return <div className="container flex flex-col justify-center">
        {categories.map(category => {
            return <div key={category.id}>
                <h1 className="text-center font-bold text-3xl my-4">
                    {category.name}
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
                            category.products.map(product => <div key={product.product.id}>
                                <SwiperSlide>
                                    <div className="flex flex-col">
                                        <Link href={`/product/${product.product.slug}`}>
                                            <Image src={product.product.image!} alt={product.product.name} width={300} height={400} />
                                        </Link>
                                        <span>
                                            {product.product.name}
                                        </span>
                                        <div className="flex justify-between mt-2 w-full">
                                            <span >
                                                ${getMinPrice(product.product.prices)}-
                                                ${getMaxPrice(product.product.prices)}
                                            </span>
                                            <div className="flex items-center space-x-1">
                                                <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                </svg>
                                                <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                </svg>
                                                <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                </svg>
                                                <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                </svg>
                                                <svg className="w-4 h-4 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>

                            </div>)
                        }
                    </Swiper>
                </div>
                <div className="flex justify-center mt-4">
                    <Link href={`/category/${category.slug}`} className="bg-yellow-500 text-white px-4 py-2 rounded-md">
                        View All
                    </Link>
                </div>
            </div>
        })
        }
    </div>

}