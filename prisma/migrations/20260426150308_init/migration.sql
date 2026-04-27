/*
  Warnings:

  - You are about to drop the column `deleted_by_user_id` on the `announcements` table. All the data in the column will be lost.
  - You are about to drop the column `deleted_by_user_id` on the `fees` table. All the data in the column will be lost.
  - You are about to drop the column `deleted_by_user_id` on the `payments` table. All the data in the column will be lost.
  - You are about to drop the column `deleted_by_user_id` on the `plots` table. All the data in the column will be lost.
  - You are about to drop the column `owner_id` on the `plots` table. All the data in the column will be lost.
  - The primary key for the `user_plots` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `deleted_by_user_id` on the `users` table. All the data in the column will be lost.
  - The `role` column on the `users` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[user_id,plot_id]` on the table `user_plots` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('ADMIN', 'PRESIDENT', 'DEPUTY_PRESIDENT', 'SECRETARY', 'TREASURER', 'BOARD_MEMBER', 'ALLOTMENT_GARDENER');

-- AlterEnum
ALTER TYPE "PlotRole" ADD VALUE 'OWNER';

-- DropForeignKey
ALTER TABLE "plots" DROP CONSTRAINT "plots_owner_id_fkey";

-- DropIndex
DROP INDEX "plots_owner_id_idx";

-- AlterTable
ALTER TABLE "announcements" DROP COLUMN "deleted_by_user_id";

-- AlterTable
ALTER TABLE "fees" DROP COLUMN "deleted_by_user_id";

-- AlterTable
ALTER TABLE "payments" DROP COLUMN "deleted_by_user_id";

-- AlterTable
ALTER TABLE "plots" DROP COLUMN "deleted_by_user_id",
DROP COLUMN "owner_id";

-- AlterTable
ALTER TABLE "user_plots" DROP CONSTRAINT "user_plots_pkey",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "user_plots_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "users" DROP COLUMN "deleted_by_user_id",
DROP COLUMN "role",
ADD COLUMN     "role" "UserRole" NOT NULL DEFAULT 'ALLOTMENT_GARDENER';

-- DropEnum
DROP TYPE "Role";

-- CreateIndex
CREATE UNIQUE INDEX "user_plots_user_id_plot_id_key" ON "user_plots"("user_id", "plot_id");
