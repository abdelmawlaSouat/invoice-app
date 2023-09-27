import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Checkbox } from "./Checkbox";

describe("Checkbox", () => {
  test("should display the checkbox input & the label", () => {
    render(
      <Checkbox
        id="checkbox-1"
        label="Checkbox 1"
        onChange={() => {}}
        checked={false}
      />
    );

    expect(
      screen.getByRole("checkbox", { name: "Checkbox 1" })
    ).toBeInTheDocument();

    expect(screen.getByText("Checkbox 1")).toBeInTheDocument();
  });

  test("should call the event handler when the checked state of the checkbox changes", async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();

    render(
      <Checkbox
        id="checkbox-1"
        label="Checkbox 1"
        onChange={onChange}
        checked={false}
      />
    );

    await user.click(screen.getByRole("checkbox", { name: "Checkbox 1" }));

    expect(onChange).toHaveBeenCalled();
  });
});
