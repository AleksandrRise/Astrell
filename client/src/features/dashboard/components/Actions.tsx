import Action1 from "./Action1"
import Action2 from "./Action2"
import Action3 from "./Action3"

export default function Actions() {

    // Classes
    const wrapperClasses = "size-full grid grid-cols-2 grid-rows-2 gap-5.25 \
        row-start-2 font-lato"

    return (
        <section className={wrapperClasses}>
            <Action1 />
            <Action2 />
            <Action3 />
        </section>
    )
}