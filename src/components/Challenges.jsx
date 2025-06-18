import React from "react";
import Title from "./Title";
import ProjectCard from "./ProjectCard";
import challenges from "../data/challenges";

function Challenges() {
  return (
    <div className="flex flex-col items-center justify-center pt-10 pb-10 bg-cream font-jetbrains">
      <div className="text-center">
        <Title>Challenges</Title>
      </div>
      <div className="grid p-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {challenges.map((challenge, index) => (
          <ProjectCard
            imgUrl={challenge.imgUrl}
            title={challenge.title}
            stack={challenge.stack}
            URL={challenge.URL}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default Challenges;
