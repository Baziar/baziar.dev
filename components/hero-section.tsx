'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Github, Mail, Linkedin, Terminal } from 'lucide-react';
import { useState, useEffect } from 'react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export function HeroSection() {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Full-Stack Developer & Open Source Enthusiast';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="flex flex-col justify-center py-24">
      <motion.div {...fadeIn} className="flex flex-col md:flex-row gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 flex-shrink-0 order-first"
        >
          <motion.div
            className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-30 blur-lg"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          />
          <Image
            src="/baziar-avatar.png"
            alt="Morteza Baziar"
            fill
            className="rounded-full object-cover border-4 border-gray-200 dark:border-gray-800 shadow-2xl ring-4 ring-gray-100 dark:ring-gray-900 relative z-10"
            priority
            quality={85}
            sizes="(max-width: 768px) 128px, (max-width: 1024px) 160px, 200px"
          />
        </motion.div>

        <div className="flex-1 space-y-6 text-center md:text-left w-full order-last md:order-none">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-900 text-xs sm:text-sm text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-800 mx-auto md:mx-0 whitespace-nowrap">
            <motion.span
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block w-2 h-2 bg-green-500 rounded-full flex-shrink-0"
            />
            <span>Available for new opportunities</span>
          </div>

          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white font-outfit">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="inline-block"
              >
                Morteza
              </motion.span>{' '}
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
              >
                Baziar
              </motion.span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-400 mt-2 min-h-[2rem] flex items-center justify-center md:justify-start">
              <Terminal className="w-5 h-5 mr-2 text-blue-500" />
              <span>{typedText}</span>
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-0.5 h-6 bg-blue-500 ml-1"
              />
            </p>
          </div>

          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            Building scalable applications and developer tools. Creator of RapidKit framework.
            Passionate about TypeScript, Python, and creating exceptional developer experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 justify-center md:justify-start">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/Baziar"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:opacity-90 transition-opacity w-full sm:w-auto font-semibold"
            >
              <Github className="w-5 h-5" />
              GitHub
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}
              whileTap={{ scale: 0.95 }}
              href="https://www.linkedin.com/in/baziar/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-[#0A66C2] text-white rounded-lg hover:bg-[#004182] transition-all w-full sm:w-auto font-semibold shadow-lg"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors text-gray-700 dark:text-gray-300 w-full sm:w-auto font-semibold"
            >
              <Mail className="w-5 h-5" />
              Contact Me
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
