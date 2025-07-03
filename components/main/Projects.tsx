import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20 min-h-screen"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20 text-center">
        My Projects
      </h1>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          <ProjectCard
            src="/NextWebsite.png"
            title="Modern Next.js Portfolio"
            description="A sleek and responsive portfolio website built with Next.js, featuring modern design principles, smooth animations, and optimized performance for showcasing professional work."
            codelink="https://github.com/yourusername/nextjs-portfolio"
             demolink="https://myproject.vercel.app"
          />
          <ProjectCard
            src="/CardImage.png"
            title="Interactive Website Cards"
            description="A collection of interactive card components with hover effects, animations, and responsive design. Built with React and styled with modern CSS techniques."
            codelink="https://github.com/yourusername/interactive-cards"
             demolink="https://myproject.vercel.app"
          />
          <ProjectCard
            src="/project3.png"
            title="Full Stack Web App"
            description="A comprehensive web application featuring user authentication, database integration, and real-time updates. Built with React, Node.js, and MongoDB."
            codelink="https://github.com/yourusername/fullstack-app"
             demolink="https://github.com"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;