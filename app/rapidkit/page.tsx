import type { Metadata } from 'next';
import { Navigation } from '@/components/navigation';
import { RapidKitProjectContent } from '@/components/rapidkit-project-content';
import { ScrollToTop } from '@/components/scroll-to-top';

export const metadata: Metadata = {
  title: 'RapidKit | Open-Source Framework for FastAPI & NestJS',
  description:
    'RapidKit is an open-source framework that helps developers build, scale, and deploy production-ready FastAPI and NestJS projects faster. 27+ modules, 40+ CLI commands, and zero configuration.',
  keywords: [
    'RapidKit',
    'FastAPI',
    'NestJS',
    'backend framework',
    'API development',
    'clean architecture',
    'modular design',
    'TypeScript',
    'Python',
    'production-ready',
    'open source',
    'CLI tool',
  ],
  openGraph: {
    title: 'RapidKit - Build Modern Backends at Warp Speed',
    description:
      'Open-source framework for generating production-ready FastAPI & NestJS projects. Clean architecture, modular design, and automation-first workflows.',
    type: 'website',
    url: 'https://baziar.dev/rapidkit',
    images: [
      {
        url: 'https://getrapidkit.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'RapidKit Framework',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RapidKit - Open-Source Backend Framework',
    description: 'Build, scale, and deploy production-ready APIs faster with RapidKit',
  },
  alternates: {
    canonical: 'https://baziar.dev/rapidkit',
  },
};

async function getLatestVersion() {
  try {
    const res = await fetch('https://registry.npmjs.org/rapidkit', {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });
    if (res.ok) {
      const data = await res.json();
      return data['dist-tags']?.latest || '0.12.3';
    }
  } catch (error) {
    console.error('Failed to fetch NPM version:', error);
  }
  return '0.12.3'; // Fallback
}

export default async function RapidKitPage() {
  const version = await getLatestVersion();

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'RapidKit',
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Cross-platform',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    author: {
      '@type': 'Person',
      name: 'Morteza Baziar',
      url: 'https://baziar.dev',
    },
    description:
      'Open-source framework that helps developers build, scale, and deploy production-ready FastAPI and NestJS projects faster',
    downloadUrl: 'https://www.npmjs.com/package/rapidkit',
    softwareVersion: version,
    featureList: [
      '27+ Production-ready Modules',
      'FastAPI & NestJS Support',
      '40+ CLI Commands',
      'Zero Configuration',
      'Clean Architecture (DDD)',
      'Full TypeScript Support',
    ],
    programmingLanguage: ['Python', 'TypeScript'],
    isAccessibleForFree: true,
    license: 'https://github.com/getrapidkit/rapidkit-core/blob/main/LICENSE',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
        <Navigation />
        <RapidKitProjectContent />
        <ScrollToTop />
      </div>
    </>
  );
}
