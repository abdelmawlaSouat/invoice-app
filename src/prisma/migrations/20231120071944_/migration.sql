/*
  Warnings:

  - Added the required column `paymentTerms` to the `Invoice` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Address" ALTER COLUMN "street" DROP NOT NULL,
ALTER COLUMN "city" DROP NOT NULL,
ALTER COLUMN "postCode" DROP NOT NULL,
ALTER COLUMN "country" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Client" ALTER COLUMN "name" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Company" ALTER COLUMN "name" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Invoice" ADD COLUMN     "paymentTerms" INTEGER NOT NULL,
ALTER COLUMN "description" DROP NOT NULL;
