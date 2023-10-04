import { render } from "@testing-library/react";
import { Status, StatusTag } from "./StatusTag";

describe("StatusTag", () => {
  test.each(["paid", "pending", "draft"])(
    "should display the right status ($s)",
    (status) => {
      render(<StatusTag status={status as Status} />);
    }
  );
});
