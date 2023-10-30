import { render, screen } from "@testing-library/react";
import { FilterByStatus } from "./FilterByStatus";
import userEvent from "@testing-library/user-event";

describe("FilterByStatus", () => {
  test("should display the statuses when the user clicks on the trigger button ", async () => {
    const user = userEvent.setup();

    render(
      <FilterByStatus
        activeFilters={{
          PAID: false,
          PENDING: false,
          DRAFT: false,
        }}
        onChange={() => {}}
      />
    );

    expect(
      screen.getByRole("button", { name: "Filter by status" })
    ).toBeInTheDocument();

    await user.click(screen.getByText("Filter by status"));

    expect(screen.getByRole("checkbox", { name: "Paid" })).toBeInTheDocument();
    expect(
      screen.getByRole("checkbox", { name: "Pending" })
    ).toBeInTheDocument();
    expect(screen.getByRole("checkbox", { name: "Draft" })).toBeInTheDocument();
  });

  test("should update the state of the checkbox to true", async () => {
    const user = userEvent.setup();

    const onChangeMock = jest.fn();

    render(
      <FilterByStatus
        activeFilters={{
          PAID: false,
          PENDING: true,
          DRAFT: false,
        }}
        onChange={onChangeMock}
      />
    );

    await user.click(screen.getByText("Filter by status"));

    expect(screen.getByRole("checkbox", { name: "Pending" })).toHaveAttribute(
      "aria-checked",
      "true"
    );

    await user.click(screen.getByRole("checkbox", { name: "Draft" }));

    expect(onChangeMock).toHaveBeenCalledWith("draft", true);
  });
});
