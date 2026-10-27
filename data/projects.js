// data/projects.js

export const projects = [

  {
    id: "software",
    number: "1",
    category: "SOFTWARE ENGINEERING",
    title: "Software Engineering",
    description:
      "Digital solutions and software projects developed through my Informatics Engineering studies.",

    tools: [
      { name: "HTML", image: "/images/tools/html.png" },
      { name: "CSS", image: "/images/tools/css.png" },
      { name: "JavaScript", image: "/images/tools/js.png" },
      { name: "Next.js", image: "/images/tools/nextjs.png" },
      { name: "Node.js", image: "/images/tools/node.png" },
      { name: "Laravel", image: "/images/tools/laravel.png" },
      { name: "PHP", image: "/images/tools/php.png" },
      { name: "MySQL", image: "/images/tools/mysql.png" },
      { name: "Prisma", image: "/images/tools/prisma.png" },
      { name: "SQLite", image: "/images/tools/SQLite.png" },
    ],

    items: [
      {
        title: "LaporDong",
        image: "/images/projects/software/3.png",
        website: "https://github.com/kerlenn/LaporDong",
      },
      {
        title: "Sleepyani?",
        image: "/images/projects/software/4.png",
        website: "https://sleepyani.vercel.app/pages/login.html",
      },
      {
        title: "SkillUp",
        image: "/images/projects/software/5.png",
        website: "https://skillup-delta-rose.vercel.app/",
      },
    ],
  },

  {
    id: "uiux",
    number: "2",
    category: "UI/UX DESIGN",
    title: "UI/UX Design & Mobile Programming",
    description:
      "Designing intuitive user flows and high-fidelity interfaces for academic projects, exams, and design competitions.",
    tools: [
      { name: "Figma", image: "/images/tools/figma.png" },
      { name: "Flutter", image: "/images/tools/flutter.png" },
      { name: "Dart", image: "/images/tools/dart.png" },
    ],

    items: [
      {
        title: "StopPinjol",
        description: "",
        image: "/images/projects/uiux/1.png",
        website: "https://www.figma.com/design/HodP2xk6DC3PL8YA5MEGTa/UI-UX?m=auto&t=MtpSNYEuMW7YXzGg-1",
      },
      {
        title: "IKotak",
        image: "/images/projects/uiux/2.png",
        website: "https://github.com/kerlenn/UAS_MOBPROG",
      },
    ],
  },

  {
    id: "social-media",
    number: "3",
    category: "SOCIAL MEDIA DESIGN",
    title: "Social Media Design",
    description:
      "Creating aesthetic and consistent visual content for social media, including feeds, promotional posts, stories, and Reels covers.",
    tools: [
      { name: "Adobe", image: "/images/tools/ps.png" },
      { name: "Affinity", image: "/images/tools/aff.png" },
    ],

    items: [
      {
        title: "Poster Big Data dalam Sektor Pangan",
        image: "/images/projects/social-media/bigdata.png",
      },
      {
        title: "Poster Sleepyani? - Aplikasi Kos-kosan",
        image: "/images/projects/social-media/sleepyani.png",
      },
      {
        title: "Instagram Feeds - Hari Raya Imlek",
        image: "/images/projects/social-media/imlek.jpg",
      },
      {
        title: "Instagram Feeds - Kunjungan BEM FTI X BEM FH",
        image: "/images/projects/social-media/kunjungan.png",
      },
      {
        title: "Instagram Reels Cover - Pelatihan Design Adobe Photoshop",
        image: "/images/projects/social-media/pelatihan.png",
      },
    ],
  },

  {
    id: "videography",
    category: "VIDEOGRAPHY",
    title: "Videography",
    description:
      "Creating and editing video content including student organization after-movies and academic video projects.",
    tools: [
      { name: "After Effects", image: "/images/tools/ae.png" },
      { name: "Capcut", image: "/images/tools/cc.png" },
    ],

    items: [
      {
        title: "Informatics Exhibition 2026 After Movie",
        type: "youtube",
        youtube: "https://www.youtube.com/watch?v=7dfcrJZ6xeA",
        thumbnail: "/images/projects/videography/ie.png",
      },
      {
        title: "Welcoming Party 2026 After Movie",
        type: "youtube",
        youtube: "https://youtu.be/UQhXYadahsk?si=CmyhJ30PQ9bfIk7l",
        thumbnail: "/images/projects/videography/wp.png",
      },
      {
        title: "Anti-Corruption Project Video",
        type: "youtube",
        youtube: "https://youtu.be/2gnQGKW3Zr8?si=p4uZ4fBF0wRbq0lY",
        thumbnail: "/images/projects/videography/humaniora.png",
      },
    ],
  },
];