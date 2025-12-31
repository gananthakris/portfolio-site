import Link from "next/link";
import { newsletter } from "@/lib/singlegrain-content";

export default function SGFooter() {
  return (
    <footer className="bg-sg-dark-lighter border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-sg-light font-bold text-xl mb-4">Single Grain</h3>
            <p className="text-sm text-sg-light-muted">
              The marketing partner B2B companies never outgrow.
            </p>
          </div>
          <div>
            <h4 className="text-sg-light font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-sg-light-muted">
              <li>
                <Link href="/singlegrain/services/seo" className="hover:text-sg-neon-lime transition-colors">
                  SEO
                </Link>
              </li>
              <li>
                <Link href="/singlegrain/services/paid-media" className="hover:text-sg-neon-lime transition-colors">
                  Paid Media
                </Link>
              </li>
              <li>
                <Link href="/singlegrain/services/content" className="hover:text-sg-neon-lime transition-colors">
                  Content
                </Link>
              </li>
              <li>
                <Link href="/singlegrain/services/cro" className="hover:text-sg-neon-lime transition-colors">
                  CRO
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sg-light font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-sg-light-muted">
              <li>
                <Link href="/singlegrain/about" className="hover:text-sg-neon-lime transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/singlegrain/case-studies" className="hover:text-sg-neon-lime transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/singlegrain/resources" className="hover:text-sg-neon-lime transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/singlegrain/careers" className="hover:text-sg-neon-lime transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sg-light font-semibold mb-4">{newsletter.headline}</h4>
            <p className="text-sm text-sg-light-muted mb-4">
              {newsletter.description}
            </p>
            <a
              href="#newsletter"
              className="inline-block px-4 py-2 bg-sg-neon-lime text-sg-dark rounded-lg font-medium text-sm hover:bg-sg-neon-lime/90 transition-colors"
            >
              {newsletter.cta}
            </a>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 text-sm text-sg-light-muted text-center">
          <p>© {new Date().getFullYear()} Single Grain. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

