'use client';

import { useState } from 'react';
import { Menu, X, GithubIcon, MailIcon, LinkedinIcon } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const personalInfo = {
    name: "Benoît AVRILLON",
    title: "Full Stack Developer",
    address: "111 chemin des Tâtes, LOVAGNY 74330",
    email: "avrillon.benoit@orange.fr",
    phone: "06 21 19 06 04"
  };

  const projects = [
    {
      title: "Dictée Interactive",
      description: "French spelling learning platform with AI voice synthesis",
      tags: ["Next.js", "React", "PostgreSQL", "AWS API Amazon Polly"],
      links: {
        live: "https://www.dicteeinteractive.fr",
        github: "https://github.com/Ondrelat/projet-orthographe"
      }
    },
    {
      title: "Rock Paper Scissors Ultimate",
      description: "Challenge: I have 2 hours to develop an extended version of Rock-Paper-Scissors with 17 possible moves.",
      tags: ["Python", "Algorithms", "Game Logic"],
      isPersonal: true,
      links: {
        github: "https://github.com/Ondrelat/ultimate-Rock-Sisor-Paper"
      }
    },
    {
      title: "WikiLike (in progress)",
      description: "A wiki-style project for learning about any topic.",
      tags: ["Next.js", "React", "PostgreSQL", "NestJs"],
      links: {
        github: "https://github.com/Ondrelat/categorise"
      }
    },
    {
      title: "Collaborative Rankings",
      description: "Platform allowing users to create rankings on any topic and obtain an overall ranking.",
      tags: ["Laravel", "PHP", "MySQL", "Inertia", "Vuejs"],
      links: {
        github: "https://github.com/Ondrelat/Laravel"
      }
    }
  ];

  const experiences = [
    {
      title: "Programmer Analyst",
      company: "TAGG INFORMATIQUE",
      period: "04/2021 - 10/2023",
      tasks: [
        "Design and development of batch programs for automated printing",
        "Management of shared codebase and technical documentation",
        "Creation of specifications for new features"
      ]
    },
    {
      title: "Full Stack Developer (Intern)",
      company: "SEQUENTIEL, Annecy",
      period: "06/2019 - 07/2019",
      tasks: [
        "Sendinblue API integration for marketing automation",
        "Performance optimization of applications"
      ]
    }
  ];

  const skills = [
    "Next.js", "React", "PostgreSQL", "Prisma ORM",
    "Python", "API Integration", "UX/UI Design",
    "Figma", "WordPress", "Responsive Design"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-gray-900">{personalInfo.name}</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
              <a href="#projects" className="text-gray-600 hover:text-gray-900">Projects</a>
              <a href="#experience" className="text-gray-600 hover:text-gray-900">Experience</a>
              <a href="#skills" className="text-gray-600 hover:text-gray-900">Skills</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-gray-900 focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="#about" className="block px-3 py-2 text-gray-600 hover:text-gray-900">About</a>
                <a href="#projects" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Projects</a>
                <a href="#experience" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Experience</a>
                <a href="#skills" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Skills</a>
                <a href="#contact" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Contact</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Page Content */}
      <div className="pt-16"> {/* Add padding-top to compensate for the fixed navbar */}
        {/* Hero Section */}
        <section id="about" className="pt-20 pb-40 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              {personalInfo.name}
            </h1>
            <h2 className="text-3xl text-gray-700 mb-8">
              {personalInfo.title}
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Passionate about creating modern, high-performance web applications.
              Specialized in React, Next.js, Laravel, and Python development.
            </p>
            <a
              href="#contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Contact Me
            </a>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.links && (
                    <div className="flex gap-4">
                      {project.links.live && (
                        <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                          Visit Website
                        </a>
                      )}
                      {project.links.github && (
                        <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                          View Code
                        </a>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Professional Experience</h2>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                  <p className="text-gray-600 mb-2">{exp.company} | {exp.period}</p>
                  <ul className="list-disc list-inside text-gray-600">
                    {exp.tasks.map((task, taskIndex) => (
                      <li key={taskIndex} className="ml-4">{task}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-gray-50 shadow-md px-6 py-3 rounded-lg text-gray-800"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-12">Contact</h2>
            <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
              <p className="mb-2 text-xl font-semibold">{personalInfo.name}</p>
              <p className="mb-2">{personalInfo.address}</p>
              <p className="mb-2">
                <a href={`mailto:${personalInfo.email}`} className="text-blue-600 hover:text-blue-800">
                  {personalInfo.email}
                </a>
              </p>
              <p className="mb-6">{personalInfo.phone}</p>
              <div className="flex justify-center space-x-6">
                <a href="https://github.com" className="text-gray-600 hover:text-gray-900">
                  <GithubIcon size={24} />
                </a>
                <a href="https://linkedin.com" className="text-gray-600 hover:text-gray-900">
                  <LinkedinIcon size={24} />
                </a>
                <a href={`mailto:${personalInfo.email}`} className="text-gray-600 hover:text-gray-900">
                  <MailIcon size={24} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p>© 2025 {personalInfo.name}. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Portfolio;
