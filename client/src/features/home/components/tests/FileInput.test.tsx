import { beforeAll, describe, expect, it, vi } from "vitest"
import FileInputByDrag from "../FileInputByDrag.tsx"
import { fireEvent, render, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { MemoryRouter, type Params } from "react-router-dom"

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

    const setIsLoading = vi.fn()
    render(
        <MemoryRouter>
            <FileInputByDrag isLoading={false} setIsLoading={setIsLoading} />
        </MemoryRouter>
    )
    const fileInput = document.getElementById("fileInputByClick")!

    it("Small file", async () => {
        const file = makeMp4File(1024 * 100, "small.mp4")
        await userEvent.upload(fileInput, file)

        expect(setIsLoading).toHaveBeenCalledWith(true)
    })

    it("Huge file", () => {
        
    })    
})