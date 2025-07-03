import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";

interface Props {
  src: string;
  title: string;
  description: string;
  codelink: string;
  demolink?: string; // Add demo link prop
}

const ProjectCard = ({ src, title, description, codelink, demolink }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] bg-gradient-to-b from-transparent to-[#1a0b3d] hover:shadow-xl transition-all duration-300 hover:scale-105">
      <div className="relative">
        <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className="w-full object-contain"
        />
       
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
      </div>
     
      <div className="relative p-4 space-y-3">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
       
        <div className="pt-2 space-y-2">
          {/* Demo Button - Only show if demolink exists */}
          {demolink && (
            <Button
              asChild
              className="w-full bg-white/10 backdrop-blur-md border border-purple-400/30 hover:bg-green-400/20 hover:border-green-400/50 text-purple-300 hover:text-green-200 font-medium transition-all duration-300 shadow-lg hover:shadow-green-500/25"
            >
              <a href={demolink} target="_blank" rel="noopener noreferrer">
                View Demo
              </a>
            </Button>
          )}
          
          {/* Code Button */}
          <Button
            asChild
            className="w-full bg-white/10 backdrop-blur-md border border-purple-400/30 hover:bg-purple-400/20 hover:border-purple-400/50 text-purple-300 hover:text-purple-200 font-medium transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
          >
            <a href={codelink} target="_blank" rel="noopener noreferrer">
              View Code
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;