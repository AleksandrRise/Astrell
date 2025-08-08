import arrowIcon from "../assets/arrow.png"

export default function Title() {

    // Attributes
    const arrowIconAlt = "GoBack"

    // Classes
    const titleClasses = "flex gap-11.5 items-center"
    const titleTextClasses = "font-lato font-bold text-2xl"
    const btnBackClasses = "bg-white/20 rounded-full size-10 cursor-pointer \
        flex justify-center items-center"
    const iconBackClasses = "size-4.5"

    return (
        <div className={titleClasses}>
            <button className={btnBackClasses}>
                <img className={iconBackClasses} src={arrowIcon} alt={arrowIconAlt} />
            </button>
            <h1 className={titleTextClasses}>Quiz Settings</h1>
        </div>        
    )
}