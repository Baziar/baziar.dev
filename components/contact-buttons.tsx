'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Rocket } from 'lucide-react';

export function ContactButtons() {
  return (
    <motion.div className="flex flex-wrap justify-center gap-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href="mailto:baziar@live.com"
        className="flex items-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:opacity-90 transition-opacity font-semibold"
      >
        <Mail className="w-5 h-5" />
        baziar@live.com
      </motion.a>
      
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href="https://github.com/Baziar"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-6 py-3 border-2 border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors text-gray-700 dark:text-gray-300 font-semibold"
      >
        <Github className="w-5 h-5" />
        GitHub
      </motion.a>
      
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href="https://github.com/getrapidkit"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-6 py-3 border-2 border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors text-gray-700 dark:text-gray-300 font-semibold"
      >
        <Rocket className="w-5 h-5" />
        RapidKit
      </motion.a>
      
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href="https://www.linkedin.com/in/baziar/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-6 py-3 border-2 border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors text-gray-700 dark:text-gray-300 font-semibold"
      >
        <Linkedin className="w-5 h-5" />
        LinkedIn
      </motion.a>
    </motion.div>
  );
}
