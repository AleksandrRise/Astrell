import { describe, expect, it, vi } from "vitest"
import FileInputByDrag from "../FileInputByDrag.tsx"
import { fireEvent, render, waitFor } from "@testing-library/react"

// Mock mp4 file
function makeMp4File(sizeInBytes: number, name = "video.mp4") {
    const content = new Uint8Array(sizeInBytes).fill(0)
    return new File([content], name, { type: "video/mp4"})
}

describe("File drop", () => {

    const setIsLoading = vi.fn()

    const { getByText } = render(
        <FileInputByDrag isLoading={false} setIsLoading={setIsLoading} />
    )
    const dropZone = getByText(/Drop a video/i).parentElement!


    it("Small file", async () => {
        const file = makeMp4File(1024 * 100, "small.mp4")
        const dataTransfer = { files: [file] }

        fireEvent.drop(dropZone, {dataTransfer})

        await waitFor(() => {
            expect(setIsLoading).toHaveBeenCalledWith(true)
        })
    })

    it("Huge file", async () => {
        const file = makeMp4File(1024 * 1024 * 1024 * 1, "small.mp4")
        const dataTransfer = { files: [file] }

        fireEvent.drop(dropZone, {dataTransfer})

        await waitFor(() => {
            expect(setIsLoading).toHaveBeenCalledWith(true)
        })       
    })
})

describe("File click", () => {
    it("Small file", () => {

    })

    it("Huge file", () => {
        
    })    
})