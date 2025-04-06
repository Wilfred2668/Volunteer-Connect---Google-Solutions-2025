'use client';

import { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { MagnifyingGlassIcon, FunnelIcon } from '@heroicons/react/24/outline';

interface Opportunity {
  id: number;
  title: string;
  organization: string;
  location: {
    lat: number;
    lng: number;
  };
  date: string;
  description: string;
  category: string;
}

// Temporary data (will be replaced with actual data later)
const opportunities: Opportunity[] = [
  {
    id: 1,
    title: 'Beach Cleanup',
    organization: 'Ocean Conservation',
    location: { lat: 37.7749, lng: -122.4194 },
    date: '2024-03-15',
    description: 'Help clean up the local beach and protect marine life.',
    category: 'Environment',
  },
  {
    id: 2,
    title: 'Food Bank Distribution',
    organization: 'Community Food Bank',
    location: { lat: 37.7833, lng: -122.4167 },
    date: '2024-03-20',
    description: 'Distribute food to families in need.',
    category: 'Hunger',
  },
  {
    id: 3,
    title: 'Tree Planting',
    organization: 'Green Earth Initiative',
    location: { lat: 37.7917, lng: -122.4083 },
    date: '2024-03-25',
    description: 'Plant trees to improve air quality and create green spaces.',
    category: 'Environment',
  },
];

const mapContainerStyle = {
  width: '100%',
  height: '600px',
};

const center = {
  lat: 37.7749,
  lng: -122.4194,
};

export default function ExplorePage() {
  const [selectedOpportunity, setSelectedOpportunity] = useState<Opportunity | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredOpportunities, setFilteredOpportunities] = useState<Opportunity[]>(opportunities);

  useEffect(() => {
    // Filter opportunities based on search query
    const filtered = opportunities.filter(opp =>
      opp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      opp.organization.toLowerCase().includes(searchQuery.toLowerCase()) ||
      opp.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredOpportunities(filtered);
  }, [searchQuery]);

  return (
    <div className="space-y-6">
      {/* Search and Filter Section */}
      <div className="bg-white shadow rounded-lg p-4">
        <div className="flex items-center space-x-4">
          <div className="flex-1">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search opportunities..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-green-500 focus:border-green-500 sm:text-sm"
              />
            </div>
          </div>
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
            <FunnelIcon className="h-5 w-5 mr-2" />
            Filter
          </button>
        </div>
      </div>

      {/* Map Section */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}>
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={center}
            zoom={13}
          >
            {filteredOpportunities.map((opportunity) => (
              <Marker
                key={opportunity.id}
                position={opportunity.location}
                onClick={() => setSelectedOpportunity(opportunity)}
              />
            ))}

            {selectedOpportunity && (
              <InfoWindow
                position={selectedOpportunity.location}
                onCloseClick={() => setSelectedOpportunity(null)}
              >
                <div className="p-2">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {selectedOpportunity.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {selectedOpportunity.organization}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    {new Date(selectedOpportunity.date).toLocaleDateString()}
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    {selectedOpportunity.description}
                  </p>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 mt-2">
                    {selectedOpportunity.category}
                  </span>
                </div>
              </InfoWindow>
            )}
          </GoogleMap>
        </LoadScript>
      </div>

      {/* List View */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Available Opportunities
          </h3>
        </div>
        <div className="border-t border-gray-200">
          <ul role="list" className="divide-y divide-gray-200">
            {filteredOpportunities.map((opportunity) => (
              <li
                key={opportunity.id}
                className="px-4 py-4 sm:px-6 hover:bg-gray-50 cursor-pointer"
                onClick={() => setSelectedOpportunity(opportunity)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                        <span className="text-green-600 font-semibold">
                          {opportunity.organization[0]}
                        </span>
                      </div>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        {opportunity.title}
                      </p>
                      <p className="text-sm text-gray-500">
                        {opportunity.organization}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {opportunity.category}
                    </span>
                    <div className="text-sm text-gray-500">
                      {new Date(opportunity.date).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
} 