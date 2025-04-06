'use client';

import { useAuth } from '@/contexts/AuthContext';

export default function OpportunitiesPage() {
  const { role } = useAuth();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">
          {role === 'ngo' ? 'Manage Opportunities' : 'Available Opportunities'}
        </h1>
        <p className="mt-1 text-sm text-gray-500">
          {role === 'ngo'
            ? 'Create and manage volunteer opportunities for your organization'
            : 'Browse and apply for volunteer opportunities'}
        </p>
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <p className="text-gray-500 text-center">No opportunities available yet.</p>
      </div>
    </div>
  );
} 