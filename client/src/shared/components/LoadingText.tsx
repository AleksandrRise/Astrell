export default function LoadingText() {
    const blocksClasses = "h-2 bg-white/30 mb-5 animate-pulse rounded-3xl"
    const block1 = "w-full"
    const block2 = "w-1/2"
    const block3 = "w-3/4"
    const repsNum: number = 3

    return (
        [...Array(repsNum).keys()].map(key => 
            <>
                <div key={key} className={`${blocksClasses} ${block1}`}></div>
                <div key={key} className={`${blocksClasses} ${block2}`}></div>
                <div key={key} className={`${blocksClasses} ${block3}`}></div>           
            </>
        )       
    )
}