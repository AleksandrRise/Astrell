export type QuestionsProps = {
    question: {
        question: string;
        answers: { answer: string, correct: boolean }[]
    }
    index: number;
}