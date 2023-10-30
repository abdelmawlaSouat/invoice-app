import { render, screen } from "@testing-library/react";
import { InvoiceOverviewCard } from "./InvoiceOverviewCard";
import { Invoice } from "@/types";

describe("InvoiceOverviewCard", () => {
  test("should display all the data", () => {
    render(
      <InvoiceOverviewCard
        invoice={
          {
            id: "1FFFED",
            client: {
              name: "John Doe",
            },
            paymentDue: "2021-09-01",
            total: 100,
            status: "PAID",
          } as any
        }
      />
    );

    expect(screen.getByText("1FFFED")).toBeInTheDocument();
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("Due 1 Sept 2021")).toBeInTheDocument();
    expect(screen.getByText("€100.00")).toBeInTheDocument();
    expect(screen.getByText("PAID")).toBeInTheDocument();
  });
});
