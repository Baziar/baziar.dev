import { Navigation } from '@/components/navigation';
import { ResumeContent } from '@/components/resume-content';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resume | Morteza Baziar - Full-Stack Developer',
  description:
    'Full-stack developer with 9+ years of experience. Creator of RapidKit framework. Specializing in TypeScript, Python, React, Next.js, FastAPI, and NestJS.',
  keywords: [
    'Morteza Baziar resume',
    'Full-Stack Developer',
    'TypeScript Developer',
    'Python Developer',
    'React Developer',
    'RapidKit creator',
    'software engineer resume',
    'web developer portfolio',
  ],
  openGraph: {
    title: 'Resume - Morteza Baziar | Full-Stack Developer',
    description:
      'Full-stack developer with 9+ years of experience building scalable applications and developer tools.',
    type: 'profile',
    url: 'https://baziar.dev/resume',
  },
  twitter: {
    card: 'summary',
    title: 'Resume - Morteza Baziar',
    description: 'Full-stack developer specializing in TypeScript, Python, React, and Next.js.',
  },
  alternates: {
    canonical: 'https://baziar.dev/resume',
  },
};

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-white to-gray-50 dark:from-black dark:via-black dark:to-gray-950">
      <Navigation />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-24">
        <ResumeContent />
      </main>
    </div>
  );
}
