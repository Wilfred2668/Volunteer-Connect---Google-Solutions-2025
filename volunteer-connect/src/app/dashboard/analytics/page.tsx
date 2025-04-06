'use client';

import { useAuth } from '@/contexts/AuthContext';

export default function AnalyticsPage() {
  const { role } = useAuth();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">
          {role === 'ngo' ? 'Organization Analytics' : 'Your Impact'}
        </h1>
        <p className="mt-1 text-sm text-gray-500">
          {role === 'ngo'
            ? 'Track your organization\'s impact and volunteer engagement'
            : 'Track your volunteer impact and contributions'}
        </p>
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <p className="text-gray-500 text-center">No analytics data available yet.</p>
      </div>
    </div>
  );
} 