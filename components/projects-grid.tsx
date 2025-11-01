'use client';

import { motion } from 'framer-motion';
import { Code2, ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  link: string;
  tags: string[];
}

interface ProjectsGridProps {
  projects: Project[];
}

export function ProjectsGrid({ projects }: ProjectsGridProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, idx) => (
        <motion.a
          key={project.title}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
          whileHover={{ y: -8 }}
          className="group p-6 border border-gray-200 dark:border-gray-800 rounded-xl hover:border-gray-400 dark:hover:border-gray-600 hover:shadow-lg transition-all space-y-4 bg-white dark:bg-black"
        >
          <div className="flex items-start justify-between">
            <div className="p-2 bg-gray-100 dark:bg-gray-900 rounded-lg">
              <Code2 className="w-5 h-5" />
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
        </motion.a>
      ))}
    </div>
  );
}
