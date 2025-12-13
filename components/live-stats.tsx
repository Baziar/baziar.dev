'use client';

import { useEffect, useState } from 'react';
import { Download, Package, Star, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

interface NpmStats {
  version: string;
  downloads: string;
  weeklyDownloads: string;
}

interface VSCodeStats {
  version: string;
  installs: string;
  rating: string;
  ratingCount: string;
}

interface LiveStatsProps {
  type: 'npm' | 'vscode';
}

export function LiveStats({ type }: LiveStatsProps) {
  const [npmStats, setNpmStats] = useState<NpmStats | null>(null);
  const [vscodeStats, setVSCodeStats] = useState<VSCodeStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        if (type === 'npm') {
          // Fetch NPM stats
          const [registryRes, downloadsRes] = await Promise.all([
            fetch('https://registry.npmjs.org/rapidkit'),
            fetch('https://api.npmjs.org/downloads/point/last-week/rapidkit'),
          ]);

          const registryData = await registryRes.json();
          const downloadsData = await downloadsRes.json();

          setNpmStats({
            version: registryData['dist-tags']?.latest || '0.10.1',
            downloads: formatNumber(downloadsData.downloads || 0),
            weeklyDownloads: formatNumber(downloadsData.downloads || 0),
          });
        } else {
          // Fetch VS Code Marketplace stats
          const res = await fetch(
            'https://marketplace.visualstudio.com/_apis/public/gallery/extensionquery',
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json;api-version=3.0-preview.1',
              },
              body: JSON.stringify({
                filters: [
                  {
                    criteria: [{ filterType: 7, value: 'rapidkit.rapidkit-vscode' }],
                    pageSize: 1,
                  },
                ],
                flags: 914,
              }),
            }
          );

          const data = await res.json();
          const extension = data.results?.[0]?.extensions?.[0];

          if (extension) {
            const stats = extension.statistics || [];
            const installs = stats.find((s: any) => s.statisticName === 'install')?.value || 0;
            const avgRating =
              stats.find((s: any) => s.statisticName === 'averagerating')?.value || 0;
            const ratingCount =
              stats.find((s: any) => s.statisticName === 'ratingcount')?.value || 0;

            setVSCodeStats({
              version: extension.versions?.[0]?.version || '0.2.0',
              installs: formatNumber(installs),
              rating: avgRating.toFixed(1),
              ratingCount: formatNumber(ratingCount),
            });
          }
        }
      } catch (error) {
        console.error('Failed to fetch stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [type]);

  const formatNumber = (num: number): string => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toString();
  };

  if (loading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 animate-pulse">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-20 bg-gray-200 dark:bg-gray-800 rounded-lg" />
        ))}
      </div>
    );
  }

  if (type === 'npm' && npmStats) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg bg-white dark:bg-black hover:border-red-400 dark:hover:border-red-600 transition-all"
        >
          <div className="flex items-center gap-2 text-red-600 dark:text-red-400 mb-2">
            <Package className="w-4 h-4" />
            <span className="text-xs font-medium">Version</span>
          </div>
          <div className="text-2xl font-bold text-gray-900 dark:text-white font-mono">
            v{npmStats.version}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg bg-white dark:bg-black hover:border-red-400 dark:hover:border-red-600 transition-all"
        >
          <div className="flex items-center gap-2 text-red-600 dark:text-red-400 mb-2">
            <Download className="w-4 h-4" />
            <span className="text-xs font-medium">Weekly Downloads</span>
          </div>
          <div className="text-2xl font-bold text-gray-900 dark:text-white">
            {npmStats.weeklyDownloads}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg bg-white dark:bg-black hover:border-red-400 dark:hover:border-red-600 transition-all"
        >
          <div className="flex items-center gap-2 text-red-600 dark:text-red-400 mb-2">
            <TrendingUp className="w-4 h-4" />
            <span className="text-xs font-medium">Status</span>
          </div>
          <div className="text-sm font-semibold text-green-600 dark:text-green-400">
            Live on NPM
          </div>
        </motion.div>
      </div>
    );
  }

  if (type === 'vscode' && vscodeStats) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg bg-white dark:bg-black hover:border-blue-400 dark:hover:border-blue-600 transition-all"
        >
          <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 mb-2">
            <Package className="w-4 h-4" />
            <span className="text-xs font-medium">Version</span>
          </div>
          <div className="text-2xl font-bold text-gray-900 dark:text-white font-mono">
            v{vscodeStats.version}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg bg-white dark:bg-black hover:border-blue-400 dark:hover:border-blue-600 transition-all"
        >
          <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 mb-2">
            <Download className="w-4 h-4" />
            <span className="text-xs font-medium">Installs</span>
          </div>
          <div className="text-2xl font-bold text-gray-900 dark:text-white">
            {vscodeStats.installs}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg bg-white dark:bg-black hover:border-blue-400 dark:hover:border-blue-600 transition-all"
        >
          <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 mb-2">
            <Star className="w-4 h-4" />
            <span className="text-xs font-medium">Rating</span>
          </div>
          <div className="text-2xl font-bold text-gray-900 dark:text-white">
            {vscodeStats.rating} ⭐
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg bg-white dark:bg-black hover:border-blue-400 dark:hover:border-blue-600 transition-all"
        >
          <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 mb-2">
            <TrendingUp className="w-4 h-4" />
            <span className="text-xs font-medium">Reviews</span>
          </div>
          <div className="text-2xl font-bold text-gray-900 dark:text-white">
            {vscodeStats.ratingCount}
          </div>
        </motion.div>
      </div>
    );
  }

  return null;
}
