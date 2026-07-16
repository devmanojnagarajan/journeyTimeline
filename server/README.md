# Portfolio data layer

Prisma + PostgreSQL models for Education, Certifications, Work, Projects, and Skills.
No API server yet — this is just the schema + seed data, wired up to a REST API later.

## Models (`prisma/schema.prisma`)

- **Education** — degree entries (Bachelor's, Master's), each with 3 `EducationHighlight` bullets
- **Certification** — standalone certs (BIM Automation, AutoCAD Professional, etc.)
- **Work** — jobs and internships, each with a list of `WorkResponsibility` bullets
- **Project** — individual project cards, grouped by `groupTitle` (e.g. "MAA Design Portfolio")
- **Skill** — skill-category chips shown alongside a project group

## Setup

1. Create a free Postgres database at [neon.tech](https://neon.tech) (no credit card needed).
2. In your Neon project, go to **Connect** and copy the connection string (choose the "Prisma" tab if offered).
3. Copy `.env.example` to `.env` and paste the connection string in as `DATABASE_URL`.
4. Install dependencies and create the tables:
   ```
   npm install
   npm run db:migrate
   ```
5. Load the real portfolio content into the database:
   ```
   npm run db:seed
   ```
6. Browse the data with Prisma's GUI:
   ```
   npm run db:studio
   ```

## Next steps

Once this is confirmed working, the plan is to build an Express API on top
(`/api/education`, `/api/work`, `/api/projects`, etc.) and point the existing
static frontend at it — then eventually migrate the API layer to Spring Boot
against this same Postgres database.
