-- CreateTable
CREATE TABLE "fullUrl" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "fullUrl_pkey" PRIMARY KEY ("id")
);
