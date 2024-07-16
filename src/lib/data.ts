import project1 from "../../public/images/projectchair.png";
import project2 from "../../public/images/projectdigitalagency.png";
import project3 from "../../public/images/projectrealestate.png";
import project4 from "../../public/images/projectstayhealthy.png";
import project5 from "../../public/images/project-tattoo.png";
import project6 from "../../public/images/project-portfolio.png";
import project7 from "../../public/images/project-portfoliofull.png";
import project8 from "../../public/images/project-animal.png";
import project9 from "../../public/images/project-photographer.png";
import project10 from "../../public/images/project-design.png";
import Html from "../../public/icon/html.svg";
import Css from "../../public/icon/css.svg";
import Figma from "../../public/icon/figma.svg";
import Javascript from "../../public/icon/javascript.svg";
import Mongo from "../../public/icon/mongo.svg";
import Express from "../../public/icon/express.svg";
import Sass from "../../public/icon/sass.svg";
import Tailwind from "../../public/icon/tailwind.svg";
import React from "../../public/icon/react.svg";
import Framer from "../../public/icon/framermotion.svg";
import Next from "../../public/icon/nextjs.svg";
import Threejs from "../../public/icon/threejs.svg";

export const projectsData = [
  {
    title: "Medical consultation platform",
    tags: [
      "React",
      "Javascript",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "daisyUI",
    ],
    imageUrl: project4,
    urlDemo: "https://stayhealthy-7wyt.onrender.com/",
  },
  {
    title: "DreamDwell Real Estate",
    tags: [
      "React",
      "Javascript",
      "Express",
      "MongoDB",
      "Firebase",
      "Tailwind CSS",
    ],
    imageUrl: project3,
    urlDemo: "https://dreamdwell-estate-ljy3.onrender.com/",
  },
  {
    title: "Forge Digital Agency",
    tags: ["React", "Javascript", "Three.js", "Tailwind CSS"],
    imageUrl: project2,
    urlDemo: "https://digitalagency-forge.netlify.app/",
  },
  {
    title: "Chair E-commerce",
    tags: [
      "React",
      "Javascript",
      "Express",
      "MongoDB",
      "Stripe",
      "Tailwind CSS",
      "daisyUI",
      "Three.js",
    ],
    imageUrl: project1,
    urlDemo: "https://ecommerce-chair.onrender.com/",
  },
  {
    title: "Skull Tattoo Studio",
    tags: ["React", "Javascript", "framer-motion", "Tailwind CSS"],
    imageUrl: project5,
    urlDemo: "https://skulltattoostudio.netlify.app/",
  },
  {
    title: "Personal Website",
    tags: [
      "Next.js",
      "Typescript",
      "Tailwind CSS",
      "Resend",
      "GSAP",
      "next-intl",
      "framer-motion",
      "Three.js",
    ],
    imageUrl: project6,
    urlDemo: "https://isabellaterano.vercel.app/en",
  },
  {
    title: "Portfolio Full-stack",
    tags: [
      "React",
      "Javascript",
      "CSS",
      "Emailjs",
      "framer-motion",
      "react-i18next",
    ],
    imageUrl: project7,
    urlDemo: "https://jaspereverettportfolio.netlify.app/",
  },
  {
    title: "PetCare Veterinary Clinic",
    tags: ["React", "Javascript", "framer-motion", "Tailwind CSS"],
    imageUrl: project8,
    urlDemo: "https://petcareclinicavet.netlify.app/",
  },
  {
    title: "Photography Portfolio",
    tags: ["Next.js", "Javascript", "framer-motion", "Tailwind CSS"],
    imageUrl: project9,
    urlDemo: "https://portfolio-photography-coral.vercel.app/",
  },
  {
    title: "Design Graphic Portfolio",
    tags: ["React", "Javascript", "framer-motion", "Tailwind CSS"],
    imageUrl: project10,
    urlDemo: "https://portfoliomariemancini.netlify.app/",
  },
] as const;

export const skillsData = [
  {
    title: "HTML",
    icon: Html,
  },
  {
    title: "CSS",
    icon: Css,
  },
  {
    title: "Javascript",
    icon: Javascript,
  },
  {
    title: "React",
    icon: React,
  },
  {
    title: "Next.js",
    icon: Next,
  },
  {
    title: "SASS",
    icon: Sass,
  },
  {
    title: "Tailwind CSS",
    icon: Tailwind,
  },
  {
    title: "Express",
    icon: Express,
  },
  {
    title: "MongoDB",
    icon: Mongo,
  },
  {
    title: "Three.js",
    icon: Threejs,
  },
  {
    title: "Framer Motion",
    icon: Framer,
  },
  {
    title: "Figma",
    icon: Figma,
  },
] as const;
