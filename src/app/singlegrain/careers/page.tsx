import { careers } from "@/lib/singlegrain-content";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | Single Grain",
  description: "Join the most innovative marketing company that drives results. AI is foundational. Ship mentality.",
};

export default function CareersPage() {
  return (
    <div className="grain-bg pt-20 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="heading-xl mb-6 text-sg-light">
            {careers.headline}
          </h1>
          <p className="text-xl text-sg-light-muted">
            {careers.description}
          </p>
        </div>

        <div className="glass-card p-8 mb-12">
          <h2 className="heading-md mb-6 text-sg-light">What We Value</h2>
          <ul className="space-y-4">
            {careers.values.map((value, idx) => (
              <li key={idx} className="flex items-start text-sg-light-muted">
                <span className="text-sg-neon-lime mr-3 mt-1 font-bold">→</span>
                <span>{value}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6 mb-12">
          <h2 className="heading-md text-sg-light mb-8">Open Positions</h2>
          {careers.roles.map((role) => (
            <div
              key={role.id}
              className="glass-card glass-card-hover p-8"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="mb-4 md:mb-0">
                  <h3 className="heading-md mb-2 text-sg-light">
                    {role.title}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-sm text-sg-light-muted">
                    <span>{role.department}</span>
                    <span>•</span>
                    <span>{role.location}</span>
                    <span>•</span>
                    <span>{role.type}</span>
                  </div>
                </div>
                <button className="px-6 py-3 bg-sg-neon-lime text-sg-dark rounded-lg font-semibold hover:bg-sg-neon-lime/90 transition-colors md:ml-4">
                  Apply
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="glass-card p-8 bg-sg-neon-lime/10 border-sg-neon-lime/30 text-center">
          <p className="text-sg-light-muted mb-4">
            Don't see a role that fits? We're always looking for exceptional talent.
          </p>
          <a
            href="mailto:careers@singlegrain.com"
            className="inline-block px-8 py-4 bg-sg-neon-lime text-sg-dark rounded-lg font-semibold hover:bg-sg-neon-lime/90 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}

