
type FeatureProps = {
    name: string;
    icon: string;
    isActive: boolean;
}

export default function Feature({ name, icon, isActive }: FeatureProps) {

    // Classes
    const liClasses = `w-full rounded-lg  \
        ${isActive 
            ? "text-white/90 shadow-[0_0_0_1px_#333533] \
                bg-linear-to-r from-[#232323]/50 to-white/15 to-60%" 
            : "text-white/50"
        }`
    const btnClasses = `flex items-center gap-3.75 px-6 py-2.5 w-full rounded-lg \
        ${isActive
            ? "shadow-[0_1px_0_0_#333533_inset]"
            : "cursor-pointer"
        }`
    const imgClasses = `w-7.5 h-7.5 ${isActive ? "opacity-90" : "opacity-50"}`
    const spanClasses = ""

    // Properties
    const altIcon = "Icon"

    return (
        <li className={liClasses}>
            <button className={btnClasses}>
                <img className={imgClasses} src={icon} alt={altIcon} />
                <span className={spanClasses}>{name}</span>
            </button>
        </li> 
    )
}