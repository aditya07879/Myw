"use client";

import { useEffect, useState } from "react";

const roles = ["Aditya Tomar", "Developer", "Writer", "Student"];

const TypingRoles = ({ speed = 120, pause = 1200 }) => {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    let timeout;

    if (!deleting && charIndex < currentRole.length) {
      timeout = setTimeout(() => {
        setText(currentRole.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, speed);
    } 
    else if (!deleting && charIndex === currentRole.length) {
      timeout = setTimeout(() => {
        setDeleting(true);
      }, pause);
    } 
    else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setText(currentRole.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, speed / 2);
    } 
    else if (deleting && charIndex === 0) {
      setDeleting(false);
      setRoleIndex((roleIndex + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex, speed, pause]);

  return (
    <span className="inline-block -rotate-1 min-w-[1.5ch] whitespace-nowrap bg-[#FFC900] text-black border-2 border-ink px-3 text-[0.85em] sm:text-[1em] shadow-[4px_4px_0_0_var(--sh)] [text-shadow:none]">
      {text}
      <span className="ml-1 inline-block h-[0.8em] w-[0.12em] translate-y-[0.05em] bg-black animate-pulse" />
    </span>
  );
};

export default TypingRoles;