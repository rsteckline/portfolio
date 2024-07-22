import React from "react";
import { SquareDashedBottomCode, MonitorSmartphone, BarChart4, ServerCog } from "lucide-react";

function Skills() {
  return (
    <div className="flex flex-wrap justify-center items-start mt-16 sm:mt-10 mb-16 font-jetbrains">
      <div className="w-full md:w-1/2 lg:w-1/4 p-4 text-center">
        <SquareDashedBottomCode
          size={48}
          className="mx-auto mb-5 sm:mb-7"
        />
        <h3 className="text-xl font-bold mt-2 mb-4 text-main">
          Full-Stack Web Development
        </h3>
        <p className="sm:mb-7">
          I dive deep into both front and back-end development to deliver end-to-end solutions. It’s all about creating seamless experiences that feel intuitive and dynamic for the users.
        </p>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/4 p-4 text-center">
        <MonitorSmartphone size={48} className="mx-auto mb-5 sm:mb-7" />
        <h3 className="text-xl font-bold mt-2 mb-4 text-main">
          Responsive User Interface Design
        </h3>
        <p className="sm:mb-7">
          Designing for adaptability, I ensure websites are not just functional but also responsive across all devices and screen sizes, delivering a great user experience.
        </p>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/4 p-4 text-center">
        <BarChart4 size={48} className="mx-auto mb-5 sm:mb-7" />
        <h3 className="text-xl font-bold mt-2 mb-4 text-main">
          Web Performance Optimization
        </h3>
        <p className="sm:mb-7">
          I’m all about speed and efficiency. My approach reduces load times significantly and boosts performance, making sure every interaction feels smooth and snappy.
        </p>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/4 p-4 text-center">
        <ServerCog size={48} className="mx-auto mb-5 sm:mb-7" />
        <h3 className="text-xl font-bold mt-2 mb-4 text-main">
          API Utilization and Testing
        </h3>
        <p>
          Working extensively with varied RESTful APIs, I thoroughly test to ensure seamless integration, enabling reliable data exchanges and enhancing overall functionality.
        </p>
      </div>
    </div>
  );
}

export default Skills;
