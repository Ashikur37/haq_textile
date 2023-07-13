import { db } from "@/lib/db"
import { getMaxPrice, getMinPrice } from "@/lib/utils";
import Image from "next/image";
import { Balancer } from "react-wrap-balancer";

interface PrdouctPageProps {
    params: {
        slug: string
    }
}
export default async function ProductPage({ params }: PrdouctPageProps) {
    const product = await db.product.findFirst({
        where: {
            slug: params.slug
        },
        include:{
            prices:true
        }
    });
    return <div className="container flex gap-4 p-5 flex-col lg:flex-row bg-[#f8f9fa ] leading-7">
        <Image src={product?.image!} alt={product?.name!} width={500} height={900} />
        <div>
            <h1 className="text-2xl font-bold">{product?.name}</h1>
            <p className="text-xl"> ${getMinPrice(product?.prices)} to 
                                        ${getMaxPrice(product?.prices)}</p>
            <p className="text-gray-400 ">
                <Balancer>
                    {product?.description} 
                    <br />
                    <h4>
                        Contact US
                    </h4>
                    <div className="border-2 border-gray-300 px-8 py-7 leading-9">
                        <h4>Phone</h4>
                        <h4><p>+8801721121233</p></h4>
                        <h4> Office Address</h4>
                        <p>
                            Dr.Aminul Islam Mension 1st floor,141,DIT Ext Road, Fakirapool, Dhaka-100</p>
                        <h4><p>mshaquetextile@gmail.com</p></h4>
                    </div>
                </Balancer>
            </p>
        </div>
    </div>
}