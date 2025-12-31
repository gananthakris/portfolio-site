import { about } from "@/lib/sg-content";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Single Grain",
  description: "From $2 to market leader. Learn about Single Grain's story, mission, values, and the team behind the results.",
};

export default function AboutPage() {
  return (
    <div className="pt-20 pb-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="heading-xl mb-6 text-gray-900">
            {about.story.headline}
          </h1>
          <p className="text-xl text-gray-600">
            Built on Results, Driven by Innovation
          </p>
        </div>

        <div className="space-y-12 mb-16">
          <div className="card">
            <h2 className="heading-md mb-4 text-gray-900">The Story</h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-4">
              {about.story.intro}
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              {about.story.growth}
            </p>
          </div>

          <div className="card">
            <h2 className="heading-md mb-4 text-gray-900">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              {about.story.mission}
            </p>
          </div>

          <div className="card">
            <h2 className="heading-md mb-6 text-gray-900">Our Values</h2>
            <ul className="space-y-6">
              {about.values.map((value, idx) => (
                <li key={idx} className="border-l-4 border-sg-blue pl-6">
                  <h3 className="heading-md mb-2 text-gray-900">
                    {value.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {value.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="card bg-gradient-to-r from-sg-blue/10 to-sg-blue-light/10">
            <h3 className="heading-md mb-2 text-gray-900">
              {about.founder.name}
            </h3>
            <p className="text-gray-600 mb-4 text-lg">
              {about.founder.role}
            </p>
            <p className="text-gray-700 leading-relaxed">
              {about.founder.bio}
            </p>
          </div>
        </div>

        <div className="card bg-gradient-to-r from-sg-blue to-sg-blue-light text-white text-center">
          <h2 className="heading-md mb-4 text-white">Ready to Work Together?</h2>
          <p className="text-blue-100 mb-6 text-lg">
            Let's talk about how we can help your business grow.
          </p>
          <Link
            href="/sg-new/contact"
            className="inline-block px-8 py-4 bg-white text-sg-blue rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Work With Us
          </Link>
        </div>
      </div>
    </div>
  );
}

