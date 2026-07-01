import { describe, expect, it, vi, beforeEach } from "vitest";

import { fetchSummary } from "../fetchSummary";
import { fetchDashboardText } from "../dashboardApi";

vi.mock("../dashboardApi", () => ({
    fetchDashboardText: vi.fn(),
}));

const fetchDashboardTextMock = vi.mocked(fetchDashboardText);

describe("fetchSummary", () => {
    beforeEach(() => {
        localStorage.clear();
        vi.clearAllMocks();
    });

    it("stores and sets summary text", async () => {
        const setSummary = vi.fn();
        const setErrorText = vi.fn();

        fetchDashboardTextMock.mockResolvedValueOnce("some summary");

        await fetchSummary(setSummary, setErrorText);

        expect(fetchDashboardTextMock).toHaveBeenCalledWith("summarize");
        expect(localStorage.getItem("summarization")).toBe("some summary");
        expect(setSummary).toHaveBeenCalledWith("some summary");
        expect(setErrorText).not.toHaveBeenCalled();
    });

    it("sets error text when request fails", async () => {
        const setSummary = vi.fn();
        const setErrorText = vi.fn();

        fetchDashboardTextMock.mockRejectedValueOnce(new Error("Network error"));

        await fetchSummary(setSummary, setErrorText);

        expect(setSummary).not.toHaveBeenCalled();
        expect(setErrorText).toHaveBeenCalledWith("Network error");
    });
});