'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CalendarIcon, MapPinIcon, UserGroupIcon, AcademicCapIcon, BriefcaseIcon, HeartIcon } from '@heroicons/react/24/outline';

// This would typically come from an API or database
const user = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  phone: '(123) 456-7890',
  location: 'New York, USA',
  bio: 'Passionate about education and community development. Experienced in teaching and mentoring.',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  skills: ['Teaching', 'Mentoring', 'Event Planning', 'Public Speaking', 'Project Management'],
  interests: ['Education', 'Community Development', 'Youth Development', 'Environmental Conservation'],
  volunteeringHistory: [
    {
      id: 1,
      title: 'Teach Children in Rural Areas',
      organization: 'Education for All',
      duration: '3 months',
      location: 'Remote',
      startDate: 'January 2024',
      endDate: 'March 2024',
      status: 'Completed',
      hours: 120,
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 2,
      title: 'Community Garden Coordinator',
      organization: 'Green Earth Initiative',
      duration: '6 months',
      location: 'Local',
      startDate: 'April 2024',
      endDate: 'Present',
      status: 'Active',
      hours: 60,
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
  ],
  upcomingOpportunities: [
    {
      id: 3,
      title: 'Curriculum Development Specialist',
      organization: 'Education for All',
      startDate: 'May 1, 2024',
      endDate: 'October 31, 2024',
      status: 'Applied',
      image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
  ],
  certificates: [
    {
      id: 1,
      title: 'Volunteer Management Certificate',
      issuer: 'Volunteer Management Institute',
      date: 'December 2023',
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
  ],
};

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="relative h-32 bg-green-600">
            <div className="absolute -bottom-12 left-8">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-24 h-24 rounded-full border-4 border-white"
              />
            </div>
          </div>
          <div className="pt-16 pb-8 px-8">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{user.name}</h1>
                <p className="text-gray-600">{user.location}</p>
              </div>
              <button className="rounded-md bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">
                Edit Profile
              </button>
            </div>
            <p className="mt-4 text-gray-600">{user.bio}</p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="mt-8 border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            {['overview', 'opportunities', 'certificates', 'settings'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`${
                  activeTab === tab
                    ? 'border-green-500 text-green-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm capitalize`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="mt-8">
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                {/* Skills */}
                <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Skills</h2>
                  <div className="flex flex-wrap gap-2">
                    {user.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Interests */}
                <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Interests</h2>
                  <div className="flex flex-wrap gap-2">
                    {user.interests.map((interest) => (
                      <span
                        key={interest}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Volunteering History */}
                <div className="bg-white rounded-lg shadow-sm p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Volunteering History</h2>
                  <div className="space-y-6">
                    {user.volunteeringHistory.map((opportunity) => (
                      <div key={opportunity.id} className="flex gap-6 p-6 border border-gray-200 rounded-lg">
                        <img
                          src={opportunity.image}
                          alt={opportunity.title}
                          className="w-24 h-24 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900">{opportunity.title}</h3>
                          <p className="text-gray-600">{opportunity.organization}</p>
                          <div className="mt-2 flex items-center gap-4 text-sm text-gray-500">
                            <div className="flex items-center">
                              <MapPinIcon className="h-4 w-4 mr-1" />
                              <span>{opportunity.location}</span>
                            </div>
                            <div className="flex items-center">
                              <CalendarIcon className="h-4 w-4 mr-1" />
                              <span>{opportunity.startDate} - {opportunity.endDate}</span>
                            </div>
                            <div className="flex items-center">
                              <UserGroupIcon className="h-4 w-4 mr-1" />
                              <span>{opportunity.hours} hours</span>
                            </div>
                          </div>
                          <span className={`mt-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            opportunity.status === 'Completed'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-blue-100 text-blue-800'
                          }`}>
                            {opportunity.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                {/* Contact Information */}
                <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Email</h3>
                      <p className="mt-1 text-gray-900">{user.email}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Phone</h3>
                      <p className="mt-1 text-gray-900">{user.phone}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Location</h3>
                      <p className="mt-1 text-gray-900">{user.location}</p>
                    </div>
                  </div>
                </div>

                {/* Upcoming Opportunities */}
                <div className="bg-white rounded-lg shadow-sm p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Upcoming Opportunities</h2>
                  <div className="space-y-4">
                    {user.upcomingOpportunities.map((opportunity) => (
                      <Link
                        key={opportunity.id}
                        href={`/opportunities/${opportunity.id}`}
                        className="block group"
                      >
                        <div className="flex gap-4 p-4 border border-gray-200 rounded-lg hover:border-green-500 transition-colors">
                          <img
                            src={opportunity.image}
                            alt={opportunity.title}
                            className="w-16 h-16 object-cover rounded-lg"
                          />
                          <div>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-green-600">
                              {opportunity.title}
                            </h3>
                            <p className="text-xs text-gray-500">{opportunity.organization}</p>
                            <div className="mt-1 flex items-center gap-2 text-xs text-gray-500">
                              <CalendarIcon className="h-3 w-3" />
                              <span>{opportunity.startDate} - {opportunity.endDate}</span>
                            </div>
                            <span className="mt-1 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                              {opportunity.status}
                            </span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'opportunities' && (
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">My Opportunities</h2>
              <div className="space-y-6">
                {/* Active Applications */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Active Applications</h3>
                  <div className="space-y-4">
                    {user.upcomingOpportunities.map((opportunity) => (
                      <div key={opportunity.id} className="flex gap-6 p-6 border border-gray-200 rounded-lg">
                        <img
                          src={opportunity.image}
                          alt={opportunity.title}
                          className="w-24 h-24 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-gray-900">{opportunity.title}</h4>
                          <p className="text-gray-600">{opportunity.organization}</p>
                          <div className="mt-2 flex items-center gap-4 text-sm text-gray-500">
                            <div className="flex items-center">
                              <CalendarIcon className="h-4 w-4 mr-1" />
                              <span>{opportunity.startDate} - {opportunity.endDate}</span>
                            </div>
                          </div>
                          <span className="mt-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                            {opportunity.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Past Opportunities */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Past Opportunities</h3>
                  <div className="space-y-4">
                    {user.volunteeringHistory.map((opportunity) => (
                      <div key={opportunity.id} className="flex gap-6 p-6 border border-gray-200 rounded-lg">
                        <img
                          src={opportunity.image}
                          alt={opportunity.title}
                          className="w-24 h-24 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-gray-900">{opportunity.title}</h4>
                          <p className="text-gray-600">{opportunity.organization}</p>
                          <div className="mt-2 flex items-center gap-4 text-sm text-gray-500">
                            <div className="flex items-center">
                              <MapPinIcon className="h-4 w-4 mr-1" />
                              <span>{opportunity.location}</span>
                            </div>
                            <div className="flex items-center">
                              <CalendarIcon className="h-4 w-4 mr-1" />
                              <span>{opportunity.startDate} - {opportunity.endDate}</span>
                            </div>
                            <div className="flex items-center">
                              <UserGroupIcon className="h-4 w-4 mr-1" />
                              <span>{opportunity.hours} hours</span>
                            </div>
                          </div>
                          <span className="mt-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            {opportunity.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'certificates' && (
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">My Certificates</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {user.certificates.map((certificate) => (
                  <div key={certificate.id} className="border border-gray-200 rounded-lg overflow-hidden">
                    <img
                      src={certificate.image}
                      alt={certificate.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900">{certificate.title}</h3>
                      <p className="text-gray-600">{certificate.issuer}</p>
                      <div className="mt-2 flex items-center text-sm text-gray-500">
                        <CalendarIcon className="h-4 w-4 mr-1" />
                        <span>{certificate.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Account Settings</h2>
              <div className="space-y-6">
                {/* Profile Settings */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Profile Settings</h3>
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        defaultValue={user.name}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-500 focus:border-green-500 focus:ring-green-500 sm:text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        defaultValue={user.email}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-500 focus:border-green-500 focus:ring-green-500 sm:text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        defaultValue={user.phone}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-500 focus:border-green-500 focus:ring-green-500 sm:text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                        Location
                      </label>
                      <input
                        type="text"
                        id="location"
                        defaultValue={user.location}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-500 focus:border-green-500 focus:ring-green-500 sm:text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="bio" className="block text-sm font-medium text-gray-700">
                        Bio
                      </label>
                      <textarea
                        id="bio"
                        rows={4}
                        defaultValue={user.bio}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-500 focus:border-green-500 focus:ring-green-500 sm:text-sm"
                      />
                    </div>
                    <button
                      type="submit"
                      className="rounded-md bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                    >
                      Save Changes
                    </button>
                  </form>
                </div>

                {/* Notification Settings */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Notification Settings</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <label className="text-sm font-medium text-gray-700">Email Notifications</label>
                        <p className="text-sm text-gray-500">Receive updates about your applications and opportunities</p>
                      </div>
                      <button
                        type="button"
                        className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-green-600 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                      >
                        <span className="sr-only">Use setting</span>
                        <span
                          className="pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out translate-x-5"
                        />
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <label className="text-sm font-medium text-gray-700">Push Notifications</label>
                        <p className="text-sm text-gray-500">Receive instant updates on your mobile device</p>
                      </div>
                      <button
                        type="button"
                        className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                      >
                        <span className="sr-only">Use setting</span>
                        <span
                          className="pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out translate-x-0"
                        />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Privacy Settings */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Privacy Settings</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <label className="text-sm font-medium text-gray-700">Profile Visibility</label>
                        <p className="text-sm text-gray-500">Control who can see your profile information</p>
                      </div>
                      <select
                        className="rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-900 focus:border-green-500 focus:ring-green-500"
                      >
                        <option>Public</option>
                        <option>Private</option>
                        <option>Friends Only</option>
                      </select>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <label className="text-sm font-medium text-gray-700">Activity Visibility</label>
                        <p className="text-sm text-gray-500">Control who can see your volunteering activity</p>
                      </div>
                      <select
                        className="rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-900 focus:border-green-500 focus:ring-green-500"
                      >
                        <option>Public</option>
                        <option>Private</option>
                        <option>Friends Only</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 