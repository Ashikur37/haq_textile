import { siteConfig } from "@/config/site";
import Link from "next/link";

export function FrontHeader() {
    return (
        <header className="sticky top-0 z-40 w-full border-b bg-background">
            <div className="flex container justify-between ">
                <Link href="/" className="grow">
                    <h1>
                        {siteConfig.name}
                    </h1>
                </Link>
                <div className="flex justify-end gap-5 grow">
                    <Link href="/">
                        <h1>
                            Home
                        </h1>
                    </Link>
                    <Link href="/">
                        <h1>
                            Shop
                        </h1>
                    </Link>
                    <Link href="/">
                        <h1>
                            About
                        </h1>
                    </Link>
                    <Link href="/">
                        <h1>
                            Contact
                        </h1>
                    </Link>
                </div>
            </div>
        </header>
    )
}