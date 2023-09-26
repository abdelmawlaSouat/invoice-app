import { Status } from "@/components/statusTag";

export interface InvoiceOverview {
  id: string;
  amount: number;
  dueDate: string;
  status: Status;
  customer: string;
}
