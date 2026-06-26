import Logo from "../../../shared/components/Logo";

export default function SidebarBrand() {

    // Classes
    const sectionClasses = ["flex", "flex-wrap", "items-center", "text-3xl",
        "cursor-default", "pt-5", "pb-2", "lg:justify-center","xl:justify-start"].join(" ");
    const h1Classes = ["tracking-wider", "font-bold", "font-lato", "lg:hidden",
        "xl:inline"].join(" ");

    return (
        <section className={sectionClasses}>
            <Logo />
            <h1 className={h1Classes}>
                ASTRELL
            </h1>
        </section>
    );
}