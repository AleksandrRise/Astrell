import { beforeEach, describe, expect, it, vi } from "vitest"
import FileInputByDrag from "../FileInputByDrag.tsx"
import { fireEvent, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { MemoryRouter } from "react-router-dom"
import FileInputByClick from "../FileInputByClick.tsx"
import userEvent, { type UserEvent } from "@testing-library/user-event"

// Mock mp4 file
function makeMp4File(sizeInBytes: number, name = "video.mp4") {
    const content = new Uint8Array(sizeInBytes).fill(0)
    return new File([content], name, { type: "video/mp4"})
}

describe("File drop", () => {

    const setIsLoading = vi.fn()

    const { getByText } = render(
        <MemoryRouter>
            <FileInputByDrag isLoading={false} setIsLoading={setIsLoading} />
        </MemoryRouter>
    )
    const dropZone = getByText(/Drop a video/i).parentElement!


    it("Small file", async () => {
        const file = makeMp4File(1024 * 100, "small.mp4")
        const dataTransfer = { files: [file] }

        await fireEvent.drop(dropZone, {dataTransfer})

        expect(setIsLoading).toHaveBeenCalledWith(true)
    })

    it("Huge file", async () => {
        const file = makeMp4File(1024 * 1024 * 1024 * 1, "small.mp4")
        const dataTransfer = { files: [file] }

        await fireEvent.drop(dropZone, {dataTransfer})

        expect(setIsLoading).toHaveBeenCalledWith(true)
    })
})

describe("File click", () => {
    let setIsLoading: ReturnType<typeof vi.fn> 
    let user: UserEvent
    let fileInput: HTMLElement

    beforeEach(() => {
        setIsLoading = vi.fn()

        render(
            <MemoryRouter>
                <FileInputByClick isLoading={false} setIsLoading={setIsLoading} />
            </MemoryRouter>
        )

        user = userEvent.setup()
        fileInput = screen.getByTestId("file-input")
        expect(fileInput).toBeInTheDocument()
    })

    it("Small file", async () => {

        const file = makeMp4File(1024 * 100, "small.mp4")

        await user.upload(fileInput, [file])

        expect(setIsLoading).toHaveBeenCalledWith(false)
    })

    it("Huge file", () => {
        
    })    
})