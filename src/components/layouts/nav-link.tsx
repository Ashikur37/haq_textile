"use client"
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
interface NavLinkProps{
    path:string
    label:string,
    className?:string
}
export function NavLink({path,label,className}:NavLinkProps) {
    const pathname = usePathname();

    return <Link href={path} className={className}>
        <h3 className={cn(pathname === path && "text-themecolor")}>
            {label}
        </h3>
    </Link>
}