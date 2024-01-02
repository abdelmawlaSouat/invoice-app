import { getInvoices } from "@/services";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  try {
    const res = await getInvoices();

    return Response.json(res);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
