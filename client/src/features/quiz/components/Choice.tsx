

type ChoiceProps = {
    index: number;
    questionNum: number;
    ans: {answer: string, correct: boolean};
    ansChoiceArr: Array<number | null>;
    setAnsChoice: React.Dispatch<React.SetStateAction<Array<number | null>>>;
}

export default function Choice({ index, questionNum, ans, ansChoiceArr, setAnsChoice }: ChoiceProps) {

    const updatedArray = (prev: Array<number | null>): Array<number | null> => {
        const next = [...prev]
        next[questionNum] = index
        return next
    }

    // Attributes
    const selectionType = "radio"

    // Classes
    const answerClasses = "relative text-xl text-white/50 \
        pb-2.75 answerLine cursor-pointer"
    const ansRadioClasses = ""
    const ansTextClasses = "pl-5"
    const chosenClasses = "text-white font-bold"

    return (
        <div className={answerClasses}>
            <input 
                className={ansRadioClasses} 
                type={selectionType} 
                id={`ans-${questionNum}-${index}`}
                onClick={() => setAnsChoice(prev => updatedArray(prev))}
                checked={ansChoiceArr[questionNum] === index}  
            />
            <label 
                className={`${ansTextClasses} ${ansChoiceArr[questionNum] === index && chosenClasses}`} 
                htmlFor={`ans-${questionNum}-${index}`}>
                    {ans.answer}
            </label>
        </div>          
    )
}