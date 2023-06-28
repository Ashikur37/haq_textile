"use client"

import { useTransition } from "react";
import { action } from "./app/action";



function Button() {
    const [isPending, startTransition] = useTransition();
  return (
   <>
    <button onClick={()=>{
        startTransition(async()=>{
           const res= await action();
           console.log(res);
    })
    }}>
        CLick
    </button>
    {`${isPending}`}
   </>
  )
}

export default Button