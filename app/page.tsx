'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Github, Mail, Linkedin, ExternalLink, Code, Calendar, HardHat } from 'lucide-react';

// --- Interfaces (aucune modification) ---
interface PersonalInfo {
  name: string;
  title: string;
  address: string;
  email: string;
  phone: string;
  bio: string;
}

interface Project {
  title: string;
  description: string;
  tags: string[];
  years: string;
  links: {
    live?: string;
    github?: string;
  };
  isMain?: boolean;
  status?: 'in-progress';
}

interface Experience {
  title: string;
  company: string;
  period: string;
  tasks: string[];
}

interface Education {
  title: string;
  projects: string[];
}

interface Language {
  code: 'fr' | 'en';
  name: string;
  flag: string;
}

const Portfolio = () => {
  // --- State and Effects (aucune modification) ---
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [currentLang, setCurrentLang] = useState<'fr' | 'en'>('fr');

  const languages: Language[] = [
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'en', name: 'English', flag: '🇺🇸' }
  ];

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' || 'light';
    const savedLang = localStorage.getItem('language') as 'fr' | 'en' || 'fr';
    setTheme(savedTheme);
    setCurrentLang(savedLang);
  }, []);

  const toggleTheme = (): void => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const switchLanguage = (lang: 'fr' | 'en'): void => {
    setCurrentLang(lang);
    localStorage.setItem('language', lang);
  };

  // --- Data and Translations (aucune modification) ---
  const translations = {
    fr: {
      nav: { about: 'À propos', projects: 'Projets', experience: 'Expérience', education: 'Formation', skills: 'Compétences', contact: 'Contact' },
      hero: { title: 'Développeur Full Stack', bio: 'Développeur full-stack avec 3 ans d\'expérience, travaillant principalement avec Next.js, Python, C#, Laravel et Batch. Passionné par la technologie, mais encore plus par la création et la logique derrière la recherche de nouvelles idées qui résolvent des problèmes.', contactBtn: 'Me Contacter' },
      projects: { title: 'Mes Projets', visitWebsite: 'Voir le site', viewCode: 'Voir le code', inProgress: 'En cours' },
      experience: { title: 'Expérience Professionnelle' },
      education: { title: 'Formation' },
      skills: { title: 'Compétences' },
      contact: { title: 'Contact' },
      footer: { rights: 'Tous droits réservés.', backToTop: 'Retour en haut' }
    },
    en: {
      nav: { about: 'About', projects: 'Projects', experience: 'Experience', education: 'Education', skills: 'Skills', contact: 'Contact' },
      hero: { title: 'Full Stack Developer', bio: 'Full-stack developer with 3 years of experience, primarily working with Next.js, Python, C#, Laravel, and Batch. Passionate about technology, but even more about creation and the logic behind finding new ideas that solve problems.', contactBtn: 'Contact Me' },
      projects: { title: 'My Projects', visitWebsite: 'Visit Website', viewCode: 'View Code', inProgress: 'In Progress' },
      experience: { title: 'Professional Experience' },
      education: { title: 'Education' },
      skills: { title: 'Skills' },
      contact: { title: 'Contact' },
      footer: { rights: 'All rights reserved.', backToTop: 'Back to Top' }
    }
  };

  const t = translations[currentLang];

  const personalInfo: PersonalInfo = { name: "Benoît AVRILLON", title: t.hero.title, address: "111 chemin des Tâtes, LOVAGNY 74330", email: "avrillon.benoit@orange.fr", phone: "06 21 19 06 04", bio: t.hero.bio };

  const projects: Project[] = [
    { title: "Dictée Interactive", description: currentLang === 'fr' ? `Développement et lancement autonome d'une application web interactive pour l'apprentissage du français.\n\n* **Tech Stack :** Next.js, React, PostgreSQL, Prisma ORM\n* **Fonctionnalités principales :**\n  * Utilisation de Figma pour la conception UX/UI.\n  * Mise en œuvre des principes de conception responsive.\n  * Utilisation de React Context (useContext) pour une gestion d'état.\n  * Gestion du cycle complet du projet, de la conception au déploiement.\n  * Maîtrise du développement full-stack, intégration d'API et BDD.` : `Autonomous development and launch of an interactive web application for French language learning.\n\n* **Tech Stack:** Next.js, React, PostgreSQL, Prisma ORM\n* **Main Features:**\n  * Use of Figma for UX/UI design.\n  * Implementation of responsive design principles.\n  * Use of React Context (useContext) for state management.\n  * Complete project lifecycle management, from design to deployment.\n  * Mastery of full-stack development, API integration, and database management.`, tags: ["Next.js", "React", "PostgreSQL", "Prisma ORM", "AWS Polly API", "Figma"], years: "2024", links: { live: "https://www.dicteeinteractive.fr", github: "https://github.com/Ondrelat/Dictee_interactive", }, isMain: true, },
    { title: "WikiLike + Collaborative Ranking", description: currentLang === 'fr' ? "Un projet de style wiki pour apprendre sur n'importe quel sujet, par classement utilisateur ou par texte. Le projet vise à combiner le classement collaboratif avec une base de connaissances." : "A wiki-style project for learning about any topic, by user ranking or by text. The project aims to combine collaborative ranking with a knowledge base.", tags: ["Next.js", "React", "PostgreSQL", "NestJS", "Prisma"], years: "2025", links: { live: "https://categorise.vercel.app/", github: "https://github.com/Ondrelat/categorise", }, status: 'in-progress', },
    { title: "Jeu Creature Clicker", description: currentLang === 'fr' ? "Jeu développé avec Unity dans le style clicker. Projet explorant le développement de jeux vidéo avec des mécaniques de progression et de collection. Focus sur l'expérience utilisateur et les systèmes de récompenses." : "Game developed with Unity in the clicker style. Project exploring video game development with progression and collection mechanics. Focus on user experience and reward systems.", tags: ["Unity", "C#", "Game Development"], years: "2022", links: { github: "https://github.com/Ondrelat/CreatureClickerCollecte", } },
    { title: "Wiki Like", description: currentLang === 'fr' ? "Projet visant à créer un WikiLike orienté expérience utilisateur pour l'apprentissage. Un de mes premiers projets full-stack mettant l'accent sur l'interface utilisateur et la facilité d'utilisation pour la création et le partage de connaissances." : "Project aimed at creating a user experience-oriented WikiLike for learning. One of my first full-stack projects focusing on user interface and ease of use for creating and sharing knowledge.", tags: ["Symfony", "PHP", "MySQL"], years: "2022", links: { github: "https://github.com/Ondrelat/WikiPartage", } },
    { title: "Rock Paper Scissors Ultimate", description: currentLang === 'fr' ? "Défi personnel : Développer en 2h une version étendue de Pierre-Papier-Ciseaux avec 17 mouvements possibles. Algorithme complexe de détermination des gagnants." : "Personal challenge: Develop in 2 hours an extended version of Rock-Paper-Scissors with 17 possible moves. Complex algorithm for winner determination.", tags: ["Python", "Algorithmes", "Logique de jeu"], years: "2024", links: { github: "https://github.com/Ondrelat/ultimate-Rock-Sisor-Paper", }, },
    { title: "Collaborative Rankings", description: currentLang === 'fr' ? "Plateforme permettant aux utilisateurs de créer des classements sur n'importe quel sujet et d'obtenir un classement global. Système de vote sophistiqué avec pondération." : "Platform allowing users to create rankings on any topic and obtain an overall ranking. Sophisticated voting system with weighting.", tags: ["Laravel", "PHP", "MySQL", "Inertia", "Vue.js", "Tailwind"], years: "2022", links: { github: "https://github.com/Ondrelat/Inertia", } },
  ];

  const experiences: Experience[] = currentLang === 'fr' ? [ { title: "Analyste Programmeur", company: "TAGG INFORMATIQUE", period: "04/2021 - 10/2023", tasks: [ "Conception et développement de programmes batch et de solutions en langage propriétaire pour l'impression automatisée de correspondances avec données variables.", "Mise à jour de programmes existants en C#, C, et C++.", "Développement d'e-mails HTML et CSS pour l'envoi automatisé de communications.", "Gestion et maintenance autonome de la base de code partagée de l'équipe, incluant les mises à jour de la documentation technique associée.", "Création d'un cahier des charges pour l'implémentation d'une nouvelle fonctionnalité pour les programmeurs." ] }, { title: "Développeur Full Stack (Stagiaire)", company: "SEQUENTIEL, Annecy", period: "06/2019 - 07/2019", tasks: [ "Intégration de l'API tierce Sendinblue dans une application Symfony pour automatiser l'inscription des utilisateurs et le marketing par e-mail.", "Résolution de bugs liés aux paramètres de proxy et optimisation des ressources d'une application de bureau .NET C#.", "Intégration et mise à jour en HTML/CSS." ] } ] : [ { title: "Programmer Analyst", company: "TAGG INFORMATIQUE", period: "04/2021 - 10/2023", tasks: [ "Development and implementation of batch programs and proprietary solutions for automated printing of variable data correspondence.", "Review, optimization, and updating of existing programs in C#, C, and C++.", "Development of HTML and CSS emails for the automated sending of communications.", "Independent management and maintenance of the team's shared codebase, including updates to associated technical documentation.", "Creation of specifications for the implementation of new features for programmers." ] }, { title: "Full Stack Developer (Intern)", company: "SEQUENTIEL, Annecy", period: "06/2019 - 07/2019", tasks: [ "Integrated the Sendinblue third-party API into a Symfony application to automate user registration and email marketing processes.", "Resolved proxy-related bugs and optimized resources in a .NET C# desktop application.", "Integrated and updated using HTML/CSS." ] } ];
  const education: Education[] = currentLang === 'fr' ? [ { title: "BTS Services Informatiques aux Organisations, Option Développement", projects: [ "Développement de projets utilisant .NET avec TDD.", "Collaboration en équipe pour développer un jeu mobile dans Android Studio en utilisant la méthodologie SCRUM et le contrôle de version GIT.", "Développement d'applications web avec CakePHP." ] } ] : [ { title: "Associate Degree in Computer Science, specialized in Software Development", projects: [ "Developed projects using .NET with TDD.", "Collaborated in a team to develop a mobile game in Android Studio using SCRUM methodology and GIT version control.", "Developed web applications with CakePHP." ] } ];
  const skills: string[] = [ "Next.js", "React", "TypeScript", "JavaScript", "Node.js", "PostgreSQL", "Prisma ORM", "Python", "C#", "Laravel", "PHP", "Unity", "AWS", "Tailwind CSS", "Git", "Docker", "Responsive Design" ];


  return (
    <div className={`min-h-screen transition-all duration-300 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-blue-50 to-indigo-100 text-black'}`}>
      {/* --- Navigation --- */}
      <nav className={`fixed w-full top-0 z-50 backdrop-blur-md transition-all duration-300 ${theme === 'dark' ? 'bg-gray-800/90 border-b border-gray-700' : 'bg-white/90 shadow-lg border-b border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {personalInfo.name}
              </span>
            </div>

            <div className={`hidden md:flex items-center space-x-8 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              <a href="#about" className="hover:text-blue-500 transition-colors">{t.nav.about}</a>
              <a href="#projects" className="hover:text-blue-500 transition-colors">{t.nav.projects}</a>
              <a href="#experience" className="hover:text-blue-500 transition-colors">{t.nav.experience}</a>
              <a href="#education" className="hover:text-blue-500 transition-colors">{t.nav.education}</a>
              <a href="#skills" className="hover:text-blue-500 transition-colors">{t.nav.skills}</a>
              <a href="#contact" className="hover:text-blue-500 transition-colors">{t.nav.contact}</a>
              
              <div className="flex items-center space-x-1 bg-gray-100 dark:bg-gray-700 rounded-full p-1">
                {languages.map((lang) => (
                  <button key={lang.code} onClick={() => switchLanguage(lang.code)} className={`flex items-center px-3 py-1 rounded-full transition-all text-sm font-medium ${ currentLang === lang.code ? 'bg-white dark:bg-gray-800 shadow-sm text-blue-600 dark:text-blue-400' : `${theme === 'dark' ? 'text-gray-300 hover:bg-gray-600' : 'text-black hover:bg-gray-200'}` }`} title={lang.name} >
                    <span className="mr-1">{lang.flag}</span>
                    <span>{lang.code.toUpperCase()}</span>
                  </button>
                ))}
              </div>
              
              <button onClick={toggleTheme} className={`p-2 rounded-full ${theme === 'dark' ? 'text-white hover:bg-gray-700' : 'text-black hover:bg-gray-200'} transition-colors`} >
                {theme === 'dark' ? '🌞' : '🌙'}
              </button>
            </div>

            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`focus:outline-none p-2 rounded-lg ${theme === 'dark' ? 'text-white hover:bg-gray-700' : 'text-black hover:bg-gray-100'} transition-colors`} >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-200 dark:border-gray-700">
              <div className={`px-2 pt-2 pb-3 space-y-1 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                <a href="#about" className="block px-3 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md transition-colors">{t.nav.about}</a>
                <a href="#projects" className="block px-3 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md transition-colors">{t.nav.projects}</a>
                <a href="#experience" className="block px-3 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md transition-colors">{t.nav.experience}</a>
                <a href="#education" className="block px-3 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md transition-colors">{t.nav.education}</a>
                <a href="#skills" className="block px-3 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md transition-colors">{t.nav.skills}</a>
                <a href="#contact" className="block px-3 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md transition-colors">{t.nav.contact}</a>
                
                <div className="flex items-center justify-center space-x-1 pt-2">
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-full p-1">
                    {languages.map((lang) => (
                      <button key={lang.code} onClick={() => switchLanguage(lang.code)} className={`flex items-center px-3 py-1 rounded-full transition-all text-sm font-medium ${ currentLang === lang.code ? 'bg-white dark:bg-gray-800 shadow-sm text-blue-600 dark:text-blue-400' : `${theme === 'dark' ? 'text-gray-300 hover:bg-gray-600' : 'text-black hover:bg-gray-200'}` }`} >
                        <span className="mr-1">{lang.flag}</span>
                        <span>{lang.code.toUpperCase()}</span>
                      </button>
                    ))}
                  </div>
                </div>
                
                <button onClick={toggleTheme} className="block w-full text-left px-3 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md transition-colors" >
                  {theme === 'dark' ? '🌞 Light Mode' : '🌙 Dark Mode'}
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* --- Page Content --- */}
      <div className="pt-16">
        {/* --- Hero Section --- */}
        <section id="about" className="pt-20 pb-32 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                {personalInfo.name}
              </h1>
              <h2 className={`text-3xl mb-8 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-800'}`}>
                {personalInfo.title}
              </h2>
            </div>
            <p className={`text-xl mb-12 max-w-3xl mx-auto leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              {personalInfo.bio}
            </p>
            <div className="flex justify-center space-x-4">
              <a href="#contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                {t.hero.contactBtn}
              </a>
              <a href="#projects" className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 px-8 py-4 rounded-full hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 dark:hover:border-blue-500 transition-all duration-300 transform hover:scale-105">
                {t.projects.title}
              </a>
            </div>
          </div>
        </section>

        {/* --- Projects Section --- */}
        <section id="projects" className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t.projects.title}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div key={index} className={`group relative p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 ${ theme === 'dark' ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200' } ${project.isMain ? 'md:col-span-2 lg:col-span-2 ring-2 ring-blue-500 ring-opacity-50' : ''}`}>
                  <div className="flex items-start justify-between mb-4">
                      <div className="flex-grow">
                        <h3 className={`text-xl font-semibold group-hover:text-blue-600 transition-colors mb-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                            {project.title}
                        </h3>
                        {project.status === 'in-progress' && (
                            <span className="inline-flex items-center text-xs font-semibold bg-amber-100 text-amber-800 px-2.5 py-1 rounded-full animate-pulse dark:bg-amber-900/50 dark:text-amber-300">
                                <HardHat size={14} className="mr-1.5" />
                                {t.projects.inProgress}
                            </span>
                        )}
                      </div>
                    <div className="flex-shrink-0 text-sm text-gray-600 dark:text-gray-400 ml-2">
                      <Calendar size={14} className="inline-block mr-1" />
                      {project.years}
                    </div>
                  </div>
                  
                  <p className={`mb-4 whitespace-pre-line ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-sm px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    {project.links.live && (
                      <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">
                        <ExternalLink size={16} className="mr-1" />
                        {t.projects.visitWebsite}
                      </a>
                    )}
                    {project.links.github && (
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer" className={`flex items-center hover:text-blue-600 dark:hover:text-gray-300 transition-colors ${theme === 'dark' ? 'text-gray-400' : 'text-black'}`}>
                        <Code size={16} className="mr-1" />
                        {t.projects.viewCode}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Experience Section --- */}
        <section id="experience" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t.experience.title}
            </h2>
            <div className="space-y-8">
              {experiences.map((experience, index) => (
                <div key={index} className={`p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${ theme === 'dark' ? 'bg-gray-900 border border-gray-700' : 'bg-white border border-gray-200' }`}>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-semibold mb-2 text-blue-600 dark:text-blue-400">
                        {experience.title}
                      </h3>
                      <p className={`text-lg mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-black'}`}>
                        {experience.company}
                      </p>
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-full">
                      {experience.period}
                    </span>
                  </div>
                  <ul className="space-y-3">
                    {experience.tasks.map((task, taskIndex) => (
                      <li key={taskIndex} className="flex items-start">
                        <span className="text-blue-500 mr-3 mt-1">•</span>
                        <span className={`${theme === 'dark' ? 'text-gray-300' : 'text-black'}`}>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Education Section --- */}
        <section id="education" className="py-20 px-4">
             <div className="max-w-7xl mx-auto">
                 <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                     {t.education.title}
                 </h2>
                 <div className="space-y-8">
                     {education.map((edu, index) => (
                         <div key={index} className={`p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${ theme === 'dark' ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200' }`}>
                             <h3 className="text-2xl font-semibold mb-6 text-blue-600 dark:text-blue-400">
                                 {edu.title}
                             </h3>
                             <ul className="space-y-3">
                                 {edu.projects.map((project, projectIndex) => (
                                     <li key={projectIndex} className="flex items-start">
                                         <span className="text-blue-500 mr-3 mt-1">•</span>
                                         <span className={`${theme === 'dark' ? 'text-gray-300' : 'text-black'}`}>{project}</span>
                                     </li>
                                 ))}
                             </ul>
                         </div>
                     ))}
                 </div>
             </div>
        </section>

        {/* --- Skills Section --- */}
        <section id="skills" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
             <div className="max-w-7xl mx-auto">
                 <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                     {t.skills.title}
                 </h2>
                 <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                     {skills.map((skill, index) => (
                         <div key={index} className={`text-center p-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg ${ theme === 'dark' ? 'bg-gray-900 border border-gray-700 hover:bg-gray-700' : 'bg-white border border-gray-200 hover:bg-blue-50' }`}>
                             <span className={`font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-black'}`}>
                                 {skill}
                             </span>
                         </div>
                     ))}
                 </div>
             </div>
        </section>

        {/* --- Contact Section --- */}
        <section id="contact" className="py-20 px-4">
             <div className="max-w-7xl mx-auto text-center">
                 <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                     {t.contact.title}
                 </h2>
                 <div className="mb-8">
                     <p className={`text-lg mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-black'}`}>
                         {personalInfo.email}
                     </p>
                     <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-black'}`}>
                         {personalInfo.phone}
                     </p>
                 </div>
                 <div className="flex justify-center gap-8">
                   <a href={`mailto:${personalInfo.email}`} className="group p-4 rounded-full bg-blue-100 dark:bg-blue-900 hover:bg-blue-200 dark:hover:bg-blue-800 transition-all duration-300 transform hover:scale-110" title="Email">
                     <Mail size={32} className="text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300" />
                   </a>
                   <a href="https://github.com/Ondrelat" target="_blank" rel="noopener noreferrer" className="group p-4 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 transform hover:scale-110" title="GitHub">
                     <Github size={32} className={`${theme === 'dark' ? 'text-gray-400 group-hover:text-gray-300' : 'text-black group-hover:text-gray-700'}`} />
                   </a>
                   <a href="https://www.linkedin.com/in/benoit-avrillon/" target="_blank" rel="noopener noreferrer" className="group p-4 rounded-full bg-blue-100 dark:bg-blue-900 hover:bg-blue-200 dark:hover:bg-blue-800 transition-all duration-300 transform hover:scale-110" title="LinkedIn">
                     <Linkedin size={32} className="text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300" />
                   </a>
                 </div>
             </div>
        </section>

        {/* --- Footer --- */}
        <footer className={`py-8 text-center border-t ${theme === 'dark' ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'}`}>
          <div className="max-w-7xl mx-auto px-4">
            <p className={`mb-4 ${theme === 'dark' ? 'text-gray-400' : 'text-black'}`}>
              © 2025 Benoît Avrillon. {t.footer.rights}
            </p>
            <a href="#about" className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">
              <span className="mr-2">↑</span>
              {t.footer.backToTop}
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Portfolio;