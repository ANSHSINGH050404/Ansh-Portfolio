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
            src="/reelstorage.jpeg"
            title="reel-pro"
            description="A Video-Storage app where you can save your videos in reel format."
            codelink="https://github.com/ANSHSINGH050404/reels_pro"
             demolink="https://drive.google.com/file/d/1Buq5kqum28Bb73fwHRTCFuWB5zULxTO-/view?usp=sharing"
          />

          <ProjectCard
            src="/project2.png"
            title="Time-Tracker"
            description="An AI Interviewer"
            codelink="https://github.com/ANSHSINGH050404/voicevue-ai"
             demolink="https://ansh-portfolio-pearl.vercel.app/"
          />
          <ProjectCard
            src="/time-tracker.png"
            title="Time-Tracker"
            description="Time Tracker app with admin and user assign projects time to complete it"
            codelink="https://github.com/ANSHSINGH050404/time_tracker"
             demolink="https://drive.google.com/file/d/1i7N0aC6fNTkqJUl0-B9Pbea6MhOu3axz/view"
          />
          
           
         
         
        </div>
      </div>
    </div>
  );
};

export default Projects;