"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUp } from "lucide-react";
import { useState } from "react";

const InstagramIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="16"
    height="16"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const TwitterIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="16"
    height="16"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

const FacebookIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="16"
    height="16"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-ink text-white border-t border-white/10 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-forest/20 blur-3xl pointer-events-none"></div>
      <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-sun/10 blur-3xl pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Section: Brand & Newsletter */}
        <div className="grid gap-8 pb-12 border-b border-white/10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <a href="#home" className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-sun text-pine shadow-card">
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 10h16v8H4z" />
                  <path d="M7 10V6h10v4" />
                  <path d="M6 18v2M18 18v2" />
                </svg>
              </span>
              <span className="text-xl font-extrabold tracking-tight">Nook & Timber</span>
            </a>
            <p className="mt-4 max-w-md text-sm leading-7 text-white/60">
              Modern furniture collections with warm materials, clear pricing, and polished room-first browsing. Subscribe to our newsletter to receive design tips and updates on new collections.
            </p>
          </div>

          {/* Newsletter Form */}
          <div className="lg:col-span-6 lg:justify-self-end w-full max-w-md">
            <h3 className="text-sm font-bold uppercase tracking-wider text-sun">Join the Timber Club</h3>
            <form onSubmit={handleSubscribe} className="mt-4 flex gap-2">
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white outline-none placeholder:text-white/30 focus:border-sun focus:bg-white/10 transition"
              />
              <button
                type="submit"
                className="flex items-center justify-center h-11 w-11 rounded-full bg-forest text-white transition duration-300 hover:bg-sun hover:text-pine shadow-card shrink-0 cursor-pointer"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </form>
            {subscribed && (
              <motion.p
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-2 text-xs font-bold text-forest"
              >
                Subscription successful! Check your inbox soon.
              </motion.p>
            )}
          </div>
        </div>

        {/* Middle Section: Directories */}
        <div className="grid gap-8 py-12 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <h4 className="font-extrabold text-sm uppercase tracking-wider text-white">Explore</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/50">
              <li><a href="#about" className="transition duration-300 hover:text-sun hover:underline">About Us</a></li>
              <li><a href="#features" className="transition duration-300 hover:text-sun hover:underline">Our Services</a></li>
              <li><a href="#products" className="transition duration-300 hover:text-sun hover:underline">Products Catalog</a></li>
              <li><a href="#gallery" className="transition duration-300 hover:text-sun hover:underline">Inspiration Gallery</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-extrabold text-sm uppercase tracking-wider text-white">Collections</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/50">
              <li className="hover:text-sun transition cursor-pointer">Living Room Suite</li>
              <li className="hover:text-sun transition cursor-pointer">Bedroom Sanctuary</li>
              <li className="hover:text-sun transition cursor-pointer">Modern Lighting</li>
              <li className="hover:text-sun transition cursor-pointer">Ergonomic Office</li>
            </ul>
          </div>
          <div>
            <h4 className="font-extrabold text-sm uppercase tracking-wider text-white">Customer Care</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/50">
              <li className="hover:text-sun transition cursor-pointer">Shipping & Setup</li>
              <li className="hover:text-sun transition cursor-pointer">Returns & Exchanges</li>
              <li className="hover:text-sun transition cursor-pointer">Product Care Guide</li>
              <li className="hover:text-sun transition cursor-pointer">Warranty Details</li>
            </ul>
          </div>
          <div>
            <h4 className="font-extrabold text-sm uppercase tracking-wider text-white">Get In Touch</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/50">
              <li>hello@nooktimber.example</li>
              <li>+1 555 018 4488</li>
              <li>Mon-Sat, 9 AM - 7 PM</li>
              <li className="flex gap-3 mt-4">
                <motion.a
                  whileHover={{ scale: 1.15, y: -2 }}
                  href="#"
                  aria-label="Instagram"
                  className="grid h-8 w-8 place-items-center rounded-full bg-white/10 text-white transition hover:bg-sun hover:text-pine"
                >
                  <InstagramIcon />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.15, y: -2 }}
                  href="#"
                  aria-label="Twitter"
                  className="grid h-8 w-8 place-items-center rounded-full bg-white/10 text-white transition hover:bg-sun hover:text-pine"
                >
                  <TwitterIcon />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.15, y: -2 }}
                  href="#"
                  aria-label="Facebook"
                  className="grid h-8 w-8 place-items-center rounded-full bg-white/10 text-white transition hover:bg-sun hover:text-pine"
                >
                  <FacebookIcon />
                </motion.a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-xs text-white/40">
          <p>© 2026 Nook & Timber. All rights reserved. Built with love for modern homes.</p>
          <div className="flex items-center gap-6">
            <a href="#contact" className="hover:text-sun transition">Start a room plan</a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-sun transition cursor-pointer focus:outline-none"
            >
              Back to top
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
