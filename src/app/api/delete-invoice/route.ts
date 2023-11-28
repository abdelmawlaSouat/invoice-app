import { deleteInvoice } from "@/services";

export async function POST(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return new Response("Missing id", { status: 400 });
  }

  try {
    const response = await deleteInvoice(parseInt(id));

    return Response.json(response);
  } catch (error) {
    return new Response(`${error}`, { status: 500 });
  }
}
