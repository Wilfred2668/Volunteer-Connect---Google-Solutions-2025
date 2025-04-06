'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ClockIcon,
  MapPinIcon,
  UserGroupIcon,
  HeartIcon,
} from '@heroicons/react/24/outline';

// Temporary data (will be replaced with actual data later)
const stats = [
  { name: 'Total Hours', value: '24', icon: ClockIcon },
  { name: 'Active Opportunities', value: '3', icon: MapPinIcon },
  { name: 'Events Attended', value: '5', icon: UserGroupIcon },
  { name: 'Impact Score', value: '85', icon: HeartIcon },
];

const recentActivities = [
  {
    id: 1,
    title: 'Beach Cleanup',
    organization: 'Ocean Conservation',
    date: '2024-03-15',
    hours: 4,
    status: 'Completed',
  },
  {
    id: 2,
    title: 'Food Bank Distribution',
    organization: 'Community Food Bank',
    date: '2024-03-20',
    hours: 3,
    status: 'Upcoming',
  },
  {
    id: 3,
    title: 'Tree Planting',
    organization: 'Green Earth Initiative',
    date: '2024-03-25',
    hours: 5,
    status: 'Upcoming',
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Welcome back, John!</h1>
        <p className="mt-1 text-sm text-gray-500">
          Here's what's happening with your volunteering activities.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="relative overflow-hidden rounded-lg bg-white px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6"
          >
            <dt>
              <div className="absolute rounded-md bg-green-500 p-3">
                <stat.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <p className="ml-16 truncate text-sm font-medium text-gray-500">{stat.name}</p>
            </dt>
            <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
              <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
            </dd>
          </div>
        ))}
      </div>

      {/* Recent Activities */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Recent Activities</h3>
        </div>
        <div className="border-t border-gray-200">
          <ul role="list" className="divide-y divide-gray-200">
            {recentActivities.map((activity) => (
              <li key={activity.id} className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <MapPinIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                      <p className="text-sm text-gray-500">{activity.organization}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-sm text-gray-500">
                      {new Date(activity.date).toLocaleDateString()}
                    </div>
                    <div className="text-sm text-gray-500">{activity.hours} hours</div>
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        activity.status === 'Completed'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {activity.status}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="px-4 py-4 sm:px-6">
          <Link
            href="/volunteer/dashboard/explore"
            className="text-sm font-medium text-green-600 hover:text-green-500"
          >
            View all activities <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Quick Actions</h3>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Link
              href="/volunteer/dashboard/explore"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              Find Opportunities
            </Link>
            <Link
              href="/volunteer/dashboard/profile"
              className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              Update Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 