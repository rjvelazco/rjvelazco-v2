
export const LinkInline = ({ href, children }: { href: string, children: React.ReactNode }) => {
    return (
        <a  href={href} role="link" className="inline-flex items-center text-lg font-medium text-petrol-light hover:text-petrol-dark">
            {children}</a>
    )
}

