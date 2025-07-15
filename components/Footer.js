import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">Epapradeith Rachety</h2>
            <p className="text-gray-400 mt-2">Full Stack Developer</p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://github.com/Epaprodith03" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a 
              href="http://www.linkedin.com/in/epapradeith-rachety-196243111" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:epaprodith0303@gmail.com" 
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <FaEnvelope className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Epapradeith Rachety. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
