import { Category } from "@prisma/client";
import MainNav from "./main-nav";

interface FrontHeaderProps {
    categories: Category[]
}
export function FrontHeader({ categories }: FrontHeaderProps) {
    return (
        <header className="sticky top-0 z-40 w-full border-b bg-background py-2">
            <MainNav categories={categories}/>
        </header>
    )
}