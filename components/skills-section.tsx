'use client';

import { motion } from 'framer-motion';
import { 
  SiTypescript, SiPython, SiReact, SiNextdotjs, SiNodedotjs,
  SiFastapi, SiNestjs, SiPostgresql, SiDocker, SiGit,
  SiTailwindcss, SiJavascript, SiLinux
} from 'react-icons/si';
import { VscVscode } from "react-icons/vsc";

const skills = [
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#000000', darkColor: '#FFFFFF' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
  { name: 'NestJS', icon: SiNestjs, color: '#E0234E' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Linux', icon: SiLinux, color: '#FCC624' },
  { name: 'VS Code', icon: VscVscode, color: '#007ACC' },
];

export function SkillsSection() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-3">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white font-outfit"
        >
          Skills & Technologies
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
        >
          Technologies I work with to build modern, scalable applications
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 sm:gap-6"
      >
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="group relative flex flex-col items-center gap-3 p-4 sm:p-6 rounded-2xl bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all cursor-default shadow-sm hover:shadow-lg"
            >
              {/* Icon with original brand color */}
              <div className="relative">
                <Icon 
                  className="w-10 h-10 sm:w-12 sm:h-12 transition-transform group-hover:rotate-12" 
                  style={{ 
                    color: skill.darkColor 
                      ? 'currentColor' 
                      : skill.color 
                  }}
                />
                {skill.darkColor && (
                  <Icon 
                    className="w-10 h-10 sm:w-12 sm:h-12 transition-transform group-hover:rotate-12 absolute inset-0 dark:hidden" 
                    style={{ color: skill.color }}
                  />
                )}
              </div>
              
              {/* Skill Name */}
              <span className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 text-center">
                {skill.name}
              </span>

              {/* Hover glow effect */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity -z-10"
                style={{ backgroundColor: skill.color }}
              />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
