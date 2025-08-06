import FlashIcon from "../assets/FlashIcon.png"

export default function Action2() {

    // Classes
    const btnClasses = "rounded-3xl logoGradient-bg p-[2px] flex flex-col text-start \
        justify-center items-center cursor-pointer"
    const flashContainerClasses = "flex flex-col"
    const flashIconClasses = "size-7"
    const flashIconAlt = "FlashcardsIcon"
    const flashTextClasses = "text-2xl font-bold bg-clip-text text-transparent \
        bg-linear-to-l from-[#999999] to-white"
    const flashSubtextClasses = "text-sm italic ml-auto font-semibold"

    return (
        <button className={btnClasses}>
            <div className={flashContainerClasses}>
                <img className={flashIconClasses} src={FlashIcon} alt={flashIconAlt} />
                <span className={flashTextClasses}>Flashcards</span>
                <span className={flashSubtextClasses}>Make</span>
            </div>
        </button>
    )
}