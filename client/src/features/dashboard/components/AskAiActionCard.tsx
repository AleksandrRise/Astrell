import aiIcon from "/assets/AIIcon.png";

export default function AskAiActionCard() {

    const htmlFor = "ask-ai";

    // Classes
    const labelClasses = ["logoGradient-bg", "p-[5px]", "rounded-3xl", "col-span-2",
        "flex", "justify-center", "items-center", "opacity-40"].join(" ");
    const spanClasses1 = ["xl:text-sm", "lg:text-xs", "italic", "-mb-1"].join(" ");
    const spanClasses2 = ["xl:text-5xl", "lg:text-3xl", "bg-clip-text", "text-transparent",
        "bg-linear-to-l", "from-[#999999]", "to-white", "font-bold", "italic",
        "tracking-wider"].join(" ");
    const inputClasses = ["border", "border-[#333533]", "rounded-lg", "bg-white/5",
        "outline-none", "xl:p-2", "lg:p-1", "pr-13", "w-full", "text-white/80",
        "text-md"].join(" ");

    return (
        <label
            className={labelClasses}
            htmlFor={htmlFor}
            aria-label="Ask AI unavailable"
        >
            <div className="flex items-end xl:gap-5.5 lg:gap-3.5">
                <div className="relative flex flex-col">
                    <span className={spanClasses1}>
                        Ask
                    </span>

                    <span className={spanClasses2}>
                        AI
                    </span>
                </div>

                <div className="relative xl:w-70 lg:min-w-40">
                    <img
                        className="xl:size-7 lg:size-6 absolute xl:bottom-1.5 lg:bottom-1 right-2.5"
                        src={aiIcon}
                        alt="Ask AI Icon"
                    />

                    <input
                        disabled
                        className={inputClasses}
                        type="text"
                        name={htmlFor}
                        id={htmlFor}
                    />
                </div>
            </div>
        </label>
    );
}