interface BreadCumbProps {
    title: string
    links: {
        label: string
        url: string
    }[]
}

export default function BreadCumb({ title, links }: BreadCumbProps) {
    return <div className="p-10 flex flex-col items-center pb-15">
        <h2 className="text-4xl font-thin text-center mb-5 tracking-wider text-gray-400">
            {title}
        </h2>
        <div className="flex flex-row">
            {links.map((link, index) => (
                <div key={index} className="px-1">
                    <a href={link.url}>
                        {link.label}
                    </a>
                </div>
            ))}
        </div>
    </div>
}