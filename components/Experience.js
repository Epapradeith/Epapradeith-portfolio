import React from 'react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Work Experience</h2>
        
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6 md:p-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <h3 className="text-xl font-bold">Software Engineer</h3>
              <p className="text-gray-600">Value Momentum</p>
            </div>
            <div className="mt-2 md:mt-0">
              <p className="text-gray-600">Aug 2019 - Dec 2022</p>
              <p className="text-gray-600">Hyderabad, Telangana, India</p>
            </div>
          </div>
          
          <ul className="space-y-3 text-gray-700">
            <li className="flex">
              <span className="text-blue-600 mr-2">•</span>
              <span>Developed and deployed full-stack web apps using React.js, Node.js, Express.js, and TypeScript, boosting team productivity by 30% through reusable components and modular architecture.</span>
            </li>
            <li className="flex">
              <span className="text-blue-600 mr-2">•</span>
              <span>Designed and implemented RESTful APIs with MySQL/MongoDB, optimizing queries for 25% faster data retrieval.</span>
            </li>
            <li className="flex">
              <span className="text-blue-600 mr-2">•</span>
              <span>Built responsive UI with React, Material-UI, and Bootstrap, resulting in a 35% increase in user engagement.</span>
            </li>
            <li className="flex">
              <span className="text-blue-600 mr-2">•</span>
              <span>Secured applications using OAuth 2.0 and Spring Security, implementing role-based access control and encrypted data transmission.</span>
            </li>
            <li className="flex">
              <span className="text-blue-600 mr-2">•</span>
              <span>Reduced React initial load time by 45% using SSR, lazy loading, and code splitting, improved SEO and performance.</span>
            </li>
            <li className="flex">
              <span className="text-blue-600 mr-2">•</span>
              <span>Implemented interactive dashboards with React.js, fetching data via Express.js from secured Java APIs; enhanced decision-making across five teams.</span>
            </li>
            <li className="flex">
              <span className="text-blue-600 mr-2">•</span>
              <span>Contributed to the cloud migration of insurance forms for GEICO, reducing processing time by 30% and minimizing system downtime by 20%.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
