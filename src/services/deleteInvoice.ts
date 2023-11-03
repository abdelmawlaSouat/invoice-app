import { PrismaClient } from "@prisma/client";

export const deleteInvoice = async (id: number) => {
    try {
        const prisma = new PrismaClient();

        await prisma.invoice.update({
            where: {
                id,
            },
            data: {
                status: "DELETED",
            },
            include: {
                products: true,
                company: {
                    include: {
                        address: true,
                    },
                },
                client: {
                    include: {
                        address: true,
                    },
                },
            },
        });
    } catch (error) {
        console.error(error);
    } finally {
        return { status: "ok" };
    }
};
