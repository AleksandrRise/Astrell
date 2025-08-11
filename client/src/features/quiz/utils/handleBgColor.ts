export function handleBgColor(
    correctArr: Array<boolean | null>, 
    activeIndex: number
) {

    switch (correctArr[activeIndex]) {
        case false:
            return "wrongGradient-bg shadow-[0_0_16px_5px_rgba(255,53,51,0.25)]"
        case true:
            return "correctGradient-bg shadow-[0_0_16px_5px_rgba(42,157,143,0.25)]"
        default:
            return "logoGradient-bg-2 shadow-[0_0_16px_5px_rgba(28,154,214,0.25)]"
    }
}