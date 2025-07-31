import React from "react"
import Feature from "./Feature"

type OtherProps = {
    children: React.ReactNode;
}

export default function Other({ children }: OtherProps) {
    const wrapperClasses = "mt-auto"

    return (
        <section className={wrapperClasses}>
            {children}
        </section>
    )
}

Other.Feature = Feature