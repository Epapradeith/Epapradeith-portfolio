import React from 'react';

export default function Skills() {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["C", "C++", "Java", "JavaScript", "TypeScript", "Python", "HTML5", "CSS3"]
    },
    {
      category: "Frontend",
      skills: ["React.js", "Redux", "Angular.js", "Bootstrap", "Material-UI"]
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express.js", "Spring Boot", "Spring MVC", "Spring Security", "Hibernate"]
    },
    {
      category: "Databases",
      skills: ["MySQL", "Oracle", "SQL Server", "MongoDB", "Redis"]
    },
    {
      category: "Tools & DevOps",
      skills: ["Git", "JIRA", "Jenkins", "Docker", "Apache Tomcat", "Eclipse", "IntelliJ"]
    },
    {
      category: "Testing",
      skills: ["JUnit", "Jasmine", "Unit Testing"]
    },
    {
      category: "APIs & Security",
      skills: ["RESTful Web Services", "OAuth 2.0", "Middleware"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4 text-blue-600">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}