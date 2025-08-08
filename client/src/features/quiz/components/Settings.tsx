import DifficultyBlock from "./DifficultyBlock";
import QuestionsNumBlock from "./QuestionsNumBlock";
import TimeBlock from "./TimeBlock";

type SettingsProps = {
    children: React.ReactNode;
}

export default function Settings({ children }: SettingsProps) {
    return (
        <div>
            {children}
        </div>
    )
}

Settings.TimeBlock = TimeBlock
Settings.DifficultyBlock = DifficultyBlock
Settings.QuestionsNumBlock = QuestionsNumBlock