import { ErrorMessages } from "@/constants/errorMessages";
import { updateStatus } from "@/services";

export async function POST(request: Request) {
  const { id, status } = await request.json();

  if (!id || !status) {
    return new Response("Missing id or status", { status: 400 });
  }

  try {
    const response = await updateStatus(parseInt(id), status);

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
