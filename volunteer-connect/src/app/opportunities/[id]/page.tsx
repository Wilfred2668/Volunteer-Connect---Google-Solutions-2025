'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { MapPinIcon, ClockIcon, UserGroupIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline';

// This would typically come from an API or database
const opportunity = {
  id: 1,
  title: 'Teach Children in Rural Areas',
  organization: 'Education for All',
  location: 'Remote',
  type: 'Education',
  duration: '3 months',
  description: 'Help children in rural areas access quality education through online teaching.',
  image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  requirements: [
    'Bachelor\'s degree in Education or related field',
    'Experience in teaching or tutoring',
    'Strong communication skills',
    'Reliable internet connection',
    'Patience and empathy',
    'Ability to work with children',
  ],
  responsibilities: [
    'Plan and deliver online lessons',
    'Assess student progress',
    'Provide feedback to students and parents',
    'Collaborate with other teachers',
    'Maintain attendance records',
    'Participate in team meetings',
  ],
  benefits: [
    'Flexible working hours',
    'Remote work opportunity',
    'Professional development',
    'Make a difference in children\'s lives',
    'Work with a supportive team',
    'Gain teaching experience',
  ],
  schedule: 'Monday - Friday, 2-4 hours per day',
  startDate: 'April 1, 2024',
  endDate: 'June 30, 2024',
  applicationDeadline: 'March 25, 2024',
  spotsAvailable: 5,
  organizationDescription: 'Education for All is a non-profit organization dedicated to providing quality education to children in rural areas. We believe that every child deserves access to education, regardless of their location or background.',
};

export default function OpportunityPage() {
  const params = useParams();
  const [isApplying, setIsApplying] = useState(false);
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);

  const handleApply = () => {
    setIsApplying(true);
    // TODO: Implement application logic
    setTimeout(() => {
      setApplicationSubmitted(true);
      setIsApplying(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          href="/opportunities"
          className="inline-flex items-center text-green-600 hover:text-green-500 mb-8"
        >
          <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Opportunities
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Header */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="relative h-64">
                <img
                  src={opportunity.image}
                  alt={opportunity.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-x-4 text-xs mb-4">
                  <span className="relative z-10 rounded-full bg-green-50 px-3 py-1.5 font-medium text-green-600">
                    {opportunity.type}
                  </span>
                  <span className="text-gray-500">{opportunity.duration}</span>
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">{opportunity.title}</h1>
                <div className="flex items-center text-gray-500 mb-4">
                  <BuildingOfficeIcon className="h-5 w-5 mr-2" />
                  <span>{opportunity.organization}</span>
                </div>
                <div className="flex items-center text-gray-500 mb-4">
                  <MapPinIcon className="h-5 w-5 mr-2" />
                  <span>{opportunity.location}</span>
                </div>
                <div className="flex items-center text-gray-500">
                  <ClockIcon className="h-5 w-5 mr-2" />
                  <span>{opportunity.schedule}</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About the Opportunity</h2>
              <p className="text-gray-600">{opportunity.description}</p>
            </div>

            {/* Requirements */}
            <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Requirements</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                {opportunity.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>

            {/* Responsibilities */}
            <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Responsibilities</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                {opportunity.responsibilities.map((resp, index) => (
                  <li key={index}>{resp}</li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Benefits</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                {opportunity.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Application Card */}
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Apply Now</h2>
              <div className="space-y-4 mb-6">
                <div className="flex items-center text-gray-600">
                  <ClockIcon className="h-5 w-5 mr-2" />
                  <span>Duration: {opportunity.duration}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPinIcon className="h-5 w-5 mr-2" />
                  <span>Location: {opportunity.location}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <UserGroupIcon className="h-5 w-5 mr-2" />
                  <span>{opportunity.spotsAvailable} spots available</span>
                </div>
                <div className="text-gray-600">
                  <p>Start Date: {opportunity.startDate}</p>
                  <p>End Date: {opportunity.endDate}</p>
                  <p>Application Deadline: {opportunity.applicationDeadline}</p>
                </div>
              </div>

              {applicationSubmitted ? (
                <div className="bg-green-50 text-green-700 p-4 rounded-md">
                  <p className="font-medium">Application Submitted!</p>
                  <p className="text-sm mt-1">Thank you for your interest. We'll review your application and get back to you soon.</p>
                </div>
              ) : (
                <button
                  onClick={handleApply}
                  disabled={isApplying}
                  className="w-full rounded-md bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isApplying ? 'Applying...' : 'Apply Now'}
                </button>
              )}
            </div>

            {/* Organization Info */}
            <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About the Organization</h2>
              <p className="text-gray-600">{opportunity.organizationDescription}</p>
              <Link
                href={`/ngos/${opportunity.organization.toLowerCase().replace(/\s+/g, '-')}`}
                className="mt-4 inline-flex items-center text-green-600 hover:text-green-500"
              >
                Learn more about {opportunity.organization}
                <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 