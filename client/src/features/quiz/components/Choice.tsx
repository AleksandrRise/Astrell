

type ChoiceProps = {
    key: number;
    index: number;
    ans: {answer: string, correct: boolean};
    choice: number | null;
    setChoice: React.Dispatch<React.SetStateAction<number | null>>;
}

export default function Choice({ key, index, ans, choice, setChoice }: ChoiceProps) {

    // Attributes
    const selectionType = "radio"

    // Classes
    const answerClasses = "relative text-xl text-white/50 \
        pb-2.75 answerLine cursor-pointer"
    const ansRadioClasses = ""
    const ansTextClasses = "pl-5"
    const chosenClasses = "text-white font-bold"
    

    return (
        <div key={key} className={answerClasses}>
            <input 
                className={ansRadioClasses} 
                type={selectionType} 
                id={`ans-${index}-${key}`}
                onClick={() => setChoice(key)}
                checked={choice === key}  
            />
            <label 
                className={`${ansTextClasses} ${choice === key && chosenClasses}`} 
                htmlFor={`ans-${index}-${key}`}>
                    {ans.answer}
            </label>
        </div>          
    )
}