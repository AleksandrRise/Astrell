import notebookSrc from "../../features/response/assets/notebook.png"

type CardProps = {
    text: string
}

export default function Card({ text }: CardProps) {
    const liClasses = ""
    const altImg = "Notebook Image"

    return (
        <li className={liClasses}>
            <img src={notebookSrc} alt={altImg} />
            <span>{text}</span>
        </li>
    )
}