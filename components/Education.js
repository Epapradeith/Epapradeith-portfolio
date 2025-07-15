import React from 'react';

export default function Education() {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Education & Certifications</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-lg shadow-md p-6 mb-8">
            <h3 className="text-xl font-bold mb-2">Master of Science, Computer Science</h3>
            <p className="text-gray-600 mb-2">University of Alabama at Birmingham</p>
            <p className="text-gray-600">Jan 2023 - Dec 2024</p>
          </div>
          
          <h3 className="text-xl font-bold mb-6">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg shadow-md p-6">
              <h4 className="text-lg font-semibold mb-2">AEM Course Completion</h4>
              <p className="text-gray-600">Udemy</p>
            </div>
            <div className="bg-gray-50 rounded-lg shadow-md p-6">
              <h4 className="text-lg font-semibold mb-2">Cyber Security Certification</h4>
              <p className="text-gray-600">University of Alabama at Birmingham</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
