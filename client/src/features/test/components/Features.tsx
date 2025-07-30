import React from "react"
import Feature from "./Feature"

type FeaturesProps = {
    children: React.ReactNode;
}

export default function Features({ children }: FeaturesProps) {
    return (
        <section>
            {children}
        </section>
    )
}

Features.Feature = Feature