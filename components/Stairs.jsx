"use client";

import { motion } from "framer-motion";

const Stairs = () => {
  return (
    <>
      {/* Left panel */}
      <motion.div
        initial={{ x: "0%" }}
        animate={{
          x: "-100%",
          transition: { duration: 0.6, ease: "easeInOut" },
        }}
        exit={{
          x: "0%",
          transition: { duration: 0.6, ease: "easeInOut" },
        }}
        className="fixed inset-y-0 left-0 w-1/2 bg-[#FFC900] border-r-4 border-black z-50 pointer-events-none"
      />

      {/* Right panel */}
      <motion.div
        initial={{ x: "0%" }}
        animate={{
          x: "100%",
          transition: { duration: 0.6, ease: "easeInOut" },
        }}
        exit={{
          x: "0%",
          transition: { duration: 0.6, ease: "easeInOut" },
        }}
        className="fixed inset-y-0 right-0 w-1/2 bg-[#FF90E8] border-l-4 border-black z-50 pointer-events-none"
      />
    </>
  );
};

export default Stairs;