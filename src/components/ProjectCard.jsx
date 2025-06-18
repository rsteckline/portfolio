import React from "react";

function ProjectCard({ title, imgUrl, stack, URL }) {
  const handleClick = () => {
    window.open(URL, '._blank');
  };

  return (
    <div className="border-2 border-gray-300 rounded-md overflow-hidden text-center">
      <img
        src={imgUrl}
        alt={`Project image for ${title}`}
        className="w-full md:h-auto object-cover cursor-pointer max-height p-4"
        onClick={handleClick}
      />
      <div className="w-full p-4">
        <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold text-main">
          {title}
        </h3>
        <p className="flex flex-wrap gap-2 flex-row items-center justify-center text-xs md:text-sm">
          {stack.map((item, index) => (
            <span
              key={index}
              className="inline-block px-2 py-1 font-semibold border-2 border-gray-200 rounded-md bg-white"
            >
              {item}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}

export default ProjectCard;
