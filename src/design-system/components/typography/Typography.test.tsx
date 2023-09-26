import { render, screen } from "@testing-library/react";
import { Typography } from "./Typography";

describe("Typography", () => {
  test.each`
    variant   | tag
    ${"h1"}   | ${"h1"}
    ${"h2"}   | ${"p"}
    ${"h3"}   | ${"p"}
    ${"body"} | ${"h1"}
    ${"h2"}   | ${"div"}
  `("should render $tag with $variant variant", ({ tag, variant }) => {
    render(
      <Typography tag={tag} variant={variant}>
        Custom Text
      </Typography>
    );
    const classes = screen.getByText("Custom Text").classList;

    expect(classes.contains(variant)).toBeTruthy();
  });
});
