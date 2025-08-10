

type ChoiceProps = {
    index: number;
    questionNum: number;
    ans: {answer: string, correct: boolean};
    choice: number | null;
    setChoice: React.Dispatch<React.SetStateAction<number | null>>;
}

export default function Choice({ index, questionNum, ans, choice, setChoice }: ChoiceProps) {

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
                onClick={() => setChoice(index)}
                checked={choice === index}  
            />
            <label 
                className={`${ansTextClasses} ${choice === index && chosenClasses}`} 
                htmlFor={`ans-${questionNum}-${index}`}>
                    {ans.answer}
            </label>
        </div>          
    )
}