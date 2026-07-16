-- CreateEnum
CREATE TYPE "EducationLevel" AS ENUM ('BACHELOR', 'MASTER');

-- CreateTable
CREATE TABLE "education" (
    "id" SERIAL NOT NULL,
    "year" INTEGER NOT NULL,
    "level" "EducationLevel" NOT NULL,
    "degreeTitle" TEXT NOT NULL,
    "institution" TEXT NOT NULL,
    "location" TEXT,
    "startYear" INTEGER NOT NULL,
    "endYear" INTEGER NOT NULL,
    "yearRangeLabel" TEXT NOT NULL,
    "description" TEXT,
    "certificateUrl" TEXT,
    "portfolioUrl" TEXT,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "education_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "education_highlights" (
    "id" SERIAL NOT NULL,
    "educationId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "education_highlights_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "certifications" (
    "id" SERIAL NOT NULL,
    "year" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "issuer" TEXT,
    "certificateUrl" TEXT,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "certifications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "work" (
    "id" SERIAL NOT NULL,
    "year" INTEGER NOT NULL,
    "isInternship" BOOLEAN NOT NULL DEFAULT false,
    "position" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "location" TEXT,
    "durationLabel" TEXT NOT NULL,
    "description" TEXT,
    "certificateUrl" TEXT,
    "jdUrl" TEXT,
    "portfolioUrl" TEXT,
    "imageUrl" TEXT,
    "skillsDeveloped" TEXT,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "work_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "work_responsibilities" (
    "id" SERIAL NOT NULL,
    "workId" INTEGER NOT NULL,
    "text" TEXT NOT NULL,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "work_responsibilities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "projects" (
    "id" SERIAL NOT NULL,
    "year" INTEGER NOT NULL,
    "groupTitle" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "icon" TEXT DEFAULT '🌐',
    "status" TEXT,
    "link1Label" TEXT,
    "link1Url" TEXT,
    "link2Label" TEXT,
    "link2Url" TEXT,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "projects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "skills" (
    "id" SERIAL NOT NULL,
    "year" INTEGER NOT NULL,
    "groupTitle" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "items" TEXT NOT NULL,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "skills_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "education_highlights" ADD CONSTRAINT "education_highlights_educationId_fkey" FOREIGN KEY ("educationId") REFERENCES "education"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "work_responsibilities" ADD CONSTRAINT "work_responsibilities_workId_fkey" FOREIGN KEY ("workId") REFERENCES "work"("id") ON DELETE CASCADE ON UPDATE CASCADE;
