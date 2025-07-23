import infoSrc from "../../assets/Information.png"
import HintBlock from "../../features/home/components/HintBlock";

type InfoProps = {
    children: React.ReactNode
}

export default function Info({ children }: InfoProps) {
    const infoAlt = "Info"
    const wrapperClasses = "rounded-full bg-white/30 w-17.5 h-17.5 flex cursor-pointer \
    hover:bg-white/50 transition fadeIn opacity-0 relative"
    const imgClasses = "w-10 h-10 m-auto"

    return (
        <button className={wrapperClasses}>
            <img className={imgClasses} src={infoSrc} alt={infoAlt} />

            {children}
        </button>
    )
}

Info.HintBlock = HintBlock