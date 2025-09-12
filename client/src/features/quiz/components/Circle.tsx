import { useEffect, useState } from "react"
import { handleCircleColor } from "../utils/handleCircleColor"

type CircleProps = {
    index: number;
    activeIndex: number;
    setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
    ansChoice: number | null;
    correctArr: Array<boolean | null>;
}

// Returns a circle button that indicates a reference to a certain quiz question
export default function Circle({ index, activeIndex, setActiveIndex, ansChoice, correctArr }: CircleProps) {

    const [ isActive, setIsActive ] = useState<boolean>(index === activeIndex)

    useEffect(() => {
        index === activeIndex ? setIsActive(true) : setIsActive(false)
    }, [activeIndex])

    return (
        <button className={handleCircleColor(isActive, ansChoice, correctArr, index)} onClick={() => setActiveIndex(index)}></button>
    )
}