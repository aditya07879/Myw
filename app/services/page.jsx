"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

/*
  href: where the arrow button goes. Leave "" and it opens /contact.
*/
const services = [
  {
    num: "01",
    title: "Web Development",
    description: "Modern, fast, and responsive websites built to scale.",
    href: "",
  },
  {
    num: "02",
    title: "API & Backend Services",
    description: "Reliable backend systems with clean architecture.",
    href: "",
  },
  {
    num: "03",
    title: "Performance & Optimization",
    description: "Improving speed, SEO, and overall user experience.",
    href: "",
  },
];

/* ===================== NEO-BRUTALIST STYLE TOKENS ===================== */
/*
  --sh (set on the <section>) = hard shadow colour for cards sitting on the
  page background: black normally, white in dark mode.
*/
const BORDER = "border-2 border-black";
const FILLS = ["bg-[#FF90E8]", "bg-[#FFC900]", "bg-[#90A8ED]"];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { delayChildren: 2.4, staggerChildren: 0.15, duration: 0.4 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

function Services() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 [--sh:#000] dark:[--sh:#fff]">
      <div className="mx-auto w-full max-w-6xl px-4">
        {/* header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="flex flex-wrap items-center gap-4 mb-12"
        >
          <h1
            className={`${BORDER} shadow-[6px_6px_0_0_var(--sh)] bg-[#FFC900] text-black px-4 py-2 text-3xl sm:text-4xl font-extrabold tracking-tight`}
          >
            What I do
          </h1>
          <span
            className={`${BORDER} bg-black text-[#FFC900] px-3 py-1 text-sm font-extrabold -rotate-2`}
          >
            {String(services.length).padStart(2, "0")} services
          </span>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px] lg:pb-10"
        >
          {services.map((service, index) => {
            const spanLast =
              services.length % 2 === 1 && index === services.length - 1;

            return (
              <motion.div
                key={index}
                variants={item}
                className={`${spanLast ? "md:col-span-2 lg:col-span-1" : ""} ${
                  index === 1 ? "lg:translate-y-10" : ""
                }`}
              >
                <div
                  className={`${BORDER} ${FILLS[index % FILLS.length]} shadow-[8px_8px_0_0_var(--sh)] h-full text-black flex flex-col gap-6 p-6 sm:p-8 group transition-all hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0_0_var(--sh)]`}
                >
                  <div className="w-full flex justify-between items-center gap-4">
                    <div
                      className={`${BORDER} bg-black text-[#FFC900] px-4 py-2 text-5xl leading-none font-extrabold`}
                    >
                      {service.num}
                    </div>
                    <Link
                      href={service.href || "/contact"}
                      aria-label={`Discuss ${service.title}`}
                      className={`${BORDER} shadow-[4px_4px_0_0_#000] w-[64px] h-[64px] shrink-0 bg-white flex justify-center items-center transition-all hover:bg-[#FFC900] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none focus-visible:outline focus-visible:outline-4 focus-visible:outline-black`}
                    >
                      <BsArrowDownRight className="text-3xl text-black transition-transform duration-300 group-hover:-rotate-45" />
                    </Link>
                  </div>

                  <h2 className="text-3xl sm:text-[34px] font-extrabold leading-none tracking-tight break-words">
                    {service.title}
                  </h2>

                  <div className="border-t-2 border-black w-full"></div>

                  <p className="font-medium leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Services;