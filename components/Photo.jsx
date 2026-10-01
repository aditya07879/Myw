"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

// 24-point starburst used for the "Hi!" sticker
const STAR_CLIP = `polygon(${Array.from({ length: 24 }, (_, i) => {
  const a = (i / 24) * Math.PI * 2;
  const r = i % 2 ? 38 : 50;
  return `${(50 + r * Math.cos(a)).toFixed(2)}% ${(50 + r * Math.sin(a)).toFixed(2)}%`;
}).join(",")})`;

const Photo = () => {
  const reduce = useReducedMotion();

  return (
    <div className="w-full h-full relative flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="relative w-[298px] h-[298px] xl:w-[498px] xl:h-[498px]"
        >
          {/* tilted pink block behind the photo */}
          <div className="absolute inset-3 rotate-6 bg-[#FF90E8] border-4 border-ink" />

          {/* photo frame (leaves room for the hard shadow) */}
          <div className="absolute top-0 left-0 z-10 w-[calc(100%-14px)] h-[calc(100%-14px)] overflow-hidden border-4 border-ink bg-[#90A8ED] shadow-[10px_10px_0_0_var(--sh)]">
            <Image
              src="/assets/assets/photo.png"
              priority
              fill
              sizes="(min-width: 1280px) 498px, 298px"
              alt="profile photo"
              className="object-cover"
            />
          </div>

          {/* starburst sticker */}
          <div className="absolute -top-4 -right-1 xl:-top-6 xl:-right-6 z-20 w-20 h-20 xl:w-28 xl:h-28">
            <motion.div
              className="absolute inset-0"
              animate={reduce ? undefined : { rotate: 360 }}
              transition={{ duration: 18, ease: "linear", repeat: Infinity }}
            >
              <div
                className="absolute inset-0 bg-black"
                style={{ clipPath: STAR_CLIP }}
              />
              <div
                className="absolute inset-[4px] bg-[#FFC900]"
                style={{ clipPath: STAR_CLIP }}
              />
            </motion.div>
            <span className="absolute inset-0 flex items-center justify-center -rotate-6 text-xl xl:text-3xl font-extrabold text-black">
              Hi!
            </span>
          </div>

          {/* freelance sticker */}
          <span className="absolute -bottom-2 -left-2 xl:-bottom-3 xl:-left-6 z-20 -rotate-6 border-2 border-ink bg-white px-3 py-1 text-xs xl:text-base font-extrabold text-black shadow-[4px_4px_0_0_var(--sh)]">
            Freelance: Available
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Photo;