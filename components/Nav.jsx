"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "Projects",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

function Nav() {
  const pathname = usePathname();

  return (
    // --sh = hard shadow colour (black normally, white in dark mode)
    <nav className="flex gap-8 [--sh:#000] dark:[--sh:#fff]">
      {Links.map((link, index) => {
        const isActive = link.path === pathname;

        return (
          <Link
            href={link.path}
            key={index}
            aria-current={isActive ? "page" : undefined}
            className={`border-2 border-black px-4 py-1.5 text-black capitalize font-bold shadow-[4px_4px_0_0_var(--sh)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_var(--sh)] focus-visible:outline focus-visible:outline-4 focus-visible:outline-[#FF90E8] ${
              isActive ? "bg-[#FF90E8]" : "bg-white hover:bg-[#FFC900]"
            }`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}

export default Nav;