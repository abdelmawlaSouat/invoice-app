/*
  Warnings:

  - A unique constraint covering the columns `[street,city,postCode,country]` on the table `Address` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email,name]` on the table `Client` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email,name]` on the table `Company` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Address_street_city_postCode_country_key" ON "Address"("street", "city", "postCode", "country");

-- CreateIndex
CREATE UNIQUE INDEX "Client_email_name_key" ON "Client"("email", "name");

-- CreateIndex
CREATE UNIQUE INDEX "Company_email_name_key" ON "Company"("email", "name");
