import Description from "@/components/product-page/description";
import ProductColor from "@/components/product-page/product-color";
import ProductSlider from "@/components/product-page/product-slider";
import SizeCart from "@/components/product-page/size-cart";
import { db } from "@/lib/db"
import { getMaxPrice, getMinPrice } from "@/lib/utils";
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
        include: {
            prices: true,
            images: true,
            colors: {
                include: {
                    color: true
                }
            },
            attributes:{
                include:{
                    attribute:true
                
                }
            },
            sizes: {
                include: {
                    size: true
                }
            }
        }
    });
    console.log(product?.name);
    return <div className="container">
        <div className=" flex gap-4 p-5 flex-col lg:flex-row bg-[#f8f9fa ] leading-7  ">
            <div className="w-2/5">
                <ProductSlider thumbnailImage={product?.image!} images={product?.images.filter(image => image.image).map(image => image.image!)} />
            </div >
            <div className="w-3/5">
                <h1 className="text-2xl font-bold">{product?.name}</h1>
                {/* <p className="text-xl"> ${getMinPrice(product?.prices)} to 
                                        ${getMaxPrice(product?.prices)}</p> */}
                <div className="flex gap-4 ">
                    {
                        product?.prices.map(price => <div key={price.id}>
                            <h4>
                                {price.label}
                            </h4>
                            <b>
                                ${price.unitPrice}
                            </b>
                        </div>)
                    }
                </div>
                <hr />
                {
                    product?.colors && <ProductColor colors={product?.colors} />
                }
                <div className="flex gap-4">
                    <h4>
                        Size
                    </h4>
                    <div className="flex flex-col">
                        {
                            product?.sizes.map(size => <div key={size.sizeId} className="flex gap-4">
                                <b>
                                    {size.size.name}
                                </b>
                                <b>
                                    ${size.extra + getMaxPrice(product?.prices)}
                                </b>
                                {/* <SizeCart /> */}
                            </div>)
                        }
                    </div>
                </div>
                <div>
                    {product?.attributes.map((attribute)=><div key={attribute.attributeId} className="flex gap-4">
                    <b>
                                {attribute.attribute.name}
                            </b>
                            <b>
                                {attribute.value}
                            </b>
                    </div>)}
                </div>
                <p className="text-gray-400 ">
                    <Balancer>

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
        <Description description={product?.description!} />
    </div>
}