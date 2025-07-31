import React from "react"
import Feature from "./Feature"

type FeaturesProps = {
    children: React.ReactNode;
}

export default function Features({ children }: FeaturesProps) {
    
    // Classes
    const wrapperClasses = "mt-9.5"

    return (
        <section className={wrapperClasses}>
            {children}
        </section>
    )
}

Features.Feature = Feature