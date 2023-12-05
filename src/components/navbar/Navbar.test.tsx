import { render, screen } from "@testing-library/react";
import { Navbar } from "./Navbar";

describe("Navbar", () => {
  test("should render the navbar with the logo, theme switcher and the user icon", async () => {
    render(<Navbar />);

    expect(screen.getByRole("navigation")).toBeInTheDocument();

    expect(screen.getByRole("img", { name: "user" })).toBeInTheDocument();
  });
});
