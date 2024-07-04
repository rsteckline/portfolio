import React from "react";

function Intro() {
  return (
    <div className="flex items-center justift-center flex-col text-center pt-20 pb-6">
      <h1 className="text-4xl md:text-6xl mb-1 md:mb-3 font bold">
        Bobby Steckline
      </h1>
      <p className="text-base md:text-3xl mb-3 font-bold">Software Engineer</p>
      <p className="text-sm max-w-xl mb-6 font-bold">
        Over 10 years of management experience, specializing in JavaScript, CSS,
        HTML, React, TypeScript, Tailwind, and UI/UX design focused on
        accessibility through Agile/Scrum, OOP, TDD, and CI/CD development
        programming. I've led and collaborated on successful projects of all
        sizes, blending technical acumen with effective problem-solving and
        collaboration. My diverse engineering and hospitality experience
        highlight my innovative versatility and empathetic approach.
        <br /> 
        <br />
        <a
          href="http://www.github.com/rsteckline"
          target="_blank"
          className="text-blue-950 hover:underline underline-offset-2 decoration-2 decoration-blue-950"
          rel="noreferrer noopener"
        >
          GitHub
        </a>{"     "}
        <a
          href="http://www.linkedin.com/in/rsteckline"
          target="_blank"
          className="text-blue-950 hover:underline underline-offset-2 decoration-2 decoration-blue-950"
          rel="noreferrer noopener"
        >
          LinkedIn
        </a>
      </p>
    </div>
  );
}

export default Intro;
