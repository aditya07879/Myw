"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

/*
  To add a project, copy one object into the list.
  - live / github: leave "" if there isn't one yet; the button shows as disabled.
  - image: put the screenshot in /public/assets/assets/work/
*/
const projects = [
  {
    num: "01",
    category: "Issue Management",
    title: "CIMS",
    description:
      "A full-stack role-based MERN platform where students raise classroom issues anonymously and mentors/admins track and resolve them. Features JWT role-based auth (Student/Mentor/Admin), classroom-matched issue routing, voting, soft-delete with an audit trail, and rate-limiting to prevent spam.",
    stack: [
      { name: "MongoDB" },
      { name: "Express.js" },
      { name: "React" },
      { name: "Node.js" },
      { name: "JWT Auth" },
      { name: "Role-based Access" },
    ],
    image: "/assets/assets/work/cims.png",
    live: "https://cims-ten.vercel.app/",
    github: "", // add your CIMS repo link
  },
  {
    num: "02",
    category: "Real-time Polling",
    title: "Pollr",
    description:
      "A real-time polling app (MERN + Socket.IO) where votes update live across all viewers with no refresh. Features JWT auth, shareable no-login voting via UUID links, duplicate-vote prevention, server-enforced poll expiry, and a creator dashboard.",
    stack: [
      { name: "MongoDB" },
      { name: "Express.js" },
      { name: "React" },
      { name: "Node.js" },
      { name: "Socket.IO" },
      { name: "JWT Auth" },
    ],
    image: "/assets/assets/work/pollr.png",
    live: "https://pollr-blue.vercel.app/",
    github: "", // add your Pollr repo link
  },
  {
    num: "03",
    category: "AI Summarizer",
    title: "READHUB.io",
    description:
      "An AI-powered text and PDF summarizer designed to turn long content into clean, accurate summaries instantly.",
    stack: [
      { name: "Express.js" },
      { name: "MongoDB" },
      { name: "Payment Gateways" },
      { name: "Generative AI Tools" },
      { name: "OAuth" },
      { name: "Javascript" },
    ],
    image: "/assets/assets/work/thum1.png",
    live: "",
    github: "https://github.com/aditya07879/READHUB.io",
  },
  {
    num: "04",
    category: "Voting System",
    title: "VoteHUB",
    description:
      "A secure, small-scale digital voting platform that automates the entire voting process—from user registration to real-time result generation. ",
    stack: [
      { name: "Javascript" },
      { name: "Express" },
      { name: "MongoDB" },
      { name: "Digital Authentication" },
    ],
    image: "/assets/assets/work/thum2.png",
    live: "https://votehubs.onrender.com",
    github: "https://github.com/aditya07879/V2",
  },
  {
    num: "05",
    category: "Blogging Site",
    title: "BLOGHUB",
    description:
      "BlogHUB is a full-stack blog platform built using Node.js, Express.js, and MongoDB. It lets users register, log in, and manage their blogs securely with JWT authentication. ",
    stack: [
      { name: "Javascript" },
      { name: "Express" },
      { name: "MongoDB" },
      { name: "Mongoose ODM" },
    ],
    image: "/assets/assets/work/thum3.png",
    live: "",
    github: "https://github.com/aditya07879/BLOG_HUB_PROJECTCODE",
  },
];

/* ===================== NEO-BRUTALIST STYLE TOKENS ===================== */
/*
  --sh (set on the <section>) = hard shadow colour for cards sitting on the
  page background: black normally, white in dark mode.
  Elements INSIDE the white card use a fixed black shadow instead.
*/
const BORDER = "border-2 border-black";
const SHADOW = "shadow-[8px_8px_0_0_var(--sh)]";
const SHADOW_IN = "shadow-[4px_4px_0_0_#000]";
const FILLS = ["bg-[#FF90E8]", "bg-[#FFC900]", "bg-[#90A8ED]"];

const BTN = `${BORDER} ${SHADOW_IN} inline-flex items-center justify-center gap-2 h-[52px] px-5 text-base font-bold text-black transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[1px_1px_0_0_#000] focus-visible:outline focus-visible:outline-4 focus-visible:outline-[#FF90E8]`;

/* ===================== SMALL PIECES ===================== */

// Scrolling "Selected Work" strip (decorative, stops for reduced-motion users)
function Marquee() {
  const reduce = useReducedMotion();

  const group = (
    <div className="flex shrink-0 items-center gap-6 pr-6">
      {Array.from({ length: 8 }).map((_, i) => (
        <span
          key={i}
          className="flex items-center gap-6 text-lg font-extrabold uppercase tracking-wide"
        >
          Selected Work <span className="text-xl">★</span>
        </span>
      ))}
    </div>
  );

  return (
    <div
      aria-hidden="true"
      className={`${BORDER} shadow-[6px_6px_0_0_var(--sh)] overflow-hidden bg-[#FFC900] text-black py-2 mb-10`}
    >
      <motion.div
        className="flex w-max whitespace-nowrap"
        animate={reduce ? undefined : { x: ["0%", "-50%"] }}
        transition={{ duration: 25, ease: "linear", repeat: Infinity }}
      >
        {group}
        {group}
      </motion.div>
    </div>
  );
}

/* ===================== COMPONENT ===================== */

function Work() {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 [--sh:#000] dark:[--sh:#fff]"
    >
      <div className="mx-auto w-full max-w-6xl px-4">
        <Marquee />

        <div className="flex flex-col xl:flex-row xl:gap-[40px]">
          {/* LEFT: project info card */}
          <div className="w-full xl:w-[50%] order-2 xl:order-none xl:self-start">
            <div
              className={`${BORDER} ${SHADOW} bg-white text-black p-6 sm:p-8 xl:min-h-[460px]`}
            >
              <motion.div
                key={project.num}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="flex flex-col gap-6"
              >
                {/* number + progress squares */}
                <div className="flex items-center justify-between gap-4">
                  <div
                    className={`${BORDER} bg-black text-[#FFC900] px-4 py-2 text-5xl sm:text-6xl leading-none font-extrabold`}
                  >
                    {project.num}
                  </div>

                  <div className="flex items-center gap-2" aria-hidden="true">
                    {projects.map((p) => (
                      <span
                        key={p.num}
                        className={`w-4 h-4 sm:w-6 sm:h-6 border-2 border-black ${
                          p.num === project.num ? "bg-[#FF90E8]" : "bg-white"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="sr-only">
                    Project {project.num} of {projects.length}
                  </span>
                </div>

                {/* category + title */}
                <div className="flex flex-col gap-3">
                  <span
                    className={`${BORDER} ${FILLS[1]} w-fit px-3 py-1 text-sm font-bold capitalize`}
                  >
                    {project.category}
                  </span>
                  <h2 className="text-4xl sm:text-5xl font-extrabold leading-none tracking-tight break-words">
                    {project.title}
                  </h2>
                </div>

                {/* description */}
                <p className="font-medium leading-relaxed text-black/80">
                  {project.description}
                </p>

                {/* stack */}
                <ul className="flex flex-wrap gap-2 max-w-full">
                  {project.stack.map((item, index) => (
                    <li
                      key={index}
                      className={`${BORDER} ${FILLS[index % FILLS.length]} px-2.5 py-0.5 text-xs sm:text-sm font-bold whitespace-nowrap`}
                    >
                      {item.name}
                    </li>
                  ))}
                </ul>

                {/* border */}
                <div className="border-t-2 border-black"></div>

                {/* buttons */}
                <TooltipProvider delayDuration={100}>
                  <div className="flex flex-wrap items-center gap-4">
                    {project.live ? (
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${BTN} bg-[#FF90E8]`}
                          >
                            <BsArrowUpRight className="text-xl" />
                            Live project
                          </a>
                        </TooltipTrigger>
                        <TooltipContent className="rounded-none border-2 border-black font-bold text-sm">
                          <p>Open live project</p>
                        </TooltipContent>
                      </Tooltip>
                    ) : (
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <span
                            tabIndex={0}
                            aria-disabled="true"
                            className={`${BORDER} inline-flex items-center justify-center gap-2 h-[52px] px-5 text-base font-bold text-black/50 bg-white border-dashed cursor-not-allowed`}
                          >
                            <BsArrowUpRight className="text-xl" />
                            Live project
                          </span>
                        </TooltipTrigger>
                        <TooltipContent className="rounded-none border-2 border-black font-bold text-sm">
                          <p>Live demo coming soon</p>
                        </TooltipContent>
                      </Tooltip>
                    )}

                    {project.github ? (
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${BTN} bg-[#90A8ED]`}
                          >
                            <BsGithub className="text-xl" />
                            GitHub
                          </a>
                        </TooltipTrigger>
                        <TooltipContent className="rounded-none border-2 border-black font-bold text-sm">
                          <p>Github Repository</p>
                        </TooltipContent>
                      </Tooltip>
                    ) : (
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <span
                            tabIndex={0}
                            aria-disabled="true"
                            className={`${BORDER} inline-flex items-center justify-center gap-2 h-[52px] px-5 text-base font-bold text-black/50 bg-white border-dashed cursor-not-allowed`}
                          >
                            <BsGithub className="text-xl" />
                            GitHub
                          </span>
                        </TooltipTrigger>
                        <TooltipContent className="rounded-none border-2 border-black font-bold text-sm">
                          <p>Repository link coming soon</p>
                        </TooltipContent>
                      </Tooltip>
                    )}
                  </div>
                </TooltipProvider>
              </motion.div>
            </div>
          </div>

          {/* RIGHT: slider */}
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((item, index) => {
                return (
                  // padding leaves room inside the slide for the hard shadow
                  <SwiperSlide key={index} className="w-full pr-[10px] pb-[10px]">
                    <div
                      className={`${BORDER} ${SHADOW} h-[460px] bg-white flex flex-col`}
                    >
                      {/* browser-window title bar */}
                      <div className="flex items-center gap-3 h-10 shrink-0 border-b-2 border-black bg-[#FFC900] px-3 text-black">
                        <span className="flex gap-1.5" aria-hidden="true">
                          <span className="w-3 h-3 border-2 border-black bg-[#FF90E8]" />
                          <span className="w-3 h-3 border-2 border-black bg-white" />
                          <span className="w-3 h-3 border-2 border-black bg-black" />
                        </span>
                        <span className="truncate text-sm font-bold">
                          {item.title}
                        </span>
                        <span className="ml-auto text-sm font-extrabold">
                          {item.num}
                        </span>
                      </div>

                      {/* image */}
                      <div className="relative flex-1 bg-[#90A8ED]/40">
                        <Image
                          src={item.image}
                          fill
                          sizes="(min-width: 1280px) 560px, 100vw"
                          className="object-cover"
                          alt={`${item.title} preview`}
                        />
                        <span
                          className={`${BORDER} ${SHADOW_IN} absolute left-3 bottom-3 z-10 -rotate-3 bg-[#FF90E8] px-3 py-1 text-sm font-extrabold text-black`}
                        >
                          {item.category}
                        </span>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 pr-[10px] bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-[#FFC900] hover:bg-[#FF90E8] text-black text-[22px] w-[44px] h-[44px] flex justify-center items-center border-2 border-black shadow-[3px_3px_0_0_#000] transition-all active:translate-x-[3px] active:translate-y-[3px] active:shadow-none"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Work;