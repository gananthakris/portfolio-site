import { blogPosts } from "@/lib/sg-content";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.id,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = blogPosts.find((p) => p.id === params.slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.title} | Single Grain Blog`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = blogPosts.find((p) => p.id === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="pt-20 pb-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="mb-4">
            <span className="px-3 py-1 bg-sg-blue/10 text-sg-blue rounded-lg text-sm font-medium">
              {post.category}
            </span>
          </div>
          <h1 className="heading-xl mb-6 text-gray-900">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-gray-600">
            <span>{post.author}</span>
            <span>•</span>
            <span>{new Date(post.date).toLocaleDateString()}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
        </div>

        <div className="card prose prose-lg max-w-none">
          <div className="text-gray-700 leading-relaxed">
            <p className="text-xl mb-6 text-gray-600">
              {post.excerpt}
            </p>
            <p className="mb-6">
              This is a sample blog post template. In a production environment, this would contain the full blog post content, formatted with proper headings, paragraphs, images, and other rich content elements.
            </p>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Key Takeaways</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>First key point about the topic</li>
              <li>Second important insight</li>
              <li>Third actionable takeaway</li>
            </ul>
            <p className="mb-6">
              Additional content would go here, providing detailed insights, examples, and actionable advice for readers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

