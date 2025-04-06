'use client';

import { useState } from 'react';
import Link from 'next/link';
import { blogPosts, categories } from '@/data/blogPosts';
import Image from 'next/image';
import ScrollAnimation from '@/components/ui/ScrollAnimation';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <ScrollAnimation className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Blog & Insights
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Discover stories, tips, and insights from the volunteering community
          </p>
        </div>
      </ScrollAnimation>

      {/* Categories */}
      <ScrollAnimation delay={0.2} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                selectedCategory === category
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </ScrollAnimation>

      {/* Blog Posts Grid */}
      <ScrollAnimation delay={0.4} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post, index) => (
            <ScrollAnimation key={post.id} delay={0.2 * (index + 1)}>
              <Link
                href={`/blog/${post.id}`}
                className="block bg-white rounded-lg shadow overflow-hidden hover:shadow-md transition-shadow duration-200"
              >
                <article>
                  <div className="relative h-48">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-x-4 text-xs">
                      <span className="relative z-10 rounded-full bg-green-50 px-3 py-1.5 font-medium text-green-600">
                        {post.category}
                      </span>
                      <span className="text-gray-500">{post.date}</span>
                    </div>
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-500">By {post.author}</p>
                    <p className="mt-4 text-sm text-gray-600 line-clamp-2">{post.description}</p>
                  </div>
                </article>
              </Link>
            </ScrollAnimation>
          ))}
        </div>
      </ScrollAnimation>

      {/* Newsletter Section */}
      <ScrollAnimation delay={0.6} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-16 bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="px-6 py-12 sm:px-12 sm:py-16">
            <div className="text-center">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                Subscribe to our newsletter
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Get the latest updates and insights delivered to your inbox.
              </p>
            </div>
            <form className="mt-8 sm:flex sm:max-w-md sm:mx-auto">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email-address"
                type="email"
                autoComplete="email"
                required
                className="w-full min-w-0 appearance-none rounded-md border-0 bg-white px-3 py-1.5 text-base text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:w-56 sm:text-sm sm:leading-6"
                placeholder="Enter your email"
              />
              <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
} 