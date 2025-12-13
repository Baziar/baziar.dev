'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Rocket } from 'lucide-react';

export function ContactButtons() {
  return (
    <motion.div
      className="flex flex-wrap justify-center gap-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
    >
      <motion.a
        whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(0,0,0,0.15)' }}
        whileTap={{ scale: 0.95 }}
        href="mailto:baziar@live.com"
        className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 text-white dark:text-black rounded-lg hover:from-black hover:to-gray-800 dark:hover:from-gray-100 dark:hover:to-white transition-all font-semibold shadow-lg"
      >
        <motion.div whileHover={{ rotate: 15 }}>
          <Mail className="w-5 h-5" />
        </motion.div>
        baziar@live.com
      </motion.a>

      <motion.a
        whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}
        whileTap={{ scale: 0.95 }}
        href="https://github.com/Baziar"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2 px-6 py-3 border-2 border-gray-300 dark:border-gray-700 rounded-lg hover:border-gray-900 dark:hover:border-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900 transition-all text-gray-700 dark:text-gray-300 font-semibold"
      >
        <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
          <Github className="w-5 h-5" />
        </motion.div>
        GitHub
      </motion.a>

      <motion.a
        whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(0,207,193,0.2)' }}
        whileTap={{ scale: 0.95 }}
        href="https://github.com/getrapidkit"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#00cfc1] to-[#00a89a] text-white rounded-lg hover:from-[#00b8ab] hover:to-[#008f83] transition-all font-semibold shadow-lg"
      >
        <motion.div animate={{ y: [0, -3, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <Rocket className="w-5 h-5" />
        </motion.div>
        RapidKit
      </motion.a>

      <motion.a
        whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(10,102,194,0.2)' }}
        whileTap={{ scale: 0.95 }}
        href="https://www.linkedin.com/in/baziar/"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2 px-6 py-3 bg-[#0A66C2] text-white rounded-lg hover:bg-[#004182] transition-all font-semibold shadow-lg"
      >
        <motion.div whileHover={{ scale: 1.2 }}>
          <Linkedin className="w-5 h-5" />
        </motion.div>
        LinkedIn
      </motion.a>
    </motion.div>
  );
}
