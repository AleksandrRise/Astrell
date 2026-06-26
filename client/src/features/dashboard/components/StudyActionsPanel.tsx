import Action1 from "./QuizActionCard"
import Action2 from "./FlashcardsActionCard"
import Action3 from "./AskAiActionCard"

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