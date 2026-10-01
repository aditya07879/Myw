"use client";

import { useEffect, useState } from "react";
import { Palette } from "lucide-react";

const themes = ["pink", "purple", "blue", "green", "orange"];

// swatch colour shown on the button for the current theme
const swatches = {
  pink: "#e6007e",
  purple: "#7c3aed",
  blue: "#2563eb",
  green: "#16a34a",
  orange: "#ea580c",
};

const ThemeToggle = () => {
  const [index, setIndex] = useState(0); 

  
  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      themes[index]
    );
  }, [index]);

  const changeTheme = () => {
    setIndex((prev) => (prev + 1) % themes.length);
  };

  return (
    <button
      onClick={changeTheme}
      className="
        fixed bottom-6 right-6 z-50
        w-12 h-12
        flex items-center justify-center
        bg-[#FFC900] text-black
        border-2 border-ink
        shadow-[4px_4px_0_0_var(--sh)]
        transition-all
        hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_var(--sh)]
        active:translate-x-[4px] active:translate-y-[4px] active:shadow-none
      "
      aria-label={`Change accent theme (current: ${themes[index]})`}
    >
      <Palette className="w-5 h-5" />
      <span
        aria-hidden="true"
        className="absolute -top-2 -right-2 w-5 h-5 border-2 border-black"
        style={{ backgroundColor: swatches[themes[index]] }}
      />
    </button>
  );
};

export default ThemeToggle;