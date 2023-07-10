"use client"
import { Icons } from "@/components/icons"
import { cn } from "@/lib/utils";
import { useState } from "react"
import { SidebarLink } from "./sidebar-link";

export default function AdminSidebar() {
    const [open, setOpen] = useState<boolean>(true);
    return <div className={cn("w-3/10 h-screen bg-deepcolor p-5 pt-8 relative duration-500", open ? "w-72" : "w-20")}>
        {
            open ? <Icons.left onClick={() => setOpen(false)} className="rounded-full cursor-pointer bg-white text-3xl absolute -right-3 top-39 border border-themecolor" /> :
                <Icons.right onClick={() => setOpen(true)} className="rounded-full cursor-pointer bg-white text-3xl absolute -right-3 top-39 border border-themecolor" />
        }
        <div className="inline-flex">
            <Icons.calendar className={cn("text-4xl text-white float-left mr-2 duration-500", open && "rotate-[360deg] ")} />
            <h1 className={cn("text-white origin-left font-medium text-2xl duration-500", !open && "scale-0")}>
                HaqueTextile
            </h1>
        </div>
        <div className={cn("flex items-center rounded-md bg-[#2F2326BE] mt-6 py-2 duration-500", open ? "px-4" : "px-2.5")}>
            <Icons.search className={cn("text-white text-lg block float-left cursor-pointer duration-500", open && "mr-2")} />
            <input type="search" placeholder="Search" className={cn("text-base bg-transparent w-full text-white focus:outline-none", !open && "hidden")} />
        </div>
        <ul className="pt-2">
            <SidebarLink label="Product" open={open} subMenus={[
                {
                    label: "Product List",
                    link: "/admin/products"
                },
                {
                    label: "Add Product",
                    link: "/admin/products/add"
                }
            ]} />
            <SidebarLink label="Image" open={open} subMenus={[
                {
                    label: "Image List",
                    link: "/admin/images"
                },
                {
                    label: "Add Image",
                    link: "/admin/images/add"
                }
            ]} />
            <SidebarLink label="Category" open={open} subMenus={[
                {
                    label: "Category List",
                    link: "/admin/categories"
                },
                {
                    label: "Add Category",
                    link: "/admin/categories/add"
                }
            ]} />
            <SidebarLink label="Size" open={open} subMenus={[
                {
                    label: "Size List",
                    link: "/admin/sizes"
                },
                {
                    label: "Add Size",
                    link: "/admin/sizes/add"
                }
            ]} />
            <SidebarLink label="Color" open={open} subMenus={[
                {
                    label: "Color List",
                    link: "/admin/colors"
                },
                {
                    label: "Add Color",
                    link: "/admin/colors/add"
                }
            ]} />

        </ul>
    </div>
}