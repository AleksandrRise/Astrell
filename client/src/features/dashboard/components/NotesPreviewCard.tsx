export default function NotesPreviewCard() {

    // Classes
    const sectionClasses = ["w-full", "h-auto", "row-start-1", "rounded-3xl",
        "relative", "flex", "flex-col", "items-center", "logoGradient-bg",
        "p-[2px]", "opacity-40"].join(" ");
    const lineClasses = ["relative", "h-px", "w-1/4", "bg-gradient-to-r", 
        "from-transparent", "to-[#575B63]", "after:content-['']", 
        "after:absolute", "after:bg-[#575B63]", "after:size-[4px]", 
        "after:-top-[1.5px]", "after:-right-1", "after:rotate-45"].join(" ");
    const h2Classes = ["font-lato", "xl:text-2xl", "lg:text-xl", "font-bold",
        "text-nowrap", "text-shadow-[0_0_16px_rgb(255_255_255_/_0.25)]"].join(" ");
    const spanClasses = ["absolute", "bottom-0", "top-0", "flex", "items-center",
        "xl:text-5xl", "lg:text-4xl", "font-lato", "font-bold"].join(" ");

    return (
        <section className={sectionClasses}>
            <div className="flex items-center justify-center gap-4.25 mt-8 w-full">
                <div className={lineClasses} />

                <h2 className={h2Classes}>
                    My Notes
                </h2>

                <div className={`${lineClasses} rotate-180`} />
            </div>

            <span className={spanClasses}>
                N/A
            </span>
        </section>
    );
}