/*
  Warnings:

  - Made the column `name` on table `Client` required. This step will fail if there are existing NULL values in that column.
  - Made the column `name` on table `Company` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX "Client_email_key";

-- DropIndex
DROP INDEX "Company_email_key";

-- AlterTable
ALTER TABLE "Client" ALTER COLUMN "name" SET NOT NULL;

-- AlterTable
ALTER TABLE "Company" ALTER COLUMN "name" SET NOT NULL;
