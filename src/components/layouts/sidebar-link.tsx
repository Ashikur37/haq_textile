import { cn } from "@/lib/utils"
import { Icons } from "../icons"

interface SidebarLinkProps{
    open:boolean
    label:string
}
export function SidebarLink({label,open}:SidebarLinkProps) {
    return <li className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:text-white rounded-md mt-2 hover:bg-[#2F2326BE]">
        <span className="text-2xl block float-left">
            <Icons.menu/>
        </span>
        <span className={cn("text-base font-medium flex-1 duration-200",!open&&"hidden")}>
            {label}
        </span>
        <Icons.chevronDown/>
    </li>
}