import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function Projects() {
  const projects = [
    {
      title: "Housing Management Platform",
      description: "Full-stack property listing app with secure login (OAuth 2.0) and real-time messaging using WebSocket. Optimized SQL and integrated Redux with TypeScript, improving performance and UX.",
      technologies: ["React.js", "Redux", "TypeScript", "Node.js", "OAuth 2.0", "WebSocket", "SQL"],
      githubLink: "https://github.com/Epaprodith03/housing-management",
      liveLink: "#"
    },
    {
      title: "Hospitality Management System",
      description: "Built a responsive UI using React.js, CSS, and Material-UI to enhance user experience and boost engagement by 40%.",
      technologies: ["React.js", "Material-UI", "CSS", "Node.js"],
      githubLink: "https://github.com/Epaprodith03/hospitality-management",
      liveLink: "#"
    },
    {
      title: "LinkedIn Banner Generation Platform",
      description: "Developed a web app for generating personalized LinkedIn banners using real-time templates and one-click downloads. Configured Firebase for hosting, authentication, and asset storage.",
      technologies: ["React.js", "Firebase", "JavaScript", "CSS"],
      githubLink: "https://github.com/Epaprodith03/linkedin-banner-generator",
      liveLink: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-50 rounded-lg shadow-md overflow-hidden transition duration-300 hover:shadow-lg">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4 mt-auto">
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-blue-600 transition duration-300 flex items-center"
                  >
                    <FaGithub className="mr-1" /> Code
                  </a>
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-blue-600 transition duration-300 flex items-center"
                  >
                    <FaExternalLinkAlt className="mr-1" /> Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}