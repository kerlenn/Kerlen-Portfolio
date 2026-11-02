// data/projects.js

export const projects = [

  {
    id: "software",
    title: "1. Software Engineering",
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
      { name: "SQLite", image: "/images/tools/sqlite.png" },
    ],

    items: [
      {
        title: "LaporDong",
        image: "/images/projects/software/3.png",
        website: "https://github.com/kerlenn/LaporDong",
        details: {
          overview:
            "LaporDong is a web-based platform that allows citizens to report road infrastructure problems. It helps improve communication between the public and government agencies by providing a digital reporting system.",

          features: [
            "User Authentication — Register, log in, and manage user profiles.",
            "Road Damage Reporting — Submit reports with photos and location information.",
            "GPS-Based Location — Support location detection to help identify where road damage occurs.",
            "AI-Powered Image Validation — Use Google Gemini to assist in validating road damage photos.",
            "AI Priority Assessment — Categorize reports into high, medium, or low priority to support handling decisions.",
            "Report Tracking — View report details, status updates, and reporting history.",
            "Public Report Exploration — Browse public reports and interact through comments.",
            "Public Statistics — View report statistics by status and priority.",
            "Administrative Dashboard — Allow administrators and authorized officers to review, verify, assign, and update reports.",
            "Report Reviews — Allow users to provide feedback on completed reports.",
            "Badge System — Recognize user participation through achievement badges.",
          ],

          technologies: [
            "PHP 8.2+",
            "Laravel 11",
            "MySQL",
            "Blade",
            "JavaScript",
            "Tailwind CSS",
            "Vite",
            "Google Gemini API",
            "Google Maps API",
          ],

          gallery: [
            {
              src: "/images/projects/software/lapordong/home.jpeg",
              title: "Home",
            },
            {
              src: "/images/projects/software/lapordong/sign.jpeg",
              title: "Sign In",
            },
            {
              src: "/images/projects/software/lapordong/log.jpeg",
              title: "Log In",
            },
            {
              src: "/images/projects/software/lapordong/Exploration.jpeg",
              title: "Exploration",
            },
            {
              src: "/images/projects/software/lapordong/Creating Reports.jpeg",
              title: "Creating Reports",
            },
            {
              src: "/images/projects/software/lapordong/Reports' Detail.jpeg",
              title: "Reports' Detail",
            },
            {
              src: "/images/projects/software/lapordong/Report's Statistics.jpeg",
              title: "Report's Statistics",
            },
            {
              src: "/images/projects/software/lapordong/Government's Dashboard.jpeg",
              title: "Government's Dashboard",
            },
            {
              src: "/images/projects/software/lapordong/Citizen's Dashboard.jpeg",
              title: "Citizen's Dashboard",
            },
          ],
        },
      },
      {
        title: "Sleepyani?",
        image: "/images/projects/software/4.png",
        website: "https://sleepyani.vercel.app/pages/login.html",
        details: {
          overview:
            "Sleepyani is a web-based boarding house management system designed to help manage room availability, tenant information, and rental payments digitally. It simplifies daily boarding house operations for owners, admins, and tenants.",

          features: [
            "Room Management: Add room data, update room details, and manage room availability status.",
            "Tenant Management: Register new tenants, update tenant information, and manage room assignments.",
            "Payment Management: Record rental payments, upload payment receipts, and verify payment status.",
            "Payment History: Store and monitor tenant payment records.",
            "User Authentication: Login system with role-based access for owners, admins, and tenants.",
            "Notifications: Send updates about room changes, tenant information, and payment status.",
          ],

          technologies: [
            "Node.js",
            "Express.js",
            "MongoDB Atlas",
            "Mongoose",
            "HTML5, CSS3, JavaScript",
            "JWT (JSON Web Token)",
          ],

          gallery: [
            {
              src: "/images/projects/software/sleepyani/login.png",
              title: "Log In",
            },
            {
              src: "/images/projects/software/sleepyani/owner.png",
              title: "Owner's Dashboard",
            },
            {
              src: "/images/projects/software/sleepyani/Owner's Room Management.png",
              title: "Owner's Room Management",
            },
            {
              src: "/images/projects/software/sleepyani/Owner's Resident Management.png",
              title: "Owner's Resident Management",
            },
            {
              src: "/images/projects/software/sleepyani/Owner's Admin Management.png",
              title: "Owner's Admin Management",
            },
            {
              src: "/images/projects/software/sleepyani/Owner's Billing.png",
              title: "Owner's Billing",
            },
            {
              src: "/images/projects/software/sleepyani/admin.png",
              title: "Admin's Dashboard",
            },
            {
              src: "/images/projects/software/sleepyani/Admin's Room Management.png",
              title: "Admin's Room Management",
            },
            {
              src: "/images/projects/software/sleepyani/Admin's Resident Management.png",
              title: "Admin's Resident Management",
            },
            {
              src: "/images/projects/software/sleepyani/Admin's Billing.png",
              title: "Admin's Billing",
            },
            {
              src: "/images/projects/software/sleepyani/Admin's Billing History.png",
              title: "Admin's Billing History",
            },
            {
              src: "/images/projects/software/sleepyani/resident.png",
              title: "Resident's Dashboard",
            },
            {
              src: "/images/projects/software/sleepyani/Resident's Billing Status.png",
              title: "Resident's Billing Status",
            },
            {
              src: "/images/projects/software/sleepyani/Resident's Upload Payment.png",
              title: "Resident's Upload Payment",
            },
          ],
        },
      },
      {
        title: "SkillUp - Online Learning Platform",
        image: "/images/projects/software/5.png",
        website: "https://skillup-delta-rose.vercel.app/",
        details: {
          overview:
            "SkillUp is a web-based online learning platform designed to help users discover courses, explore learning materials, and purchase online courses. It provides features for account management, course exploration, transactions, and learning progress tracking.",

          features: [
            "User Authentication — Sign up and log in with input validation.",
            "Course Catalog — Browse available courses and filter them by criteria such as video count, price, and difficulty level.",
            "Course Details — View course descriptions, instructors, benefits, requirements, and learning materials.",
            "Video Previews — Access preview videos, with additional content available after purchasing a course.",
            "Course Purchase — Complete the course purchase process through a payment page.",
            "Payment Confirmation — View the successful payment page and return to the selected course.",
            "Purchase History — View previous transactions, including course details, payment methods, timestamps, and prices.",
            "Learning Progress Tracker — Identify an active course that has not yet been completed.",
            "User Profile — Update personal information, change passwords, or delete an account.",
            "User Feedback — Submit feedback, suggestions, and comments.",
            "Responsive Interface — Navigate the platform through a layout designed to adapt to different screen sizes.",
          ],

          technologies: [
            "JavaScript",
            "Prisma ORM",
            "SQLite",
            "HTML and CSS",
          ],

          gallery: [
            {
              src: "/images/projects/software/skillup/home.png",
              title: "Home Page",
            },
            {
              src: "/images/projects/software/skillup/signup.png",
              title: "Sign Up Page",
            },
            {
              src: "/images/projects/software/skillup/login.png",
              title: "Log In Page",
            },
            {
              src: "/images/projects/software/skillup/userprofile.png",
              title: "Profile Page",
            },
            {
              src: "/images/projects/software/skillup/userdashboard.png",
              title: "Dashboard Page",
            },
            {
              src: "/images/projects/software/skillup/course.png",
              title: "All Courses Page",
            },
            {
              src: "/images/projects/software/skillup/detailcourse.png",
              title: "Course's Detail Page",
            },
            {
              src: "/images/projects/software/skillup/payment.png",
              title: "Payment Page",
            },
            {
              src: "/images/projects/software/skillup/purchasehistory.png",
              title: "Purchase History Page",
            },

          ],
        },
      },
    ],
  },

  {
    id: "uiux",
    title: "2. UI/UX Design & Mobile Programming",
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
        details: {
          overview:
            "StopPinjol is an application designed to help Gen Z and Millennials overcome online loan (pinjol) debt. It provides financial management, AI-based debt repayment strategies, financial education, and mental health support in one platform.",

          features: [
            "Home Reminder & Mood Tracker: Shows the estimated time until users become debt-free and helps monitor their emotional condition.",
            "Financial Strategy: Tracks income, expenses, remaining money, and total debt. Users can also create repayment plans with AI assistance.",
            "AI Assistant: Provides support through chat and voice conversations to help users address their concerns.",
            "Financial Learning: Provides financial education based on users' self-assessment results, followed by quizzes to test their understanding.",
            "Mental Health Support: Connects users with professional psychologists for support when dealing with stress caused by online loans.",
          ],

          technologies: [
            "Figma",
          ],

          gallery: [
            {
              src: "/images/projects/uiux/stoppinjol/Home.png",
              title: "Home",
            },
            {
              src: "/images/projects/uiux/stoppinjol/Strategy.png",
              title: "Strategy",
            },
            {
              src: "/images/projects/uiux/stoppinjol/AI Assistant.png",
              title: "AI Assistant",
            },
            {
              src: "/images/projects/uiux/stoppinjol/Learning.png",
              title: "Learning",
            },
            {
              src: "/images/projects/uiux/stoppinjol/Help & Support.png",
              title: "Help & Support",
            },
            {
              src: "/images/projects/uiux/stoppinjol/Profile.png",
              title: "Profile",
            },
          ],
        },
      },
      {
        title: "IKotak",
        image: "/images/projects/uiux/2.png",
        website: "https://github.com/kerlenn/UAS_MOBPROG",
        details: {
          overview:
            "iKotak is a mobile e-commerce application built with Flutter to provide a simple and convenient shopping experience for smartphone and gadget enthusiasts. Users can browse products from various brands, view product details, manage their shopping carts, and go through the checkout process.",

          features: [
            "User Authentication — Register, log in, log out, and manage account information.",
            "Product Catalog — Browse smartphones and gadgets from brands such as Apple, Samsung, Xiaomi, Google, and Huawei.",
            "Search and Filtering — Search products, filter by brand and price range, and sort the product list.",
            "Product Details — View product information and select available storage capacities, colors, and quantities.",
            "Shopping Cart — Add or remove products, update quantities, change product variants, and calculate the total price.",
            "Checkout — Review selected products and enter shipping information.",
            "Payment Selection — Select a payment method and view payment instructions.",
            "Order Management — View order history, filter orders by status, and monitor order progress.",
            "User Profile — View and update account information.",
          ],

          technologies: [
            "Flutter",
            "Dart",
          ],

          gallery: [
            {
              src: "/images/projects/uiux/ikotak/Home.png",
              title: "Home",
            },
            {
              src: "/images/projects/uiux/ikotak/Login.png",
              title: "Login",
            },
            {
              src: "/images/projects/uiux/ikotak/Profile.png",
              title: "Profile",
            },
            {
              src: "/images/projects/uiux/ikotak/Product's Detail.png",
              title: "Product's Detail",
            },
            {
              src: "/images/projects/uiux/ikotak/Filtering & Sorting.png",
              title: "Filtering & Sorting",
            },
            {
              src: "/images/projects/uiux/ikotak/Checkout.png",
              title: "Checkout",
            },
            {
              src: "/images/projects/uiux/ikotak/Payment.png",
              title: "Payment",
            },
            {
              src: "/images/projects/uiux/ikotak/Order History.png",
              title: "Order History",
            },
          ],
        },
      },
    ],
  },

  {
    id: "social-media",
    title: "3. Social Media Design",
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
    title: "4. Videography",
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