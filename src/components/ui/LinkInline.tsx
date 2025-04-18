
export const LinkInline = ({ href, children }: { href: string, children: React.ReactNode }) => {
    return (
        <a  href={href} role="link" className="inline-flex items-center text-lg font-medium text-petrol hover:text-petrol-light">
            {children}</a>
    )
}

