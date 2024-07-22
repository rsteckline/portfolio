import React from "react";
import { Mail, Linkedin, Github } from "lucide-react";

function Footer() {
  return (
    <div className="py-6 text-center bg-cream">
      <a href="https://www.linkedin.com/in/rsteckline" className="inline-block mr-6 hover:cursor-pointer text-main">
        <Linkedin size={50} className="mx-auto" />
      </a>
      <a href="https://www.github.com/rsteckline" className="inline-block mr-8 hover:cursor-pointer text-main">
        <Github size={50} className="mx-auto" />
      </a>
      <a href="mailto:rsteckline@gmail.com" className="inline-block hover:cursor-pointer text-main">
        <Mail size={50} className="mx-auto" />
      </a>
    </div>
  );
}

export default Footer;
