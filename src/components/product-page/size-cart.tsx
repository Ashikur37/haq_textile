"use client"

import { useState } from "react"

export default function SizeCart(){
    const [qty,setQty]=useState<number>(0);
    return <div className="flex">
    <button className="rounded mr-2 bg-slate-400" onClick={()=>setQty(qty-1)}>
    <span><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><rect opacity="0.1" width="28" height="28" fill="white"></rect><path d="M9 14H14H19" stroke="black" stroke-width="1.2"></path></svg></span>
    </button>
    <input className="w-10" value={qty} onChange={e=>setQty(+e.target.value)} type="number" />
    <button className="rounded ml-2 bg-slate-400" onClick={()=>setQty(qty+1)}>
    <span><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><rect opacity="0.1" width="28" height="28" fill="white"></rect><path d="M14 9V14M14 19V14M14 14H9M14 14H19" stroke="black" stroke-width="1.2"></path></svg></span>
    </button>
</div>
}