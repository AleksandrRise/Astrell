import DifficultyBlock from "./DifficultyBlock";
import QuestionsNumBlock from "./QuestionsNumBlock";
import TimeBlock from "./TimeBlock";

type SettingsProps = {
    children: React.ReactNode;
}

export default function Settings({ children }: SettingsProps) {

    // Classes
    const wrapperClasses = "grid grid-cols-2 gap-x-7.5 gap-y-4"

    return (
        <div className={wrapperClasses}>
            {children}
        </div>
    )
}

Settings.TimeBlock = TimeBlock
Settings.DifficultyBlock = DifficultyBlock
Settings.QuestionsNumBlock = QuestionsNumBlock