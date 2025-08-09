type StartBtnProps = {
    setHasStarted: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function StartBtn({ setHasStarted }: StartBtnProps) {

    // Classes
    const btnClasses = "mt-9.25 w-full py-3 bg-white/20 font-lato text-base \
        rounded-xl font-semibold tracking-wider cursor-pointer hover:bg-white/30 \
        transition active:scale-98"

    return (
        <button className={btnClasses} onClick={() => setHasStarted(true)}>Start!</button>
    )
}