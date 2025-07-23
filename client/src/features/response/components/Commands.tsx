import Card from "../../../shared/components/Card"

type CommandsProps = {
    children: React.ReactNode
}

export default function Commands({ children }: CommandsProps) {
    const ulClasses = "flex gap-18.5 mb-auto mx-auto mt-19"

    return (
        <ul className={ulClasses}>
            {children}
        </ul>
    )
}

Commands.Card = Card