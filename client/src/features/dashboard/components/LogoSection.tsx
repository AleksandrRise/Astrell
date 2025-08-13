import Logo from "../../../shared/components/Logo"

export default function LogoSection() {
    // Classes
    const wrapperClasses = "flex flex-wrap items-center text-3xl cursor-default pt-5 pb-2 \
    lg:justify-center xl:justify-start"
    const h1Classes = "pt-1 tracking-wider font-bold font-lato lg:hidden xl:inline"

    return (
        <section className={wrapperClasses}>
            <Logo />
            <h1 className={h1Classes}>ASTRELL</h1>
        </section>       
    )
}