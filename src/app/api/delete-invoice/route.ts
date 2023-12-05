import { ErrorMessages } from "@/constants/errorMessages";
import { deleteInvoice } from "@/services";

export async function POST(request: Request) {
  const { id } = await request.json();

  if (!id) {
    return new Response("Missing id", { status: 400 });
  }

  try {
    const response = await deleteInvoice(parseInt(id));

    if (response.status === "KO") {
      throw new Error(response.error);
    }

    return Response.json(response);
  } catch (error) {
    return Response.json(
      { error: ErrorMessages.unknown_error },
      { status: ErrorMessages.unknown_error.status }
    );
  }
}
