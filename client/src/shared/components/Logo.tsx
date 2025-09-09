import LogoSrc from "/assets/astrell-logo-transparent.png"

export default function Logo() {

    // Classes
    const logoAlt = "Logo"
    const logoClasses = "w-25 h-25"

    return (
        <img className={logoClasses} src={LogoSrc} alt={logoAlt} />
    )
}