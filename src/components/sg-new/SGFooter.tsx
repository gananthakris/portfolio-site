import Link from "next/link";
import { siteConfig } from "@/lib/sg-content";

export default function SGFooter() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-gray-900 font-bold text-xl mb-4">Single Grain</h3>
            <p className="text-sm text-gray-600">
              The marketing partner that companies never outgrow.
            </p>
          </div>
          <div>
            <h4 className="text-gray-900 font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/sg-new/services/seo" className="hover:text-sg-blue transition-colors">
                  SEO
                </Link>
              </li>
              <li>
                <Link href="/sg-new/services/paid-media" className="hover:text-sg-blue transition-colors">
                  Paid Media
                </Link>
              </li>
              <li>
                <Link href="/sg-new/services/content" className="hover:text-sg-blue transition-colors">
                  Content
                </Link>
              </li>
              <li>
                <Link href="/sg-new/services/cro" className="hover:text-sg-blue transition-colors">
                  CRO
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-gray-900 font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/sg-new/about" className="hover:text-sg-blue transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/sg-new/case-studies" className="hover:text-sg-blue transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/sg-new/blog" className="hover:text-sg-blue transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/sg-new/careers" className="hover:text-sg-blue transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-gray-900 font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-sg-blue transition-colors">
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a href={`tel:${siteConfig.phone}`} className="hover:text-sg-blue transition-colors">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="text-gray-500">{siteConfig.location}</li>
            </ul>
            <div className="mt-4 flex gap-4">
              <a href="https://linkedin.com/company/single-grain" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-sg-blue transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="https://twitter.com/singlegrain" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-sg-blue transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        {/* Newsletter Signup */}
        <div className="border-t border-gray-200 pt-8 mb-8">
          <div className="max-w-md">
            <h4 className="text-gray-900 font-semibold mb-2">Subscribe to Our Newsletter</h4>
            <p className="text-sm text-gray-600 mb-4">Get the latest marketing insights delivered to your inbox.</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sg-blue"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-sg-blue text-white rounded-lg font-medium hover:bg-sg-blue-dark transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Single Grain. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/sg-new/privacy" className="hover:text-sg-blue transition-colors">
              Privacy Policy
            </Link>
            <Link href="/sg-new/terms" className="hover:text-sg-blue transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

