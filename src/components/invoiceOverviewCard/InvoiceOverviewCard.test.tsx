import { render, screen } from "@testing-library/react";
import { InvoiceOverviewCard } from "./InvoiceOverviewCard";

describe("InvoiceOverviewCard", () => {
  test("should display all the data", () => {
    render(
      <InvoiceOverviewCard
        invoice={{
          id: "1FFFED",
          customer: "John Doe",
          dueDate: "2021-09-01",
          amount: 100,
          status: "paid",
        }}
      />
    );

    expect(screen.getByText("1FFFED")).toBeInTheDocument();
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("Due 1 September 2021")).toBeInTheDocument();
    expect(screen.getByText("€100.00")).toBeInTheDocument();
    expect(screen.getByText("paid")).toBeInTheDocument();
  });
});
