import clsx from 'clsx';

// Define a type for the component props
interface LinkProps {
    href: string;
    children: React.ReactNode;
}

const Link: React.FC<LinkProps> = ({ href, children }) => {
    return (
        <a
            href={href}
            className={clsx(
                "font-medium",
                "bg-[hsl(var(--background))]",
                "px-4",
                "py-2",
                "rounded-md",
                "hover:bg-[hsl(var(--accent))]",
                "hover:transition-colors",
                "hover:ease-[cubic-bezier(.4,0,0.2,1)]",
                "hover:duration-[0.15s]"
            )}
        >
            {children}
        </a>
    );
};

export default Link;