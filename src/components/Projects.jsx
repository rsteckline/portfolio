import React from "react";
import projects from "../data/projects";
import ProjectCard from "./ProjectCard";
import Title from "./Title";

function Projects() {
  return (
    <div className="flex flex-col items-center justify-center pt-8 pb-5 bg-cream font-jetbrains">
      <div className="text-center">
        <Title>Projects</Title>
      </div>
      <div className="grid p-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard
            imgUrl={project.imgUrl}
            title={project.title}
            stack={project.stack}
            URL={project.URL}
            key={project.title}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
