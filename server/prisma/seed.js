// Populates the database with the real content currently hardcoded in index.html,
// so there's real data to query as soon as the API layer is wired up.
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  await prisma.educationHighlight.deleteMany();
  await prisma.education.deleteMany();
  await prisma.certification.deleteMany();
  await prisma.workResponsibility.deleteMany();
  await prisma.work.deleteMany();
  await prisma.project.deleteMany();
  await prisma.skill.deleteMany();

  await prisma.education.create({
    data: {
      year: 2026,
      level: "MASTER",
      degreeTitle: "Master's Degree in Computer Science",
      institution: "Woolf University, Scalar India",
      startYear: 2024,
      endYear: 2026,
      yearRangeLabel: "2024 - 2026",
      certificateUrl: "masters-cs",
      sortOrder: 1,
      highlights: {
        create: [
          {
            title: "Full Stack Development",
            description: "Building scalable web applications with modern technologies",
            sortOrder: 1,
          },
          {
            title: "Data Engineering",
            description: "Designing and deploying AI/ML apps",
            sortOrder: 2,
          },
          {
            title: "DSA | System Design | LLD | HLD",
            description: "Clean Code, Microservices",
            sortOrder: 3,
          },
        ],
      },
    },
  });

  await prisma.education.create({
    data: {
      year: 2024,
      level: "MASTER",
      degreeTitle: "Masters in Advanced Architecture",
      institution: "Universitat Politècnica de Catalunya, Iaac",
      startYear: 2022,
      endYear: 2024,
      yearRangeLabel: "2022 - 2024",
      certificateUrl: "masters-arch",
      portfolioUrl: "https://issuu.com/manojmunch/docs/design_pf_issue_r",
      sortOrder: 2,
      highlights: {
        create: [
          {
            title: "Computational Design",
            description: "Advanced parametric modeling and generative algorithms",
            sortOrder: 1,
          },
          {
            title: "Digital Fabrication",
            description: "3D printing, CNC machining, and robotic construction",
            sortOrder: 2,
          },
          {
            title: "Image Generation",
            description: "Diffusion Models and Architectural visualization",
            sortOrder: 3,
          },
        ],
      },
    },
  });

  await prisma.education.create({
    data: {
      year: 2019,
      level: "BACHELOR",
      degreeTitle: "Bachelor in Architecture",
      institution: "Anna University",
      startYear: 2014,
      endYear: 2019,
      yearRangeLabel: "2014 - 2019",
      certificateUrl: "bachelor-arch",
      portfolioUrl: "bachelor-portfolio",
      sortOrder: 3,
      highlights: {
        create: [
          {
            title: "Academic Excellence",
            description: "Strong foundation in design principles and architectural theory",
            sortOrder: 1,
          },
          {
            title: "Design Innovation",
            description: "Competition projects and creative Design approaches",
            sortOrder: 2,
          },
          {
            title: "Technical Skills",
            description: "CAD, 3D modeling, and architectural visualization",
            sortOrder: 3,
          },
        ],
      },
    },
  });

  await prisma.certification.createMany({
    data: [
      {
        year: 2023,
        title: "BIM Automation",
        description: "Developing advanced scripts for bim workflows using dynamo python",
        certificateUrl: "cert1-2023",
        sortOrder: 1,
      },
      {
        year: 2023,
        title: "Global Summer School",
        description: "Applied AI/ML in computational design for Architecture",
        certificateUrl: "cert2-2023",
        sortOrder: 2,
      },
      {
        year: 2023,
        title: "BIM Professional Certification",
        description: "Professional BIM Practice certification and best practices",
        certificateUrl: "cert3-2023",
        sortOrder: 3,
      },
      {
        year: 2023,
        title: "UPDA",
        description: "Registered Architect - UPDA",
        certificateUrl: "cert4-2023",
        sortOrder: 4,
      },
      {
        year: 2020,
        title: "Project Management",
        description: "Arch-Viz Certification | UK",
        certificateUrl: "cert1-2020",
        sortOrder: 1,
      },
      {
        year: 2020,
        title: "AutoCAD Professional",
        description: "Advanced 2D drafting and technical documentation",
        certificateUrl: "cert2-2020",
        sortOrder: 2,
      },
      {
        year: 2020,
        title: "CIP BIM Submit 2020",
        description: "Global BIM Professional Submit",
        certificateUrl: "cert3-2020",
        sortOrder: 3,
      },
    ],
  });

  await prisma.work.create({
    data: {
      year: 2022,
      isInternship: false,
      position: "Project Coordinator/Architect",
      company: "Qatar Design Consortium",
      location: "Doha",
      durationLabel: "2020 - 2022 (3 Years)",
      certificateUrl: "work-2022",
      jdUrl: "work-2022",
      portfolioUrl: "https://issuu.com/manojmunch/docs/_ar_manoj_nagarajan_pf_1_",
      imageUrl: "assets/coverPhotos/qdcpf.png",
      sortOrder: 1,
      responsibilities: {
        create: [
          "Project architect for the assigned projects and responsible for coordinating with other disciplines",
          "Coordination with sub consultants",
          "Creating and maintaining design scripts within design team",
          "Responsible for 3D visualization to create realistic material lighting and quality control",
          "Responsible for understanding the design requirements, devising and proposing a feasible solution",
          "Perform IDE check as a Quality representative in an ISO certified organization",
          "Develop engineering design deliverables and projecting project scope",
          "Responsible for preparing presentation for client and internal team meetings",
          "Create & maintain project documentation including issue trackers, delivery trackers & resource utilization",
          "Created custom Grasshopper tools for façade optimization, reducing material waste by 15%",
          "Streamlined multidisciplinary coordination using Rhino.Inside for Revit interoperability",
          "Trained teams/Presented parametric workflows within internal teams, cutting design iteration time by 20%",
        ].map((text, i) => ({ text, sortOrder: i + 1 })),
      },
    },
  });

  await prisma.work.create({
    data: {
      year: 2018,
      isInternship: true,
      position: "Intern-Architect",
      company: "Sri Sai Sankalp Architects",
      location: "Bangalore",
      durationLabel: "Summer 2018 (4 months)",
      certificateUrl: "intern-2018",
      skillsDeveloped: "AutoCAD, Technical Drawing, Project Documentation, Client Communication",
      sortOrder: 2,
      responsibilities: {
        create: [
          "Assisted in architectural design development and documentation",
          "Prepared technical drawings and construction details",
          "Supported project coordination and client presentation materials",
          "Gained experience in building codes and construction processes",
        ].map((text, i) => ({ text, sortOrder: i + 1 })),
      },
    },
  });

  await prisma.work.create({
    data: {
      year: 2017,
      isInternship: true,
      position: "Intern-Architect",
      company: "Auctors India, Pvt.Ltd",
      location: "Ahmedabad",
      durationLabel: "Winter 2017 (4 months)",
      certificateUrl: "intern-2017",
      skillsDeveloped: "AutoCAD, Technical Drawing, Project Documentation, Client Communication",
      sortOrder: 3,
      responsibilities: {
        create: [
          "Assisted in architectural design development and documentation",
          "Prepared technical drawings and construction details",
          "Supported project coordination and client presentation materials",
          "Gained experience in building codes and construction processes",
          "Site Visits and measure Drawings",
        ].map((text, i) => ({ text, sortOrder: i + 1 })),
      },
    },
  });

  await prisma.project.createMany({
    data: [
      // 2026 - FullStack - Portfolio
      {
        year: 2026,
        groupTitle: "FullStack - Portfolio",
        title: "Full stack Weather Prediction App",
        description: "Weather prediction application - in Progress",
        sortOrder: 1,
      },
      {
        year: 2026,
        groupTitle: "FullStack - Portfolio",
        title: "AI Chat Bot",
        description: "Machine learning powered chatbot using Python",
        sortOrder: 2,
      },
      {
        year: 2026,
        groupTitle: "FullStack - Portfolio",
        title: "Data Pipeline",
        description: "ETL pipeline for real-time data processing",
        sortOrder: 3,
      },
      // 2025 - Current Projects
      {
        year: 2025,
        groupTitle: "Current Projects",
        title: "Presentation App",
        description: "Google collab inspired presentation application with realtime 3d integration",
        link1Label: "Demo",
        link2Label: "GitHub",
        sortOrder: 1,
      },
      {
        year: 2025,
        groupTitle: "Current Projects",
        title: "View-Algo",
        description: "View and manipulate Grasshopper based data in Cloud environment",
        link1Label: "Live",
        link2Label: "Code",
        sortOrder: 2,
      },
      {
        year: 2025,
        groupTitle: "Current Projects",
        title: "Data Viz Tool",
        description: "Interactive dashboard for comprehensive data analysis",
        link1Label: "App",
        link2Label: "Repo",
        sortOrder: 3,
      },
      // 2024 - MAA Design Portfolio
      {
        year: 2024,
        groupTitle: "MAA Design Portfolio",
        title: "Fibernetics",
        description: "Bridging Kinetic Architecture with Cybernetics for Adaptive Spatial Configurations",
        sortOrder: 1,
      },
      {
        year: 2024,
        groupTitle: "MAA Design Portfolio",
        title: "Travel Through",
        description:
          "Developing a evolutionary algorithm (Wallacei) to define a shortest path that adapts the shape with environmental data (LB) and physics solver (KG2) such that the design is in harmony with the nature",
        sortOrder: 2,
      },
      {
        year: 2024,
        groupTitle: "MAA Design Portfolio",
        title: "From Computation to Composition",
        description:
          "Use of digital computational to design and understand the design principles Gaudi practiced in many of his famed architectural marvels and how we can design spaces that is inspired by such principles.",
        sortOrder: 3,
      },
      // 2019 - Architectural Design Works
      {
        year: 2019,
        groupTitle: "Architectural Design Works",
        title: "Griha-Office Complex",
        description: "Sustainable complex design - Circular Design",
        sortOrder: 1,
      },
      {
        year: 2019,
        groupTitle: "Architectural Design Works",
        title: "Urban Planning Study",
        description: "Smart city infrastructure proposal",
        sortOrder: 2,
      },
      {
        year: 2019,
        groupTitle: "Architectural Design Works",
        title: "Memorial Complex Design",
        description: "Vertical Studio Design Competetion",
        sortOrder: 3,
      },
    ],
  });

  await prisma.skill.createMany({
    data: [
      // 2026
      { year: 2026, groupTitle: "FullStack - Portfolio", category: "Frontend", items: "React, Vue, Angular", sortOrder: 1 },
      { year: 2026, groupTitle: "FullStack - Portfolio", category: "Backend", items: "Node.js, Python, Java, C++", sortOrder: 2 },
      { year: 2026, groupTitle: "FullStack - Portfolio", category: "Database", items: "MongoDB, PostgreSQL, Redis", sortOrder: 3 },
      { year: 2026, groupTitle: "FullStack - Portfolio", category: "Cloud", items: "AWS, Docker, Kubernetes", sortOrder: 4 },
      // 2024
      { year: 2024, groupTitle: "MAA Design Portfolio", category: "Design Tools", items: "Rhino, Grasshopper, Blender", sortOrder: 1 },
      { year: 2024, groupTitle: "MAA Design Portfolio", category: "Programming", items: "Python, C#, JavaScript", sortOrder: 2 },
      { year: 2024, groupTitle: "MAA Design Portfolio", category: "Fabrication", items: "3D Printing, CNC, Laser Cutting", sortOrder: 3 },
      { year: 2024, groupTitle: "MAA Design Portfolio", category: "AI/ML", items: "TensorFlow, Computer Vision", sortOrder: 4 },
      // 2019
      { year: 2019, groupTitle: "Architectural Design Works", category: "Design Software", items: "AutoCAD, SketchUp, Revit", sortOrder: 1 },
      { year: 2019, groupTitle: "Architectural Design Works", category: "Visualization", items: "V-Ray, Lumion, Photoshop", sortOrder: 2 },
      { year: 2019, groupTitle: "Architectural Design Works", category: "Analysis", items: "Structural, Environmental, Energy", sortOrder: 3 },
      { year: 2019, groupTitle: "Architectural Design Works", category: "Communication", items: "Presentation, Team Leadership", sortOrder: 4 },
    ],
  });

  console.log("Seed complete.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
