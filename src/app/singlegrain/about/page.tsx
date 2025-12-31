import { about } from "@/lib/singlegrain-content";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Single Grain",
  description: "From $2 to market leader. Learn about Single Grain's story, mission, values, and the team behind the results.",
};

export default function AboutPage() {
  return (
    <div className="grain-bg pt-20 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="heading-xl mb-6 text-sg-light">
            {about.story.headline}
          </h1>
          <p className="text-xl text-sg-light-muted">
            Built on Results, Driven by Innovation
          </p>
        </div>

        <div className="space-y-12 mb-16">
          <div className="glass-card p-8">
            <h2 className="heading-md mb-4 text-sg-light">The Story</h2>
            <p className="text-sg-light-muted leading-relaxed mb-4">
              {about.story.intro}
            </p>
            <p className="text-sg-light-muted leading-relaxed">
              {about.story.growth}
            </p>
          </div>

          <div className="glass-card p-8">
            <h2 className="heading-md mb-4 text-sg-light">Our Mission</h2>
            <p className="text-sg-light-muted leading-relaxed">
              {about.story.mission}
            </p>
          </div>

          <div className="glass-card p-8">
            <h2 className="heading-md mb-6 text-sg-light">Our Values</h2>
            <ul className="space-y-6">
              {about.values.map((value, idx) => (
                <li key={idx} className="border-l-4 border-sg-neon-lime pl-6">
                  <h3 className="heading-md mb-2 text-sg-light">
                    {value.title}
                  </h3>
                  <p className="text-sg-light-muted leading-relaxed">
                    {value.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-card p-8">
            <h2 className="heading-md mb-6 text-sg-light">
              {about.culture.headline}
            </h2>
            <ul className="space-y-4">
              {about.culture.points.map((point, idx) => (
                <li key={idx} className="flex items-start text-sg-light-muted">
                  <span className="text-sg-neon-lime mr-3 mt-1 font-bold">→</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-card p-8 border-sg-neon-lime/30">
            <h3 className="heading-md mb-2 text-sg-light">
              {about.founder.name}
            </h3>
            <p className="text-sg-light-muted mb-4">
              {about.founder.role}
            </p>
            <p className="text-sg-light-muted leading-relaxed mb-4">
              {about.founder.bio}
            </p>
            <div className="mb-4">
              <p className="text-sg-light-muted mb-2">Host of:</p>
              <div className="flex flex-wrap gap-4">
                {about.founder.podcasts.map((podcast, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-sg-neon-lime/20 text-sg-neon-lime rounded-lg text-sm font-medium"
                  >
                    {podcast}
                  </span>
                ))}
              </div>
            </div>
            <div className="border-l-4 border-sg-neon-lime pl-6 mt-6">
              <p className="text-lg text-sg-light italic">
                "{about.founder.quote}"
              </p>
            </div>
          </div>
        </div>

        <div className="glass-card p-8 bg-sg-neon-lime/10 border-sg-neon-lime/30 text-center">
          <h2 className="heading-md mb-4 text-sg-light">Ready to Work Together?</h2>
          <p className="text-sg-light-muted mb-6">
            Let's talk about how we can help your business grow.
          </p>
          <Link
            href="/singlegrain/contact"
            className="inline-block px-8 py-4 bg-sg-neon-lime text-sg-dark rounded-lg font-semibold hover:bg-sg-neon-lime/90 transition-colors"
          >
            Work With Us
          </Link>
        </div>
      </div>
    </div>
  );
}

