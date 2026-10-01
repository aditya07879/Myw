"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function SuccessMessage({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          role="status"
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="
            fixed 
            top-6 
            left-1/2 
            -translate-x-1/2
            z-50
            w-[90%]
            max-w-md
            bg-[#7CE8A4]
            text-black
            border-2 border-black
            shadow-[6px_6px_0_0_#000]
            px-5 py-4
          "
        >
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center border-2 border-black bg-white text-xl font-extrabold">
              ✓
            </span>
            <p className="text-base font-bold">
              Message sent successfully!
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}