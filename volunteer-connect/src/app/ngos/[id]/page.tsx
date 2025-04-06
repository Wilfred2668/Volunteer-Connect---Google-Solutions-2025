'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { MapPinIcon, PhoneIcon, EnvelopeIcon, GlobeAltIcon, UserGroupIcon, CalendarIcon } from '@heroicons/react/24/outline';

// This would typically come from an API or database
const ngo = {
  id: 1,
  name: 'Education for All',
  description: 'Education for All is a non-profit organization dedicated to providing quality education to children in rural areas. We believe that every child deserves access to education, regardless of their location or background.',
  mission: 'To empower children in rural areas through quality education and create lasting positive change in their communities.',
  vision: 'A world where every child has access to quality education and opportunities to reach their full potential.',
  founded: '2015',
  teamSize: '25-50',
  focusAreas: ['Education', 'Community Development', 'Youth Development'],
  location: 'Remote',
  address: '123 Education Street, Community Center, City, State 12345',
  phone: '(123) 456-7890',
  email: 'contact@educationforall.org',
  website: 'www.educationforall.org',
  image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  impact: {
    volunteers: 500,
    students: 1000,
    communities: 20,
    countries: 5,
  },
  opportunities: [
    {
      id: 1,
      title: 'Teach Children in Rural Areas',
      type: 'Education',
      duration: '3 months',
      location: 'Remote',
      description: 'Help children in rural areas access quality education through online teaching.',
      spotsAvailable: 5,
      startDate: 'April 1, 2024',
      endDate: 'June 30, 2024',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 2,
      title: 'Curriculum Development Specialist',
      type: 'Education',
      duration: '6 months',
      location: 'Remote',
      description: 'Help develop and improve educational materials for rural students.',
      spotsAvailable: 2,
      startDate: 'May 1, 2024',
      endDate: 'October 31, 2024',
      image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
  ],
};

export default function NGOProfilePage() {
  const params = useParams();

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="relative h-64">
            <img
              src={ngo.image}
              alt={ngo.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-8">
            <div className="flex items-center gap-x-4 text-xs mb-4">
              {ngo.focusAreas.map((area) => (
                <span
                  key={area}
                  className="relative z-10 rounded-full bg-green-50 px-3 py-1.5 font-medium text-green-600"
                >
                  {area}
                </span>
              ))}
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{ngo.name}</h1>
            <p className="text-gray-600 mb-6">{ngo.description}</p>
            <div className="flex flex-wrap gap-4 text-gray-500">
              <div className="flex items-center">
                <MapPinIcon className="h-5 w-5 mr-2" />
                <span>{ngo.location}</span>
              </div>
              <div className="flex items-center">
                <PhoneIcon className="h-5 w-5 mr-2" />
                <span>{ngo.phone}</span>
              </div>
              <div className="flex items-center">
                <EnvelopeIcon className="h-5 w-5 mr-2" />
                <span>{ngo.email}</span>
              </div>
              <div className="flex items-center">
                <GlobeAltIcon className="h-5 w-5 mr-2" />
                <span>{ngo.website}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Mission & Vision */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
                <p className="text-gray-600">{ngo.mission}</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
                <p className="text-gray-600">{ngo.vision}</p>
              </div>
            </div>

            {/* Impact Stats */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Impact</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">{ngo.impact.volunteers}+</div>
                  <div className="text-gray-600">Volunteers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">{ngo.impact.students}+</div>
                  <div className="text-gray-600">Students</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">{ngo.impact.communities}+</div>
                  <div className="text-gray-600">Communities</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">{ngo.impact.countries}</div>
                  <div className="text-gray-600">Countries</div>
                </div>
              </div>
            </div>

            {/* Current Opportunities */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Current Opportunities</h2>
              <div className="space-y-6">
                {ngo.opportunities.map((opportunity) => (
                  <Link
                    key={opportunity.id}
                    href={`/opportunities/${opportunity.id}`}
                    className="block group"
                  >
                    <div className="flex flex-col md:flex-row gap-6 p-6 border border-gray-200 rounded-lg hover:border-green-500 transition-colors">
                      <div className="md:w-1/3">
                        <img
                          src={opportunity.image}
                          alt={opportunity.title}
                          className="w-full h-48 object-cover rounded-lg"
                        />
                      </div>
                      <div className="md:w-2/3">
                        <div className="flex items-center gap-x-4 text-xs mb-2">
                          <span className="relative z-10 rounded-full bg-green-50 px-3 py-1.5 font-medium text-green-600">
                            {opportunity.type}
                          </span>
                          <span className="text-gray-500">{opportunity.duration}</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-green-600">
                          {opportunity.title}
                        </h3>
                        <p className="mt-2 text-gray-600 line-clamp-2">{opportunity.description}</p>
                        <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center">
                            <MapPinIcon className="h-4 w-4 mr-1" />
                            <span>{opportunity.location}</span>
                          </div>
                          <div className="flex items-center">
                            <UserGroupIcon className="h-4 w-4 mr-1" />
                            <span>{opportunity.spotsAvailable} spots available</span>
                          </div>
                          <div className="flex items-center">
                            <CalendarIcon className="h-4 w-4 mr-1" />
                            <span>{opportunity.startDate} - {opportunity.endDate}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Organization Details */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Organization Details</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Founded</h3>
                  <p className="mt-1 text-gray-900">{ngo.founded}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Team Size</h3>
                  <p className="mt-1 text-gray-900">{ngo.teamSize} employees</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Address</h3>
                  <p className="mt-1 text-gray-900">{ngo.address}</p>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <div className="space-y-4">
                <div className="flex items-center text-gray-600">
                  <PhoneIcon className="h-5 w-5 mr-2" />
                  <span>{ngo.phone}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <EnvelopeIcon className="h-5 w-5 mr-2" />
                  <span>{ngo.email}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <GlobeAltIcon className="h-5 w-5 mr-2" />
                  <span>{ngo.website}</span>
                </div>
                <Link
                  href="/contact"
                  className="mt-6 block w-full rounded-md bg-green-600 px-4 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                >
                  Contact Organization
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 