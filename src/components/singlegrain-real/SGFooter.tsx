import Link from "next/link";
import { newsletter, careers } from "@/lib/singlegrain-real-content";

export default function SGFooter() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-gray-900 font-bold text-xl mb-4">Single Grain</h3>
            <p className="text-sm text-gray-600">
              Single Grain is a full-service digital marketing agency that helps great companies grow their revenues online.
            </p>
          </div>
          <div>
            <h4 className="text-gray-900 font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/singlegrain-real/services/seo" className="hover:text-sg-primary">SEO Services</Link></li>
              <li><Link href="/singlegrain-real/services/paid" className="hover:text-sg-primary">Paid Advertising</Link></li>
              <li><Link href="/singlegrain-real/services/content" className="hover:text-sg-primary">Content Marketing</Link></li>
              <li><Link href="/singlegrain-real/services/cro" className="hover:text-sg-primary">CRO Services</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-gray-900 font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/singlegrain-real/about" className="hover:text-sg-primary">About Us</Link></li>
              <li><Link href="/singlegrain-real/case-studies" className="hover:text-sg-primary">Case Studies</Link></li>
              <li><Link href="/singlegrain-real/careers" className="hover:text-sg-primary">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-gray-900 font-semibold mb-4">{newsletter.headline}</h4>
            <p className="text-sm text-gray-600 mb-4">
              {newsletter.description}
            </p>
            <Link
              href="#newsletter"
              className="inline-block px-4 py-2 bg-sg-primary text-white rounded-lg font-medium text-sm hover:bg-sg-primary-dark transition-colors"
            >
              {newsletter.cta}
            </Link>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Single Grain. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/singlegrain-real/privacy" className="hover:text-sg-primary">Privacy Policy</Link>
            <Link href="/singlegrain-real/terms" className="hover:text-sg-primary">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

