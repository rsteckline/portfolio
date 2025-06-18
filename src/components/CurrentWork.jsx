import React from "react";
import Title from "./Title";

function CurrentWork() {
  return (
    <div className="flex flex-col items-center justify-center pt-10 pb-12 px-6 sm:px-12 md:px-16 lg:px-24 bg-cream font-jetbrains w-full">
      <div className="text-center w-full">
        <Title>Current Work</Title>
      </div>
      <div className="w-full max-w-2xl space-y-8">
        <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
          <h2 className="text-xl md:text-2xl ;g: font-bold text-main mb-1">
            Software Engineer Apprentice
          </h2>
          <p className="text-md mb-1 font-semibold pl-2">
            HealthBridge & MAXX Potential
          </p>
          <p className="text-sm text-gray-600 mb-2 pl-4">December 2024 – Present</p>
          <p className="text-base">
          Developing and maintaining full-stack features for a healthcare-focused startup using React, Ruby on Rails, and PostgreSQL. Enhancing the usability and security of internal tools and patient-facing components, including an accessible portal serving over 2,000 users. Focusing on performance optimizations, HIPAA-compliant handling of protected health information, and scalable systems that support custom reporting and secure data delivery.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
          <h2 className="text-xl md:text-2xl font-bold text-main mb-1">
            Software Developer
          </h2>
          <p className="text-md mb-1 font-semibold pl-2">
            Self-Employed
          </p>
          <p className="text-sm text-gray-600 mb-2 pl-4">December 2023 – Present</p>
          <p className="text-base">
            Collaborate with small businesses and mission-driven organizations to deliver custom software and web solutions using modern technologies like JavaScript, Ruby, and React. Lead technical implementation of responsive websites, browser extensions, and API integrations with a focus on usability, accessibility, and performance. Translate client goals into scalable solutions through iterative development, automation, and user-focused design.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CurrentWork;
