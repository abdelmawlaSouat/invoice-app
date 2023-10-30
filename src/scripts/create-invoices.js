const { PrismaClient } = require("@prisma/client");
const data = require("../constants/invoices.ts");

const prisma = new PrismaClient();

async function createCompanywithItsInvoices() {
  return prisma.company
    .create({
      data,
    })
    .then((data) => {
      console.log("The company was created successfully!", data);
    })
    .catch((err) => {
      console.log(err);
    });
}

createCompanywithItsInvoices();
