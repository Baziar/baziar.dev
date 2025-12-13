import type { Metadata } from 'next';
import { Navigation } from '@/components/navigation';
import { RapidKitNpmContent } from '@/components/rapidkit-npm-content';
import { ScrollToTop } from '@/components/scroll-to-top';

export const metadata: Metadata = {
  title: 'RapidKit CLI | NPM Package for FastAPI & NestJS Projects',
  description:
    'Create production-ready FastAPI and NestJS projects in seconds with RapidKit CLI. Smart CLI Delegation automatically routes to the best creation method.',
  keywords: [
    'rapidkit cli',
    'rapidkit npm',
    'FastAPI generator',
    'NestJS scaffolding',
    'project generator',
    'npm package',
    'CLI tool',
    'backend framework',
    'microservices',
    'workspace management',
  ],
  openGraph: {
    title: 'RapidKit CLI - Fast & Easy Backend Project Generator',
    description:
      'Create FastAPI and NestJS projects instantly with Smart CLI Delegation. The fastest way to start production-ready backends.',
    type: 'website',
    url: 'https://baziar.dev/rapidkit-npm',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RapidKit CLI npm package',
    description: 'Generate production-ready FastAPI & NestJS projects in seconds',
  },
  alternates: {
    canonical: 'https://baziar.dev/rapidkit-npm',
  },
};

async function getNpmVersion() {
  try {
    const res = await fetch('https://registry.npmjs.org/rapidkit', {
      next: { revalidate: 3600 },
    });
    if (res.ok) {
      const data = await res.json();
      return data['dist-tags']?.latest || '0.12.3';
    }
  } catch (error) {
    console.error('Failed to fetch NPM version:', error);
  }
  return '0.12.3';
}

export default async function RapidKitNpmPage() {
  const version = await getNpmVersion();

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareSourceCode',
    name: 'RapidKit CLI',
    description:
      'NPM package for creating production-ready FastAPI and NestJS projects with Smart CLI Delegation',
    codeRepository: 'https://github.com/getrapidkit/rapidkit-npm',
    programmingLanguage: 'TypeScript',
    runtimePlatform: 'Node.js',
    author: {
      '@type': 'Person',
      name: 'Morteza Baziar',
      url: 'https://baziar.dev',
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    version: version,
    datePublished: '2025-12-04',
    downloadUrl: 'https://www.npmjs.com/package/rapidkit',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
        <Navigation />
        <RapidKitNpmContent version={version} />
        <ScrollToTop />
      </div>
    </>
  );
}
