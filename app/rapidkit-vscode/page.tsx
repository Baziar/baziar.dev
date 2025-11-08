import type { Metadata } from 'next';
import { Navigation } from '@/components/navigation';
import { RapidKitVSCodeContent } from '@/components/rapidkit-vscode-content';
import { ScrollToTop } from '@/components/scroll-to-top';

export const metadata: Metadata = {
  title: 'RapidKit VS Code Extension | Professional Development Tool for FastAPI & NestJS',
  description: 'Boost your productivity with RapidKit VS Code Extension. Create FastAPI and NestJS projects with IntelliSense, module browser, and one-click installations. Download from VS Code Marketplace.',
  keywords: [
    'RapidKit VS Code Extension',
    'FastAPI IDE',
    'NestJS development tool',
    'VS Code extension',
    'Python development',
    'TypeScript IDE',
    'backend development',
    'project scaffolding',
    'code generator',
    'developer productivity',
  ],
  openGraph: {
    title: 'RapidKit VS Code Extension - Professional FastAPI & NestJS Development',
    description: 'Create production-ready FastAPI and NestJS projects directly in VS Code with intelligent IntelliSense and module management.',
    type: 'website',
    url: 'https://baziar.dev/rapidkit-vscode',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RapidKit VS Code Extension',
    description: 'Professional development tool for FastAPI & NestJS projects',
  },
};

export default function RapidKitVSCodePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "RapidKit VS Code Extension",
    "applicationCategory": "DeveloperApplication",
    "operatingSystem": "Windows, macOS, Linux",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "author": {
      "@type": "Person",
      "name": "Morteza Baziar",
      "url": "https://baziar.dev"
    },
    "description": "Official VS Code extension for RapidKit framework with IntelliSense, project management, and module browser",
    "downloadUrl": "https://marketplace.visualstudio.com/items?itemName=rapidkit.rapidkit-vscode",
    "softwareVersion": "0.2.0",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "ratingCount": "1"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
        <Navigation />
        <RapidKitVSCodeContent />
        <ScrollToTop />
      </div>
    </>
  );
}
