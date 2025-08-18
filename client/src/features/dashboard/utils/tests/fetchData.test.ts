import { describe, it, expect, vi, type Mocked } from "vitest";
import { fetchData } from "../fetchData";
import axios from "axios"


vi.mock("axios")
const mockedAxios = axios as Mocked<typeof axios>

describe("fetchData", () => {

    const endpoint = "data"

    it("Mocking data fetch", async () => {
        mockedAxios.get.mockResolvedValueOnce({ data: { ok: true }})

        const setIsLoading = vi.fn()
        const setErrorText = vi.fn()

        await fetchData(setIsLoading, endpoint, setErrorText)

        expect(mockedAxios.get).toHaveBeenCalledWith(
            `/api/v1/${endpoint}`
        )

        expect(setIsLoading).toBeCalledTimes(2)
        expect(setIsLoading).toHaveBeenNthCalledWith(1, true)
        expect(setIsLoading).toHaveBeenNthCalledWith(2, false)
        expect(setErrorText).not.toHaveBeenCalled()

    })

})