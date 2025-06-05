import React from "react";
import { FaAngular } from "react-icons/fa6";
import { SiCypress } from "react-icons/si";
import { LuGraduationCap } from "react-icons/lu";
import signals_app from "@/public/signals_app.png";
import research_pic from "@/public/research_pic.png";
import stock_app from "@/public/stock_app.png";
import sleeper_mcp from "@/public/sleeper_mcp.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Purdue University",
    location: "West Lafayette, IN",
    description:
      "Graduated with a Bachelor's degree in Industrial Engineering.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Software Quality Assurance Engineer",
    location: "Chicago, IL",
    description:
      "Wrote automated tests for web applications using Cypress.io. Dockerized test environments. Reduced flake in CI/CD pipeline to virtually zero. Delivered two company-wide presentations at the company's DevOps Summit regarding flake handling and my team's success with automated testing. Worked with several engineers across teams to adopt Cypress in their applications.",
    icon: React.createElement(SiCypress),
    date: "2019 - 2020",
  },
  {
    title: "Full-Stack Software Engineer",
    location: "Chicago, IL",
    description:
      "Worked on a team of developers building three web applications using Angular and Node.js. Built a high priority Angular front-end project on my own.",
    icon: React.createElement(FaAngular),
    date: "2020 - 2022",
  },
  {
    title: "University of Southern California",
    location: "Los Angeles, CA",
    description: "Graduated with a Master's degree in Computer Science.",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
] as const;

export const projectsData = [
  {
    title: React.createElement(
      "span",
      {},
      "[Accepted] ",
      React.createElement(
        "em",
        {},
        "Crowd-SFT: Crowdsourcing for LLM Alignment",
      ),
      " - IEEE DAPPS 2025",
    ),
    description:
      "A research paper on an open, crowdsourced framework for supervised fine-tuning of Large Language Models.",
    tags: ["Python", "ChatGPT"],
    imageUrl: research_pic,
    link: "https://www.arxiv.org/abs/2506.04063",
    comingSoon: false,
  },
  {
    title: "Fantasy Football Model Context Protocol Server",
    description:
      "An API server that converts Sleeper fantasy football data into conversational insights for AI assistants, including league history, settings, and matchups.",
    tags: ["MCP", "Typescript", "Zod", "Node.js", "REST API"],
    imageUrl: sleeper_mcp,
    link: "https://github.com/asotiropusc/sleeper-mcp-server",
    comingSoon: false,
  },
  {
    title: "Stock Application",
    description:
      "A real-time stock trading simulator that allows users to track market data, manage watchlists, and execute mock trades at current prices. [Code available upon request]",
    tags: [
      "Angular",
      "TypeScript",
      "NgRx",
      "MongoDB",
      "Express",
      "Google Cloud",
    ],
    imageUrl: stock_app,
    link: "https://stock-application-455102.uc.r.appspot.com/search/home",
    comingSoon: false,
  },
  {
    title: "Angular Signal State Management Application",
    description:
      "A simple app built to explore Angular Signal State Management.",
    tags: [
      "Angular",
      "Typescript",
      "Angular Signals",
      "Tailwind",
      "Nx Mono Repo",
      "Cypress.io",
      "Vercel",
    ],
    imageUrl: signals_app,
    link: "https://signalstateapp.vercel.app/",
    comingSoon: false,
  },
] as const;

export const skillsData = [
  "Angular",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Cypress.io",
  "Docker",
  "Node.js",
  "Python",
  "Express",
  "SQL",
  "Git",
  "MongoDB",
  "Tailwind",
  "React",
  "Next.js",
  "Redux",
] as const;
