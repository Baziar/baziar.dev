import Image from 'next/image';
import { Navigation } from '@/components/navigation';
import { HeroSection } from '@/components/hero-section';
import { AboutSection } from '@/components/about-section';
import { SkillsSection } from '@/components/skills-section';
import { ProjectsHeader } from '@/components/projects-header';
import { ProjectsGrid } from '@/components/projects-grid';
import { ContactHeader } from '@/components/contact-header';
import { ContactButtons } from '@/components/contact-buttons';
import { ScrollToTop } from '@/components/scroll-to-top';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Morteza Baziar | Full-Stack Developer',
  description:
    'Full-stack developer specializing in TypeScript, Python, React, and Next.js. Creator of RapidKit framework.',
};

async function getVersions() {
  try {
    // Fetch directly from npm registry and PyPI (works in build time)
    const [npmRes, vscodeRes, pypiRes] = await Promise.all([
      fetch('https://registry.npmjs.org/rapidkit', {
        next: { revalidate: 3600 },
      }),
      fetch('https://marketplace.visualstudio.com/_apis/public/gallery/extensionquery', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json;api-version=3.0-preview.1',
        },
        body: JSON.stringify({
          filters: [
            {
              criteria: [
                {
                  filterType: 7,
                  value: 'rapidkit.rapidkit-vscode',
                },
              ],
            },
          ],
          flags: 914,
        }),
        next: { revalidate: 3600 },
      }),
      fetch('https://pypi.org/pypi/rapidkit-core/json', { next: { revalidate: 3600 } }),
    ]);

    let npmVersion = '0.16.4';
    let vscodeVersion = '0.6.1';
    let pipVersion = '0.2.2rc1';

    if (npmRes.ok) {
      const npmData = await npmRes.json();
      npmVersion = npmData['dist-tags']?.latest || npmVersion;
    }

    if (vscodeRes.ok) {
      const vscodeData = await vscodeRes.json();
      const extensionData = vscodeData.results?.[0]?.extensions?.[0];
      if (extensionData?.versions?.[0]?.version) {
        vscodeVersion = extensionData.versions[0].version;
      }
    }

    if (pypiRes.ok) {
      const pypiData = await pypiRes.json();
      const v = pypiData?.info?.version;
      if (v) pipVersion = v;
    }

    return { npm: npmVersion, vscode: vscodeVersion, pip: pipVersion };
  } catch (error) {
    console.error('Failed to fetch versions:', error);
    return { npm: '0.16.4', vscode: '0.6.1', pip: '0.2.2rc1' };
  }
}

export default async function Home() {
  const versions = await getVersions();

  const skills = [
    'TypeScript',
    'Python',
    'React',
    'Next.js',
    'Node.js',
    'FastAPI',
    'NestJS',
    'PostgreSQL',
    'Docker',
    'Git',
  ];

  const projects = [
    {
      title: 'RapidKit Core',
      description:
        'Open-source framework for building production-ready FastAPI & NestJS projects with 27+ modules',
      link: '/rapidkit',
      tags: ['TypeScript', 'Python', 'Framework', 'Open Source'],
      icon: 'rapidkit',
      version: versions.pip,
    },

    {
      title: 'RapidKit VS Code',
      description:
        'Official VS Code extension with IntelliSense, project wizard, and module browser',
      link: '/rapidkit-vscode',
      tags: ['VS Code', 'TypeScript', 'Extension'],
      icon: 'vscode',
      version: versions.vscode,
    },
    {
      title: 'RapidKit CLI',
      description: 'NPM package for instant project creation - npx rapidkit create project',
      link: '/rapidkit-npm',
      tags: ['NPM', 'CLI', 'Node.js'],
      icon: 'npm',
      version: versions.npm,
    },
  ];

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Morteza Baziar',
    url: 'https://baziar.dev',
    image: 'https://baziar.dev/baziar-avatar.png',
    sameAs: [
      'https://github.com/Baziar',
      'https://github.com/getrapidkit',
      'https://www.linkedin.com/in/baziar/',
    ],
    jobTitle: 'Full-Stack Developer',
    worksFor: {
      '@type': 'Organization',
      name: 'RapidKit',
      url: 'https://getrapidkit.com',
    },
    knowsAbout: [
      'TypeScript',
      'Python',
      'React',
      'Next.js',
      'Node.js',
      'FastAPI',
      'NestJS',
      'PostgreSQL',
      'Docker',
      'Git',
    ],
    email: 'baziar@live.com',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen bg-gradient-to-b from-white via-white to-gray-50 dark:from-black dark:via-black dark:to-gray-950">
        <Navigation />
        <main className="max-w-6xl mx-auto px-4 sm:px-6">
          <HeroSection />

          <section id="about" className="py-8 sm:py-24 md:py-32 space-y-8 sm:space-y-12">
            <AboutSection />

            <div className="grid md:grid-cols-[1fr_250px] gap-8 md:gap-12 items-start">
              <div className="space-y-8">
                <div className="space-y-4 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  <p>
                    I'm a full-stack developer with a passion for creating tools that make
                    developers' lives easier. With years of experience in both frontend and backend
                    development, I specialize in building scalable applications and developer
                    frameworks.
                  </p>
                  <p>
                    Currently working on RapidKit, a comprehensive framework for generating
                    production-ready FastAPI and NestJS projects. I believe in open source, clean
                    code, and sharing knowledge with the community.
                  </p>
                </div>

                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white font-outfit">
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 bg-gray-100 dark:bg-gray-900 rounded-lg text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors cursor-default text-gray-700 dark:text-gray-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6 hidden md:block">
                <div className="relative w-full aspect-square">
                  <Image
                    src="/RapidKit.png"
                    alt="RapidKit Framework"
                    fill
                    className="rounded-2xl object-contain border-2 border-gray-200 dark:border-gray-800 shadow-lg p-4 bg-white dark:bg-gray-950"
                    loading="lazy"
                    quality={80}
                    sizes="(max-width: 768px) 100vw, 200px"
                  />
                </div>
                <div className="space-y-4">
                  <a
                    href="https://getrapidkit.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-3 p-4 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 border-2 border-blue-200 dark:border-purple-500/50 hover:border-blue-400 dark:hover:border-purple-400 hover:shadow-lg dark:hover:shadow-purple-500/20 transition-all group"
                  >
                    <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300">
                      Official Website
                    </span>
                    <span className="text-lg font-black text-gray-900 dark:text-white group-hover:scale-105 transition-transform">
                      GetRapidkit.com
                    </span>
                    <span className="text-xs text-gray-600 dark:text-gray-400 text-center">
                      Open-source framework for developers
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section id="skills" className="py-8 sm:py-24 md:py-32">
            <SkillsSection />
          </section>

          <section id="projects" className="py-8 sm:py-24 md:py-32 space-y-8 sm:space-y-12">
            <ProjectsHeader />
            <ProjectsGrid projects={projects} />
          </section>

          <section id="contact" className="py-8 sm:py-24 md:py-32 space-y-8 sm:space-y-12">
            <ContactHeader />
            <ContactButtons />
          </section>
        </main>

        <footer className="border-t border-gray-200 dark:border-gray-800 py-12 bg-gray-50/50 dark:bg-gray-900/50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-center md:text-left">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  © 2026{' '}
                  <span className="font-semibold text-gray-900 dark:text-white">
                    Morteza Baziar
                  </span>
                  . Built with Next.js & Tailwind CSS.
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                  Open source enthusiast • Creator of RapidKit
                </p>
              </div>

              <ScrollToTop />
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
