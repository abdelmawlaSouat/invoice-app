import { render, screen } from "@testing-library/react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import userEvent from "@testing-library/user-event";

describe("ThemeSwitcher", () => {
  test("should update the theme when the user clicks on the button", async () => {
    const user = userEvent.setup();

    render(<ThemeSwitcher />);

    const button = screen.getByRole("button", {
      name: "theme-switcher-light-mode",
    });

    expect(button).toBeInTheDocument();

    await user.click(button);

    expect(
      screen.getByRole("button", { name: "theme-switcher-dark-mode" })
    ).toBeInTheDocument();
  });
});
