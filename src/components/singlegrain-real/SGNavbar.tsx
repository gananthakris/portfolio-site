"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function SGNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-sm"
          : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link
            href="/singlegrain-real"
            className="text-2xl font-bold tracking-tight text-sg-primary hover:text-sg-primary-dark transition-colors"
          >
            Single Grain
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="relative group">
              <button className="text-sm font-medium text-gray-700 hover:text-sg-primary transition-colors">
                Services
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-4">
                <Link href="/singlegrain-real/services/seo" className="block py-2 text-sm text-gray-700 hover:text-sg-primary">SEO Services</Link>
                <Link href="/singlegrain-real/services/paid" className="block py-2 text-sm text-gray-700 hover:text-sg-primary">Paid Advertising</Link>
                <Link href="/singlegrain-real/services/content" className="block py-2 text-sm text-gray-700 hover:text-sg-primary">Content Marketing</Link>
                <Link href="/singlegrain-real/services/cro" className="block py-2 text-sm text-gray-700 hover:text-sg-primary">CRO Services</Link>
              </div>
            </div>
            <Link
              href="/singlegrain-real/case-studies"
              className="text-sm font-medium text-gray-700 hover:text-sg-primary transition-colors"
            >
              Case Studies
            </Link>
            <Link
              href="/singlegrain-real/about"
              className="text-sm font-medium text-gray-700 hover:text-sg-primary transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/singlegrain-real/contact"
              className="btn-primary"
            >
              Work with us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden pb-4 space-y-3"
          >
            <Link href="/singlegrain-real/services" className="block text-sm font-medium text-gray-700">Services</Link>
            <Link href="/singlegrain-real/case-studies" className="block text-sm font-medium text-gray-700">Case Studies</Link>
            <Link href="/singlegrain-real/about" className="block text-sm font-medium text-gray-700">About</Link>
            <Link href="/singlegrain-real/contact" className="block btn-primary text-center">Work with us</Link>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}

