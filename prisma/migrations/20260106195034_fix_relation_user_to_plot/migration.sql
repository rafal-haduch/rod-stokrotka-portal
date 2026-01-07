/*
  Warnings:

  - The primary key for the `Announcement` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Announcement` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Payment` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Payment` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Plot` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `number` on the `Plot` table. All the data in the column will be lost.
  - The `id` column on the `Plot` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[plot_number]` on the table `Plot` will be added. If there are existing duplicate values, this will fail.
  - Changed the type of `plot_id` on the `Payment` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `plot_number` to the `Plot` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Payment" DROP CONSTRAINT "Payment_plot_id_fkey";

-- DropForeignKey
ALTER TABLE "Plot" DROP CONSTRAINT "Plot_owner_id_fkey";

-- AlterTable
ALTER TABLE "Announcement" DROP CONSTRAINT "Announcement_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Announcement_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Payment" DROP CONSTRAINT "Payment_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "plot_id",
ADD COLUMN     "plot_id" INTEGER NOT NULL,
ADD CONSTRAINT "Payment_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Plot" DROP CONSTRAINT "Plot_pkey",
DROP COLUMN "number",
ADD COLUMN     "plot_number" VARCHAR(10) NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ALTER COLUMN "area" DROP NOT NULL,
ALTER COLUMN "owner_id" DROP NOT NULL,
ADD CONSTRAINT "Plot_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "Plot_plot_number_key" ON "Plot"("plot_number");

-- AddForeignKey
ALTER TABLE "Plot" ADD CONSTRAINT "Plot_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_plot_id_fkey" FOREIGN KEY ("plot_id") REFERENCES "Plot"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
