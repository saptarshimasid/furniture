"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import TiltCard from "./TiltCard";
import { ArrowRight, Star } from "lucide-react";

export default function Hero() {
  const { scrollY } = useScroll();

  // Create subtle parallax offsets for different cards
  const yLivingRoom = useTransform(scrollY, [0, 800], [0, -70]);
  const yBedroom = useTransform(scrollY, [0, 800], [0, -130]);
  const yLoungeEdit = useTransform(scrollY, [0, 800], [0, -30]);
  const yFloatingIcon = useTransform(scrollY, [0, 800], [0, -180]);

  // Entrance animations config
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // Custom premium easeOutExpo
      },
    },
  };

  return (
    <section id="home" className="relative overflow-hidden bg-smoke pt-28 sm:pt-32 pb-16 sm:pb-20">
      <div className="absolute left-1/2 top-28 hidden h-32 w-32 -translate-x-1/2 rounded-full dotted-field opacity-70 sm:block"></div>
      
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:px-8">
        {/* Left Side: Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl"
        >
          <motion.div
            variants={itemVariants}
            className="mb-6 inline-flex items-center gap-3 rounded-full bg-white px-4 py-2 text-sm font-bold text-ink shadow-card"
          >
            <span className="grid h-7 w-7 place-items-center rounded-full bg-saffron text-pine">
              <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 11h14v8H5z" />
                <path d="M8 11V7a4 4 0 0 1 8 0v4" />
              </svg>
            </span>
            The Best Online Furniture Store
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="max-w-2xl text-4xl font-extrabold leading-tight tracking-normal text-ink sm:text-5xl lg:text-6xl"
          >
            Explore Our <span className="text-forest">Modern Furniture</span> Collection
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-5 max-w-xl text-base leading-8 text-ink/60 sm:text-lg"
          >
            Premium seating, lighting, and storage pieces curated for calm, flexible homes with a refined modern edge.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-forest px-6 py-3.5 text-sm font-extrabold text-white shadow-card transition duration-300 hover:-translate-y-0.5 hover:bg-pine"
            >
              Shop Now
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#gallery"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/10 bg-white px-6 py-3.5 text-sm font-extrabold text-ink transition duration-300 hover:border-forest hover:text-forest"
            >
              View All Products
            </a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-9 flex flex-wrap items-center gap-5"
          >
            <div className="flex -space-x-3">
              <img
                className="h-10 w-10 rounded-full border-2 border-white object-cover"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=96&q=80"
                alt="Customer portrait"
              />
              <img
                className="h-10 w-10 rounded-full border-2 border-white object-cover"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=96&q=80"
                alt="Customer portrait"
              />
              <img
                className="h-10 w-10 rounded-full border-2 border-white object-cover"
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=96&q=80"
                alt="Customer portrait"
              />
              <span className="grid h-10 w-10 place-items-center rounded-full border-2 border-white bg-sun text-sm font-extrabold text-pine">+</span>
            </div>
            <div>
              <div className="flex items-center gap-2 font-extrabold text-ink">
                <Star className="h-5 w-5 fill-sun text-sun" />
                4.9 Ratings+
              </div>
              <p className="text-sm text-ink/50">Trusted by 50k+ customers</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side: Multi-layered Parallax Floating Cards */}
        <div className="relative min-h-[550px] lg:min-h-[600px] w-full mt-8 lg:mt-0">
          {/* Background overlay */}
          <div className="absolute right-0 top-0 h-full w-full rounded-lg bg-white/50"></div>

          {/* Living Room Card (Medium Speed) */}
          <motion.div
            style={{ y: yLivingRoom }}
            className="absolute -right-12 top-6 hidden w-[21rem] z-20 sm:block lg:right-48"
          >
            <TiltCard className="group rounded-lg bg-white p-3 shadow-soft">
              <div className="image-sheen relative h-52 overflow-hidden rounded-lg bg-smoke">
                <img
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=82"
                  alt="Sunlit living room with modern sofa"
                />
                <span className="absolute right-4 top-4 rounded-full bg-pine px-3 py-1.5 text-xs font-extrabold text-white">$1,500</span>
              </div>
              <div className="mt-4 flex items-end justify-between">
                <div>
                  <h3 className="font-extrabold">Living Room</h3>
                  <p className="mt-1 text-sm text-ink/50">2,500+ items</p>
                </div>
                <a
                  href="#products"
                  aria-label="Open living room products"
                  className="grid h-11 w-11 place-items-center rounded-full bg-forest text-white transition duration-300 hover:-translate-y-1 hover:bg-pine"
                >
                  <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17 17 7M8 7h9v9" />
                  </svg>
                </a>
              </div>
            </TiltCard>
          </motion.div>

          {/* Bedroom Card (High Speed) */}
          <motion.div
            style={{ y: yBedroom }}
            className="absolute -right-24 top-28 hidden w-[18rem] z-10 sm:block lg:right-6"
          >
            <TiltCard className="group rounded-lg bg-white p-3 shadow-soft">
              <div className="image-sheen relative h-52 overflow-hidden rounded-lg bg-smoke">
                <img
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=82"
                  alt="Modern warm bedroom interior"
                />
              </div>
              <h3 className="mt-4 font-extrabold">Bedroom Edit</h3>
              <p className="mt-1 text-sm text-ink/50">1,500+ items</p>
            </TiltCard>
          </motion.div>

          {/* Lounge Edit Card (Slower Speed) */}
          <motion.div
            style={{ y: yLoungeEdit }}
            className="absolute bottom-0 left-0 w-full max-w-sm z-30 p-2 sm:p-0 sm:left-8"
          >
            <TiltCard className="group rounded-lg bg-white p-3 shadow-soft">
              <div className="image-sheen relative h-72 overflow-hidden rounded-lg bg-smoke">
                <img
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  src="https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=900&q=82"
                  alt="Modern lounge chair beside a bright window"
                />
                <span className="absolute left-4 top-4 rounded-full bg-sun px-3 py-1.5 text-xs font-extrabold text-pine">New Drop</span>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <h3 className="font-extrabold">Lounge Edit</h3>
                  <p className="mt-1 text-sm text-ink/50">Fresh silhouettes for compact spaces</p>
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    aria-label="Previous collection"
                    className="grid h-10 w-10 place-items-center rounded-full bg-forest text-white transition hover:bg-pine"
                  >
                    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M19 12H5M12 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    aria-label="Next collection"
                    className="grid h-10 w-10 place-items-center rounded-full bg-sun text-pine transition hover:bg-saffron"
                  >
                    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </TiltCard>
          </motion.div>

          {/* Floating Geometric Icon (Very High Speed) */}
          <motion.div
            style={{ y: yFloatingIcon }}
            className="float-fast absolute left-8 top-20 z-40 grid h-16 w-16 place-items-center rounded-lg bg-sun text-pine shadow-card"
          >
            <svg aria-hidden="true" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M4 9.5 12 5l8 4.5-8 4.5-8-4.5Z" />
              <path d="M4 14.5 12 19l8-4.5" />
              <path d="M4 9.5v5M20 9.5v5M12 14v5" />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
