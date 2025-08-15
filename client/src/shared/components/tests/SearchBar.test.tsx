import { describe, it, expect, vi } from "vitest";
import SearchBar from "../SearchBar";
import { render, screen } from "@testing-library/react";
import type { FeaturesProps } from "../../../features/dashboard/utils/FeaturesProps";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom';

describe("SearchBar", () => {

    it("text shows up test", async () => {
        const features: FeaturesProps[] = []
        const setSearchRes = vi.fn()
        const user = userEvent.setup()

        render(<SearchBar features={features} setSearchRes={setSearchRes} />)

        const input = await screen.getByRole('textbox')

        await user.click(input)
        expect(input).toHaveFocus()

        await user.type(input, "foo")
        expect(input).toHaveValue("foo")
        expect(setSearchRes).toBeCalledTimes(3)
    })
    
})