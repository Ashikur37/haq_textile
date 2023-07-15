import { cn, getMaxPrice, getMinPrice } from "@/lib/utils"
import { Price, Product } from "@prisma/client"
import Image from "next/image"
import Link from "next/link"

interface ProductWithPrice extends Product{
    prices:Price[]
}
interface ProductCardProps{
    product:ProductWithPrice,
    className?:string
}
export default function ProductCard({product,className}:ProductCardProps){
    return <div className={cn("flex flex-col",className)}>
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
}