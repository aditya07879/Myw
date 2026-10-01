import Link from "next/link";

import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";


import { FaXTwitter } from "react-icons/fa6";
import { SiHashnode } from "react-icons/si";

const socials = [
  { name: "GitHub", icon: <FaGithub />, path: "https://github.com/aditya07879" },
  { name: "LinkedIn", icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/07879adityatomar/" },
  { name: "X", icon: <FaXTwitter />, path: "https://x.com/aditya_tmr24" },
  { name: "Instagram", icon: <FaInstagram />, path: "https://www.instagram.com/adityatomar_______/" },
  { name: "Hashnode", icon: <SiHashnode />, path: "https://hashnode.com/@aditya07879" },
];

// each icon turns a different brutalist colour on hover
const HOVERS = ["hover:bg-[#FF90E8]", "hover:bg-[#FFC900]", "hover:bg-[#90A8ED]"];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.name}
            title={item.name}
            className={`${iconStyles ?? ""} ${HOVERS[index % HOVERS.length]}`}
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};


export default Socials