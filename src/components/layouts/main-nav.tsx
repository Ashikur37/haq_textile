import { siteConfig } from "@/config/site";
import { NavLink } from "./nav-link";
import { Category } from "@prisma/client";

interface MainNavProps {
    categories: Category[]
}
export default function MainNav({ categories }: MainNavProps) {
    return <div className="hidden lg:flex container justify-between ">
        <div className="flex gap-5 grow">
            <NavLink path="/" label={siteConfig.name} />
        </div>
        <div className="flex justify-end gap-5 grow">
            <NavLink path="/" label="Home" />
            {categories.map(category => <NavLink key={category.id} path={`/category/${category.slug}`} label={category.name} />)}
            <NavLink path="/shop" label="Shop" />
            <NavLink path="/about" label="About" />
            <NavLink path="/contact" label="Contact" />
        </div>
    </div>
}