import { useEffect, useState } from "react"

type CircleProps = {
    index: number;
    activeIndex: number;
    setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
    ansChoice: number | null;
}

export default function Circle({ index, activeIndex, setActiveIndex, ansChoice }: CircleProps) {

    const [ isActive, setIsActive ] = useState<boolean>(index === activeIndex)

    useEffect(() => {
        index === activeIndex ? setIsActive(true) : setIsActive(false)
    }, [activeIndex])

    const circleClasses = `rounded-full size-5 cursor-pointer transition duration-500 \
        ${isActive 
            ? `${ansChoice === null ? "bg-white" : "bg-[#FFCC00]"} \ 
                scale-200 shadow-[0_0_5px_2px_rgba(255,255,255,0.5)]` 
            : `${ansChoice === null ? "bg-white/80" : "bg-[#FFCC00]/80"} \
                scale-100 shadow-[0_0_10px_2px_rgba(255,255,255,0.2)]`
        }`

    return (
        <button className={circleClasses} onClick={() => setActiveIndex(index)}></button>
    )
}