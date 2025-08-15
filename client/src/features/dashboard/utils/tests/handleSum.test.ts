import { describe, it, expect, vi, type Mocked } from "vitest";
import axios from "axios"
import { handleSum } from "../handleSum";

vi.mock("axios")
const mockedAxios = axios as Mocked<typeof axios>

describe("handleSum", () => {

    const setSummarization = vi.fn()
    const setErrorText = vi.fn()

    const ADDRESS = "http://127.0.0.5"

    it("request handle test", async () => {
        mockedAxios.get.mockResolvedValueOnce({ data: "some sum"})

        try {
            await handleSum(ADDRESS, setSummarization, setErrorText)

            expect(localStorage.getItem("summarization")).to.equal("some sum")
            expect(setSummarization).toBeCalledTimes(1)
        } catch (error: any) {
            expect(error).toBeInstanceOf(Error)
            expect(setErrorText).toBeCalledTimes(1)
        }

    })
})