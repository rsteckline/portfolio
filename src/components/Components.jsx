import React from "react";
import Title from "./Title";
import PortfolioProject from "./PortfolioProject";
import components from "../data/components";

function Components() {
  return (
    <div className="flex flex-col items-center justify-center pt-10 pb-10 bg-cream font-jetbrains">
      <div className="text-center">
        <Title>Components</Title>
      </div>
      <div className="grid p-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {components.map((component, index) => (
          <PortfolioProject
            imgUrl={component.imgUrl}
            title={component.title}
            stack={component.stack}
            URL={component.URL}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default Components;
