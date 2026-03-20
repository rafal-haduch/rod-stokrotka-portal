/*
  Warnings:

  - You are about to drop the `Announcement` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `AuditLog` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Fee` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Payment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Plot` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PlotCoOwner` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PlotUser` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "PlotRole" AS ENUM ('CO_OWNER', 'USER');

-- DropForeignKey
ALTER TABLE "Fee" DROP CONSTRAINT "Fee_plot_id_fkey";

-- DropForeignKey
ALTER TABLE "Payment" DROP CONSTRAINT "Payment_fee_id_fkey";

-- DropForeignKey
ALTER TABLE "Plot" DROP CONSTRAINT "Plot_owner_id_fkey";

-- DropForeignKey
ALTER TABLE "PlotCoOwner" DROP CONSTRAINT "PlotCoOwner_plot_id_fkey";

-- DropForeignKey
ALTER TABLE "PlotCoOwner" DROP CONSTRAINT "PlotCoOwner_user_id_fkey";

-- DropForeignKey
ALTER TABLE "PlotUser" DROP CONSTRAINT "PlotUser_plot_id_fkey";

-- DropForeignKey
ALTER TABLE "PlotUser" DROP CONSTRAINT "PlotUser_user_id_fkey";

-- DropTable
DROP TABLE "Announcement";

-- DropTable
DROP TABLE "AuditLog";

-- DropTable
DROP TABLE "Fee";

-- DropTable
DROP TABLE "Payment";

-- DropTable
DROP TABLE "Plot";

-- DropTable
DROP TABLE "PlotCoOwner";

-- DropTable
DROP TABLE "PlotUser";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'ALLOTMENT_GARDENER',
    "login" TEXT NOT NULL,
    "password_hash" TEXT NOT NULL,
    "last_login" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "deleted_at" TIMESTAMP(3),
    "deleted_by_user_id" INTEGER,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "plots" (
    "id" SERIAL NOT NULL,
    "number" VARCHAR(10) NOT NULL,
    "area" DECIMAL(6,2),
    "owner_id" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),
    "deleted_by_user_id" INTEGER,

    CONSTRAINT "plots_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_plots" (
    "user_id" INTEGER NOT NULL,
    "plot_id" INTEGER NOT NULL,
    "role" "PlotRole" NOT NULL,

    CONSTRAINT "user_plots_pkey" PRIMARY KEY ("user_id","plot_id")
);

-- CreateTable
CREATE TABLE "fees" (
    "id" SERIAL NOT NULL,
    "plot_id" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,
    "paid" BOOLEAN NOT NULL DEFAULT false,
    "plot_area_fee" DECIMAL(10,2) NOT NULL,
    "waste_fee" DECIMAL(10,2) NOT NULL,
    "membership_fee" DECIMAL(10,2) NOT NULL,
    "electricity_fee" DECIMAL(10,2),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),
    "deleted_by_user_id" INTEGER,

    CONSTRAINT "fees_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "payments" (
    "id" SERIAL NOT NULL,
    "fee_id" INTEGER NOT NULL,
    "paid_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "method" "PaymentMethod" NOT NULL,
    "received_by_user_id" INTEGER NOT NULL,
    "received_by_user_name" TEXT NOT NULL,
    "deleted_at" TIMESTAMP(3),
    "deleted_by_user_id" INTEGER,

    CONSTRAINT "payments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "announcements" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "author_id" INTEGER NOT NULL,
    "author_name" TEXT NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),
    "deleted_by_user_id" INTEGER,

    CONSTRAINT "announcements_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "audit_logs" (
    "id" SERIAL NOT NULL,
    "action" "Action" NOT NULL,
    "entity" "Entity" NOT NULL,
    "entity_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "user_name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "state_before" JSONB,
    "state_after" JSONB,

    CONSTRAINT "audit_logs_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_login_key" ON "users"("login");

-- CreateIndex
CREATE UNIQUE INDEX "plots_number_key" ON "plots"("number");

-- CreateIndex
CREATE INDEX "plots_owner_id_idx" ON "plots"("owner_id");

-- CreateIndex
CREATE INDEX "user_plots_plot_id_idx" ON "user_plots"("plot_id");

-- CreateIndex
CREATE INDEX "fees_plot_id_idx" ON "fees"("plot_id");

-- CreateIndex
CREATE INDEX "fees_year_idx" ON "fees"("year");

-- CreateIndex
CREATE UNIQUE INDEX "fees_plot_id_year_key" ON "fees"("plot_id", "year");

-- CreateIndex
CREATE UNIQUE INDEX "payments_fee_id_key" ON "payments"("fee_id");

-- CreateIndex
CREATE INDEX "payments_received_by_user_id_idx" ON "payments"("received_by_user_id");

-- CreateIndex
CREATE INDEX "announcements_author_id_idx" ON "announcements"("author_id");

-- CreateIndex
CREATE INDEX "announcements_created_at_idx" ON "announcements"("created_at");

-- CreateIndex
CREATE INDEX "audit_logs_user_id_idx" ON "audit_logs"("user_id");

-- CreateIndex
CREATE INDEX "audit_logs_entity_entity_id_idx" ON "audit_logs"("entity", "entity_id");

-- CreateIndex
CREATE INDEX "audit_logs_created_at_idx" ON "audit_logs"("created_at");

-- AddForeignKey
ALTER TABLE "plots" ADD CONSTRAINT "plots_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_plots" ADD CONSTRAINT "user_plots_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_plots" ADD CONSTRAINT "user_plots_plot_id_fkey" FOREIGN KEY ("plot_id") REFERENCES "plots"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fees" ADD CONSTRAINT "fees_plot_id_fkey" FOREIGN KEY ("plot_id") REFERENCES "plots"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payments" ADD CONSTRAINT "payments_fee_id_fkey" FOREIGN KEY ("fee_id") REFERENCES "fees"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
