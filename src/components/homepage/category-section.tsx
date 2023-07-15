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