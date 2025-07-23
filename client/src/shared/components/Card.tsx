import notebookSrc from "../../features/response/assets/notebook.png"

type CardProps = {
    text: string
}

export default function Card({ text }: CardProps) {
    const liClasses = "w-45 h-50 border rounded-3xl hover:scale-105 transition"
    const btnClasses = "flex justify-start items-center flex-col w-full h-full cursor-pointer \
    pt-8 text-[#D1F3FF]/90 text-center"
    const imgClasses = "w-20 h-20"
    const spanClasses = "font-semibold pt-1.25 text-xl"
    const altImg = "Notebook Image"

    return (
        <li className={liClasses}>
            <button className={btnClasses}>
                <img className={imgClasses} src={notebookSrc} alt={altImg} />
                <span className={spanClasses}>{text}</span>
            </button>
        </li>
    )
}