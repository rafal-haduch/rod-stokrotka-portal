/*
  Warnings:

  - The values [ANNOUCEMENT] on the enum `Entity` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `total_amount` on the `Fee` table. All the data in the column will be lost.
  - You are about to drop the column `co_owner_id` on the `Plot` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Plot` table. All the data in the column will be lost.
  - You are about to alter the column `area` on the `Plot` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(6,2)`.
  - You are about to drop the column `password` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `UserCoOwnedPlot` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserUsedPlot` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[plot_id,year]` on the table `Fee` will be added. If there are existing duplicate values, this will fail.
  - Made the column `updated_at` on table `Announcement` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updated_at` on table `Fee` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updated_at` on table `Plot` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `password_hash` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Entity_new" AS ENUM ('USER', 'PLOT', 'USER_PLOT', 'FEE', 'PAYMENT', 'ANNOUNCEMENT');
ALTER TABLE "AuditLog" ALTER COLUMN "entity" TYPE "Entity_new" USING ("entity"::text::"Entity_new");
ALTER TYPE "Entity" RENAME TO "Entity_old";
ALTER TYPE "Entity_new" RENAME TO "Entity";
DROP TYPE "public"."Entity_old";
COMMIT;

-- DropForeignKey
ALTER TABLE "UserCoOwnedPlot" DROP CONSTRAINT "UserCoOwnedPlot_plot_id_fkey";

-- DropForeignKey
ALTER TABLE "UserCoOwnedPlot" DROP CONSTRAINT "UserCoOwnedPlot_user_id_fkey";

-- DropForeignKey
ALTER TABLE "UserUsedPlot" DROP CONSTRAINT "UserUsedPlot_plot_id_fkey";

-- DropForeignKey
ALTER TABLE "UserUsedPlot" DROP CONSTRAINT "UserUsedPlot_user_id_fkey";

-- AlterTable
ALTER TABLE "Announcement" ALTER COLUMN "updated_at" SET NOT NULL;

-- AlterTable
ALTER TABLE "Fee" DROP COLUMN "total_amount",
ADD COLUMN     "paid" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "updated_at" SET NOT NULL;

-- AlterTable
ALTER TABLE "Plot" DROP COLUMN "co_owner_id",
DROP COLUMN "userId",
ALTER COLUMN "area" SET DATA TYPE DECIMAL(6,2),
ALTER COLUMN "updated_at" SET NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "password",
ADD COLUMN     "password_hash" TEXT NOT NULL;

-- DropTable
DROP TABLE "UserCoOwnedPlot";

-- DropTable
DROP TABLE "UserUsedPlot";

-- CreateTable
CREATE TABLE "PlotCoOwner" (
    "user_id" INTEGER NOT NULL,
    "plot_id" INTEGER NOT NULL,

    CONSTRAINT "PlotCoOwner_pkey" PRIMARY KEY ("user_id","plot_id")
);

-- CreateTable
CREATE TABLE "PlotUser" (
    "user_id" INTEGER NOT NULL,
    "plot_id" INTEGER NOT NULL,

    CONSTRAINT "PlotUser_pkey" PRIMARY KEY ("user_id","plot_id")
);

-- CreateIndex
CREATE INDEX "PlotCoOwner_plot_id_idx" ON "PlotCoOwner"("plot_id");

-- CreateIndex
CREATE INDEX "PlotUser_plot_id_idx" ON "PlotUser"("plot_id");

-- CreateIndex
CREATE INDEX "Announcement_author_id_idx" ON "Announcement"("author_id");

-- CreateIndex
CREATE INDEX "AuditLog_user_id_idx" ON "AuditLog"("user_id");

-- CreateIndex
CREATE INDEX "AuditLog_entity_entity_id_idx" ON "AuditLog"("entity", "entity_id");

-- CreateIndex
CREATE INDEX "AuditLog_created_at_idx" ON "AuditLog"("created_at");

-- CreateIndex
CREATE INDEX "Fee_plot_id_idx" ON "Fee"("plot_id");

-- CreateIndex
CREATE INDEX "Fee_year_idx" ON "Fee"("year");

-- CreateIndex
CREATE INDEX "Fee_plot_id_year_idx" ON "Fee"("plot_id", "year");

-- CreateIndex
CREATE UNIQUE INDEX "Fee_plot_id_year_key" ON "Fee"("plot_id", "year");

-- CreateIndex
CREATE INDEX "Payment_fee_id_idx" ON "Payment"("fee_id");

-- CreateIndex
CREATE INDEX "Payment_received_by_user_id_idx" ON "Payment"("received_by_user_id");

-- CreateIndex
CREATE INDEX "Plot_owner_id_idx" ON "Plot"("owner_id");

-- AddForeignKey
ALTER TABLE "PlotCoOwner" ADD CONSTRAINT "PlotCoOwner_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlotCoOwner" ADD CONSTRAINT "PlotCoOwner_plot_id_fkey" FOREIGN KEY ("plot_id") REFERENCES "Plot"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlotUser" ADD CONSTRAINT "PlotUser_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlotUser" ADD CONSTRAINT "PlotUser_plot_id_fkey" FOREIGN KEY ("plot_id") REFERENCES "Plot"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
