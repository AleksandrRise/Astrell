import type { ButtonType } from "../utils/ButtonType"

type InsightsBtnProps = {
    btn: ButtonType;
    index: number;
    setChoiceClicked: React.Dispatch<React.SetStateAction<number>>;
}   

export default function InsightsBtn({ btn, index, setChoiceClicked }: InsightsBtnProps) {
    const btnClasses = "flex gap-2.5 items-center cursor-pointer"
    const iconClasses = "size-7.5"
    const btnTextClasses = "text-xl font-bold font-lato"

    const handleClick = (index: number): void => {
        setChoiceClicked(index)
    }

    return (
        <button className={btnClasses + (btn.isActive ? " opacity-90" : " opacity-50")}
            key={index} onClick={() => handleClick(index)}
        >
            <img className={iconClasses} src={btn.icon} alt={btn.alt}/>
            <span className={btnTextClasses}>{btn.name}</span>
        </button>
    )
}