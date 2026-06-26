import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi, beforeEach } from "vitest";
import "@testing-library/jest-dom/vitest";

import DashboardSidebar from "../DashboardSidebar";

const navigateMock = vi.fn();

vi.mock("react-router-dom", async (importOriginal) => {
    const actual = await importOriginal<typeof import("react-router-dom")>();

    return {
        ...actual,
        useNavigate: () => navigateMock,
    };
});

describe("DashboardSidebar", () => {
    beforeEach(() => {
        navigateMock.mockClear();
    });

    it("renders sidebar items", () => {
        render(<DashboardSidebar />);

        expect(screen.getByText("Dashboard")).toBeInTheDocument();
        expect(screen.getByText("New Lecture")).toBeInTheDocument();
        expect(screen.getByText("Settings (n/a)")).toBeInTheDocument();
        expect(screen.getByText("Support (n/a)")).toBeInTheDocument();
        expect(screen.getByText("Guest")).toBeInTheDocument();
    });

    it("updates search input", async () => {
        const user = userEvent.setup();

        render(<DashboardSidebar />);

        const input = screen.getByRole("textbox");

        await user.type(input, "dashboard");

        expect(input).toHaveValue("dashboard");
    });

    it("navigates to upload page when New Lecture is clicked", async () => {
        const user = userEvent.setup();

        render(<DashboardSidebar />);

        await user.click(screen.getByRole("button", { name: /new lecture/i }));

        expect(navigateMock).toHaveBeenCalledWith("/");
    });
});