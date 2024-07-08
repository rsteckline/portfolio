import React from "react";

function Footer() {
  return (
    <div className="py-5 text-center">
      {/* Social Icons */}
      <p className="text-sm mt-2 opacity-50 ">
        Bobby Steckline ||
        <span className="relative inline-block mx-2">
          <a href="https://www.github.com/rsteckline" className="group">
            github.com/rsteckline
            <span className="absolute inset-x-0 -bottom-1 h-px bg-gradient-to-r from-cyan-800/0 via-cyan-800 to-cyan-800/0 opacity-0 transition-opacity duration-200 group-hover:opacity-100"></span>
          </a>
        </span>
        || 773-789-7696
      </p>
    </div>
  );
}

export default Footer;