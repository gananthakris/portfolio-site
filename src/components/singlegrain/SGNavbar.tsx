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
          ? "bg-sg-dark/95 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link
            href="/singlegrain"
            className="text-2xl font-bold tracking-tight text-sg-light hover:text-sg-neon-lime transition-colors"
          >
            Single Grain
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/singlegrain/services"
              className="text-sm font-medium text-sg-light-muted hover:text-sg-light transition-colors"
            >
              Services
            </Link>
            <Link
              href="/singlegrain/case-studies"
              className="text-sm font-medium text-sg-light-muted hover:text-sg-light transition-colors"
            >
              Case Studies
            </Link>
            <Link
              href="/singlegrain/about"
              className="text-sm font-medium text-sg-light-muted hover:text-sg-light transition-colors"
            >
              About
            </Link>
            <Link
              href="/singlegrain/resources"
              className="text-sm font-medium text-sg-light-muted hover:text-sg-light transition-colors"
            >
              Resources
            </Link>
            <Link
              href="/singlegrain/contact"
              className="px-4 py-2 bg-sg-neon-lime text-sg-dark rounded-lg font-medium text-sm hover:bg-sg-neon-lime/90 transition-colors"
            >
              Work With Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-sg-light"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
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
            <Link
              href="/singlegrain/services"
              className="block text-sm font-medium text-sg-light-muted"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/singlegrain/case-studies"
              className="block text-sm font-medium text-sg-light-muted"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Case Studies
            </Link>
            <Link
              href="/singlegrain/about"
              className="block text-sm font-medium text-sg-light-muted"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/singlegrain/resources"
              className="block text-sm font-medium text-sg-light-muted"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Resources
            </Link>
            <Link
              href="/singlegrain/contact"
              className="block px-4 py-2 bg-sg-neon-lime text-sg-dark rounded-lg font-medium text-sm text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Work With Us
            </Link>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}

