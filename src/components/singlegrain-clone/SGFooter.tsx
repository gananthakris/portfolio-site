import Link from "next/link";
import { newsletter } from "@/lib/singlegrain-real-content";

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
              <li><Link href="/singlegrain-clone/services/seo" className="hover:text-sg-blue">SEO Services</Link></li>
              <li><Link href="/singlegrain-clone/services/paid" className="hover:text-sg-blue">Paid Advertising</Link></li>
              <li><Link href="/singlegrain-clone/services/content" className="hover:text-sg-blue">Content Marketing</Link></li>
              <li><Link href="/singlegrain-clone/services/cro" className="hover:text-sg-blue">CRO Services</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-gray-900 font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/singlegrain-clone/about" className="hover:text-sg-blue">About Us</Link></li>
              <li><Link href="/singlegrain-clone/case-studies" className="hover:text-sg-blue">Case Studies</Link></li>
              <li><Link href="/singlegrain-clone/careers" className="hover:text-sg-blue">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-gray-900 font-semibold mb-4">{newsletter.headline}</h4>
            <p className="text-sm text-gray-600 mb-4">
              {newsletter.description}
            </p>
            <Link
              href="#newsletter"
              className="inline-block px-4 py-2 bg-sg-blue text-white rounded-lg font-medium text-sm hover:bg-sg-blue-dark transition-colors"
            >
              {newsletter.cta}
            </Link>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Single Grain. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/singlegrain-clone/privacy" className="hover:text-sg-blue">Privacy Policy</Link>
            <Link href="/singlegrain-clone/terms" className="hover:text-sg-blue">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

