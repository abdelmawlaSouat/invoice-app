import { render, screen } from "@testing-library/react";
import { EmptyListMessage } from "./EmptyListMessage";

describe("EmptyListMessage", () => {
  test("should display all the elements (image, title & description)", () => {
    render(<EmptyListMessage />);

    expect(
      screen.getByRole("img", { name: "illustration" })
    ).toBeInTheDocument();

    expect(screen.getByText("There is nothing here")).toBeInTheDocument();

    expect(
      screen.getByText(/Create an invoice by clicking/i)
    ).toBeInTheDocument();
  });
});
