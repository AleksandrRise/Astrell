import logoSrc from "../../assets/astrellogotransp.PNG"

export default function Logo() {

    // Classes
    const logoAlt = "Logo"
    const logoClasses = "w-25 h-25"

    return (
        <img className={logoClasses} src={logoSrc} alt={logoAlt} />
    )
}