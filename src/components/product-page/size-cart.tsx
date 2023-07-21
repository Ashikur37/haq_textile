"use client"

import { useState } from "react"

export default function SizeCart(){
    const [qty,setQty]=useState<number>(0);
    return <div className="flex">
    <button className="mr-2 bg-slate-400" onClick={()=>setQty(qty-1)}>
        -
    </button>
    <input className="w-10" value={qty} onChange={e=>setQty(+e.target.value)} type="number" />
    <button className="ml-2 bg-slate-400" onClick={()=>setQty(qty+1)}>
        +
    </button>
</div>
}