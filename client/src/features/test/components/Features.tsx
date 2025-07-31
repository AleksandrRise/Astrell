import React from "react"
import Feature from "./Feature"

type FeaturesProps = {
    children: React.ReactNode;
}

export default function Features({ children }: FeaturesProps) {

    // Classes
    const wrapperClasses = "mt-9.5"
    const h2Classes = "tracking-wide text-white/60 text-base font-bold font-lato mb-7.5 ml-2"
    const ulClasses = "flex flex-col gap-4 text-base font-semibold font-lato"

    return (
        <section className={wrapperClasses}>
            <h2 className={h2Classes}>Features</h2>
            
            <nav>
                <ul className={ulClasses}>
                    {children}
                </ul>
            </nav>
        </section>
    )
}

Features.Feature = Feature