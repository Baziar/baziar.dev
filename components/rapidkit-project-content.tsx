'use client';

import { motion } from 'framer-motion';
import { 
  Terminal, 
  Zap, 
  Package, 
  Rocket, 
  CheckCircle, 
  Code2,
  Layers,
  GitBranch,
  Github,
  ExternalLink,
  ArrowRight,
  Copy,
  Shield,
  Blocks,
  Globe,
  Download,
  Star
} from 'lucide-react';
import { SiNpm, SiFastapi, SiNestjs, SiPython, SiTypescript } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

interface Versions {
  npm: string;
  vscode: string;
  updatedAt: string;
}

export function RapidKitProjectContent() {
  const [copied, setCopied] = useState(false);
  const [versions, setVersions] = useState<Versions>({
    npm: '0.12.3',
    vscode: '0.4.1',
    updatedAt: new Date().toISOString(),
  });
  const installCommand = 'npx rapidkit my-api --template fastapi';

  useEffect(() => {
    // Fetch versions on mount
    fetch('/api/rapidkit-versions')
      .then((res) => res.json())
      .then((data: Versions) => {
        setVersions(data);
      })
      .catch((error) => {
        console.error('Failed to fetch versions:', error);
        // Keep fallback versions
      });
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(installCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const features = [
    {
      icon: <Terminal className="w-6 h-6" />,
      title: 'CLI First',
      description: 'Create projects, add modules, and scaffold code with simple commands.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Blocks className="w-6 h-6" />,
      title: 'Modular Design',
      description: 'Pick exactly what you need. Auth, database, cache — each module is self-contained.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: 'Clean Architecture',
      description: 'DDD patterns and SOLID principles baked in. Your codebase stays maintainable.',
      color: 'from-amber-500 to-orange-500'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Zero Config',
      description: 'Sensible defaults that just work. Override when you need to, not when you have to.',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Type Safe',
      description: 'Full TypeScript support with strict types. Catch errors before runtime.',
      color: 'from-rose-500 to-red-500'
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: 'Production Ready',
      description: 'Battle-tested modules with proper error handling, logging, and observability.',
      color: 'from-violet-500 to-indigo-500'
    }
  ];

  const stats = [
    { value: '27+', label: 'Modules', icon: <Package className="w-5 h-5" /> },
    { value: '40+', label: 'CLI Commands', icon: <Terminal className="w-5 h-5" /> },
    { value: '3', label: 'Project Kits', icon: <Layers className="w-5 h-5" /> },
    { value: '100%', label: 'Open Source', icon: <Github className="w-5 h-5" /> },
  ];

  const links = [
    {
      title: 'Official Website',
      description: 'Documentation, guides, and full feature list',
      href: 'https://getrapidkit.com',
      icon: <Globe className="w-6 h-6" />,
      color: 'bg-gradient-to-br from-blue-500 to-purple-600',
      primary: true
    },
    {
      title: 'NPM Package',
      description: 'Install with npx rapidkit',
      href: 'https://npmjs.com/package/rapidkit',
      icon: <SiNpm className="w-6 h-6" />,
      color: 'bg-[#CB3837]',
      badge: `v${versions.npm}`
    },
    {
      title: 'VS Code Extension',
      description: 'Visual project management',
      href: 'https://marketplace.visualstudio.com/items?itemName=rapidkit.rapidkit-vscode',
      icon: <VscVscode className="w-6 h-6" />,
      color: 'bg-[#007ACC]',
      badge: `v${versions.vscode}`
    },
    {
      title: 'GitHub Repository',
      description: 'Source code and contributions',
      href: 'https://github.com/getrapidkit/community',
      icon: <Github className="w-6 h-6" />,
      color: 'bg-gray-800 dark:bg-gray-700'
    }
  ];

  const relatedPages = [
    {
      title: 'NPM Package Details',
      description: 'Deep dive into the rapidkit npm package features and usage',
      href: '/rapidkit-npm',
      icon: <SiNpm className="w-5 h-5 text-[#CB3837]" />
    },
    {
      title: 'VS Code Extension',
      description: 'Learn about the RapidKit VS Code extension capabilities',
      href: '/rapidkit-vscode',
      icon: <VscVscode className="w-5 h-5 text-[#007ACC]" />
    }
  ];

  return (
    <main className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-6"
        >
          {/* Logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="flex justify-center mb-8"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-30" />
              <Image 
                src="/RapidKit.png" 
                alt="RapidKit" 
                width={120} 
                height={120}
                className="relative rounded-2xl"
              />
            </div>
          </motion.div>

          {/* Badges */}
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-sm font-medium">
              <SiFastapi className="w-4 h-4" />
              FastAPI
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 text-sm font-medium">
              <SiNestjs className="w-4 h-4" />
              NestJS
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium">
              Open Source
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-outfit">
            <span className="block">Build Modern Backends</span>
            <span className="block mt-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              at Warp Speed
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            RapidKit is an open-source framework that helps developers build, scale, and deploy 
            production-ready APIs faster. Clean architecture, modular design, and automation-first 
            workflows for FastAPI & NestJS.
          </p>

          {/* Quick Install */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex justify-center"
          >
            <button
              onClick={copyToClipboard}
              className="group flex items-center gap-3 px-6 py-4 bg-gray-900 dark:bg-gray-800 rounded-xl border border-gray-700 hover:border-gray-500 transition-all cursor-pointer"
            >
              <Terminal className="w-5 h-5 text-gray-400" />
              <code className="text-gray-300 font-mono text-sm sm:text-base">{installCommand}</code>
              {copied ? (
                <CheckCircle className="w-5 h-5 text-emerald-400" />
              ) : (
                <Copy className="w-5 h-5 text-gray-500 group-hover:text-gray-300 transition-colors" />
              )}
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-center gap-8 sm:gap-12 pt-8"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="flex items-center justify-center text-gray-400 mb-1">
                  {stat.icon}
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-500">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Links Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 mb-20">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl font-bold text-center mb-10 font-outfit"
        >
          Get Started with RapidKit
        </motion.h2>

        <div className="grid sm:grid-cols-2 gap-4">
          {links.map((link, idx) => (
            <motion.a
              key={link.title}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`group relative p-6 rounded-2xl border transition-all ${
                link.primary 
                  ? 'border-purple-500/50 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 hover:border-purple-400'
                  : 'border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600 bg-white dark:bg-gray-900/50'
              }`}
            >
              <div className="flex items-start justify-between">
                <div className={`p-3 rounded-xl ${link.color} text-white`}>
                  {link.icon}
                </div>
                <div className="flex items-center gap-2">
                  {link.badge && (
                    <span className="px-2 py-0.5 rounded text-xs font-mono bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                      {link.badge}
                    </span>
                  )}
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-gray-400" />
                </div>
              </div>
              <h3 className="text-lg font-semibold mt-4 text-gray-900 dark:text-white font-outfit">
                {link.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                {link.description}
              </p>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-20">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl font-bold text-center mb-10 font-outfit"
        >
          Why Developers Love RapidKit
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-6 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 bg-white dark:bg-gray-900/50 transition-all"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.color} text-white mb-4`}>
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 font-outfit">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Related Pages */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 mb-20">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-center mb-8 font-outfit"
        >
          Explore More
        </motion.h2>

        <div className="grid sm:grid-cols-2 gap-4">
          {relatedPages.map((page, idx) => (
            <motion.div
              key={page.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Link
                href={page.href}
                className="group flex items-center gap-4 p-4 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-600 bg-white dark:bg-gray-900/50 transition-all"
              >
                <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800">
                  {page.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {page.title}
                  </h3>
                  <p className="text-sm text-gray-500">{page.description}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-purple-500/20"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 font-outfit">
            Ready to ship faster?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Join developers building production-ready APIs with RapidKit
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://getrapidkit.com/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/getrapidkit/community"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600 rounded-xl font-semibold transition-all"
            >
              <Github className="w-4 h-4" />
              Star on GitHub
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
