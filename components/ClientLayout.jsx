"use client";

import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import ThemeToggle from "./ThemeToggle";


export default function ClientLayout({ children }) {
  return (
    <>
      <StairTransition />
      <PageTransition>
        {children}
      </PageTransition>

      {/* floating theme toggle */}
      
    </>
  );
}
