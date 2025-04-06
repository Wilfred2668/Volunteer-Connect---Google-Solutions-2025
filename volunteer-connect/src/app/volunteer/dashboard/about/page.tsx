'use client';

import Image from 'next/image';
import {
  UserGroupIcon,
  HeartIcon,
  GlobeAltIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Community Impact',
    description: 'Join thousands of volunteers making a difference in their communities.',
    icon: HeartIcon,
  },
  {
    name: 'Global Network',
    description: 'Connect with volunteers and organizations worldwide.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Track Progress',
    description: 'Monitor your impact and track your volunteer hours.',
    icon: ChartBarIcon,
  },
  {
    name: 'Build Connections',
    description: 'Meet like-minded individuals and expand your network.',
    icon: UserGroupIcon,
  },
];

export default function AboutPage() {
  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-green-100/20">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:pt-8">
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              About VolunteerConnect
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We're on a mission to connect passionate volunteers with meaningful opportunities to make a difference in their communities.
            </p>
          </div>
          <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
            <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
              <Image
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80"
                alt="Volunteers working together"
                width={2432}
                height={1442}
                className="w-[76rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-green-600">Why Choose Us</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to make a difference
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our platform provides comprehensive tools and features to help you find and participate in meaningful volunteer opportunities.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-green-600" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Mission Section */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Our Mission</h3>
          <div className="mt-2 max-w-xl text-sm text-gray-500">
            <p>
              To empower individuals and organizations to create positive change through meaningful volunteer opportunities.
              We believe that everyone has the power to make a difference, and we're here to make that journey easier and more impactful.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Get in Touch</h3>
          <div className="mt-2 max-w-xl text-sm text-gray-500">
            <p>
              Have questions or suggestions? We'd love to hear from you.
            </p>
          </div>
          <div className="mt-5">
            <button
              type="button"
              className="inline-flex items-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 