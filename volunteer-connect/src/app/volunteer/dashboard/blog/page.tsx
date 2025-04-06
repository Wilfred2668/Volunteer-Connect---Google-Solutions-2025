'use client';

import { useState } from 'react';
import Image from 'next/image';

// Temporary data (will be replaced with actual data later)
const categories = [
  'All',
  'Impact Stories',
  'Volunteer Tips',
  'Community News',
  'Success Stories',
];

const blogPosts = [
  {
    id: 1,
    title: 'The Power of Community Service',
    excerpt: 'Discover how volunteering can transform both communities and individuals.',
    category: 'Impact Stories',
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80',
    date: '2024-03-15',
    readTime: '5 min read',
  },
  {
    id: 2,
    title: '10 Tips for Effective Volunteering',
    excerpt: 'Learn how to make the most of your volunteer experience and create lasting impact.',
    category: 'Volunteer Tips',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    date: '2024-03-10',
    readTime: '4 min read',
  },
  {
    id: 3,
    title: 'Local Community Initiative Success',
    excerpt: 'How a small group of volunteers made a big difference in their neighborhood.',
    category: 'Success Stories',
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80',
    date: '2024-03-05',
    readTime: '6 min read',
  },
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Blog</h1>
        <p className="mt-1 text-sm text-gray-500">
          Stay updated with the latest news, stories, and tips from the volunteering community.
        </p>
      </div>

      {/* Categories */}
      <div className="flex space-x-4 overflow-x-auto pb-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
              selectedCategory === category
                ? 'bg-green-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.map((post) => (
          <article
            key={post.id}
            className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative h-48">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                <span>{post.category}</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {post.title}
              </h2>
              <p className="text-gray-600 mb-4">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  {new Date(post.date).toLocaleDateString()}
                </span>
                <button className="text-green-600 hover:text-green-700 font-medium">
                  Read more →
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Newsletter Signup */}
      <div className="bg-white shadow rounded-lg p-6">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-900">
            Subscribe to Our Newsletter
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Get the latest updates and stories delivered to your inbox.
          </p>
          <form className="mt-4 flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 min-w-0 px-4 py-2 text-base text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-l-md focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
            />
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-r-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
} 