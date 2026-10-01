"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

import SuccessMessage from "@/components/SuccessMessage";
import emailjs from "emailjs-com";
import { useState } from "react";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+91) 93XXXXXXXX",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "adityatomar07879@gmail.com",
    href: "mailto:adityatomar07879@gmail.com", // optional: makes the value a link
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Gwalior, Madhya Pradesh",
  },
];

const services = ["Web Development", "Backend Development", "Content Writing"];

/* ===================== NEO-BRUTALIST STYLE TOKENS ===================== */
/*
  --sh (set on the <section>) = hard shadow colour for cards sitting on the
  page background: black normally, white in dark mode.
  Elements inside white cards use a fixed black shadow instead.
*/
const BORDER = "border-2 border-black";
const FILLS = ["bg-[#FF90E8]", "bg-[#FFC900]", "bg-[#90A8ED]"];

// Overrides for the shared ui inputs (they merge over the defaults)
const FIELD =
  "rounded-none border-2 border-black bg-white text-black font-medium placeholder:text-black/50 focus:border-black focus:shadow-[4px_4px_0_0_#000] transition-shadow";

/* ===================== SMALL PIECES ===================== */

// Scrolling strip (decorative, stops for reduced-motion users)
function Marquee() {
  const reduce = useReducedMotion();

  const group = (
    <div className="flex shrink-0 items-center gap-6 pr-6">
      {Array.from({ length: 8 }).map((_, i) => (
        <span
          key={i}
          className="flex items-center gap-6 text-lg font-extrabold uppercase tracking-wide"
        >
          Say hello <span className="text-xl">★</span> Freelance available{" "}
          <span className="text-xl">★</span>
        </span>
      ))}
    </div>
  );

  return (
    <div
      aria-hidden="true"
      className={`${BORDER} shadow-[6px_6px_0_0_var(--sh)] overflow-hidden bg-[#FF90E8] text-black py-2 mb-10`}
    >
      <motion.div
        className="flex w-max whitespace-nowrap"
        animate={reduce ? undefined : { x: ["-50%", "0%"] }}
        transition={{ duration: 30, ease: "linear", repeat: Infinity }}
      >
        {group}
        {group}
      </motion.div>
    </div>
  );
}

// Numbered form section label
function Step({ n, children }) {
  return (
    <div className="flex items-center gap-3">
      <span
        className={`${BORDER} bg-black text-[#FFC900] px-2 py-0.5 text-sm font-extrabold`}
      >
        {n}
      </span>
      <span className="font-bold">{children}</span>
      <span className="flex-1 border-t-2 border-black" aria-hidden="true" />
    </div>
  );
}

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_dn5e9fn", // ✅ service id
        "template_p5qhv35", // ✅ template id
        e.target,
        "FUrRF4MY1vgvEMViT", // 🔁 replace with EmailJS public key
      )
      .then(
        () => {
          setSuccess(true); // show success animation
          e.target.reset(); // clear form
          setLoading(false);

          // auto-hide success message after 3 seconds
          setTimeout(() => {
            setSuccess(false);
          }, 3000);
        },
        (error) => {
          console.error(error);
          setLoading(false);
          // (optional) you can add an error animation later
        },
      );
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.2, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 [--sh:#000] dark:[--sh:#fff]"
    >
      <div className="mx-auto w-full max-w-6xl px-4">
        <Marquee />

        <div className="flex flex-col xl:flex-row gap-[40px]">
          <SuccessMessage show={success} />
          {/* FORM */}
          <div className="relative xl:w-[54%] order-2 xl:order-none">
            {/* tilted sticker */}
            <span
              className={`${BORDER} shadow-[3px_3px_0_0_#000] absolute -top-4 right-3 sm:right-6 z-10 rotate-3 bg-[#FF90E8] px-3 py-1 text-xs sm:text-sm font-extrabold text-black`}
            >
              Freelance: Available
            </span>

            <form
              onSubmit={sendEmail}
              className={`${BORDER} shadow-[8px_8px_0_0_var(--sh)] flex flex-col bg-white text-black`}
            >
              {/* window title bar */}
              <div className="flex items-center gap-3 h-10 shrink-0 border-b-2 border-black bg-[#FFC900] px-3">
                <span className="flex gap-1.5" aria-hidden="true">
                  <span className="w-3 h-3 border-2 border-black bg-[#FF90E8]" />
                  <span className="w-3 h-3 border-2 border-black bg-white" />
                  <span className="w-3 h-3 border-2 border-black bg-black" />
                </span>
                <span className="text-sm font-bold">new-message</span>
              </div>

              <div className="flex flex-col gap-6 p-6 sm:p-10">
                <h3
                  className={`${BORDER} shadow-[4px_4px_0_0_#000] bg-[#FFC900] text-black w-fit px-4 py-2 text-3xl sm:text-4xl font-extrabold tracking-tight`}
                >
                  Let&apos;s work together
                </h3>
                <p className="text-black/80 font-medium leading-relaxed">
                  Have an idea, project, or opportunity in mind? I’m always open to discussing new work, creative ideas, or collaborations. Drop your details and let’s connect.
                </p>

                <Step n="01">About you</Step>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    type="text"
                    name="firstname"
                    placeholder="Firstname"
                    required
                    className={FIELD}
                  />
                  <Input
                    type="text"
                    name="lastname"
                    placeholder="Lastname"
                    required
                    className={FIELD}
                  />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    className={FIELD}
                  />
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Mobile Number"
                    className={FIELD}
                  />
                </div>

                <Step n="02">What do you need?</Step>
                <fieldset className="flex flex-wrap gap-4">
                  <legend className="sr-only">Select a Service</legend>
                  {services.map((service) => (
                    <label key={service} className="cursor-pointer">
                      <input
                        type="radio"
                        name="service"
                        value={service}
                        className="peer sr-only"
                      />
                      <span
                        className={`${BORDER} block bg-white px-4 py-2 text-sm sm:text-base font-bold shadow-[3px_3px_0_0_#000] transition-all hover:bg-[#FFE3F8] peer-checked:translate-x-[3px] peer-checked:translate-y-[3px] peer-checked:bg-[#FFC900] peer-checked:shadow-none peer-focus-visible:outline peer-focus-visible:outline-4 peer-focus-visible:outline-[#FF90E8]`}
                      >
                        {service}
                      </span>
                    </label>
                  ))}
                </fieldset>

                <Step n="03">Your message</Step>
                <Textarea
                  name="message"
                  className={`h-[200px] focus-visible:ring-0 ${FIELD}`}
                  placeholder="Write your message here..."
                  required
                />

                <Button
                  type="submit"
                  size="md"
                  disabled={loading}
                  className="h-[56px] w-full sm:w-auto sm:min-w-[220px] gap-3 rounded-none border-2 border-black bg-[#FF90E8] text-black shadow-[4px_4px_0_0_#000] transition-all hover:bg-[#FFC900] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_#000] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending..." : "Send Message"}
                  <FaPaperPlane aria-hidden="true" />
                </Button>
              </div>
            </form>
          </div>

          {/* INFO */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-8 w-full xl:w-auto xl:max-w-[440px]">
              {info.map((item, index) => (
                <li
                  key={index}
                  className={`${BORDER} shadow-[6px_6px_0_0_var(--sh)] bg-white text-black flex items-center gap-4 sm:gap-6 p-3 pr-5 transition-transform ${
                    index % 2 === 0 ? "xl:-rotate-1" : "xl:rotate-1"
                  } xl:hover:rotate-0`}
                >
                  <div
                    className={`${BORDER} ${FILLS[index % FILLS.length]} shrink-0 w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] text-black flex items-center justify-center`}
                  >
                    <div className="text-[28px]">{item.icon}</div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-black/60">
                      {item.title}
                    </p>
                    <h3 className="text-lg sm:text-xl font-extrabold break-words">
                      {item.href ? (
                        <a
                          href={item.href}
                          className="underline decoration-2 underline-offset-4 hover:bg-[#FFC900]"
                        >
                          {item.description}
                        </a>
                      ) : (
                        item.description
                      )}
                    </h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}