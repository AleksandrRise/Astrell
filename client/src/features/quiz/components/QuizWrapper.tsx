import QuestionBlock from "./QuestionBlock";
import TimerBlock from "./TimerBlock";

type QuizWrapperProps = {
    children: React.ReactNode;
}

export default function QuizWrapper({ children }: QuizWrapperProps) {

    // Classes
    const mainClasses = "flex flex-col size-full items-center"

    return (
        <main className={mainClasses}>
            {children}
        </main>
    )
}

QuizWrapper.QuestionBlock = QuestionBlock
QuizWrapper.TimerBlock = TimerBlock