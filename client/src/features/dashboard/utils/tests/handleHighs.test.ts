import { describe, it, expect, vi, type Mocked } from "vitest";
import axios from "axios"
import { handleHighs } from "../handleHighs";

vi.mock("axios")
const mockedAxios = axios as Mocked<typeof axios>

describe("handleHighs", () => {

    const setHighlights = vi.fn()
    const setErrorText = vi.fn()

    const ADDRESS = "http://127.0.0.5"

    it("request handle test", async () => {
        mockedAxios.get.mockResolvedValueOnce({ data: "some highlights"})

        try {
            await handleHighs(ADDRESS, setHighlights, setErrorText)

            expect(localStorage.getItem("highlights")).to.equal("some highlights")
            expect(setHighlights).toBeCalledTimes(1)
        } catch (error: any) {
            expect(error).toBeInstanceOf(Error)
            expect(setErrorText).toBeCalledTimes(1)
        }

    })
})