import React from "react";
import { Linkedin, Github, Mail, CalendarPlus } from "lucide-react";

function Footer() {
  return (
    <div className="py-6 text-center bg-cream">
      <a
        href="https://calendly.com/rsteckline/30min"
        className="inline-block hover:cursor-pointer mr-8 text-main"
        >
        <CalendarPlus size={64} className="mx-auto" />
      </a>
      <a
        href="https://www.linkedin.com/in/rsteckline"
        className="inline-block mr-7 hover:cursor-pointer text-main"
        >
        <Linkedin size={64} className="mx-auto" />
      </a>
      <a
        href="https://www.github.com/rsteckline"
        className="inline-block mr-8 hover:cursor-pointer text-main"
        >
        <Github size={64} className="mx-auto" />
      </a>
      <a
        href="mailto:rsteckline@gmail.com"
        className="inline-block hover:cursor-pointer text-main"
      >
        <Mail size={64} className="mx-auto" />
      </a>
    </div>
  );
}

export default Footer;
