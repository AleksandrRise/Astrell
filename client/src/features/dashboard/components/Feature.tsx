import { useNavigate } from "react-router-dom"
import type { FeaturesProps } from "../utils/FeaturesProps"

export default function Feature({ name, icon, isActive, navigateTo }: FeaturesProps) {

    const navigate = useNavigate()

    // Classes
    const liClasses = `w-full rounded-lg  \
        ${isActive 
            ? "text-white/90 shadow-[0_0_0_1px_#333533] \
                bg-linear-to-r from-[#232323]/50 to-white/15 to-60%" 
            : "text-white/50 hover:shadow-[0_0_0_1px_#333533]/50 \
                hover:bg-linear-to-r hover:from-[#232323]/35 \
                hover:to-white/10 hover:to-60%"
        }`
    const btnClasses = `flex items-center gap-3.75 px-6 py-2.5 w-full rounded-lg \
        ${isActive
            ? "shadow-[0_1px_0_0_#333533_inset]"
            : "hover:shadow-[0_1px_0_0_#333533_inset]/50 cursor-pointer"
        }`
    const imgClasses = `w-7.5 h-7.5 ${isActive ? "opacity-90" : "opacity-50"}`
    const spanClasses = ""

    // Properties
    const altIcon = "Icon"

    return (
        <li className={liClasses}>
            <button className={btnClasses} onClick={() => navigate(navigateTo || "/dashboard")}>
                <img className={imgClasses} src={icon} alt={altIcon} />
                <span className={spanClasses}>{name}</span>
            </button>
        </li> 
    )
}