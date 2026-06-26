import type { ReactNode } from "react";

type SidebarNavSectionProps = {
    title?: string;
    children: ReactNode;
};

export default function SidebarNavSection({
    title,
    children,
}: SidebarNavSectionProps) {

    // Classes
    const h2Classes = ["tracking-wide", "text-white/60", "text-base", 
        "font-bold", "font-lato", "mt-9.5", "ml-2"].join(" ");

    return (
        <section>
            {title ? (
                <h2 className={h2Classes}>
                    {title}
                </h2>
            ) : null}

            <nav aria-label={title ?? "Sidebar navigation"}>
                <ul className="flex flex-col gap-4 text-base font-semibold font-lato">
                    {children}
                </ul>
            </nav>
        </section>
    );
}