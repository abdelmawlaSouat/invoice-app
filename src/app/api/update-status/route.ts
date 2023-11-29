import { updateStatus } from "@/services";

export async function POST(request: Request) {
  const { id, status } = await request.json();

  if (!id || !status) {
    return new Response("Missing id or status", { status: 400 });
  }

  try {
    const response = await updateStatus(parseInt(id), status);

    return Response.json(response);
  } catch (error) {
    return new Response(`${error}`, { status: 500 });
  }
}
