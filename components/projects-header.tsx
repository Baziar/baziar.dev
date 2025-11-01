'use client';

import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';

export function ProjectsHeader() {
  return (
    <motion.div className="space-y-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
      <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wider">
        <Rocket className="w-4 h-4" />
        Featured Projects
      </div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white font-outfit">
        Things I've Built
      </h2>
    </motion.div>
  );
}
