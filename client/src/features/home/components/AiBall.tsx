import type { ReactNode, Dispatch, SetStateAction } from "react";

import imgSrc from "/assets/aithinkingball.png"
import FileInput from "./FileInput";
import Text from "./Text"

type AiBallType = {
    children: ReactNode; 
    setIsLoading: Dispatch<SetStateAction<boolean>>;
}

export default function AiBall({ children, setIsLoading }: AiBallType) {

    // Classes
    const imgAlt = "AI Ball"
    const figClasses = "zoomIn"
    const imgClasses = "aiball-animation"
    const sectionClasses = "m-auto"

    return (
        <section className={sectionClasses}>
            <FileInput setIsLoading={setIsLoading} />

            <figure className={figClasses}>
                <img
                    className={imgClasses}
                    width={450}
                    height={450}
                    src={imgSrc}
                    alt={imgAlt}
                    aria-hidden="true"
                    decoding="async"
                />
            </figure>

            {children}
        </section>
    )
}

AiBall.Text = Text