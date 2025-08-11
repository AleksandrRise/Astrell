export function submitQuestion(
    question: {
        question: string;
        answers: { answer: string, correct: boolean }[]
    }, 
    ansChoiceArr: Array<number | null>, 
    index: number,
    setCorrectArr: React.Dispatch<React.SetStateAction<Array<boolean | null>>>,
) {
        if (ansChoiceArr[index] !== null) {
            setCorrectArr(prev => {
                const next: Array<boolean | null> = [...prev]

                if (question.answers[ansChoiceArr[index]!].correct) {
                    next[index] = true
                } else {
                    next[index] = false
                }

                return next               
            })
        }
}