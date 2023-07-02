"use client"

import { Image } from "@prisma/client"
import { Icons } from "../icons"

interface HeroProps {
    images: Image[]
}
export default function Hero({ images }: HeroProps) {
    return <div
        className="relative overflow-hidden bg-cover bg-no-repeat "
        style={{
            backgroundImage: `url(${images[0]?.image})`,
            height: "100vh",
            backgroundPosition: "center center"
        }}
    >
        <div className="absolute top-0 left-0 bg-[#f1b8c4] w-1/2 bottom-0 opacity-60">

        </div>
        <div className="flex items-center justify-center flex-col gap-2 h-full ">
            <h1 className="text-white font-bold text-9xl z-50">
                HAQUE TEXTILE
                
            </h1>
            <h3 className="text-white  text-3xl mt-12 z-50">
                WEAR YOUR DRESS
            </h3>
            <div className="bg-white z-50 rounded-full h-[] cursor-pointer" >
                    <Icons.chevronDown className="animate-bounce"/>
            </div>
        </div>

    </div>
}