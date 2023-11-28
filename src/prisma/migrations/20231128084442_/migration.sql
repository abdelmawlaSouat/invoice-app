/*
  Warnings:

  - A unique constraint covering the columns `[email,name,addressId]` on the table `Client` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email,name,addressId]` on the table `Company` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Client_addressId_key";

-- DropIndex
DROP INDEX "Client_email_name_key";

-- DropIndex
DROP INDEX "Company_addressId_key";

-- DropIndex
DROP INDEX "Company_email_name_key";

-- CreateIndex
CREATE UNIQUE INDEX "Client_email_name_addressId_key" ON "Client"("email", "name", "addressId");

-- CreateIndex
CREATE UNIQUE INDEX "Company_email_name_addressId_key" ON "Company"("email", "name", "addressId");
