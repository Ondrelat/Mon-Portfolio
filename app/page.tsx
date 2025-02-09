'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Github, Mail, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const personalInfo = {
    name: "Benoît AVRILLON",
    title: "Full Stack Developer",
    address: "111 chemin des Tâtes, LOVAGNY 74330",
    email: "avrillon.benoit@orange.fr",
    phone: "06 21 19 06 04",
  };

  const projects = [
    {
      title: "Dictée Interactive",
      description: "French spelling learning platform with AI voice synthesis",
      tags: ["Next.js", "React", "PostgreSQL", "AWS API Amazon Polly"],
      links: {
        live: "https://www.dicteeinteractive.fr",
        github: "https://github.com/Ondrelat/projet-orthographe",
      },
    },
    {
      title: "Rock Paper Scissors Ultimate",
      description: "Challenge: I have 2 hours to develop an extended version of Rock-Paper-Scissors with 17 possible moves.",
      tags: ["Python", "Algorithms", "Game Logic"],
      isPersonal: true,
      links: {
        github: "https://github.com/Ondrelat/ultimate-Rock-Sisor-Paper",
      },
    },
    {
      title: "WikiLike (in progress)",
      description: "A wiki-style project for learning about any topic.",
      tags: ["Next.js", "React", "PostgreSQL", "NestJs"],
      links: {
        live: "https://categorise.vercel.app/",
        github: "https://github.com/Ondrelat/categorise",
      },
    },
    {
      title: "Collaborative Rankings",
      description: "Platform allowing users to create rankings on any topic and obtain an overall ranking.",
      tags: ["Laravel", "PHP", "MySQL", "Inertia", "Vuejs"],
      links: {
        github: "https://github.com/Ondrelat/Laravel",
      },
    },
  ];

  const experiences = [
    {
      title: "Programmer Analyst",
      company: "TAGG INFORMATIQUE",
      period: "04/2021 - 10/2023",
      tasks: [
        "Development and implementation of batch programs and proprietary solutions for automated printing of variable data correspondence.",
        "Review, optimization, and updating of existing programs in C#, C, and C++.",
        "Development of HTML and CSS emails for the automated sending of communications.",
        "Independent management and maintenance of the team's shared codebase, including updates to associated technical documentation.",
        "Creation of specifications for the implementation of new features for programmers.",
      ],
    },
    {
      title: "Full Stack Developer (Intern)",
      company: "SEQUENTIEL, Annecy",
      period: "06/2019 - 07/2019",
      tasks: [
        "Integrated the Sendinblue third-party API into a Symfony application to automate user registration and email marketing processes.",
        "Resolved proxy-related bugs and optimized resources in a .NET C# desktop application.",
        "Integrated and updated using HTML/CSS.",
      ],
    },
  ];

  const education = [
    {
      title: "Associate Degree in Computer Science, specialized in Software Development",
      projects: [
        "Developed projects using .NET with TDD.",
        "Collaborated in a team to develop a mobile game in Android Studio using SCRUM methodology and GIT version control.",
        "Developed web applications with CakePHP.",
      ],
    },
  ];

  const skills = [
    "Next.js",
    "React",
    "PostgreSQL",
    "Prisma ORM",
    "Python",
    "API Integration",
    "WordPress",
    "Responsive Design",
  ];

  // Animation variants for Framer Motion
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Navigation */}
      <nav className={`fixed w-full top-0 z-50 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white shadow-lg'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold">{personalInfo.name}</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="hover:text-blue-500">About</a>
              <a href="#projects" className="hover:text-blue-500">Projects</a>
              <a href="#experience" className="hover:text-blue-500">Experience</a>
              <a href="#education" className="hover:text-blue-500">Education</a>
              <a href="#skills" className="hover:text-blue-500">Skills</a>
              <a href="#contact" className="hover:text-blue-500">Contact</a>
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                {theme === 'dark' ? '🌞' : '🌙'}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="#about" className="block px-3 py-2 hover:bg-gray-200 dark:hover:bg-gray-700">About</a>
                <a href="#projects" className="block px-3 py-2 hover:bg-gray-200 dark:hover:bg-gray-700">Projects</a>
                <a href="#experience" className="block px-3 py-2 hover:bg-gray-200 dark:hover:bg-gray-700">Experience</a>
                <a href="#education" className="block px-3 py-2 hover:bg-gray-200 dark:hover:bg-gray-700">Education</a>
                <a href="#skills" className="block px-3 py-2 hover:bg-gray-200 dark:hover:bg-gray-700">Skills</a>
                <a href="#contact" className="block px-3 py-2 hover:bg-gray-200 dark:hover:bg-gray-700">Contact</a>
                <button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="block w-full text-left px-3 py-2 hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  Switch to {theme === 'dark' ? 'Light' : 'Dark'} Mode
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Page Content */}
      <div className="pt-16">
        {/* Hero Section */}
        <section id="about" className="pt-20 pb-40 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="text-5xl font-bold mb-6"
            >
              {personalInfo.name}
            </motion.h1>
            <motion.h2
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="text-3xl mb-8"
            >
              {personalInfo.title}
            </motion.h2>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="text-xl mb-8 max-w-2xl mx-auto"
            >
              Passionate about creating modern, high-performance web applications.
              Specialized in React, Next.js, Laravel, and Python development.
            </motion.p>
            <motion.a
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              href="#contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
            >
              Contact Me
            </motion.a>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  animate="visible"
                  variants={fadeInUp}
                  className={`p-6 rounded-lg shadow-md ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
                >
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="mb-4">{project.description}</p>
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
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800"
                        >
                          Visit Website
                        </a>
                      )}
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800"
                        >
                          View Code
                        </a>
                      )}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  animate="visible"
                  variants={fadeInUp}
                  className={`p-6 rounded-lg shadow-md ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
                >
                  <h3 className="text-xl font-semibold mb-2">{edu.title}</h3>
                  <ul className="list-disc list-inside">
                    {edu.projects.map((project, projectIndex) => (
                      <li key={projectIndex} className="ml-4">{project}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
            <div className="space-y-8">
              {experiences.map((experience, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  animate="visible"
                  variants={fadeInUp}
                  className={`p-6 rounded-lg shadow-md ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
                >
                  <h3 className="text-xl font-semibold mb-2">{experience.title}</h3>
                  <p className="mb-4">{experience.company}</p>
                  <p className="mb-4">{experience.period}</p>
                  <ul className="list-disc list-inside">
                    {experience.tasks.map((task, taskIndex) => (
                      <li key={taskIndex} className="ml-4">{task}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  animate="visible"
                  variants={fadeInUp}
                  className={`text-center p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-blue-50 text-blue-800'}`}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Contact</h2>
            <div className="flex justify-center gap-8">
              <a href={`mailto:${personalInfo.email}`} className="hover:text-blue-500">
                <Mail size={32} />
              </a>
              <a href="https://github.com/Ondrelat" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                <Github size={32} />
              </a>
              <a href="https://www.linkedin.com/in/benoit-avrillon/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                <Linkedin size={32} />
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className={`py-6 text-center ${theme === 'dark' ? 'bg-gray-800' : 'bg-white shadow-lg'}`}>
          <p>© 2023 Benoît Avrillon. All rights reserved.</p>
          <a href="#top" className="text-blue-500 hover:text-blue-700">Back to Top</a>
        </footer>
      </div>
    </div>
  );
};

export default Portfolio;