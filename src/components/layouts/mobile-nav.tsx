import { siteConfig } from "@/config/site";
import { NavLink } from "./nav-link";
import { Category } from "@prisma/client";

interface MobileNavProps {
    categories: Category[]
}
export default function MobileNav({categories}:MobileNavProps){

}