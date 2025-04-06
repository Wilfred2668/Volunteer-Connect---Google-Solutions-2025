'use client';

export default function ProfilePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Profile</h1>
        <p className="mt-1 text-sm text-gray-500">
          Manage your volunteer profile and preferences.
        </p>
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <div className="text-center">
          <div className="mx-auto h-24 w-24 rounded-full bg-green-100 flex items-center justify-center">
            <span className="text-3xl font-semibold text-green-600">JD</span>
          </div>
          <h2 className="mt-4 text-xl font-semibold text-gray-900">John Doe</h2>
          <p className="text-sm text-gray-500">john.doe@example.com</p>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-500">
            Profile page implementation coming soon...
          </p>
        </div>
      </div>
    </div>
  );
} 