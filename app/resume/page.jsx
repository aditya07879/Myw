"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaDocker,
  FaNodeJs,
  FaBriefcase,
  FaExternalLinkAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiGooglegemini,
  SiNestjs,
  SiRedis,
} from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";

/* ===================== DATA ===================== */

/*
  ABOUT
  Items sit in a 2-column grid, so keep an EVEN number of normal items.
  Set `wide: true` on an item (like Email) to make it span the full width.
*/
const about = {
  title: "About Me",
  description:
    "I’m a passionate web developer focused on building modern, user-friendly web applications with clean code and practical solutions.",
  info: [
    { fieldName: "Name:", fieldValue: "Aditya Tomar" },
    { fieldName: "Experience:", fieldValue: "Web Developer" },
    { fieldName: "Nationality:", fieldValue: "Indian" },
    { fieldName: "Languages:", fieldValue: "English, Hindi" },
    { fieldName: "X:", fieldValue: "@aditya_07879" },
    { fieldName: "Freelance:", fieldValue: "Available" },
    {
      fieldName: "Email:",
      fieldValue: "adityatomar07879@gmail.com",
      wide: true,
    },
  ],
};

/*
  EXPERIENCE
  To add a new job, copy one object into `items` (newest first).
  - logo:  OPTIONAL. Put the image in /public (e.g. /public/logos/reliance.png)
           and set logo: "/logos/reliance.png". If empty, a briefcase icon shows.
  - type, location, description, skills: all OPTIONAL.
*/
const experience = {
  title: "My Experience",
  description: "Where I've worked so far.",
  emptyText: "No corporate working experience till now.",
  items: [
    {
      logo: "/logos/abkps.png", // update to your actual logo file path
      company: "Abkps Outsourcing Private Limited",
      role: "Front Desk Executive",
      type: "Full-time",
      duration: "Oct 2026 - Present",
      location: "Gwalior, Madhya Pradesh, India (On-site)",
      description:
        "Manage front desk operations and serve as a point of contact for international clients. Handle guest and client communication, support day-to-day hotel operations, and use hotel management tools like Grizlu and HotelKey to keep bookings and records accurate.",
      skills: [
        "International Client Relations",
        "Grizlu",
        "HotelKey",
        "Hotel Operations",
        "Communication",
        "Calling Dashboard",
      ],
    },
    {
      logo: "/logos/reliance.jpg", // e.g. "/logos/reliance.png"
      company: "Reliance Retail",
      role: "Cash Management Associate",
      type: "Part-time",
      duration: "Jul 2026 - Sep 2026",
      location: "Gwalior, Madhya Pradesh, India (On-site)",
      description:
        "Handled high-volume transactions with a focus on fiscal accuracy. Optimized front-end throughput, maintained zero-discrepancy cash drawers, and delivered strong service recovery to build customer loyalty.",
      skills: ["Cash Management", "Point of Sale (POS) Systems","Problem Solving", "Customer Handling"],
    },
  ],
};

/*
  EDUCATION
  - certificate: OPTIONAL. Put the image in /public (e.g. /public/certificates/backend.png)
                 and set certificate: "/certificates/backend.png".
                 A small preview shows on the card; clicking it opens the full image.
*/
const education = {
  title: "My Education",
  description: "Academic and online learning background.",
  items: [
    {
      Institution: "ITM GOI",
      degree: "Bachelors in Computer Science",
      duration: "4 Years",
      certificate: "",
    },
    {
      Institution: "Pragati Vidya Peeth",
      degree: "High School",
      duration: "2 Years",
      certificate: "",
    },
    {
      Institution: "Online Platform",
      degree: "Backend Development",
      duration: "6 Months",
      certificate: "/certificates/fullstack.png", // e.g. "/certificates/backend.png"
    },
  ],
};

const skills = {
  title: "My Skills",
  description: "Technologies and tools I work with.",
  skillList: [
    { icon: <FaHtml5 />, name: "HTML" },
    { icon: <FaCss3 />, name: "CSS" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaReact />, name: "React" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiPostgresql />, name: "PostgreSQL" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <FaDocker />, name: "Docker" },
    { icon: <SiGooglegemini />, name: "Gemini" },
    { icon: <SiNestjs />, name: "NestJs" },
    { icon: <SiRedis />, name: "Redis" },
  ],
};

/* ===================== NEO-BRUTALIST STYLE TOKENS ===================== */
/*
  Shadow colour comes from the --sh variable set on the <section> below:
  black normally, white when the `dark:` variant is active.
  Change FILLS to re-colour the whole page.
*/
const BORDER = "border-2 border-black";
const SHADOW = "shadow-[6px_6px_0_0_var(--sh)]";
const PRESS =
  "transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0_0_var(--sh)]";
const FILLS = ["bg-[#FF90E8]", "bg-[#FFC900]", "bg-[#90A8ED]"];

/* ===================== SMALL PIECES ===================== */

// Big yellow title block
function SectionTitle({ children, centered = false }) {
  return (
    <h3
      className={`${BORDER} ${SHADOW} bg-[#FFC900] text-black w-fit px-4 py-2 text-3xl sm:text-4xl font-extrabold tracking-tight ${
        centered ? "self-center xl:self-start" : ""
      }`}
    >
      {children}
    </h3>
  );
}

// Description in a white box
function SectionText({ children, centered = false }) {
  return (
    <p
      className={`${BORDER} bg-white text-black max-w-[600px] p-4 font-medium ${
        centered ? "mx-auto xl:mx-0 text-center xl:text-left" : ""
      }`}
    >
      {children}
    </p>
  );
}

// Company logo, or a briefcase icon when no logo is set
function CompanyLogo({ src, name }) {
  if (!src) {
    return (
      <div
        className={`${BORDER} shrink-0 w-16 h-16 bg-[#FFC900] flex items-center justify-center text-black text-2xl`}
      >
        <FaBriefcase aria-hidden="true" />
      </div>
    );
  }

  return (
    <div
      className={`${BORDER} relative shrink-0 w-16 h-16 bg-white overflow-hidden`}
    >
      <Image
        src={src}
        alt={`${name} logo`}
        fill
        sizes="64px"
        className="object-contain p-1.5"
      />
    </div>
  );
}

// Small certificate preview that opens the full image in a new tab
function CertificateThumb({ src, title }) {
  return (
    <a
      href={src}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View certificate: ${title}`}
      className={`${BORDER} group relative shrink-0 w-24 sm:w-28 aspect-[4/3] overflow-hidden bg-white`}
    >
      <Image
        src={src}
        alt={`${title} certificate`}
        fill
        sizes="(min-width: 640px) 112px, 96px"
        className="object-cover"
      />
      <span className="absolute inset-0 flex items-center justify-center bg-black/70 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity text-white">
        <FaExternalLinkAlt aria-hidden="true" />
      </span>
    </a>
  );
}

/* ===================== COMPONENT ===================== */

export default function Resume() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.4, ease: "easeIn" }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 [--sh:#000] dark:[--sh:#fff]"
    >
      <div className="mx-auto w-full max-w-6xl px-4">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          {/* LEFT */}
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            {[
              ["experience", "Experience"],
              ["education", "Education"],
              ["skills", "Skills"],
              ["about", "About me"],
            ].map(([value, label]) => (
              <TabsTrigger
                key={value}
                value={value}
                className={`${BORDER} ${SHADOW} ${PRESS} rounded-none bg-white text-black font-bold p-3 sm:p-4 text-lg focus-visible:outline focus-visible:outline-4 focus-visible:outline-[#FF90E8] data-[state=active]:bg-[#FF90E8] data-[state=active]:text-black data-[state=active]:shadow-[6px_6px_0_0_var(--sh)]`}
              >
                {label}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* RIGHT */}
          <div className="w-full min-h-[70vh]">
            {/* EXPERIENCE */}
            <TabsContent value="experience">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px]">
                  <SectionTitle centered>{experience.title}</SectionTitle>
                  <SectionText centered>
                    {experience.items.length > 0
                      ? experience.description
                      : experience.emptyText}
                  </SectionText>
                </div>

                {experience.items.length > 0 && (
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 gap-[30px] pr-4 pb-4">
                      {experience.items.map((item, index) => (
                        <li
                          key={`${item.company}-${index}`}
                          className={`${BORDER} ${SHADOW} bg-white text-black py-6 px-6 sm:px-10 flex flex-col sm:flex-row gap-5`}
                        >
                          <CompanyLogo src={item.logo} name={item.company} />

                          <div className="flex flex-col gap-2 min-w-0">
                            <div className="flex flex-wrap gap-2">
                              <span
                                className={`${BORDER} bg-[#FF90E8] px-2 py-0.5 text-sm font-bold`}
                              >
                                {item.duration}
                              </span>
                              {item.type && (
                                <span
                                  className={`${BORDER} bg-white px-2 py-0.5 text-sm font-bold`}
                                >
                                  {item.type}
                                </span>
                              )}
                            </div>
                            <h3 className="text-xl font-extrabold leading-tight">
                              {item.role}
                            </h3>
                            <p className="font-semibold break-words">
                              {item.company}
                            </p>
                            {item.location && (
                              <p className="text-black/70 text-sm">
                                {item.location}
                              </p>
                            )}
                            {item.description && (
                              <p className="text-black/80 text-sm leading-relaxed mt-1">
                                {item.description}
                              </p>
                            )}
                            {item.skills?.length > 0 && (
                              <ul className="flex flex-wrap gap-2 mt-2">
                                {item.skills.map((skill) => (
                                  <li
                                    key={skill}
                                    className={`${BORDER} bg-[#FFC900] rounded-full text-xs font-semibold px-3 py-1`}
                                  >
                                    {skill}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </ScrollArea>
                )}
              </div>
            </TabsContent>

            {/* EDUCATION */}
            <TabsContent value="education">
              <div className="flex flex-col gap-[30px]">
                <SectionTitle>{education.title}</SectionTitle>
                <SectionText>{education.description}</SectionText>

                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] pr-4 pb-4">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className={`${BORDER} ${SHADOW} ${FILLS[index % FILLS.length]} text-black min-h-[184px] py-6 px-6 sm:px-10 flex items-center justify-between gap-4`}
                      >
                        <div className="flex flex-col gap-2 min-w-0">
                          <span
                            className={`${BORDER} bg-white w-fit px-2 py-0.5 text-sm font-bold`}
                          >
                            {item.duration}
                          </span>
                          <h3 className="text-xl font-extrabold leading-tight">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-2">
                            <span className="w-[8px] h-[8px] bg-black shrink-0" />
                            <p className="font-medium text-black/80">
                              {item.Institution}
                            </p>
                          </div>
                        </div>

                        {item.certificate && (
                          <CertificateThumb
                            src={item.certificate}
                            title={item.degree}
                          />
                        )}
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* SKILLS */}
            <TabsContent value="skills">
              <div className="flex flex-col gap-[30px]">
                <SectionTitle>{skills.title}</SectionTitle>
                <SectionText>{skills.description}</SectionText>

                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-[30px] pr-2 pb-2">
                  {skills.skillList.map((skill, index) => (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger
                            className={`${BORDER} ${SHADOW} ${PRESS} ${FILLS[index % FILLS.length]} text-black w-full h-[150px] flex justify-center items-center group`}
                          >
                            <div className="text-6xl transition-transform duration-300 group-hover:scale-110">
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent className="rounded-none border-2 border-black font-bold text-sm">
                            <p>{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            {/* ABOUT */}
            <TabsContent value="about">
              <div className="flex flex-col gap-[30px]">
                <SectionTitle>{about.title}</SectionTitle>
                <SectionText>{about.description}</SectionText>

                {/* Symmetric grid: equal-height cards, label bar on top, value below */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-[30px] w-full max-w-[720px] pr-2 pb-2">
                  {about.info.map((item, index) => (
                    <li
                      key={item.fieldName}
                      className={`${BORDER} ${SHADOW} bg-white text-black flex flex-col ${
                        item.wide ? "sm:col-span-2" : ""
                      }`}
                    >
                      <span
                        className={`border-b-2 border-black px-4 py-1.5 text-sm font-bold ${
                          item.wide
                            ? "bg-[#90A8ED]"
                            : index % 2 === 0
                              ? "bg-[#FF90E8]"
                              : "bg-[#FFC900]"
                        }`}
                      >
                        {item.fieldName.replace(/:$/, "")}
                      </span>
                      <span
                        className={`flex-1 flex items-center px-4 py-4 text-lg font-semibold ${
                          item.wide ? "break-all" : "break-words"
                        }`}
                      >
                        {item.fieldValue}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.section>
  );
}
