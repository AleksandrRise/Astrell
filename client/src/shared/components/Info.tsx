import infoSrc from "../../assets/Information.png"

export default function Info() {
    const infoAlt = "Info"
    const wrapperClasses = "rounded-full bg-white/30 w-20 h-20 flex cursor-pointer \
    hover:bg-white/50 transition"
    const imgClasses = "w-12.5 h-12.5 m-auto"

    return (
        <div className={wrapperClasses}>
            <img className={imgClasses} src={infoSrc} alt={infoAlt} />
        </div>
    )
}