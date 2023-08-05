import { Color, ColorsOnProducts } from "@prisma/client"

interface ColorWIthProduct extends ColorsOnProducts{
    color:Color
}
type Props = {
    colors:ColorWIthProduct[]
}

function ProductColor({colors }: Props) {
    return (
        <div className="mt-2 flex gap-4">
            <h4>
                Color
            </h4>
            {
               colors.map(color => <div key={color.colorId}>
                    <div className={"h-5 w-5 mt-1"} style={{ backgroundColor: color.color.code }}></div>
                </div>)
            }
        </div>
    )
}

export default ProductColor