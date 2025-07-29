
type SummarizationProps = {
    summarization: string;
    setSumPage: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Summarization({ summarization, setSumPage }: SummarizationProps) {
    // Classes
    const wrapperClasses = "px-8 py-9.5 font-bold w-100 h-126.25 bg-white/8 rounded-4xl \
    shadow-[0_0_2px_0_rgba(0,149,255,0.75)_inset] backdrop-blur-[100px] overflow-auto \
    "
    const sectionClasses = "flex gap-5 items-center pb-6"
    const h1Classes = "text-2xl"
    const btnClasses = "w-5 h-5 bg-white rounded-4xl"
    const pClasses = "text-md text-[#D1F3FF]/80 hyphens-auto"

    return (
        <article className={wrapperClasses}>
            <section className={sectionClasses}>
                <h1 className={h1Classes}>Summarization</h1>
                <button className={btnClasses} onClick={() => setSumPage(false)}></button>
            </section>
            <p className={pClasses}>{summarization}</p>
        </article>
    )
}