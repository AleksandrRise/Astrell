import arrowIcon from "../assets/arrow.png"
import { useNavigate } from "react-router-dom"

export default function Title() {

    // Hooks
    const navigate = useNavigate()

    // Attributes
    const arrowIconAlt = "GoBack"

    // Classes
    const titleClasses = "flex gap-11.5 items-center"
    const titleTextClasses = "font-lato font-regular tracking-wide text-2xl"
    const btnBackClasses = "bg-white/20 rounded-full size-10 cursor-pointer \
        flex justify-center items-center hover:scale-105 hover:bg-white/30 \
        active:scale-102 active:bg-white/20 transition-transform"
    const iconBackClasses = "size-4.5"

    return (
        <div className={titleClasses}>
            <button className={btnBackClasses} onClick={() => navigate("/dashboard")}>
                <img className={iconBackClasses} src={arrowIcon} alt={arrowIconAlt} />
            </button>
            <h1 className={titleTextClasses}>Quiz Settings</h1>
        </div>        
    )
}