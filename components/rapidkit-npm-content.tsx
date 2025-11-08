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
  Clock,
  Github,
  ExternalLink,
  ArrowRight,
  Copy
} from 'lucide-react';
import { SiNpm } from 'react-icons/si';
import Link from 'next/link';
import { useState } from 'react';
import { LiveStats } from './live-stats';

export function RapidKitNpmContent() {
  const [copied, setCopied] = useState(false);
  const installCommand = 'npx rapidkit my-workspace --demo';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(installCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const features = [
    {
      icon: <Rocket className="w-6 h-6" />,
      title: 'Demo Mode Available Now',
      description: 'Create workspaces with bundled FastAPI templates. No Python RapidKit required.',
      items: [
        'Instant workspace creation',
        'Multiple projects per workspace',
        'Bundled FastAPI templates',
        'No complex dependencies'
      ]
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: 'Workspace Architecture',
      description: 'Organize multiple projects in one development environment.',
      items: [
        'Container directory structure',
        'Shared virtual environment',
        'Microservices-friendly',
        'Isolated from system Python'
      ]
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: 'Multiple Install Methods',
      description: 'Choose your preferred Python package manager.',
      items: [
        'Poetry (recommended)',
        'Python venv + pip',
        'pipx (global install)',
        'Interactive selection'
      ]
    },
    {
      icon: <GitBranch className="w-6 h-6" />,
      title: 'Project Templates',
      description: 'Production-ready templates for FastAPI and NestJS.',
      items: [
        'fastapi.standard - Basic features',
        'fastapi.advanced - Advanced features',
        'nestjs.standard - TypeScript basics',
        'nestjs.advanced - Enterprise-ready'
      ]
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: 'Developer Experience',
      description: 'Built with TypeScript for reliability and performance.',
      items: [
        'Interactive CLI prompts',
        'Debug mode available',
        'Dry-run preview',
        'Auto-update checks'
      ]
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Optimized Bundle',
      description: 'Lightning-fast installation with minimal footprint.',
      items: [
        '40KB bundle size (80% reduction)',
        'Built with tsup + esbuild',
        'Tree-shaking enabled',
        'Zero bloat dependencies'
      ]
    }
  ];

  const usageModes = [
    {
      title: 'Demo Mode',
      badge: 'Available Now',
      description: 'Perfect for prototyping and learning',
      command: 'npx rapidkit my-workspace --demo',
      steps: [
        'Create demo workspace instantly',
        'Generate FastAPI projects with bundled templates',
        'No Python RapidKit dependency',
        'Start coding immediately'
      ]
    },
    {
      title: 'Full Mode',
      badge: 'Coming Soon',
      description: 'Complete RapidKit experience with all features',
      command: 'npx rapidkit my-workspace',
      steps: [
        'Install RapidKit Python package',
        'Access 100+ production modules',
        'Full CLI command support',
        'Enterprise-ready features'
      ]
    }
  ];

  const workflow = [
    {
      step: '1',
      title: 'Create Workspace',
      demo: 'npx rapidkit my-workspace --demo',
      full: 'npx rapidkit my-workspace'
    },
    {
      step: '2',
      title: 'Navigate to Directory',
      demo: 'cd my-workspace',
      full: 'cd my-workspace'
    },
    {
      step: '3',
      title: 'Generate Project',
      demo: 'node generate-demo.js api-service',
      full: 'rapidkit create api-service'
    },
    {
      step: '4',
      title: 'Install & Run',
      demo: 'cd api-service && poetry install && poetry run dev',
      full: 'cd api-service && rapidkit run dev'
    }
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 dark:bg-red-950 rounded-full text-sm font-medium text-red-700 dark:text-red-300">
            <SiNpm className="w-4 h-4" />
            NPM Package v0.10.1
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold font-outfit">
            <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
              create-rapidkit
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            The fastest way to create production-ready FastAPI and NestJS workspaces. 
            Demo mode with bundled templates available now - no complex setup required.
          </p>

          {/* Install Command */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            <div className="flex items-center gap-2 p-4 bg-gray-100 dark:bg-gray-900 rounded-lg border border-gray-300 dark:border-gray-700">
              <Terminal className="w-5 h-5 text-gray-600 dark:text-gray-400 flex-shrink-0" />
              <code className="flex-1 font-mono text-sm text-gray-800 dark:text-gray-200">
                {installCommand}
              </code>
              <button
                onClick={copyToClipboard}
                className="p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded transition-colors"
                title="Copy command"
              >
                {copied ? (
                  <CheckCircle className="w-5 h-5 text-green-600" />
                ) : (
                  <Copy className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                )}
              </button>
            </div>
          </motion.div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <a
              href="https://www.npmjs.com/package/rapidkit"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-all hover:scale-105 hover:shadow-lg flex items-center gap-2"
            >
              <SiNpm className="w-5 h-5" />
              View on NPM
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a
              href="https://github.com/getrapidkit/rapidkit-npm"
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
        <LiveStats type="npm" />
      </section>

      {/* Usage Modes */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-outfit mb-4">
            Two Ways to Use
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Choose the mode that fits your needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {usageModes.map((mode, idx) => (
            <motion.div
              key={mode.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="p-8 border border-gray-200 dark:border-gray-800 rounded-xl bg-white dark:bg-black hover:border-red-400 dark:hover:border-red-600 transition-all space-y-6 hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold font-outfit">{mode.title}</h3>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  mode.badge === 'Available Now' 
                    ? 'bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-300'
                    : 'bg-yellow-100 dark:bg-yellow-950 text-yellow-700 dark:text-yellow-300'
                }`}>
                  {mode.badge}
                </span>
              </div>

              <p className="text-gray-600 dark:text-gray-400">
                {mode.description}
              </p>

              <code className="block px-4 py-3 bg-gray-100 dark:bg-gray-900 rounded text-sm font-mono text-red-600 dark:text-red-400">
                {mode.command}
              </code>

              <ul className="space-y-3">
                {mode.steps.map((step, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-400">{step}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-outfit mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Everything you need to start building
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
              className="p-6 border border-gray-200 dark:border-gray-800 rounded-xl hover:border-red-400 dark:hover:border-red-600 transition-all space-y-4 bg-white dark:bg-black group hover:shadow-lg"
            >
              <div className="w-12 h-12 bg-red-100 dark:bg-red-950 rounded-lg flex items-center justify-center text-red-600 dark:text-red-400 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2 font-outfit">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {feature.description}
                </p>
              </div>

              <ul className="space-y-2">
                {feature.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Workflow Comparison */}
      <section className="px-6 py-20 max-w-6xl mx-auto bg-gradient-to-b from-transparent via-red-50/50 to-transparent dark:via-red-950/20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-outfit mb-4">
            Typical Workflow
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            From workspace to running project in 4 steps
          </p>
        </motion.div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-800">
                <th className="text-left p-4 font-outfit text-gray-900 dark:text-white">Step</th>
                <th className="text-left p-4 font-outfit text-gray-900 dark:text-white">Demo Mode</th>
                <th className="text-left p-4 font-outfit text-gray-900 dark:text-white">Full Mode</th>
              </tr>
            </thead>
            <tbody>
              {workflow.map((row, idx) => (
                <motion.tr
                  key={row.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="border-b border-gray-100 dark:border-gray-900 hover:bg-gray-50 dark:hover:bg-gray-900/50"
                >
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                        {row.step}
                      </div>
                      <span className="font-medium">{row.title}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <code className="text-sm font-mono text-green-600 dark:text-green-400">
                      {row.demo}
                    </code>
                  </td>
                  <td className="p-4">
                    <code className="text-sm font-mono text-blue-600 dark:text-blue-400">
                      {row.full}
                    </code>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8 p-12 border border-gray-200 dark:border-gray-800 rounded-2xl bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-950 dark:to-pink-950"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-outfit">
            Start Building Today
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Create your first RapidKit workspace in seconds
          </p>
          
          <div className="flex flex-col gap-4">
            <code className="px-6 py-4 bg-gray-900 dark:bg-black text-green-400 rounded-lg font-mono text-lg">
              npx rapidkit my-workspace --demo
            </code>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.npmjs.com/package/rapidkit"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-all hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
              >
                <SiNpm className="w-5 h-5" />
                View Package
              </a>
              
              <Link
                href="/"
                className="px-8 py-4 border border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600 rounded-lg font-medium transition-all flex items-center justify-center gap-2"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
