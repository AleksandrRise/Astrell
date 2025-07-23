import Card from "../../../shared/components/Card"

type CommandsProps = {
    children: React.ReactNode
}

export default function Commands({ children }: CommandsProps) {
    return (
        <ul>
            {children}
        </ul>
    )
}

Commands.Card = Card