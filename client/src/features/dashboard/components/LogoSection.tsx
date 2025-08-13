import Logo from "../../../shared/components/Logo"

export default function LogoSection() {
    // Classes
    const wrapperClasses = "flex flex-wrap items-center xl:text-3xl cursor-default pt-5 pb-2 \
        lg:text-2xl"
    const h1Classes = "pt-1 tracking-wider font-bold font-lato"

    return (
        <section className={wrapperClasses}>
            <Logo />
            <h1 className={h1Classes}>ASTRELL</h1>
        </section>       
    )
}