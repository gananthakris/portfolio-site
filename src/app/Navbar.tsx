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
    "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 font-medium";

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        isScrolled
          ? "border-gray-200/80 dark:border-gray-800/80 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-lg shadow-sm"
          : "border-gray-200/50 dark:border-gray-800/50 bg-white/70 dark:bg-black/50 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
        >
          Gokulkrishna A
        </Link>

        <div className="flex items-center gap-4 sm:gap-6">
          <div className="hidden sm:flex gap-4 text-sm">
            <a href="/#about" className={link}>
              About
            </a>
            <a href="/#experience" className={link}>
              Experience
            </a>
            <a href="/#projects" className={link}>
              Projects
            </a>
            <a href="/#skills" className={link}>
              Skills
            </a>
            <a href="/#contact" className={link}>
              Contact
            </a>
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link
              href="/#contact"
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg font-medium text-sm"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
