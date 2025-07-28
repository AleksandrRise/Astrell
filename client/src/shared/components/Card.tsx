import notebookSrc from "../../features/response/assets/notebook.png"
import axios from "axios"
import { useEffect, useState } from "react"

type CardProps = {
    text: string
}

export default function Card({ text }: CardProps) {

    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        if (!loading) return

        const handleClick = async () => {
            switch(text.toLowerCase()) {
                case "summarize":
                    await axios.get('http://127.0.0.1:5000/api/v1/summarize')
                        .then(res => console.log(res.data))
                        .catch(error => console.error(error))
                        .finally(() => setLoading(false))
                    break;
            }
        }

        handleClick()
    }, [loading])

    // Classes
    const liClasses = "w-45 h-50 border rounded-3xl hover:scale-105 transition"
    const btnClasses = "flex justify-start items-center flex-col w-full h-full cursor-pointer \
    pt-8 text-[#D1F3FF]/90 text-center"
    const imgClasses = "w-20 h-20"
    const spanClasses = "font-semibold pt-1.25 text-xl"
    const altImg = "Notebook Image"

    return (
        <li className={liClasses}>
            <button className={btnClasses} onClick={() => setLoading(true)} disabled={loading}>
                <img className={imgClasses} src={notebookSrc} alt={altImg} />
                <span className={spanClasses}>{text}</span>
            </button>
        </li>
    )
}