import { updateStatus } from "@/services";
import { InvoiceStatus } from "@/types";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const newStatus = searchParams.get("status");

  if (!id || !newStatus) {
    return new Response("Missing id or status", { status: 400 });
  }

  const updatedInvoice = await updateStatus(parseInt(id), newStatus as InvoiceStatus);

  return Response.json(updatedInvoice);
}