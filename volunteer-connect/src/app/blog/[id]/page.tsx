'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { CalendarIcon, UserIcon, ChatBubbleLeftIcon } from '@heroicons/react/24/outline';
import { blogPosts } from '@/data/blogPosts';

export default function BlogPostPage() {
  const params = useParams();
  const [mounted, setMounted] = useState(false);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<any[]>([]);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Convert the ID from string to number and ensure it's a valid number
  const postId = Number(params.id);
  const blogPost = blogPosts.find(post => post.id === postId);

  if (!blogPost) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-green-600 hover:text-green-500 mb-8"
          >
            <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Blog
          </Link>
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900">Blog Post Not Found</h1>
            <p className="mt-4 text-gray-600">The blog post you're looking for doesn't exist.</p>
          </div>
        </div>
      </div>
    );
  }

  const currentComments = comments.length > 0 ? comments : blogPost.comments;

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!comment.trim()) return;

    const newComment = {
      id: currentComments.length + 1,
      author: 'Current User', // This would come from the authenticated user
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      content: comment,
    };

    setComments([...currentComments, newComment]);
    setComment('');
  };

  if (!mounted) {
    return null;
  }

  // Get related posts (excluding the current post)
  const relatedPosts = blogPosts
    .filter(post => post.id !== blogPost.id)
    .slice(0, 2);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          href="/blog"
          className="inline-flex items-center text-green-600 hover:text-green-500 mb-8"
        >
          <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Blog
        </Link>

        {/* Main Content */}
        <article className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="relative h-96">
            <img
              src={blogPost.image}
              alt={blogPost.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-8">
            <div className="flex items-center gap-x-4 text-xs mb-4">
              <span className="relative z-10 rounded-full bg-green-50 px-3 py-1.5 font-medium text-green-600">
                {blogPost.category}
              </span>
              <span className="text-gray-500">{blogPost.readTime}</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{blogPost.title}</h1>
            <div className="flex items-center text-gray-500 mb-8">
              <UserIcon className="h-5 w-5 mr-2" />
              <span className="mr-4">{blogPost.author}</span>
              <CalendarIcon className="h-5 w-5 mr-2" />
              <span>{blogPost.date}</span>
            </div>

            <div
              className="prose prose-green max-w-none [&>p]:text-gray-600 [&>h2]:text-gray-900"
              dangerouslySetInnerHTML={{ __html: blogPost.content }}
            />
          </div>
        </article>

        {/* Comments Section */}
        <div className="mt-8 bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Comments ({currentComments.length})
          </h2>

          {/* Comment Form */}
          <form onSubmit={handleSubmitComment} className="mb-8">
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              rows={4}
              placeholder="Write a comment..."
              className="w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-500 focus:border-green-500 focus:ring-green-500 sm:text-sm"
            />
            <button
              type="submit"
              className="mt-4 rounded-md bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            >
              Post Comment
            </button>
          </form>

          {/* Comments List */}
          <div className="space-y-6">
            {currentComments.map((comment) => (
              <div key={comment.id} className="border-b border-gray-200 pb-6">
                <div className="flex items-center text-gray-500 mb-2">
                  <UserIcon className="h-5 w-5 mr-2" />
                  <span className="mr-4">{comment.author}</span>
                  <CalendarIcon className="h-5 w-5 mr-2" />
                  <span>{comment.date}</span>
                </div>
                <p className="text-gray-600">{comment.content}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Related Posts */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Posts</h2>
          <div className="grid gap-8 sm:grid-cols-2">
            {relatedPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.id}`}
                className="group"
              >
                <article className="bg-white rounded-lg shadow-sm overflow-hidden">
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
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-green-600">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-500">By {post.author}</p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-8 bg-white rounded-lg shadow-sm p-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900">Stay Updated</h2>
            <p className="mt-2 text-gray-600">
              Subscribe to our newsletter for the latest stories and insights from the volunteering community.
            </p>
            <form className="mt-6 flex gap-x-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 min-w-0 rounded-md border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-500 focus:border-green-500 focus:ring-green-500 sm:text-sm"
              />
              <button
                type="submit"
                className="rounded-md bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
} 