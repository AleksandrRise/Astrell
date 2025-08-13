export type QuestionsType = {
    questions: {
        question: string;
        answers: {
            answer: string;
            correct: boolean;
        }[]
    }[]
    correctArr: Array<boolean | null>;
    setCorrectArr: React.Dispatch<React.SetStateAction<Array<boolean | null>>>;  
}