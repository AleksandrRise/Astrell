import React from "react"
import Feature from "./Feature"

type FeaturesProps = {
    children: React.ReactNode;
}

export default function Features({ children }: FeaturesProps) {

    // Classes
    const wrapperClasses = ""
    const ulClasses = "flex flex-col gap-4 text-base font-semibold font-lato"

    return (
        <section className={wrapperClasses}>            
            <nav>
                <ul className={ulClasses}>
                    {children}
                </ul>
            </nav>
        </section>
    )
}

Features.Feature = Feature