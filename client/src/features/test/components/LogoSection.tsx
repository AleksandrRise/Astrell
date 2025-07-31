import Logo from "../../../shared/components/Logo"

export default function LogoSection() {
    // Classes
    const wrapperClasses = "flex items-center text-3xl cursor-default py-7.5"
    const h1Classes = "pt-1 tracking-wider font-bold font-lato"

    return (
        <section className={wrapperClasses}>
            <Logo />
            <h1 className={h1Classes}>ASTRELL</h1>
        </section>       
    )
}