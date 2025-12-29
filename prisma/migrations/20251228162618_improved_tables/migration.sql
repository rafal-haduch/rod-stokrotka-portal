/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Announcement` table. All the data in the column will be lost.
  - You are about to drop the column `postCreatorId` on the `Announcement` table. All the data in the column will be lost.
  - You are about to drop the column `amount` on the `Payment` table. All the data in the column will be lost.
  - You are about to drop the column `plotId` on the `Payment` table. All the data in the column will be lost.
  - You are about to drop the column `ownerId` on the `Plot` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `User` table. All the data in the column will be lost.
  - Added the required column `author_id` to the `Announcement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Announcement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `membership_fee` to the `Payment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `plot_area_fee` to the `Payment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `plot_id` to the `Payment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total_amount` to the `Payment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `waste_fee` to the `Payment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `owner_id` to the `Plot` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Announcement" DROP CONSTRAINT "Announcement_postCreatorId_fkey";

-- DropForeignKey
ALTER TABLE "Payment" DROP CONSTRAINT "Payment_plotId_fkey";

-- DropForeignKey
ALTER TABLE "Plot" DROP CONSTRAINT "Plot_ownerId_fkey";

-- AlterTable
ALTER TABLE "Announcement" DROP COLUMN "createdAt",
DROP COLUMN "postCreatorId",
ADD COLUMN     "author_id" TEXT NOT NULL,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "deleted_at" TIMESTAMP(3),
ADD COLUMN     "deleted_by_id" TEXT,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updated_by_id" TEXT;

-- AlterTable
ALTER TABLE "Payment" DROP COLUMN "amount",
DROP COLUMN "plotId",
ADD COLUMN     "electricity_fee" DOUBLE PRECISION,
ADD COLUMN     "membership_fee" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "plot_area_fee" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "plot_id" TEXT NOT NULL,
ADD COLUMN     "total_amount" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "waste_fee" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "Plot" DROP COLUMN "ownerId",
ADD COLUMN     "owner_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "createdAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AddForeignKey
ALTER TABLE "Plot" ADD CONSTRAINT "Plot_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_plot_id_fkey" FOREIGN KEY ("plot_id") REFERENCES "Plot"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Announcement" ADD CONSTRAINT "Announcement_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Announcement" ADD CONSTRAINT "Announcement_updated_by_id_fkey" FOREIGN KEY ("updated_by_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Announcement" ADD CONSTRAINT "Announcement_deleted_by_id_fkey" FOREIGN KEY ("deleted_by_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
