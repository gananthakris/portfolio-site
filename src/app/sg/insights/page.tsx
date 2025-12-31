export const metadata = {
  title: "Insights | Single Grain",
  description: "Marketing insights, strategies, and thought leadership from Single Grain.",
};

export default function InsightsPage() {
  return (
    <div className="pt-20 pb-20 bg-white dark:bg-gray-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Insights
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Marketing insights, strategies, and thought leadership
          </p>
        </div>

        <div className="text-center py-20">
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Our blog and insights are coming soon. In the meantime, check out our case studies.
          </p>
          <a
            href="/sg/case-studies"
            className="inline-block px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
          >
            View Case Studies
          </a>
        </div>
      </div>
    </div>
  );
}

