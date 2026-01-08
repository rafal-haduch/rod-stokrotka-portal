/*
  Warnings:

  - You are about to drop the column `owner_id` on the `Plot` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Plot" DROP CONSTRAINT "Plot_owner_id_fkey";

-- AlterTable
ALTER TABLE "Plot" DROP COLUMN "owner_id";

-- CreateTable
CREATE TABLE "UserPlot" (
    "userId" INTEGER NOT NULL,
    "plotId" INTEGER NOT NULL,

    CONSTRAINT "UserPlot_pkey" PRIMARY KEY ("userId","plotId")
);

-- AddForeignKey
ALTER TABLE "UserPlot" ADD CONSTRAINT "UserPlot_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserPlot" ADD CONSTRAINT "UserPlot_plotId_fkey" FOREIGN KEY ("plotId") REFERENCES "Plot"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
