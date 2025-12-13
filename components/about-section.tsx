'use client';

import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';

export function AboutSection() {
  return (
    <>
      <motion.div
        className="space-y-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wider">
          <Code2 className="w-4 h-4" />
          About Me
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white font-outfit">
          Building the Future of Development
        </h2>
      </motion.div>
    </>
  );
}
