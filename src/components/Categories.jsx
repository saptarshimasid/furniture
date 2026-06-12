"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, useInView, animate } from "framer-motion";
import TiltCard from "./TiltCard";
import { ArrowRight } from "lucide-react";

function Counter({ value, duration = 1.8 }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  // Soft spring motion for natural numeric count up
  const springValue = useSpring(motionValue, {
    stiffness: 40,
    damping: 12,
  });
  const rounded = useTransform(springValue, (latest) => Math.floor(latest).toLocaleString());
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      animate(motionValue, value, { duration, ease: "easeOut" });
    }
  }, [isInView, value, motionValue, duration]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export default function Categories() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section id="about" className="bg-porcelain py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-clay">Curated categories</p>
            <h2 className="mt-4 max-w-2xl text-3xl font-extrabold tracking-normal text-ink sm:text-4xl">
              Furniture collections that make rooms feel finished.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-8 text-ink/60">
            Explore the essentials by room and purpose, with polished imagery, practical item counts, and a cleaner path into the full collection.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-12 grid gap-5 lg:grid-cols-12"
        >
          {/* Main Card (Chairs) */}
          <motion.div variants={itemVariants} className="lg:col-span-7">
            <TiltCard className="group relative overflow-hidden rounded-lg bg-ink text-white shadow-soft">
              <div className="absolute left-6 top-6 z-10 flex items-center gap-2">
                <span className="rounded-full bg-white px-4 py-2 text-sm font-extrabold text-sun">1500+</span>
                <span className="text-sm font-bold text-white/70">Chair styles</span>
              </div>
              <div className="image-sheen relative h-[430px] overflow-hidden">
                <img
                  className="h-full w-full object-cover opacity-80 transition duration-700 group-hover:scale-105"
                  src="https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?auto=format&fit=crop&w=1400&q=82"
                  alt="Elegant gray chair with wooden legs"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent"></div>
              </div>
              <div className="absolute inset-x-0 bottom-0 z-10 p-6 sm:p-8">
                <div className="max-w-xl">
                  <h3 className="text-3xl font-extrabold sm:text-4xl">Chairs for every corner</h3>
                  <p className="mt-3 text-base leading-8 text-white/70">Dining, lounge, office, bar, and accent seating arranged for fast, confident browsing.</p>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-bold">Lounge</span>
                  <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-bold">Dining</span>
                  <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-bold">Office</span>
                  <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-bold">Bar Stool</span>
                </div>
              </div>
            </TiltCard>
          </motion.div>

          {/* Right Cards Column */}
          <div className="grid gap-5 lg:col-span-5">
            {/* Sofa */}
            <motion.div variants={itemVariants}>
              <TiltCard className="group grid overflow-hidden rounded-lg bg-smoke shadow-card sm:grid-cols-[0.92fr_1.08fr]">
                <div className="p-6">
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-white px-3 py-1 text-sm font-extrabold text-sun">750+</span>
                    <span className="text-sm font-bold text-ink/60">Items</span>
                  </div>
                  <h3 className="mt-5 text-3xl font-extrabold text-ink">Sofa</h3>
                  <p className="mt-3 text-sm leading-6 text-ink/60">Sectional, curved, compact, and lounge-ready silhouettes.</p>
                  <a href="#products" className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-forest transition duration-300 hover:text-pine">
                    Browse sofas
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
                <div className="image-sheen relative min-h-[220px] overflow-hidden bg-smoke">
                  <img
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=82"
                    alt="Soft sofa in a bright living space"
                  />
                </div>
              </TiltCard>
            </motion.div>

            {/* Lighting */}
            <motion.div variants={itemVariants}>
              <TiltCard className="group grid overflow-hidden rounded-lg bg-smoke shadow-card sm:grid-cols-[0.92fr_1.08fr]">
                <div className="p-6">
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-white px-3 py-1 text-sm font-extrabold text-sun">450+</span>
                    <span className="text-sm font-bold text-ink/60">Items</span>
                  </div>
                  <h3 className="mt-5 text-3xl font-extrabold text-ink">Lighting</h3>
                  <p className="mt-3 text-sm leading-6 text-ink/60">Table lights, pendants, floor lamps, and wall fixtures.</p>
                  <a href="#products" className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-forest transition duration-300 hover:text-pine">
                    Browse lighting
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
                <div className="image-sheen relative min-h-[220px] overflow-hidden bg-smoke">
                  <img
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    src="/images/lighting.jpg"
                    alt="Modern pendant light over a room"
                  />
                </div>
              </TiltCard>
            </motion.div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.dl
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="mt-5 grid gap-5 sm:grid-cols-3"
        >
          <div className="rounded-lg border border-ink/10 bg-white p-5 shadow-card">
            <dt className="text-sm font-bold text-ink/50">Curated items</dt>
            <dd className="mt-2 text-3xl font-extrabold text-forest">
              <Counter value={4500} />+
            </dd>
          </div>
          <div className="rounded-lg border border-ink/10 bg-white p-5 shadow-card">
            <dt className="text-sm font-bold text-ink/50">Room edits</dt>
            <dd className="mt-2 text-3xl font-extrabold text-forest">
              <Counter value={18} />+
            </dd>
          </div>
          <div className="rounded-lg border border-ink/10 bg-white p-5 shadow-card">
            <dt className="text-sm font-bold text-ink/50">Customer rating</dt>
            <dd className="mt-2 text-3xl font-extrabold text-forest">4.9</dd>
          </div>
        </motion.dl>
      </div>
    </section>
  );
}
