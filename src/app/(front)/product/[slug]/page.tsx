import { db } from "@/lib/db"
import Image from "next/image";

interface PrdouctPageProps {
    params: {
        slug: string
    }
}
export default async function ProductPage({ params }: PrdouctPageProps) {
    const product = await db.product.findFirst({
        where: {
            slug: params.slug
        }
    });
    return <div className="container flex gap-4 p-5">
        <Image src={product?.image!} alt={product?.name!} width={500} height={900} />
        <div>
            {product?.description}
        </div>
    </div>
}