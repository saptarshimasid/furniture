"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 18);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMobileMenuClick = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-porcelain/94 shadow-soft backdrop-blur-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <a href="#home" className="flex items-center gap-3" aria-label="Nook and Timber home">
          <span className="grid h-10 w-10 place-items-center rounded-lg bg-forest text-white shadow-card">
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 10h16v8H4z" />
              <path d="M7 10V6h10v4" />
              <path d="M6 18v2M18 18v2" />
            </svg>
          </span>
          <span className="text-lg font-extrabold tracking-normal">Nook & Timber</span>
        </a>

        <div className="hidden items-center gap-8 text-sm font-semibold text-ink/70 lg:flex">
          <a className="relative py-1 transition hover:text-forest group" href="#about">
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-forest transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a className="relative py-1 transition hover:text-forest group" href="#features">
            Services
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-forest transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a className="relative py-1 transition hover:text-forest group" href="#products">
            Products
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-forest transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a className="relative py-1 transition hover:text-forest group" href="#gallery">
            Gallery
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-forest transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a className="relative py-1 transition hover:text-forest group" href="#contact">
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-forest transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a href="#products" className="rounded-full border border-ink/10 px-5 py-2.5 text-sm font-bold text-ink transition hover:border-forest hover:text-forest">View Collection</a>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-forest px-5 py-2.5 text-sm font-bold text-white shadow-card transition hover:-translate-y-0.5 hover:bg-pine">
            Shop Now
            <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        <button
          onClick={handleMobileMenuClick}
          type="button"
          className="grid h-11 w-11 place-items-center rounded-lg border border-ink/10 bg-white/80 text-ink shadow-sm lg:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-y border-ink/10 bg-porcelain/95 px-4 py-4 shadow-soft backdrop-blur-md lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2 text-sm font-bold text-ink/75">
            <a onClick={closeMenu} className="rounded-lg px-3 py-3 hover:bg-smoke hover:text-forest" href="#about">About</a>
            <a onClick={closeMenu} className="rounded-lg px-3 py-3 hover:bg-smoke hover:text-forest" href="#features">Services</a>
            <a onClick={closeMenu} className="rounded-lg px-3 py-3 hover:bg-smoke hover:text-forest" href="#products">Products</a>
            <a onClick={closeMenu} className="rounded-lg px-3 py-3 hover:bg-smoke hover:text-forest" href="#gallery">Gallery</a>
            <a onClick={closeMenu} className="rounded-lg px-3 py-3 hover:bg-smoke hover:text-forest" href="#contact">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
}
