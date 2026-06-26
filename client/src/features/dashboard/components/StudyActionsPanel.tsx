import QuizActionCard from "./QuizActionCard";
import FlashcardsActionCard from "./FlashcardsActionCard";
import AskAiActionCard from "./AskAiActionCard";

export default function StudyActionsPanel() {

    // Classes
    const sectionClasses = ["size-full", "grid", "grid-cols-2", 
        "grid-rows-2", "gap-5.25", "row-start-2", "font-lato"].join(" ")

    return (
        <section className={sectionClasses}>
            <QuizActionCard />
            <FlashcardsActionCard />
            <AskAiActionCard />
        </section>
    );
}