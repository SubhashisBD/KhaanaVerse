import Contact from "../Contact";
import { screen,render } from "@testing-library/react";
import "@testing-library/jest-dom";

test("Should Load Contact Us Component",() => {
    render(<Contact/>);

    // In render method what will be render can be access through screen
    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
})