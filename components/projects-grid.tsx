'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Zap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { VscVscode } from 'react-icons/vsc';
import { SiNpm } from 'react-icons/si';

interface Project {
  title: string;
  description: string;
  link: string;
  tags: string[];
  icon?: string;
}

interface ProjectsGridProps {
  projects: Project[];
}

export function ProjectsGrid({ projects }: ProjectsGridProps) {
  const getIcon = (iconName?: string) => {
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
    return <Zap className="w-5 h-5" />;
  };

  const isExternalLink = (link: string) => {
    return link.startsWith('http://') || link.startsWith('https://');
  };

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, idx) => {
        const external = isExternalLink(project.link);
        const Component = external ? motion.a : motion(Link);
        const linkProps = external 
          ? { 
              href: project.link, 
              target: "_blank", 
              rel: "noopener noreferrer" 
            }
          : { href: project.link };

        return (
          <Component
            key={project.title}
            {...linkProps}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -8 }}
            className="group p-6 border border-gray-200 dark:border-gray-800 rounded-xl hover:border-gray-400 dark:hover:border-gray-600 hover:shadow-lg transition-all space-y-4 bg-white dark:bg-black"
          >
            <div className="flex items-start justify-between">
              <div className="p-2 bg-gray-100 dark:bg-gray-900 rounded-lg flex items-center justify-center">
                {getIcon(project.icon)}
              </div>
              <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white font-outfit">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-900 rounded text-gray-700 dark:text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Component>
        );
      })}
    </div>
  );
}
