import { useEffect, useRef, useState } from "react";
import infoSrc from "../../assets/Information.png"
import HintBlock from "../../features/home/components/HintBlock";

type InfoProps = {
    children: React.ReactNode
}

export default function Info({ children }: InfoProps) {

    // States
    const [isOpen, setIsOpen] = useState<boolean>(false)

    // If clicked outside the button, hint gets closed
    useEffect(() => {
        let handler = (e: Event) => {
            if (e.target) {
                setIsOpen(false)
            }
        }

        document.addEventListener('mousedown', handler)
    }, [])

    // Classes
    const infoAlt = "Info"
    const wrapperClasses = `rounded-full ${!isOpen && "hover:bg-white/50"} bg-white/30 w-17.5 h-17.5 flex cursor-pointer \
    transition fadeIn opacity-0 relative ${isOpen && "hint-open"}`
    const imgClasses = "w-10 h-10 m-auto"

    return (
        <button className={wrapperClasses} disabled={isOpen} onClick={() => setIsOpen(true)}>
            <img className={imgClasses} src={infoSrc} alt={infoAlt} />

            {isOpen ? children : null}
        </button>
    )
}

Info.HintBlock = HintBlock