import { render, screen } from "@testing-library/react";
import { InvoiceOverviewCard } from "./InvoiceOverviewCard";
import { InvoiceOverview } from "@/types/InvoiceOverview";

describe("InvoiceOverviewCard", () => {
  test("should display all the data", () => {
    render(
      <InvoiceOverviewCard
        invoice={
          {
            id: "1FFFED",
            clientName: "John Doe",
            paymentDue: "2021-09-01",
            total: 100,
            status: "paid",
          } as InvoiceOverview
        }
      />
    );

    expect(screen.getByText("1FFFED")).toBeInTheDocument();
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("Due 1 Sept 2021")).toBeInTheDocument();
    expect(screen.getByText("€100.00")).toBeInTheDocument();
    expect(screen.getByText("paid")).toBeInTheDocument();
  });
});
