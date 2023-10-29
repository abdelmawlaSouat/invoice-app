const { PrismaClient } = require("@prisma/client");
const {
  invoice1,
  invoice2,
  invoice3,
  invoice4,
  invoice5,
} = require("../constants/invoices.js");

const prisma = new PrismaClient();

async function createInvoice(invoice) {
  return prisma.invoice
    .create({
      data: invoice,
    })
    .then((data) => {
      console.log("The invoices was created successfully!", data);
    })
    .catch((err) => {
      console.log(err);
    });
}

createInvoice(invoice1);
createInvoice(invoice2);
createInvoice(invoice3);
createInvoice(invoice4);
createInvoice(invoice5);
