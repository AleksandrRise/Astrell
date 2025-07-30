import React from "react"
import Feature from "./Feature"

type OtherProps = {
    children: React.ReactNode;
}

export default function Other({ children }: OtherProps) {
    return (
        <section>
            {children}
        </section>
    )
}

Other.Feature = Feature