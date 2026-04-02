"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const link =
    "text-gray-400 dark:text-gray-400 hover:text-amber-400 dark:hover:text-amber-400 transition-colors duration-300 font-medium";

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        isScrolled
          ? "border-amber-900/20 bg-[#08070a]/95 backdrop-blur-lg shadow-sm"
          : "border-amber-900/10 bg-[#08070a]/70 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-white hover:text-amber-400 transition-colors duration-300"
        >
          Gokulkrishna A
        </Link>

        <div className="flex items-center gap-4 sm:gap-6">
          <div className="hidden sm:flex gap-4 text-sm">
            <Link href="/" className={link}>
              Portfolio
            </Link>
            <Link href="/marketing" className={link}>
              Marketing
            </Link>
            <a href="/#about" className={link}>
              About
            </a>
            <a href="/#experience" className={link}>
              Experience
            </a>
            <a href="/#projects" className={link}>
              Projects
            </a>
            <a href="/#contact" className={link}>
              Contact
            </a>
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link
              href="/#contact"
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 text-[#08070a] hover:from-amber-400 hover:to-orange-400 transition-all duration-300 shadow-md hover:shadow-amber-500/25 font-semibold text-sm"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
