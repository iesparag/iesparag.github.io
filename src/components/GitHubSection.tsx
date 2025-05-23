'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { fetchGitHubStats, GitHubStats } from '@/utils/github';
import ContributionGraph from './ContributionGraph';

export default function GitHubSection() {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      try {
        const data = await fetchGitHubStats('iesparag'); // Replace with your GitHub username
        setStats(data);
      } catch (error) {
        console.error('Error fetching GitHub stats:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchStats();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section id="github" className="min-h-screen w-full relative px-4 sm:px-8 md:px-16 lg:px-24 pt-20 overflow-hidden">
      {/* Animated particles */}
     

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">
            GitHub Activity
          </h2>
          <p className="text-lg text-gray-400">
            My open source contributions and statistics
          </p>
        </motion.div>

        {stats && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Contribution Stats */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="lg:col-span-2 bg-gray-800 rounded-xl p-6 shadow-lg space-y-6"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-white">
                  Contribution Stats
                </h3>
                <div className="flex gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">{stats.totalContributions}</div>
                    <div className="text-sm text-gray-400">Total</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{stats.currentStreak}</div>
                    <div className="text-sm text-gray-400">Streak</div>
                  </div>
                </div>
              </div>
              
              {/* Contribution Graph */}
              <div className="-mx-6 px-6 py-4 border-t border-b border-gray-700 bg-gray-900">
                <ContributionGraph data={stats.contributionGraph} />
              </div>
            </motion.div>

            {/* Language Stats */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4 text-white">
                Most Used Languages
              </h3>
              <div className="space-y-3">
                {stats.languageStats.map((lang, index) => (
                  <div key={lang.name} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">{lang.name}</span>
                      <span className="text-white">{lang.percentage}%</span>
                    </div>
                    <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.percentage}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: lang.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Additional Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="lg:col-span-3 bg-gray-800 rounded-xl p-6 shadow-lg"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">{stats.totalStars}</div>
                  <div className="text-gray-400">Total Stars</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stats.totalPRs}</div>
                  <div className="text-gray-600 dark:text-gray-400">Pull Requests</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stats.totalIssues}</div>
                  <div className="text-gray-600 dark:text-gray-400">Issues</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stats.totalRepos}</div>
                  <div className="text-gray-600 dark:text-gray-400">Repositories</div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}
