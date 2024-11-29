import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";
// import { siteMetadata } from "@/data/siteMetaData.mjs";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "J.S Quiz",
    href: "/projects",
    tags: ["Nextjs", "Express.js", "Multer", "Nginx", "MongoDB"],
    image: {
      LIGHT: "/images/projects/imageFront.webp",
      DARK: "/images/projects/imageFront.webp",
    },
  },
  {
    index: 1,
    title: "Chatty",
    href: "/projects",
    tags: ["NodeJs", "Tailwindcss", "ViteJs", "MongoDb", "Nginx", "Pm2"],
    image: {
      LIGHT: "/images/projects/financeHero.webp",
      DARK: "/images/projects/financeHero.webp",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "JavaScript Quizzes Platform",
    favicon: "/images/projects/logos/kanban.ico",
    imageUrl: ["/images/projects/imageFront.webp"],
    description:
      "Developed a feature-rich web development quiz platform where users can test their JavaScript skills, view scores in real-time, and compete via leaderboards. Built with Next.js for fast rendering and MongoDB for efficient data management, ensuring scalability and seamless user interactions. Engineered a high-performance backend using Node.js and Express.js to handle concurrent users with low latency. Deployed on VPS nginx for reliability and availability, enabling smooth experiences. Designed the platform with a focus on functionality and development, providing an engaging and competitive environment for web developers.",
    sourceCodeHref: "https://github.com/cykoravish/web-dev-quiz-next",
    liveWebsiteHref: "https://webdevquiz.online",
  },
  {
    name: "Chatty",
    favicon: "/images/projects/logos/kanban.ico",
    imageUrl: [
      "/images/projects/impakter.webp",
      "/images/projects/chattyLandingPage.webp",
      "/images/projects/chattyLandingPage2.webp",
    ],
    description:
      "Built a dynamic online chat platform using the MERN stack, enabling real-time messaging with Socket.io for seamless communication. Designed a robust backend with Node.js and Express.js, leveraging MongoDB for efficient storage of messages and image URLs. Integrated Cloudinary for scalable image hosting, ensuring fast and secure media delivery. Developed an intuitive, responsive interface with React, enhancing user experience across devices. Deployed on a VPS with Nginx, ensuring high availability and scalability, providing users with a reliable, real-time chat experience.",
    sourceCodeHref: "https://github.com/cykoravish/online-chats-mern",
    liveWebsiteHref: "https://onlinechats.shop",
  },
  {
    name: "Books Store",
    favicon: "/images/projects/logos/kanban.ico",
    imageUrl: ["/images/projects/ravish.webp"],
    description:
      "Developed a full-stack online bookstore using the MERN stack, enabling users to browse, add to cart, and purchase books. Integrated functionality for users to upload and sell their books, enhancing the platform's versatility. Built the frontend with React and Vite for lightning-fast rendering and seamless user interactions. Implemented secure authentication using Firebase for Google Sign-In, along with login and logout functionality. Utilized MongoDB for efficient storage of user data, book inventory, and order details. Delivered a smooth and engaging e-commerce experience with a focus on functionality and scalability.",
    sourceCodeHref: "https://github.com/cykoravish/Books-store-mern",
    liveWebsiteHref: "https://readbooksonline.store",
  },

  {
    name: "My portfolio",
    favicon: "/favicon.ico",
    imageUrl: [
      "/images/projects/portDark.png",
      "/images/projects/portLight.png",
    ],
    description:
      "Designed and developed a responsive personal portfolio website using Next.js, showcasing projects and expertise in modern web technologies. Integrated Framer Motion for smooth, interactive animations, enhancing user engagement. Styled with Tailwind CSS for a clean and professional design, ensuring seamless responsiveness across devices. Optimized for performance and SEO with server-side rendering and dynamic routing. The website highlights a focus on functionality, creativity, and an innovative approach to web development.",
    sourceCodeHref: "https://github.com/cykoravish/Portfolio-next/tree/fixing",
    liveWebsiteHref: "https://ravishportfolio.store",
  },
  {
    name: "Project on idea",
    favicon: "/images/projects/logos/manygames.ico",
    imageUrl: ["/images/projects/comingSoon.png"],
    description:
      "strangers chat - a place to chat with strangers. In progress..",
    // sourceCodeHref: "https://ravish.fun",
    liveWebsiteHref: "https://ravish.fun",
  },
];
