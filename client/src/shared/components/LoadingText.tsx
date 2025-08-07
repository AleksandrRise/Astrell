export default function LoadingText() {
    const blocksClasses = "h-2 bg-white/30 mb-5 animate-pulse rounded-3xl"
    const width: Array<string> = ["w-full", "w-1/2", "w-3/4"]
    const blocksWidth: Array<string> = [...width, ...width, ...width]

    return (
        blocksWidth.map((block, key) => 
            <div key={key} className={`${blocksClasses} ${block}`}></div>         
        )
    )
}