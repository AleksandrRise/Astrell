import Circle from "./Circle";

type CirclesProps = {
    children: React.ReactNode;
}

export default function Circles({ children }: CirclesProps) {

    // Classes
    const circlesClasses = "grid grid-cols-3 gap-6"

    return (
        <div className={circlesClasses}>
            {children}
        </div>
    )
}

Circles.Circle = Circle