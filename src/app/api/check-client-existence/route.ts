import { PrismaClient } from "@prisma/client";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const propertyName = searchParams.get("propertyName");
  const value = searchParams.get("value");

  if (!propertyName || !value) {
    // Should not send an error message
    // because it can be null if the form is still not filled
    return Response.json({
      status: "OK",
      error: "Missing property name or value",
    });
  }

  try {
    const prisma = new PrismaClient();

    const client = await prisma.client.findUnique({
      where: { [propertyName]: value } as { id: string },
      include: {
        address: true,
      },
    });

    return Response.json({ status: "OK", data: client });
  } catch (error) {
    return Response.json({
      status: 500,
      error,
    });
  }
}
