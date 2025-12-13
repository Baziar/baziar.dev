'use client';

import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

export function ContactHeader() {
  return (
    <motion.div
      className="text-center space-y-4 max-w-2xl mx-auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wider">
        <Mail className="w-4 h-4" />
        Get In Touch
      </div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white font-outfit">
        Let's Work Together
      </h2>
      <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
        I'm always open to discussing new projects, creative ideas, or opportunities to be part of
        your visions.
      </p>
    </motion.div>
  );
}
