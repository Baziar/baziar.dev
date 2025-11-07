'use client';

import { motion } from 'framer-motion';
import { Download, Briefcase, Code2, Rocket, Globe, Github, Linkedin, Mail, MapPin, Calendar, Users, MessageSquare, Lightbulb, Target, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import { VscVscode } from 'react-icons/vsc';
import { SiNpm } from 'react-icons/si';
import { 
  SiTypescript, SiPython, SiReact, SiNextdotjs, SiNodedotjs,
  SiFastapi, SiNestjs, SiPostgresql, SiDocker, SiGit,
  SiTailwindcss, SiJavascript
} from 'react-icons/si';

const experiences = [
  {
    title: 'Founder & Full-Stack Developer',
    company: 'RapidKit',
    type: 'Full-time',
    period: 'Mar 2025 - Present',
    duration: '9 months',
    location: 'Remote',
    description: 'Building scalable applications and open-source developer tools. Creator of the RapidKit framework — passionate about Python, TypeScript, and crafting exceptional developer experiences.',
    highlights: [
      'Developed RapidKit framework for FastAPI and NestJS project generation with 100+ production-ready modules',
      'Built VS Code extension with IntelliSense support, achieving 1000+ downloads in first month',
      'Created NPM package (create-rapidkit) for rapid workspace setup with interactive CLI',
      'Established open-source community with comprehensive documentation and contributor guidelines',
      'Architected modular plugin system supporting authentication, database, caching, and 10+ other modules',
    ],
    skills: ['Python', 'TypeScript', 'FastAPI', 'NestJS', 'React', 'Next.js', 'Docker', 'PostgreSQL', 'VS Code API', 'CLI Development'],
    icon: Rocket,
    color: 'from-blue-500 to-purple-500',
  },
  {
    title: 'Front-end Team Leader',
    company: 'DATSA (Data - System Development - Analytics)',
    type: 'Full-time',
    period: 'May 2023 - May 2025',
    duration: '2 years 1 month',
    location: 'Tehran, Iran (On-site)',
    description: 'Led frontend development team, architected scalable solutions, and mentored junior developers.',
    highlights: [
      'Led team of 5 frontend developers, establishing coding standards and best practices',
      'Architected and implemented micro-frontend architecture for enterprise applications',
      'Reduced application load time by 60% through code splitting and optimization',
      'Implemented comprehensive testing strategy with 85% code coverage',
      'Conducted weekly code reviews and mentoring sessions for team growth',
    ],
    skills: ['Team Leadership', 'React', 'TypeScript', 'Next.js', 'Architecture', 'Mentoring'],
    icon: Briefcase,
    color: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'Founder & Developer',
    company: 'MoBox.Dev Platform',
    type: 'Full-time',
    period: 'Jan 2016 - Mar 2025',
    duration: '9 years 3 months',
    location: 'Tehran, Iran',
    description: 'Founded and developed custom software solutions for diverse clients across multiple industries.',
    highlights: [
      'Built 50+ custom web applications for clients across e-commerce, healthcare, and fintech',
      'Managed full project lifecycle from requirements gathering to deployment',
      'Established automated CI/CD pipelines reducing deployment time by 70%',
      'Developed reusable component libraries adopted by 20+ projects',
      'Provided technical consultation to startups on architecture and scalability',
    ],
    skills: ['Project Management', 'Business Development', 'Full-Stack Development', 'React', 'Node.js', 'Python', 'DevOps'],
    icon: Code2,
    color: 'from-orange-500 to-red-500',
  },
  {
    title: 'Senior Frontend Developer',
    company: 'Medtech',
    type: 'Part-time',
    period: 'Sep 2021 - Sep 2022',
    duration: '1 year 1 month',
    location: 'Tehran, Iran (On-site)',
    description: 'Developed medical technology applications with focus on performance and accessibility.',
    highlights: [
      'Built patient management system serving 10,000+ users',
      'Implemented WCAG 2.1 AA accessibility standards across all features',
      'Integrated real-time data visualization for medical analytics',
      'Collaborated with medical professionals to optimize UX for clinical workflows',
    ],
    skills: ['React', 'TypeScript', 'Accessibility', 'Data Visualization', 'Healthcare IT'],
    icon: Globe,
    color: 'from-pink-500 to-rose-500',
  },
];

const skills = {
  'Languages': [
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'Python', icon: SiPython, color: '#3776AB' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  ],
  'Frontend': [
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#000000', darkColor: '#FFFFFF' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  ],
  'Backend': [
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
    { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
    { name: 'NestJS', icon: SiNestjs, color: '#E0234E' },
  ],
  'Tools & DevOps': [
    { name: 'Docker', icon: SiDocker, color: '#2496ED' },
    { name: 'Git', icon: SiGit, color: '#F05032' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
  ],
};

const projects = [
  {
    name: 'RapidKit Framework',
    description: 'Production-ready FastAPI & NestJS project generator with 100+ modules including authentication, database, caching, logging, and more.',
    link: 'https://github.com/getrapidkit',
    tech: ['Python', 'TypeScript', 'CLI', 'Jinja2'],
    icon: 'rapidkit',
  },
  {
    name: 'RapidKit VS Code Extension',
    description: 'Official VS Code extension providing IntelliSense, project management, and scaffolding tools for RapidKit framework.',
    link: 'https://marketplace.visualstudio.com/items?itemName=rapidkit.rapidkit-vscode',
    tech: ['TypeScript', 'VS Code API', 'Node.js'],
    icon: 'vscode',
  },
  {
    name: 'create-rapidkit (NPM)',
    description: 'Interactive CLI tool for creating RapidKit workspaces with demo mode and customizable configurations.',
    link: 'https://www.npmjs.com/package/rapidkit',
    tech: ['TypeScript', 'Node.js', 'CLI', 'NPM'],
    icon: 'npm',
  },
];

export function ResumeContent() {
  const handleDownload = () => {
    // Create a link to download the PDF
    const link = document.createElement('a');
    link.href = '/baziar.dev_resume.pdf';
    link.download = 'Morteza_Baziar_Resume.pdf';
    link.click();
  };

  const getProjectIcon = (iconName?: string) => {
    if (iconName === 'npm') {
      return <SiNpm className="w-8 h-8 text-[#CB3837]" />;
    }
    if (iconName === 'vscode') {
      return <VscVscode className="w-8 h-8 text-[#007ACC]" />;
    }
    if (iconName === 'rapidkit') {
      return (
        <Image 
          src="/RapidKit.png" 
          alt="RapidKit" 
          width={32} 
          height={32}
          className="w-8 h-8"
        />
      );
    }
    return <Rocket className="w-6 h-6" />;
  };

  return (
    <div className="space-y-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
      >
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          {/* Left side: Info */}
          <div className="flex flex-col sm:flex-row gap-6 items-start flex-1">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="relative flex-shrink-0"
            >
              <div className="relative w-32 h-32 sm:w-40 sm:h-40">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full blur-md opacity-75"></div>
                <div className="relative w-full h-full rounded-full border-4 border-white dark:border-gray-900 shadow-xl overflow-hidden">
                  <Image
                    src="/baziar-avatar.png"
                    alt="Morteza Baziar"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </motion.div>

            {/* Text Info */}
            <div className="space-y-4 flex-1">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white font-outfit">
                Morteza Baziar
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Full-Stack Developer & Open Source Creator
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Remote / Tehran, Iran</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:baziar@live.com" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                    baziar@live.com
                  </a>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://github.com/Baziar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-900 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span className="text-sm font-medium">GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/baziar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-900 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  <span className="text-sm font-medium">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
          
          {/* Right side: Download button */}
          <motion.button
            onClick={handleDownload}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all self-start"
          >
            <Download className="w-5 h-5" />
            Download PDF
          </motion.button>
        </div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-2xl border-2 border-blue-200 dark:border-purple-500/50"
        >
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Passionate full-stack developer with 9+ years of experience building scalable web applications and developer tools. 
            Creator of RapidKit, an open-source framework that accelerates FastAPI and NestJS development with production-ready modules. 
            Expertise in TypeScript, Python, React, and modern web technologies. Proven track record of leading teams, 
            architecting complex systems, and delivering high-quality software solutions.
          </p>
        </motion.div>
      </motion.div>

      {/* Experience */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="space-y-6"
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white font-outfit flex items-center gap-3">
          <Briefcase className="w-8 h-8" />
          Experience
        </h2>
        
        <div className="space-y-6">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="relative pl-8 pb-8 border-l-2 border-gray-200 dark:border-gray-800 last:pb-0"
              >
                <div className={`absolute -left-4 top-0 w-8 h-8 rounded-full bg-gradient-to-br ${exp.color} flex items-center justify-center shadow-lg`}>
                  <Icon className="w-4 h-4 text-white" />
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {exp.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 text-gray-600 dark:text-gray-400 mt-1">
                      <span className="font-semibold">{exp.company}</span>
                      <span>•</span>
                      <span>{exp.type}</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 dark:text-gray-500 mt-1">
                      <Calendar className="w-3 h-3" />
                      <span>{exp.period}</span>
                      <span>•</span>
                      <span>{exp.duration}</span>
                      <span>•</span>
                      <MapPin className="w-3 h-3" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {exp.description}
                  </p>

                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <span className="text-blue-500 mt-1">▸</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-3 py-1 bg-gray-100 dark:bg-gray-900 rounded-full text-gray-700 dark:text-gray-300 font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      {/* Key Projects */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="space-y-6"
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white font-outfit flex items-center gap-3">
          <Rocket className="w-8 h-8" />
          Key Projects
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.a
              key={project.name}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group p-6 border-2 border-gray-200 dark:border-gray-800 rounded-2xl hover:border-blue-400 dark:hover:border-purple-500 hover:shadow-xl transition-all space-y-4 bg-white dark:bg-black"
            >
              <div className="flex items-start justify-between">
                <div className="p-2 bg-gray-100 dark:bg-gray-900 rounded-lg flex items-center justify-center">
                  {getProjectIcon(project.icon)}
                </div>
              </div>
              
              <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-purple-400 transition-colors">
                {project.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 bg-blue-50 dark:bg-purple-950/30 text-blue-700 dark:text-purple-300 rounded font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </motion.section>

      {/* Skills */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="space-y-6"
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white font-outfit flex items-center gap-3">
          <Code2 className="w-8 h-8" />
          Technical Skills
        </h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(skills).map(([category, categorySkills], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              className="space-y-4"
            >
              <h3 className="font-semibold text-gray-900 dark:text-white">
                {category}
              </h3>
              <div className="space-y-3">
                {categorySkills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group"
                    >
                      <Icon
                        className="w-5 h-5 group-hover:scale-110 transition-transform"
                        style={{ 
                          color: (skill as any).darkColor 
                            ? 'currentColor' 
                            : skill.color 
                        }}
                      />
                      {(skill as any).darkColor && (
                        <Icon 
                          className="w-5 h-5 group-hover:scale-110 transition-transform absolute dark:hidden" 
                          style={{ color: skill.color }}
                        />
                      )}
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Soft Skills */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="space-y-6"
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white font-outfit flex items-center gap-3">
          <Users className="w-8 h-8" />
          Leadership & Soft Skills
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {[
            { name: 'Team Leadership', icon: Users, color: 'from-purple-500 to-pink-500' },
            { name: 'Mentoring & Coaching', icon: MessageSquare, color: 'from-blue-500 to-cyan-500' },
            { name: 'Problem Solving', icon: Lightbulb, color: 'from-yellow-500 to-orange-500' },
            { name: 'Communication', icon: MessageSquare, color: 'from-green-500 to-emerald-500' },
            { name: 'Project Management', icon: Target, color: 'from-red-500 to-rose-500' },
          ].map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative p-4 rounded-xl bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all cursor-default text-center space-y-2"
              >
                <div className={`w-12 h-12 mx-auto rounded-full bg-gradient-to-br ${skill.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 leading-tight">
                  {skill.name}
                </p>
                
                {/* Hover glow */}
                <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity -z-10 bg-gradient-to-br ${skill.color}`} />
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      {/* Education */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="space-y-6"
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white font-outfit flex items-center gap-3">
          <Globe className="w-8 h-8" />
          Education
        </h2>
        
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9 }}
          className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-800"
        >
          <div className="absolute -left-4 top-0 w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center shadow-lg">
            <Globe className="w-4 h-4 text-white" />
          </div>
          
          <div className="space-y-2 pb-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              Master of Science (M.Sc.)
            </h3>
            <p className="text-gray-700 dark:text-gray-300 font-semibold">
              Telecommunications Engineering
            </p>
            <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <span className="font-medium">University of Isfahan</span>
              <span>•</span>
              <Calendar className="w-3 h-3" />
              <span>2013 - 2016</span>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Languages */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="space-y-6"
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white font-outfit flex items-center gap-3">
          <Globe className="w-8 h-8" />
          Languages
        </h2>
        
        <div className="grid sm:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.0 }}
            className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-2xl border-2 border-blue-200 dark:border-blue-500/50"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">🇺🇸</span>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">English</h3>
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-300 font-semibold">Professional Working Proficiency</p>
            <div className="mt-3 flex gap-1">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-2 flex-1 bg-blue-500 rounded-full" />
              ))}
              <div className="h-2 flex-1 bg-gray-300 dark:bg-gray-700 rounded-full" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.1 }}
            className="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 rounded-2xl border-2 border-emerald-200 dark:border-emerald-500/50"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">🗣️</span>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Persian (Farsi)</h3>
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-300 font-semibold">Native / Bilingual Proficiency</p>
            <div className="mt-3 flex gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="h-2 flex-1 bg-emerald-500 rounded-full" />
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
