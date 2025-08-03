import React from "react";
import { RxDiscordLogo, RxGithubLogo } from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-transparent text-gray-200 shadow-lg py-8 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Community Section */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="font-bold text-lg md:text-xl mb-6 text-white">Community</div>
            <div className="space-y-4 w-full max-w-xs">
              <a 
                href="https://www.linkedin.com/in/ansh-singh-b56612241?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                className="flex items-center hover:text-blue-400 transition-colors duration-200 group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube className="text-lg group-hover:scale-110 transition-transform duration-200" />
                <span className="text-sm md:text-base ml-3">LinkedIn</span>
              </a>
              <a 
                href="https://github.com/ANSHSINGH050404"
                className="flex items-center hover:text-blue-400 transition-colors duration-200 group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RxGithubLogo className="text-lg group-hover:scale-110 transition-transform duration-200" />
                <span className="text-sm md:text-base ml-3">Github</span>
              </a>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="font-bold text-lg md:text-xl mb-6 text-white">Social Media</div>
            <div className="space-y-4 w-full max-w-xs">
              <a 
                href="https://x.com/AnshSin18258375"
                className="flex items-center hover:text-blue-400 transition-colors duration-200 group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube className="text-lg group-hover:scale-110 transition-transform duration-200" />
                <span className="text-sm md:text-base ml-3">Twitter</span>
              </a>
              <a 
                href="https://github.com/ANSHSINGH050404"
                className="flex items-center hover:text-blue-400 transition-colors duration-200 group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RxGithubLogo className="text-lg group-hover:scale-110 transition-transform duration-200" />
                <span className="text-sm md:text-base ml-3">Github</span>
              </a>
              <a 
                href="https://discord.gg/gvseYY3v"
                className="flex items-center hover:text-blue-400 transition-colors duration-200 group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RxDiscordLogo className="text-lg group-hover:scale-110 transition-transform duration-200" />
                <span className="text-sm md:text-base ml-3">Discord</span>
              </a>
            </div>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col items-center lg:items-start md:col-span-2 lg:col-span-1">
            <div className="font-bold text-lg md:text-xl mb-6 text-white">Contact</div>
            <div className="space-y-4 w-full max-w-xs">
              <a 
                href="https://drive.google.com/file/d/1T0BiBDwJvBjoheTkbnLp3TW85Onwsfol/view?usp=drivesdk"
                className="flex items-center hover:text-blue-400 transition-colors duration-200 group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-sm md:text-base">📄 My Resume</span>
              </a>
              <div className="flex items-center">
                <span className="text-sm md:text-base">📞 +91-8887592949</span>
              </div>
              <div className="flex items-center">
                <span className="text-sm md:text-base break-all">✉️ anshsinghapa@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm md:text-base text-gray-400">
            &copy; FullStack Dev 2025 Inc. All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;