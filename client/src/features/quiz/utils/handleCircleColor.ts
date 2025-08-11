export function handleCircleColor(
    isActive: boolean,
    ansChoice: number | null,
    correctArr: Array<boolean | null>,
    index: number
) {
    const baseClasses = "rounded-full size-5 cursor-pointer transition duration-500"

    const whiteShadow = "shadow-[0_0_5px_2px_rgba(255,255,255,0.5)]"
    const yellowShadow = "shadow-[0_0_5px_2px_rgba(255,204,0,0.5)]"
    const greenShadow = "shadow-[0_0_5px_2px_rgba(42,157,143,0.5)]"
    const redShadow = "shadow-[0_0_5px_2px_rgba(255,53,51,0.5)]"

    if (isActive) {
        const activeClasses = "scale-200"

        if (ansChoice === null) { 
            return `bg-white ${whiteShadow} ${activeClasses} ${baseClasses}`
        } else if (correctArr[index] !== null) {
            return `${correctArr[index] 
                ? `bg-success ${greenShadow}` 
                : `bg-error ${redShadow}`} 
                ${activeClasses} ${baseClasses}`
        } else {
            return `bg-[#FFCC00] ${yellowShadow} ${activeClasses} ${baseClasses}`
        }
    } else {
        const nonActiveClasses = "scale-100 shadow-[0_0_10px_2px_rgba(255,255,255,0.2)]"

        if (ansChoice === null) {
            return `bg-white/80 ${whiteShadow} ${nonActiveClasses} ${baseClasses}`
        } 
        else if (correctArr[index] !== null) {
            return `${correctArr[index] 
                ? `bg-success ${greenShadow}` 
                : `bg-error ${redShadow}`} 
                ${nonActiveClasses} ${baseClasses}`
        }
        else {
            return `bg-[#FFCC00]/80 ${yellowShadow} ${nonActiveClasses} ${baseClasses}`
        }
    }
}