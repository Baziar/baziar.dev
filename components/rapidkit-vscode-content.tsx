'use client';

import { motion } from 'framer-motion';
import {
  Code2,
  Zap,
  Package,
  Download,
  CheckCircle,
  Terminal,
  Layers,
  Sparkles,
  Github,
  ExternalLink,
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';
import { LiveStats } from './live-stats';

interface RapidKitVSCodeContentProps {
  version?: string;
}

export function RapidKitVSCodeContent({ version = '0.4.1' }: RapidKitVSCodeContentProps) {
  const features = [
    {
      icon: <Layers className="w-6 h-6" />,
      title: 'Workspace & Project Management',
      description:
        'Create and manage multiple FastAPI and NestJS projects in organized workspaces with visual interface.',
      items: [
        'Interactive project creation wizard',
        'Auto-detection of existing projects',
        'Project explorer with quick actions',
        'Workspace templates and presets',
      ],
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: 'Module Browser',
      description: 'Explore and install 27+ production-ready modules with one click.',
      items: [
        'Organized by category (Auth, Database, Cache, etc.)',
        'Module search and filtering',
        'Automatic dependency resolution',
        'Live installation status',
      ],
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: 'Smart IntelliSense',
      description: 'Intelligent code completion and validation for RapidKit configuration files.',
      items: [
        'Auto-completion for config options',
        'Inline documentation on hover',
        'Real-time JSON schema validation',
        'Quick fixes for common issues',
      ],
    },
    {
      icon: <Terminal className="w-6 h-6" />,
      title: 'Developer Tools',
      description: 'Built-in tools to streamline your development workflow.',
      items: [
        'System requirements checker',
        'Real-time status bar updates',
        'Demo project generator',
        'File watchers for auto-refresh',
      ],
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: 'Code Snippets',
      description: 'Ready-to-use code snippets for FastAPI and NestJS.',
      items: [
        'Python: Routes, services, repositories, tests',
        'TypeScript: Modules, controllers, DTOs',
        'YAML: Module configs and definitions',
        'Trigger with intuitive shortcuts',
      ],
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Performance Optimized',
      description: 'Lightning-fast extension with minimal footprint.',
      items: [
        'Bundle size: 209KB (55% optimized)',
        'Aggressive tree-shaking',
        'Zero console logs in production',
        'Instant activation and response',
      ],
    },
  ];

  const quickStart = [
    {
      step: '1',
      title: 'Install Extension',
      description: 'Search "RapidKit" in VS Code Extensions marketplace and click Install',
      command: 'code --install-extension rapidkit.rapidkit-vscode',
    },
    {
      step: '2',
      title: 'Create Workspace',
      description: 'Open Command Palette and run "RapidKit: Create Workspace"',
      command: 'Ctrl+Shift+P → RapidKit: Create Workspace',
    },
    {
      step: '3',
      title: 'Generate Project',
      description: 'Choose framework (FastAPI/NestJS) and mode (demo/full)',
      command: 'Ctrl+Shift+P → RapidKit: Create Project',
    },
    {
      step: '4',
      title: 'Add Modules',
      description: 'Browse modules in sidebar and install with one click',
      command: 'Click RapidKit icon → Browse modules',
    },
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-950 rounded-full text-sm font-medium text-blue-700 dark:text-blue-300">
            <CheckCircle className="w-4 h-4" />
            Version {version} - Optimized & Production Ready
          </div>

          <h1 className="text-5xl md:text-7xl font-bold font-outfit">
            RapidKit for{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              VS Code
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Build production-ready FastAPI and NestJS projects directly in Visual Studio Code.
            Intelligent IntelliSense, module browser, and project management in one powerful
            extension.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <a
              href="https://marketplace.visualstudio.com/items?itemName=rapidkit.rapidkit-vscode"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all hover:scale-105 hover:shadow-lg flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              Install from Marketplace
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="https://github.com/getrapidkit/rapidkit-vscode"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600 rounded-lg font-medium transition-all flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              View on GitHub
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="px-6 py-12 max-w-6xl mx-auto">
        <LiveStats type="vscode" />
      </section>

      {/* Features Section */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-outfit mb-4">Powerful Features</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Everything you need for modern backend development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 border border-gray-200 dark:border-gray-800 rounded-xl hover:border-blue-400 dark:hover:border-blue-600 transition-all space-y-4 bg-white dark:bg-black group hover:shadow-lg"
            >
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-950 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 font-outfit">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {feature.description}
                </p>
              </div>

              <ul className="space-y-2">
                {feature.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                  >
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quick Start Guide */}
      <section className="px-6 py-20 max-w-6xl mx-auto bg-gradient-to-b from-transparent via-blue-50/50 to-transparent dark:via-blue-950/20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-outfit mb-4">Quick Start Guide</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">Get started in 4 simple steps</p>
        </motion.div>

        <div className="space-y-6">
          {quickStart.map((item, idx) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="flex gap-6 p-6 border border-gray-200 dark:border-gray-800 rounded-xl bg-white dark:bg-black hover:border-blue-400 dark:hover:border-blue-600 transition-all"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                {item.step}
              </div>

              <div className="flex-1 space-y-2">
                <h3 className="text-xl font-semibold font-outfit">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                <code className="block px-4 py-2 bg-gray-100 dark:bg-gray-900 rounded text-sm font-mono text-blue-600 dark:text-blue-400">
                  {item.command}
                </code>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8 p-12 border border-gray-200 dark:border-gray-800 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-outfit">
            Ready to Boost Your Productivity?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Join developers building production-ready backends faster with RapidKit VS Code
            Extension
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://marketplace.visualstudio.com/items?itemName=rapidkit.rapidkit-vscode"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" />
              Install Now - It&apos;s Free
            </a>

            <Link
              href="/"
              className="px-8 py-4 border border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600 rounded-lg font-medium transition-all flex items-center justify-center gap-2"
            >
              Back to Home
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
