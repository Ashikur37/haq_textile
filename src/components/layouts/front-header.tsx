import { siteConfig } from "@/config/site";
import { NavLink } from "./nav-link";

export function FrontHeader() {
    return (
        <header className="sticky top-0 z-40 w-full border-b bg-background py-2">
            <div className="flex container justify-between ">
                <NavLink path="/" label={siteConfig.name} />
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