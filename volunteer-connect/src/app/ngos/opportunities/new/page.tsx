'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MapPinIcon, CalendarIcon, UserGroupIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

export default function NewOpportunityPage() {
  const [formData, setFormData] = useState({
    title: '',
    type: '',
    duration: '',
    location: '',
    description: '',
    requirements: '',
    responsibilities: '',
    benefits: '',
    schedule: '',
    startDate: '',
    endDate: '',
    applicationDeadline: '',
    spotsAvailable: '',
    totalSpots: '',
    image: null as File | null,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({
        ...prev,
        image: e.target.files![0]
      }));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/ngos/dashboard"
            className="inline-flex items-center text-green-600 hover:text-green-500 mb-4"
          >
            <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Dashboard
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Create New Opportunity</h1>
          <p className="mt-2 text-gray-600">
            Fill out the form below to create a new volunteering opportunity.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Information */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Basic Information</h2>
            <div className="space-y-6">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                  Opportunity Title
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-500 focus:border-green-500 focus:ring-green-500 sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="type" className="block text-sm font-medium text-gray-700">
                  Type
                </label>
                <select
                  name="type"
                  id="type"
                  value={formData.type}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-500 focus:border-green-500 focus:ring-green-500 sm:text-sm"
                >
                  <option value="">Select a type</option>
                  <option value="Education">Education</option>
                  <option value="Environment">Environment</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="Social Welfare">Social Welfare</option>
                  <option value="Animal Welfare">Animal Welfare</option>
                  <option value="Arts & Culture">Arts & Culture</option>
                  <option value="Community Development">Community Development</option>
                  <option value="Disaster Relief">Disaster Relief</option>
                  <option value="Human Rights">Human Rights</option>
                  <option value="Youth Development">Youth Development</option>
                </select>
              </div>

              <div>
                <label htmlFor="duration" className="block text-sm font-medium text-gray-700">
                  Duration
                </label>
                <select
                  name="duration"
                  id="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-500 focus:border-green-500 focus:ring-green-500 sm:text-sm"
                >
                  <option value="">Select duration</option>
                  <option value="1 week">1 week</option>
                  <option value="2 weeks">2 weeks</option>
                  <option value="1 month">1 month</option>
                  <option value="3 months">3 months</option>
                  <option value="6 months">6 months</option>
                  <option value="1 year">1 year</option>
                  <option value="Ongoing">Ongoing</option>
                </select>
              </div>

              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  id="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-500 focus:border-green-500 focus:ring-green-500 sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                  Opportunity Image
                </label>
                <input
                  type="file"
                  name="image"
                  id="image"
                  onChange={handleFileChange}
                  accept="image/*"
                  className="mt-1 block w-full text-sm text-gray-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-md file:border-0
                    file:text-sm file:font-semibold
                    file:bg-green-50 file:text-green-700
                    hover:file:bg-green-100"
                />
                <p className="mt-1 text-sm text-gray-500">
                  Upload an image that represents this opportunity (JPG, PNG)
                </p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Description</h2>
            <div className="space-y-6">
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  name="description"
                  id="description"
                  rows={4}
                  value={formData.description}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-500 focus:border-green-500 focus:ring-green-500 sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="requirements" className="block text-sm font-medium text-gray-700">
                  Requirements
                </label>
                <textarea
                  name="requirements"
                  id="requirements"
                  rows={4}
                  value={formData.requirements}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-500 focus:border-green-500 focus:ring-green-500 sm:text-sm"
                />
                <p className="mt-1 text-sm text-gray-500">
                  List the requirements for this opportunity (one per line)
                </p>
              </div>

              <div>
                <label htmlFor="responsibilities" className="block text-sm font-medium text-gray-700">
                  Responsibilities
                </label>
                <textarea
                  name="responsibilities"
                  id="responsibilities"
                  rows={4}
                  value={formData.responsibilities}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-500 focus:border-green-500 focus:ring-green-500 sm:text-sm"
                />
                <p className="mt-1 text-sm text-gray-500">
                  List the responsibilities for this opportunity (one per line)
                </p>
              </div>

              <div>
                <label htmlFor="benefits" className="block text-sm font-medium text-gray-700">
                  Benefits
                </label>
                <textarea
                  name="benefits"
                  id="benefits"
                  rows={4}
                  value={formData.benefits}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-500 focus:border-green-500 focus:ring-green-500 sm:text-sm"
                />
                <p className="mt-1 text-sm text-gray-500">
                  List the benefits for volunteers (one per line)
                </p>
              </div>
            </div>
          </div>

          {/* Schedule & Availability */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Schedule & Availability</h2>
            <div className="space-y-6">
              <div>
                <label htmlFor="schedule" className="block text-sm font-medium text-gray-700">
                  Schedule
                </label>
                <input
                  type="text"
                  name="schedule"
                  id="schedule"
                  value={formData.schedule}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-500 focus:border-green-500 focus:ring-green-500 sm:text-sm"
                />
                <p className="mt-1 text-sm text-gray-500">
                  Example: Monday - Friday, 2-4 hours per day
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">
                    Start Date
                  </label>
                  <input
                    type="date"
                    name="startDate"
                    id="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-500 focus:border-green-500 focus:ring-green-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">
                    End Date
                  </label>
                  <input
                    type="date"
                    name="endDate"
                    id="endDate"
                    value={formData.endDate}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-500 focus:border-green-500 focus:ring-green-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="applicationDeadline" className="block text-sm font-medium text-gray-700">
                  Application Deadline
                </label>
                <input
                  type="date"
                  name="applicationDeadline"
                  id="applicationDeadline"
                  value={formData.applicationDeadline}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-500 focus:border-green-500 focus:ring-green-500 sm:text-sm"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="spotsAvailable" className="block text-sm font-medium text-gray-700">
                    Spots Available
                  </label>
                  <input
                    type="number"
                    name="spotsAvailable"
                    id="spotsAvailable"
                    value={formData.spotsAvailable}
                    onChange={handleChange}
                    required
                    min="1"
                    className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-500 focus:border-green-500 focus:ring-green-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="totalSpots" className="block text-sm font-medium text-gray-700">
                    Total Spots
                  </label>
                  <input
                    type="number"
                    name="totalSpots"
                    id="totalSpots"
                    value={formData.totalSpots}
                    onChange={handleChange}
                    required
                    min="1"
                    className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-500 focus:border-green-500 focus:ring-green-500 sm:text-sm"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex justify-end gap-4">
            <Link
              href="/ngos/dashboard"
              className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              Cancel
            </Link>
            <button
              type="submit"
              className="rounded-md bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            >
              Create Opportunity
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 