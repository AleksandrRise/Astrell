import { render, screen } from "@testing-library/react"
import Aside from "../Aside"
import { describe, it, expect, vi, beforeEach } from "vitest"
import userEvent from "@testing-library/user-event" 
import "@testing-library/jest-dom/vitest"

vi.mock("react-router-dom", async (orig) => {
    const actual: any = await orig()
    return {
        ...actual,
        useNavigate: () => vi.fn(),
    }
})

describe("Aside", () => {

    beforeEach(() => render(<Aside />))

    it("renders without crashing", () => {
        expect(screen.getByText(/Dashboard/i)).toBeInTheDocument()
    })

    it("updates input", async () => {
        const user = userEvent.setup()
        const input = screen.getByRole('textbox')

        await user.type(input, "dashboard")
        expect(input).toHaveValue("dashboard")

        await userEvent.clear(input)

        await user.type(input, "boa")
        expect(input).toHaveValue('boa')
    })

})