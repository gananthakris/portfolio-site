"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function SGNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [learnOpen, setLearnOpen] = useState(false);

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
          ? "bg-white shadow-md border-b border-gray-200"
          : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link
            href="/singlegrain-clone"
            className="text-2xl font-bold text-gray-900 hover:text-sg-blue transition-colors"
          >
            Single Grain
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-sg-blue transition-colors">
                Services
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 p-4">
                  <Link href="/singlegrain-clone/services/seo" className="block py-2 text-sm text-gray-700 hover:text-sg-blue">SEO Services</Link>
                  <Link href="/singlegrain-clone/services/paid" className="block py-2 text-sm text-gray-700 hover:text-sg-blue">Paid Advertising</Link>
                  <Link href="/singlegrain-clone/services/content" className="block py-2 text-sm text-gray-700 hover:text-sg-blue">Content Marketing</Link>
                  <Link href="/singlegrain-clone/services/cro" className="block py-2 text-sm text-gray-700 hover:text-sg-blue">CRO Services</Link>
                </div>
              )}
            </div>

            {/* Industries Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIndustriesOpen(true)}
              onMouseLeave={() => setIndustriesOpen(false)}
            >
              <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-sg-blue transition-colors">
                Industries
              </button>
              {industriesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 p-4">
                  <Link href="/singlegrain-clone/industries/saas" className="block py-2 text-sm text-gray-700 hover:text-sg-blue">SaaS Industry</Link>
                  <Link href="/singlegrain-clone/industries/ecommerce" className="block py-2 text-sm text-gray-700 hover:text-sg-blue">Ecommerce Industry</Link>
                  <Link href="/singlegrain-clone/industries/education" className="block py-2 text-sm text-gray-700 hover:text-sg-blue">Education Industry</Link>
                </div>
              )}
            </div>

            {/* About Us Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
            >
              <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-sg-blue transition-colors">
                About Us
              </button>
              {aboutOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 p-4">
                  <Link href="/singlegrain-clone/about" className="block py-2 text-sm text-gray-700 hover:text-sg-blue">About Us</Link>
                  <Link href="/singlegrain-clone/case-studies" className="block py-2 text-sm text-gray-700 hover:text-sg-blue">Case Studies</Link>
                  <Link href="/singlegrain-clone/careers" className="block py-2 text-sm text-gray-700 hover:text-sg-blue">Careers</Link>
                </div>
              )}
            </div>

            {/* Learn Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setLearnOpen(true)}
              onMouseLeave={() => setLearnOpen(false)}
            >
              <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-sg-blue transition-colors">
                Learn
              </button>
              {learnOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 p-4">
                  <Link href="/singlegrain-clone/blog" className="block py-2 text-sm text-gray-700 hover:text-sg-blue">Blog</Link>
                  <Link href="/singlegrain-clone/podcasts" className="block py-2 text-sm text-gray-700 hover:text-sg-blue">Podcasts</Link>
                  <Link href="/singlegrain-clone/resources" className="block py-2 text-sm text-gray-700 hover:text-sg-blue">Resources</Link>
                </div>
              )}
            </div>

            <Link
              href="/singlegrain-clone/contact"
              className="ml-4 btn-primary"
            >
              Work with us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700"
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
            className="lg:hidden pb-4 space-y-3"
          >
            <Link href="/singlegrain-clone/services" className="block text-sm font-medium text-gray-700">Services</Link>
            <Link href="/singlegrain-clone/industries" className="block text-sm font-medium text-gray-700">Industries</Link>
            <Link href="/singlegrain-clone/about" className="block text-sm font-medium text-gray-700">About Us</Link>
            <Link href="/singlegrain-clone/blog" className="block text-sm font-medium text-gray-700">Learn</Link>
            <Link href="/singlegrain-clone/contact" className="block btn-primary text-center">Work with us</Link>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}

