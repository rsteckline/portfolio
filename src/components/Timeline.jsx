import React from "react";
import timeline from "../data/timeline";
import TimelineItem from "./TimelineItem";
import Title from "./Title";

function Timeline() {
  return (
    <div className="flex flex-col md:flex-row justify-center my-10 mb-10 px-4 md:px-10 lg:px-20">
      <div className="w-full md:w-7/12">
        <span className="text-center">
          <Title>Timeline</Title>
        </span>
        {timeline.map((item) => (
          <TimelineItem
            year={item.year}
            title={item.title}
            duration={item.duration}
            details={item.details}
          />
        ))}
      </div>
    </div>
  );
}

export default Timeline;
