import flashIcon from "/assets/FlashIcon.png";

export default function FlashcardsActionCard() {

    // Classes
    const buttonClasses = ["rounded-3xl", "logoGradient-bg", "p-[2px]",
        "flex", "flex-col", "text-start", "justify-center", "items-center",
        "opacity-40"].join(" ");
    const spanClasses1 = ["xl:text-3xl", "lg:text-2xl", "font-bold", "italic",
        "bg-clip-text", "text-transparent", "bg-linear-to-l", "from-[#999999]",
        "to-white", "tracking-wide"].join(" ");
    const spanClasses2 = ["xl:text-sm", "lg:text-xs", "italic", "ml-auto",
        "font-semibold"].join(" ");

    return (
        <button
            type="button"
            disabled
            className={buttonClasses}
            aria-label="Make flashcards unavailable"
        >
            <div className="flex flex-col">
                <img className="size-7" src={flashIcon} alt="Flashcards Icon" />

                <span className={spanClasses1}>
                    Flashcards
                </span>

                <span className={spanClasses2}>
                    Make
                </span>
            </div>
        </button>
    );
}