import type { Metadata } from 'next';
import { Navigation } from '@/components/navigation';
import { RapidKitNpmContent } from '@/components/rapidkit-npm-content';
import { ScrollToTop } from '@/components/scroll-to-top';

export const metadata: Metadata = {
  title: 'create-rapidkit | Quick Start Package for FastAPI & NestJS Projects',
  description: 'Start building production-ready FastAPI and NestJS projects in seconds with create-rapidkit npm package. Demo mode available with bundled templates. No Python installation required for demos.',
  keywords: [
    'create-rapidkit',
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
    title: 'create-rapidkit - Fast & Easy Backend Project Generator',
    description: 'Create FastAPI and NestJS workspaces instantly with demo mode. Multiple projects in one workspace. Perfect for rapid prototyping.',
    type: 'website',
    url: 'https://baziar.dev/rapidkit-npm',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'create-rapidkit npm package',
    description: 'Generate production-ready FastAPI & NestJS projects in seconds',
  },
};

export default function RapidKitNpmPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    "name": "create-rapidkit",
    "description": "NPM package for creating RapidKit workspaces with demo mode for FastAPI and NestJS projects",
    "codeRepository": "https://github.com/getrapidkit/rapidkit-npm",
    "programmingLanguage": "TypeScript",
    "runtimePlatform": "Node.js",
    "author": {
      "@type": "Person",
      "name": "Morteza Baziar",
      "url": "https://baziar.dev"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "version": "0.10.1",
    "datePublished": "2025-11-08",
    "downloadUrl": "https://www.npmjs.com/package/rapidkit"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
        <Navigation />
        <RapidKitNpmContent />
        <ScrollToTop />
      </div>
    </>
  );
}
