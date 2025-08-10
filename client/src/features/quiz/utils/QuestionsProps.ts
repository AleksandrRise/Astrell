export type QuestionsProps = {
    question: {
        question: string;
        answers: { answer: string, correct: boolean }[]
    }
    setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
    index: number;
}