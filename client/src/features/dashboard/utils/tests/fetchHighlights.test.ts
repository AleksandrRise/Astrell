import { describe, expect, it, vi, beforeEach } from "vitest";

import { fetchHighlights } from "../fetchHighlights";
import { fetchDashboardText } from "../dashboardApi";

vi.mock("../dashboardApi", () => ({
    fetchDashboardText: vi.fn(),
}));

const fetchDashboardTextMock = vi.mocked(fetchDashboardText);

describe("fetchHighlights", () => {
    beforeEach(() => {
        localStorage.clear();
        vi.clearAllMocks();
    });

    it("stores and sets highlights text", async () => {
        const setHighlights = vi.fn();
        const setErrorText = vi.fn();

        fetchDashboardTextMock.mockResolvedValueOnce("some highlights");

        await fetchHighlights(setHighlights, setErrorText);

        expect(fetchDashboardTextMock).toHaveBeenCalledWith("gethighlight");
        expect(localStorage.getItem("highlights")).toBe("some highlights");
        expect(setHighlights).toHaveBeenCalledWith("some highlights");
        expect(setErrorText).not.toHaveBeenCalled();
    });

    it("sets error text when request fails", async () => {
        const setHighlights = vi.fn();
        const setErrorText = vi.fn();

        fetchDashboardTextMock.mockRejectedValueOnce(new Error("Network error"));

        await fetchHighlights(setHighlights, setErrorText);

        expect(setHighlights).not.toHaveBeenCalled();
        expect(setErrorText).toHaveBeenCalledWith("Network error");
    });
});