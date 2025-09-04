import { useNavigate } from "react-router-dom"
import { useAnimOnce } from "../utils/useAnimOnce"

export default function MenuBtn() {

    const navigate = useNavigate()

    const transcript = localStorage.getItem("transcript")

    const fadeInClass = useAnimOnce("fadeIn:MenuBtn")

    // Classes
    const buttonClasses = `cursor-pointer md:p-2 -ml-5 ${fadeInClass} ${!transcript && "invisible"}`
    const upperLineClasses = `w-12.5 h-[2px] bg-white`
    const lowerLineClasses = `w-10 h-[1px] bg-white mt-3.75`

    return (
        <button className={buttonClasses} onClick={() => navigate("/dashboard")}>
            <div className={upperLineClasses}></div> 
            <div className={lowerLineClasses}></div>
        </button>
    )
}