import { getInvoiceByID } from "@/services";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const id = searchParams.get("id");

  try {
    const res = await getInvoiceByID(parseInt(id || "0"));

    return Response.json(res);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
