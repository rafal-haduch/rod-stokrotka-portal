/*
  Warnings:

  - You are about to drop the column `deleted_by_id` on the `Announcement` table. All the data in the column will be lost.
  - You are about to drop the column `updated_by_id` on the `Announcement` table. All the data in the column will be lost.
  - You are about to drop the column `electricity_fee` on the `Payment` table. All the data in the column will be lost.
  - You are about to drop the column `membership_fee` on the `Payment` table. All the data in the column will be lost.
  - You are about to drop the column `paid` on the `Payment` table. All the data in the column will be lost.
  - You are about to drop the column `plot_area_fee` on the `Payment` table. All the data in the column will be lost.
  - You are about to drop the column `plot_id` on the `Payment` table. All the data in the column will be lost.
  - You are about to drop the column `total_amount` on the `Payment` table. All the data in the column will be lost.
  - You are about to drop the column `waste_fee` on the `Payment` table. All the data in the column will be lost.
  - You are about to drop the column `year` on the `Payment` table. All the data in the column will be lost.
  - You are about to drop the column `plot_number` on the `Plot` table. All the data in the column will be lost.
  - You are about to drop the column `firstLogin` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `lastLogin` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `UserPlot` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[fee_id]` on the table `Payment` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[number]` on the table `Plot` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `author_name` to the `Announcement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fee_id` to the `Payment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `method` to the `Payment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `received_by_user_id` to the `Payment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `received_by_user_name` to the `Payment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `number` to the `Plot` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "PaymentMethod" AS ENUM ('CASH', 'BANK_TRANSFER');

-- CreateEnum
CREATE TYPE "Action" AS ENUM ('CREATE', 'UPDATE', 'DELETE');

-- CreateEnum
CREATE TYPE "Entity" AS ENUM ('USER', 'PLOT', 'USER_PLOT', 'FEE', 'PAYMENT', 'ANNOUCEMENT');

-- DropForeignKey
ALTER TABLE "Announcement" DROP CONSTRAINT "Announcement_author_id_fkey";

-- DropForeignKey
ALTER TABLE "Announcement" DROP CONSTRAINT "Announcement_deleted_by_id_fkey";

-- DropForeignKey
ALTER TABLE "Announcement" DROP CONSTRAINT "Announcement_updated_by_id_fkey";

-- DropForeignKey
ALTER TABLE "Payment" DROP CONSTRAINT "Payment_plot_id_fkey";

-- DropForeignKey
ALTER TABLE "UserPlot" DROP CONSTRAINT "UserPlot_plotId_fkey";

-- DropForeignKey
ALTER TABLE "UserPlot" DROP CONSTRAINT "UserPlot_userId_fkey";

-- DropIndex
DROP INDEX "Plot_plot_number_key";

-- AlterTable
ALTER TABLE "Announcement" DROP COLUMN "deleted_by_id",
DROP COLUMN "updated_by_id",
ADD COLUMN     "author_name" TEXT NOT NULL,
ADD COLUMN     "deleted_by_user_id" INTEGER,
ALTER COLUMN "updated_at" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Payment" DROP COLUMN "electricity_fee",
DROP COLUMN "membership_fee",
DROP COLUMN "paid",
DROP COLUMN "plot_area_fee",
DROP COLUMN "plot_id",
DROP COLUMN "total_amount",
DROP COLUMN "waste_fee",
DROP COLUMN "year",
ADD COLUMN     "deleted_at" TIMESTAMP(3),
ADD COLUMN     "deleted_by_user_id" INTEGER,
ADD COLUMN     "fee_id" INTEGER NOT NULL,
ADD COLUMN     "method" "PaymentMethod" NOT NULL,
ADD COLUMN     "paid_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "received_by_user_id" INTEGER NOT NULL,
ADD COLUMN     "received_by_user_name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Plot" DROP COLUMN "plot_number",
ADD COLUMN     "co_owner_id" INTEGER,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "deleted_at" TIMESTAMP(3),
ADD COLUMN     "deleted_by_user_id" INTEGER,
ADD COLUMN     "number" VARCHAR(10) NOT NULL,
ADD COLUMN     "owner_id" INTEGER,
ADD COLUMN     "updated_at" TIMESTAMP(3),
ADD COLUMN     "userId" INTEGER;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "firstLogin",
DROP COLUMN "lastLogin",
ADD COLUMN     "deleted_at" TIMESTAMP(3),
ADD COLUMN     "deleted_by_user_id" INTEGER,
ADD COLUMN     "last_login" TIMESTAMP(3),
ALTER COLUMN "updated_at" DROP NOT NULL;

-- DropTable
DROP TABLE "UserPlot";

-- CreateTable
CREATE TABLE "UserCoOwnedPlot" (
    "user_id" INTEGER NOT NULL,
    "plot_id" INTEGER NOT NULL,

    CONSTRAINT "UserCoOwnedPlot_pkey" PRIMARY KEY ("user_id","plot_id")
);

-- CreateTable
CREATE TABLE "UserUsedPlot" (
    "user_id" INTEGER NOT NULL,
    "plot_id" INTEGER NOT NULL,

    CONSTRAINT "UserUsedPlot_pkey" PRIMARY KEY ("user_id","plot_id")
);

-- CreateTable
CREATE TABLE "Fee" (
    "id" SERIAL NOT NULL,
    "plot_id" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,
    "plot_area_fee" DECIMAL(10,2) NOT NULL,
    "waste_fee" DECIMAL(10,2) NOT NULL,
    "membership_fee" DECIMAL(10,2) NOT NULL,
    "electricity_fee" DECIMAL(10,2),
    "total_amount" DECIMAL(10,2) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "deleted_at" TIMESTAMP(3),
    "deleted_by_user_id" INTEGER,

    CONSTRAINT "Fee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AuditLog" (
    "id" SERIAL NOT NULL,
    "action" "Action" NOT NULL,
    "entity" "Entity" NOT NULL,
    "entity_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "user_name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "state_before" JSONB,
    "state_after" JSONB,

    CONSTRAINT "AuditLog_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Payment_fee_id_key" ON "Payment"("fee_id");

-- CreateIndex
CREATE UNIQUE INDEX "Plot_number_key" ON "Plot"("number");

-- AddForeignKey
ALTER TABLE "Plot" ADD CONSTRAINT "Plot_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserCoOwnedPlot" ADD CONSTRAINT "UserCoOwnedPlot_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserCoOwnedPlot" ADD CONSTRAINT "UserCoOwnedPlot_plot_id_fkey" FOREIGN KEY ("plot_id") REFERENCES "Plot"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserUsedPlot" ADD CONSTRAINT "UserUsedPlot_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserUsedPlot" ADD CONSTRAINT "UserUsedPlot_plot_id_fkey" FOREIGN KEY ("plot_id") REFERENCES "Plot"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Fee" ADD CONSTRAINT "Fee_plot_id_fkey" FOREIGN KEY ("plot_id") REFERENCES "Plot"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_fee_id_fkey" FOREIGN KEY ("fee_id") REFERENCES "Fee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
