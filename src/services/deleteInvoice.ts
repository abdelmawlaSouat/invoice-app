import { PrismaClient } from "@prisma/client";

export const deleteInvoice = async (id: number) => {
  try {
    const prisma = new PrismaClient();

    await prisma.invoice.delete({
      where: {
        id,
      },
    });
  } catch (error) {
    console.log(error);
  } finally {
    return { status: "ok" };
  }
};
