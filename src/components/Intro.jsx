import React from "react";

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pb-8 px-8 sm:px-12 md:px-16 lg:px-24 font-jetbrains">
      <div className="flex items-center w-full lg:max-w-3xl">
        <div className="flex-1">
          <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl mb-3 mt-4 font-bold text-main">
            Bobby Steckline
          </h1>
          <p className="text-lg sm:text-xl md:text-xl lg:text-2xl pb-6 font-bold">
            Software Engineer & Support Specialist
          </p>
          <p className="text-sm sm:text-md md:text-md lg:text-lg max-w-full md:max-w-3xl lg:max-w-3xl font-bold text-main">
            I'm a software engineer with a background in support and over 10 years of experience in team management and customer-facing roles. I focus on building accessible, user-friendly interfaces using JavaScript, React, TypeScript, HTML, CSS, and Tailwind. I'm comfortable working across Agile teams and enjoy balancing clean UI design with strong, test-driven development. Whether collaborating or leading, I bring a mix of technical skills and real-world problem-solving to every project.
          </p>
        </div>
        {/* <div className="ml-8 lg:ml-16 flex-shrink-0 hidden lg:block mt-[-150px]">
          <img src="/assets/me.png" alt="Bobby Steckline" className="w-60" />
        </div> */}
      </div>
    </div>
  );
}

export default Intro;
