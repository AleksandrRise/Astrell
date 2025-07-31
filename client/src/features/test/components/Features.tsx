import React from "react"
import Feature from "./Feature"

type FeaturesProps = {
    children: React.ReactNode;
}

export default function Features({ children }: FeaturesProps) {

    // Classes
    const wrapperClasses = "mt-9.5"
    const h2Classes = ""

    return (
        <section className={wrapperClasses}>
            <h2 className={h2Classes}>Features</h2>
            {children}
        </section>
    )
}

Features.Feature = Feature