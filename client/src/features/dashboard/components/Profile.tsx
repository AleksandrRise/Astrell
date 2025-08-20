import profileIcon from "/assets/ProfileIcon.png"

export default function Profile() {

    // Classes
    const btnClasses = "mt-10 w-full flex items-center gap-3 \
        shadow-[0_1px_0_0_#333533_inset] rounded-3xl bg-linear-to-r \
        from-white/5 via-[#999999]/5 to-white/10 px-5 py-3.5 mb-11.25 \
        lg:justify-center xl:justify-start"
    const imgClasses = "w-11.25 h-11.25"
    const spanClasses = "text-base text-white/80 lg:hidden xl:inline"

    const altIcon = "Guest Icon"

    return (
        <button className={btnClasses}>
            <img className={imgClasses} src={profileIcon} alt={altIcon} />
            <span className={spanClasses}>Guest</span>
        </button>
    )
}