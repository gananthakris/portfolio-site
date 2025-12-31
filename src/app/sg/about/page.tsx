import { about } from "@/lib/content";
import Link from "next/link";
import { cta } from "@/lib/content";

export const metadata = {
  title: "About | Single Grain",
  description: "From $2 to market leader. Learn about Single Grain's story, mission, and the team behind the results.",
};

export default function AboutPage() {
  return (
    <div className="pt-20 pb-20 bg-white dark:bg-gray-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            {about.headline}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            {about.subheadline}
          </p>
        </div>

        <div className="space-y-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              The Story
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              {about.story.intro}
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {about.story.growth}
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {about.story.mission}
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              What We Stand For
            </h2>
            <ul className="space-y-4">
              {about.story.values.map((value, idx) => (
                <li
                  key={idx}
                  className="flex items-start p-4 bg-gray-50 dark:bg-gray-900 rounded-lg"
                >
                  <span className="text-gray-900 dark:text-white mr-3 font-bold text-xl">
                    →
                  </span>
                  <span className="text-gray-700 dark:text-gray-300 text-lg">
                    {value}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {about.founder.name}
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
              {about.founder.role}
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              {about.founder.bio}
            </p>
          </div>
        </div>

        <div className="p-8 bg-gray-900 dark:bg-black text-white rounded-xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Work Together?</h2>
          <p className="text-gray-300 mb-6">
            Let's talk about how we can help your business grow.
          </p>
          <Link
            href="/sg/contact"
            className="inline-block px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            {cta.primary}
          </Link>
        </div>
      </div>
    </div>
  );
}

