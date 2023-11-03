import { render } from "@testing-library/react";
import {  StatusTag } from "./StatusTag";
import { InvoiceStatus } from "@/types";

describe("StatusTag", () => {
  test.each(["paid", "pending", "draft"])(
    "should display the right status ($s)",
    (status) => {
      render(<StatusTag status={status as InvoiceStatus} />);
    }
  );
});
