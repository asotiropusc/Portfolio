"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I earned my{" "}
        <span className="font-bold">
          Bachelor&apos;s in Industrial Engineering
        </span>{" "}
        from <span className="font-bold">Purdue University</span>, but a
        lightbulb moment during my junior year drew me toward software
        development. Following graduation, I landed a role as a{" "}
        <span className="font-bold">Software QA Engineer</span> — the perfect
        bridge between my IE background and coding aspirations.{" "}
        <span className="italic">Throughout this journey</span>, I taught myself
        Angular and eventually made the leap to a full-stack developer. I{" "}
        <span className="underline">enjoyed</span> learning about development so
        much that I decided to return to school. I recently completed my{" "}
        <span className="font-bold">Master&apos;s in Computer Science</span>{" "}
        from <span className="font-bold">USC</span>. Although my core stack is{" "}
        <span className="font-bold">Angular, Node.js (Express), and SQL</span>,
        I&apos;m always eager to explore new technologies. While my experience
        centers on software development,{" "}
        <span className="italic">I&apos;m increasingly drawn</span> to Large
        Language Models. In fact, I recently submitted a research paper on{" "}
        <span className="font-bold">supervised fine-tuning of LLMs</span> for
        conference review. I&apos;m currently on the lookout for a{" "}
        <span className="underline">software engineering position</span> where I
        can <span className="font-bold">wear different hats</span> and dive into
        various domains, ideally somewhere that encourages{" "}
        <span className="font-bold">continuous learning</span>.
      </p>

      <p>
        <span className="italic">When I&apos;m not coding</span>, I enjoy making
        espresso ☕️, working out 🏋🏽‍♂️, playing fantasy football 🏈, traveling ✈️,
        and learning Greek 🇬🇷.
      </p>
    </motion.section>
  );
}
