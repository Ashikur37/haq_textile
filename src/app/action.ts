"use server"

import { revalidatePath } from "next/cache"

export const action=async ()=>{
    await new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("ok time")
            resolve("ok");
        },1500)
    })
    revalidatePath("/")
    return "ok";
}