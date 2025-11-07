import { Navigation } from '@/components/navigation';
import { ResumeContent } from '@/components/resume-content';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resume | Morteza Baziar',
  description: 'Full-stack developer specializing in TypeScript, Python, React, and Next.js. Creator of RapidKit framework.',
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
