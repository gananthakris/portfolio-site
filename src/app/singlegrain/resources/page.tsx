import { resources } from "@/lib/singlegrain-content";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources | Single Grain",
  description: "Marketing insights, playbooks, webinars, and tools to help you grow.",
};

export default function ResourcesPage() {
  return (
    <div className="grain-bg pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="heading-xl mb-6 text-sg-light">
            Learning Center
          </h1>
          <p className="text-lg text-sg-light-muted max-w-3xl mx-auto">
            Marketing insights, playbooks, webinars, and tools to help you grow
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource) => (
            <div
              key={resource.id}
              className="glass-card glass-card-hover p-8 h-full"
            >
              <div className="mb-4">
                <span className="px-3 py-1 bg-sg-neon-lime/20 text-sg-neon-lime rounded-lg text-xs font-medium">
                  {resource.type}
                </span>
              </div>
              <h2 className="heading-md mb-3 text-sg-light">
                {resource.title}
              </h2>
              <p className="text-sg-light-muted mb-4 leading-relaxed">
                {resource.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-sg-light-muted">
                  {resource.readTime}
                </span>
                <span className="text-sm font-semibold text-sg-neon-lime">
                  Read →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

