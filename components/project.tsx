"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { projectsData } from "@/lib/data";
import Link from "next/link";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  link,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <Link
        href={link || ""}
        onClick={(e) => !link && e.preventDefault()}
        target={link ? "_blank" : undefined}
        className={`block ${!link ? "cursor-not-allowed" : "cursor-pointer"}`}
      >
        <section
          className={`bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[24rem] ${link ? "hover:bg-gray-200" : ""} transition sm:group-even:pl-8 rounded-lg dark:bg-white/10 ${link ? "dark:hover:bg-white/20" : ""} dark:text-white`}
        >
          <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-8 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
            {!link && (
              <span className="text-sm text-white bg-yellow-600 rounded-full px-3 py-1 w-fit">
                Coming Soon
              </span>
            )}
            <h3 className="text-2xl mt-1 font-semibold">{title}</h3>
            <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
              {description}
            </p>
            <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
              {tags.map((tag, index) => (
                <li
                  key={index}
                  className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <Image
            src={imageUrl}
            alt="Project I worked on"
            quality={95}
            className="absolute hidden sm:block top-12 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl group-even:right-[initial] group-even:-left-40 group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 transition group-hover:scale-[1.04] group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2"
          ></Image>

          {!link && (
            <div className="absolute inset-0 z-20">
              <Image
                src="/construction_tape.png"
                alt="Under Construction"
                fill
                className="rotate-[8deg] -translate-y-8 translate-x-8 opacity-60"
              />
            </div>
          )}
        </section>
      </Link>
    </motion.div>
  );
}
