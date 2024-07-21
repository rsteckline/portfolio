import React from "react";

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-8 pb-12 px-8 sm:px-12 md:px-16 lg:px-24 bg-cream font-jetbrains">
      <h1 className="text-3xl sm:text-4xl md:text-5xl mb-8 font-bold text-main">
        Bobby Steckline
      </h1>
      <p className="text-xl sm:text-2xl md:text-3xl mb-12 font-bold">Software Engineer</p>
      <p className="text-lg max-w-full md:max-w-3xl lg:max-w-4xl font-bold text-main">
        With over 10 years of management experience, I'm specializing in
        JavaScript, CSS, HTML, React, TypeScript, Tailwind, and UI/UX design
        focused on accessibility through Agile/Scrum, OOP, TDD, and CI/CD
        development programming. I've led and collaborated on successful
        projects of all sizes, blending technical acumen with effective
        problem-solving and collaboration. My diverse engineering and
        hospitality experience highlight my innovative versatility and
        empathetic approach.
      </p>
    </div>
  );
}

export default Intro;
