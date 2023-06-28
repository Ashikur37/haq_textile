"use client"
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
interface NavLinkProps{
    path:string
    label:string
}
export function NavLink({path,label}:NavLinkProps) {
    const pathname = usePathname();

    return <Link href={path}>
        <h3 className={cn(pathname === path && "text-themecolor")}>
            {label}
        </h3>
    </Link>
}