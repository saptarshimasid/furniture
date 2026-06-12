"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBadges from "@/components/TrustBadges";
import Categories from "@/components/Categories";
import Services from "@/components/Services";
import Products from "@/components/Products";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {/* GSAP Preloader Overlay */}
      <AnimatePresence mode="wait">
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {/* Main Page Layout */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col min-h-screen"
      >
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <TrustBadges />
          <Categories />
          <Services />
          <Products />
          <Gallery />
          <Testimonials />
          <ContactForm />
        </main>
        <Footer />
      </motion.div>
    </>
  );
}
