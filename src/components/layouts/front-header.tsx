import { siteConfig } from "@/config/site";
import { NavLink } from "./nav-link";
import { Category } from "@prisma/client";

interface FrontHeaderProps {
    categories: Category[]
}
export function FrontHeader({ categories }: FrontHeaderProps) {
    return (
        <header className="sticky top-0 z-40 w-full border-b bg-background py-2">
            <div className="flex container justify-between ">
                <div className="flex gap-5 grow">
                <NavLink path="/" label={siteConfig.name} />
                {categories.map(category => <NavLink key={category.id} path={`/category/${category.slug}`} label={category.name} />)}
                </div>
                <div className="flex justify-end gap-5 grow">
                    <NavLink path="/" label="Home" />
                    <NavLink path="/shop" label="Shop" />
                    <NavLink path="/about" label="About" />
                    <NavLink path="/contact" label="Contact" />
                </div>
            </div>
        </header>
    )
}