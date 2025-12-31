export const metadata = {
  title: "Careers | Single Grain",
  description: "Join the most innovative marketing company that drives results.",
};

export default function CareersPage() {
  return (
    <div className="pt-20 pb-20 bg-white dark:bg-gray-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Careers
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Join the most innovative marketing company that drives results.
          </p>
        </div>

        <div className="text-center py-20">
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Visit our careers site to see open positions and learn more about working at Single Grain.
          </p>
          <a
            href="https://careers.singlegrain.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
          >
            View Open Positions →
          </a>
        </div>
      </div>
    </div>
  );
}

