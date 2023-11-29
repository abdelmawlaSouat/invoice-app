import { PrismaClient } from "@prisma/client";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const personType = searchParams.get("type");

  const value = searchParams.get("value");

  if (!personType || !value) {
    // Should not send an error message
    // because it can be null if the form is still not filled
    return Response.json({
      status: "OK",
      error: "Missing person type or value",
    });
  }

  try {
    const prisma = new PrismaClient();

    const data = await prisma[personType as "client"].findUnique({
      where: { email: value },
      include: {
        address: true,
      },
    });

    return Response.json({ status: "OK", data });
  } catch (error) {
    return Response.json({
      status: 500,
      error,
    });
  }
}
