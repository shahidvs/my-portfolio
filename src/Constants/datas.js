import Tailwind from "../assets/tailwind.svg";
import Reactjs from "../assets/react.svg";
import Bootstrap from "../assets/bootstrap.svg";
import CSS from "../assets/css.svg";
import Git from "../assets/git-icon.svg";
import Github from "../assets/github-icon.svg";
import HTML from "../assets/html.svg";
import Js from "../assets/js.svg";
import Node from "../assets/node.svg";
import Postman from "../assets/postman.svg";
import TypeScript from "../assets/typescript.svg";
import Nextjs from "../assets/nextjs.svg";
import Astro from "../assets/astro.svg";
import Docker from "../assets/docker.svg";
import Figma from "../assets/figma.svg";
import Wraft from "../assets/wraft.png";
import portfolio from "../assets/FilmBlog.png";
import Doctor from "../assets/Doctor.png";
import Food from "../assets/Food.png";

export const HOME_SUMMARY = `Frontend Developer with 2+ years of experience building production-grade web applications using React.js, Next.js, and TypeScript. Contributed to Wraft — an open-source document lifecycle management platform — with a Turbo Repo monorepo, a ProseMirror-based editor, and a reusable UI system. Experienced in REST API integration, accessible responsive interfaces, and collaboration across teams. Open to Frontend Developer roles in India and GCC countries.`;

export const ABOUT_TEXT = `I am a Frontend Developer focused on React, Next.js, and TypeScript. At Functionary Labs I worked on Wraft, an open-source document lifecycle platform, where I helped shape the monorepo architecture, built a ProseMirror-based rich text editor, and contributed to a shared UI library with Storybook. I care about performance, accessibility, and clear design systems. Recently I have been delivering static, SEO-friendly sites with Astro, Tailwind, and Pages CMS connected to GitHub for editor-friendly publishing workflows.`;

export const EXPERIENCES = [
  {
    year: "Jan 2026 – Present",
    role: "Frontend Developer (Freelance)",
    type: "Self-Employed · Remote",
    company: "Self-Employed",
    description: `Designed and developed a film industry blog using Astro.js, Tailwind CSS, and Pages CMS.
Integrated Pages CMS with GitHub so editors publish visually with changes reflected on the live site via GitHub-connected deployment.
Built static, performance-optimized Astro pages for fast load times and strong SEO.
Delivered the project end to end — from architecture to production deployment.`,
    technologies: ["Astro.js", "Tailwind CSS", "Pages CMS", "GitHub"],
  },
  {
    year: "May 2024 – Dec 2025",
    role: "Frontend Developer",
    type: "Full Time",
    company: "Functionary Labs Pvt. Ltd · Calicut, Kerala",
    description: `Developed and maintained production client applications with Next.js and TypeScript for Wraft — an open-source document lifecycle management platform.
Built scalable frontend architecture in a Turbo Repo monorepo (web, doc, editor, ui packages).
Created a reusable UI library with TypeScript, styled-components, and xstyled/emotion.
Implemented a ProseMirror-based rich text editor for document creation, editing, and formatting.
Authored Storybook documentation for components, icons, and the design system.
Integrated REST APIs (GET, POST, PUT, DELETE) with backend engineers; performed UI testing and QA for cross-browser and responsive behavior.
Shipped responsive interfaces with Tailwind CSS across screen sizes.`,
    technologies: [
      "Next.js",
      "TypeScript",
      "Turbo Repo",
      "ProseMirror",
      "styled-components",
      "Tailwind CSS",
      "Storybook",
      "REST APIs",
    ],
  },
  {
    year: "June 2023 – Jan 2024",
    role: "MERN Full Stack Developer Intern",
    type: "Internship",
    company: "Luminar Technolab · Kochi, Kerala",
    description: `Built web applications with React.js to improve performance and user experience.
Developed backend REST APIs with Node.js and Express.js.
Used MongoDB for data storage and retrieval with scalable patterns.`,
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
  },
];

export const education = [
  {
    title: "Bachelor of Computer Applications (BCA)",
    description: "Calicut University, Kerala · 2020 – 2024",
  },
  {
    title: "Higher Secondary Education (+2)",
    description: "DHSE Kerala · 2018 – 2020",
  },
  {
    title: "MERN Full Stack Developer Internship",
    description: "Luminar Technolab · 2024",
  },
  {
    title: "NACTET Certificate",
    description: "Professional certification",
  },
];

export const PROJECTS = [
  {
    title: "Wraft — Document Lifecycle Management",
    image: Wraft,
    description:
      "Open-source content authoring platform for structured documents, workflows, and collaboration — built on Markdown and JSON. Contributed to the Next.js and TypeScript frontend in a Turbo Repo monorepo, UI library with styled-components, Storybook docs, and the ProseMirror-based editor package.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Turbo Repo",
      "ProseMirror",
      "Storybook",
      "styled-components",
    ],
    live: "https://wraft.app",
    code: "https://github.com/wraft/wraft",
  },
  {
    title: "Film Industry Blog — Astro + Pages CMS",
    image: portfolio,
    description:
      "Performance-focused static blog with Astro.js and Tailwind CSS. Pages CMS is wired to GitHub so content editors update posts visually and the site redeploys automatically without developer handoffs.",
    technologies: ["Astro.js", "Tailwind CSS", "Pages CMS", "GitHub"],
    live: "https://avmunniarchives.com",
    code: null,
  },
  {
    title: "Doctor Appointment Booking Website",
    image: Doctor,
    description:
      "Multilingual healthcare platform with dynamic language switching (Hindi and regional languages). React.js and Tailwind CSS with appointment scheduling and availability updates.",
    technologies: ["React.js", "Tailwind CSS", "i18n"],
    live: "https://spontaneous-fairy-3d5e13.netlify.app",
    code: "https://github.com/shahidvs/doctor-x",
  },
  {
    title: "Food Delivery App",
    image: Food,
    description:
      "Restaurant ordering experience with food and price filters, dynamic search, and a responsive layout optimized for mobile and desktop.",
    technologies: ["React.js", "Tailwind CSS"],
    live: "https://food-x-beta.vercel.app",
    code: "https://github.com/shahidvs/food",
  },
];

export const skill = [
  Reactjs,
  Nextjs,
  TypeScript,
  Js,
  Astro,
  HTML,
  CSS,
  Tailwind,
  Figma,
  Docker,
  Node,
  Bootstrap,
  Git,
  Github,
  Postman,
];

export const CONTACT = {
  address: "Thrissur, Kerala, India",
  phoneNo: "+91 9645802795",
  email: "mrshahid234@gmail.com",
};
