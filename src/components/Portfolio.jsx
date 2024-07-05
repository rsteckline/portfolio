import React from "react";
import portfolio from "../data/portfolio";
import PortfolioProject from "./PortfolioProject";

function Portfolio() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center">
      <div className="grid p-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolio.map((project) => (
          <PortfolioProject 
            imgUrl={project.imgUrl} 
            title={project.title} 
            stack={project.stack} 
            URL={project.URL} 
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;