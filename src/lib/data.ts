import project1 from "../../public/projectchair.png";
import project2 from "../../public/projectdigitalagency.png";
import project3 from "../../public/projectrealestate.png";
import project4 from "../../public/projectstayhealthy.png";
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
    title: "Medical Appointment Booking",
    tags: [
      "React - ",
      "Express -",
      "MongoDB - ",
      "Tailwind - ",
      "Node - ",
      "daisyUI",
    ],
    imageUrl: project4,
    urlDemo: "https://stayhealthy-7wyt.onrender.com/",
    urlCode: "https://github.com/isabellaterano/medical-booking",
  },
  {
    title: "DreamDwell Real Estate",
    tags: [
      "React - ",
      "Express - ",
      "MongoDB - ",
      "Tailwind - ",
      "Firebase - ",
      "Tailwind",
    ],
    imageUrl: project3,
    urlDemo: "https://dreamdwell-estate-ljy3.onrender.com/",
    urlCode: "https://github.com/isabellaterano/dreamdwell-estate",
  },
  {
    title: "Forge Digital Agency",
    tags: ["React - ", "Javascript - ", "Three.js - ", "Tailwind"],
    imageUrl: project2,
    urlDemo: "https://digitalagency-forge.netlify.app/",
    urlCode: "https://github.com/isabellaterano/digital-agency",
  },
  {
    title: "Chair E-commerce",
    tags: [
      "React - ",
      "Javascript - ",
      "Express - ",
      "Tailwind - ",
      "MongoDB - ",
      "Stripe - ",
      "daisyUI - ",
      "Three.js ",
    ],
    imageUrl: project1,
    urlDemo: "https://ecommerce-chair.onrender.com/",
    urlCode: "https://github.com/isabellaterano/ecommerce-chair",
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
    title: "Sass",
    icon: Sass,
  },
  {
    title: "Tailwind css",
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
