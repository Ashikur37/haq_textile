import ProductCard from "@/components/common/product-card"
import { db } from "@/lib/db"
interface CategoryPageProps {
    params: {
        slug: string
    }
}
export default async function CategoryPage({ params }: CategoryPageProps) {
    const category = await db.category.findUnique({
        where: {
            slug: params.slug
        },
        include: {
            products: {
                include: {
                    product: {
                        include: {
                            prices: true
                        }
                    }
                }
            }
        }
    })
    return <div className="flex flex-col items-center gap-5">
        <h1 className="text-2xl font-bold text-gray-800">
            {category?.name}
        </h1>
        <div className="flex gap-5 flex-wrap justify-center">
            {
                category?.products.map(product => <ProductCard className="xl:w-1/5 md:w-1/3 lg:w-1/4 xs:w-1/2" key={product.productId} product={product.product}/>)
            }
        </div>
    </div>
}