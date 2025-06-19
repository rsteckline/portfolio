import React from "react";
import { SquareDashedBottomCode, MonitorSmartphone, BarChart4, ServerCog } from "lucide-react";

function Skills() {
  return (
    <div className="flex flex-wrap justify-center items-start mt-10 font-jetbrains">
      <div className="w-full md:w-1/2 lg:w-1/4 p-4 text-center">
        <SquareDashedBottomCode
          size={48}
          className="mx-auto mb-5 sm:mb-7"
        />
        <h3 className="text-xl font-bold mt-2 mb-4 text-main">
          Full-Stack Web Development
        </h3>
        <p className="sm:mb-7">
          Bringing together frontend design, backend architecture, and thoughtful problem-solving to build scalable, user-focused applications that perform reliably from end to end.
        </p>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/4 p-4 text-center">
        <MonitorSmartphone size={48} className="mx-auto mb-5 sm:mb-7" />
        <h3 className="text-xl font-bold mt-2 mb-4 text-main">
          Responsive User Interface Design
        </h3>
        <p className="sm:mb-7">
          Interfaces are built with adaptability in mind, ensuring a consistent, accessible experience for all users across screen sizes, devices, and assistive technologies.
        </p>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/4 p-4 text-center">
        <BarChart4 size={48} className="mx-auto mb-5 sm:mb-7" />
        <h3 className="text-xl font-bold mt-2 mb-4 text-main">
          Web Performance Optimization
        </h3>
        <p className="sm:mb-7">
          My work emphasizes speed and efficiency, ensuring that users experience fast load times and seamless interactions without sacrificing clarity or user accessibility.
        </p>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/4 p-4 text-center">
        <ServerCog size={48} className="mx-auto mb-5 sm:mb-7" />
        <h3 className="text-xl font-bold mt-2 mb-4 text-main">
          API Utilization and Testing
        </h3>
        <p>
          End-to-end development of REST APIs includes designing endpoints, integrating with client systems, and testing for stability, error handling, and consistent performance.
        </p>
      </div>
    </div>
  );
}

export default Skills;
