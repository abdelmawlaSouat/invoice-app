import { render, screen } from "@testing-library/react";
import { Card } from "./Card";

describe("Card", () => {
  test("should render the card with the content", () => {
    render(<Card>Content</Card>);

    expect(screen.getByText("Content")).toBeInTheDocument();
  });
});
