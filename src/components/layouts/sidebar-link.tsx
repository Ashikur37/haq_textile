import { cn } from "@/lib/utils"
import { Icons } from "../icons"
import { useState } from "react"
import Link from "next/link"

interface SubMenu {
    label: string
    link: string
}
interface SidebarLinkProps {
    open: boolean
    label: string
    subMenus: SubMenu[]
}
export function SidebarLink({ label, open, subMenus }: SidebarLinkProps) {
    const [submenuOpen, setSubmenuOpen] = useState(false);
    return <>
        <li className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:text-white rounded-md mt-2 hover:bg-[#2F2326BE]">
            <span className="text-2xl block float-left">
                <Icons.menu />
            </span>
            <span className={cn("text-base font-medium flex-1 duration-200", !open && "hidden")}>
                {label}
            </span>
            {
                submenuOpen ? <Icons.chevronUp onClick={() => setSubmenuOpen(!submenuOpen)} /> :
                    <Icons.chevronRight onClick={() => setSubmenuOpen(!submenuOpen)} />
            }
        </li>
        <ul className={cn("duration-500", (!open || !submenuOpen) && "hidden")}>
            {
                subMenus.map((subMenu, index) =>
                    <Link key={index} href={subMenu.link}>
                        <li className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:text-white rounded-md mt-2 hover:bg-[#2F2326BE]">
                            {subMenu.label}
                        </li>
                    </Link>
                )
            }

        </ul>
    </>
}