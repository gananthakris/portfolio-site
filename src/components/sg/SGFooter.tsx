import Link from "next/link";

export default function SGFooter() {
  return (
    <footer className="bg-gray-950 dark:bg-black text-gray-400 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-bold text-xl mb-4">Single Grain</h3>
            <p className="text-sm">
              Tech-enabled digital marketing that drives results.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/sg/services/seo" className="hover:text-white transition-colors">
                  SEO
                </Link>
              </li>
              <li>
                <Link href="/sg/services/paid-media" className="hover:text-white transition-colors">
                  Paid Media
                </Link>
              </li>
              <li>
                <Link href="/sg/services/content" className="hover:text-white transition-colors">
                  Content
                </Link>
              </li>
              <li>
                <Link href="/sg/services/cro" className="hover:text-white transition-colors">
                  CRO
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/sg/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/sg/case-studies" className="hover:text-white transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/sg/insights" className="hover:text-white transition-colors">
                  Insights
                </Link>
              </li>
              <li>
                <Link href="/sg/careers" className="hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Get Started</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/sg/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/sg/contact" className="hover:text-white transition-colors">
                  Request Audit
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-sm text-center">
          <p>© {new Date().getFullYear()} Single Grain. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

