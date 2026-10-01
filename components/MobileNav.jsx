"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
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

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      {/* --sh = hard shadow colour (black normally, white in dark mode) */}
      <SheetTrigger
        aria-label="Open menu"
        className="flex justify-center items-center border-2 border-black bg-[#FFC900] p-1.5 shadow-[3px_3px_0_0_var(--sh)] [--sh:#000] dark:[--sh:#fff] transition-all active:translate-x-[3px] active:translate-y-[3px] active:shadow-none"
      >
        <CiMenuFries className="text-[28px] text-black" />
      </SheetTrigger>

      <SheetContent
        className="flex flex-col border-l-2 border-black bg-[#FFC900] shadow-none overflow-y-auto [&>button]:border-2 [&>button]:border-black [&>button]:bg-white [&>button]:p-1 [&>button]:shadow-[3px_3px_0_0_#000] [&>button_svg]:text-black"
      >
        {/* logo */}
        <div className="mt-24 mb-16 text-center">
          <Link
            href="/"
            className="inline-block border-2 border-black bg-black px-5 py-2 shadow-[4px_4px_0_0_#FF90E8]"
          >
            <h1 className="text-4xl font-semibold text-white">
              ᗩᗪI<span className="text-[#FF90E8]">..</span>
            </h1>
          </Link>
        </div>

        {/* nav */}
        <nav className="flex flex-col justify-center items-center gap-5 px-6">
          {links.map((link, index) => {
            const isActive = link.path === pathname;

            return (
              <Link
                href={link.path}
                key={index}
                aria-current={isActive ? "page" : undefined}
                className={`w-full max-w-[240px] border-2 border-black py-2.5 text-center text-xl font-bold text-black capitalize shadow-[4px_4px_0_0_#000] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_#000] focus-visible:outline focus-visible:outline-4 focus-visible:outline-black ${
                  isActive ? "bg-[#FF90E8]" : "bg-white hover:bg-[#90A8ED]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;