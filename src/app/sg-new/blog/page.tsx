import { blogPosts } from "@/lib/sg-content";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Single Grain",
  description: "Marketing insights, strategies, and thought leadership from Single Grain.",
};

export default function BlogPage() {
  return (
    <div className="pt-20 pb-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="heading-xl mb-6 text-gray-900">
            Blog
          </h1>
          <p className="text-xl text-gray-600">
            Marketing insights, strategies, and thought leadership
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              href={`/sg-new/blog/${post.id}`}
              className="block card card-hover group"
            >
              <div className="mb-4">
                <span className="px-3 py-1 bg-sg-blue/10 text-sg-blue rounded-lg text-xs font-medium">
                  {post.category}
                </span>
              </div>
              <h2 className="heading-md mb-3 text-gray-900 group-hover:text-sg-blue transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>{post.author}</span>
                <span>{post.readTime}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

