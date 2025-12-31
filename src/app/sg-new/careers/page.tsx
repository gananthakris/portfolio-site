import { careers } from "@/lib/sg-content";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | Single Grain",
  description: "Join the most innovative marketing company that drives results. AI is foundational. Ship mentality.",
};

export default function CareersPage() {
  return (
    <div className="pt-20 pb-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="heading-xl mb-6 text-gray-900">
            {careers.headline}
          </h1>
          <p className="text-xl text-gray-600">
            {careers.description}
          </p>
        </div>

        <div className="card mb-12">
          <h2 className="heading-md mb-6 text-gray-900">What We Value</h2>
          <ul className="space-y-4">
            {careers.values.map((value, idx) => (
              <li key={idx} className="flex items-start text-gray-700">
                <span className="text-sg-blue mr-3 mt-1 font-bold text-xl">→</span>
                <span className="text-lg">{value}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6 mb-12">
          <h2 className="heading-md text-gray-900 mb-8">Open Positions</h2>
          {careers.roles.map((role) => (
            <div
              key={role.id}
              className="card card-hover"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="mb-4 md:mb-0">
                  <h3 className="heading-md mb-2 text-gray-900">
                    {role.title}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <span>{role.department}</span>
                    <span>•</span>
                    <span>{role.location}</span>
                    <span>•</span>
                    <span>{role.type}</span>
                  </div>
                </div>
                <button className="btn-primary md:ml-4">
                  Apply
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="card bg-gradient-to-r from-sg-blue to-sg-blue-light text-white text-center">
          <p className="text-blue-100 mb-4 text-lg">
            Don't see a role that fits? We're always looking for exceptional talent.
          </p>
          <a
            href="mailto:careers@singlegrain.com"
            className="inline-block px-8 py-4 bg-white text-sg-blue rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}

