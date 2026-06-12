"use client";

import { motion } from "framer-motion";

export default function Gallery() {
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
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="gallery" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-end"
        >
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-clay">Showcase</p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-normal text-ink sm:text-4xl">
              Room ideas with a polished catalog feel.
            </h2>
          </div>
          <p className="text-base leading-8 text-ink/60">
            Layered lifestyle photography, product-focused frames, and warm accents make the one-page experience feel premium without becoming crowded.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-12 grid gap-5 lg:grid-cols-12"
        >
          {/* Main Large Image */}
          <motion.article
            variants={itemVariants}
            className="reveal group relative min-h-[410px] overflow-hidden rounded-lg bg-smoke shadow-card lg:col-span-7"
          >
            <img
              className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
              src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=82"
              alt="Modern living room with natural light"
              onError={(e) => {
                e.target.src = "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 900 640'%3E%3Crect width='900' height='640' fill='%23f3f5f1'/%3E%3C/svg%3E";
              }}
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-6 text-white z-10">
              <p className="text-sm font-extrabold text-sun">Living Room</p>
              <h3 className="mt-2 text-2xl font-extrabold">Layered neutrals with sculptural seating</h3>
            </div>
          </motion.article>

          {/* Right Column Stack */}
          <div className="grid gap-5 lg:col-span-5">
            {/* Top Right */}
            <motion.article
              variants={itemVariants}
              className="reveal group relative min-h-[195px] overflow-hidden rounded-lg bg-smoke shadow-card"
            >
              <img
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1000&q=82"
                alt="Bedroom with soft modern decor"
                onError={(e) => {
                  e.target.src = "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 900 640'%3E%3Crect width='900' height='640' fill='%23f3f5f1'/%3E%3C/svg%3E";
                }}
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/75 to-transparent p-5 text-white z-10">
                <p className="text-sm font-extrabold text-sun">Bedroom</p>
                <h3 className="mt-1 text-xl font-extrabold">Soft texture, quiet storage</h3>
              </div>
            </motion.article>

            {/* Bottom Right */}
            <motion.article
              variants={itemVariants}
              className="reveal group relative min-h-[195px] overflow-hidden rounded-lg bg-smoke shadow-card"
            >
              <img
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                src="https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&w=1000&q=82"
                alt="Dining room with modern lights"
                onError={(e) => {
                  e.target.src = "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 900 640'%3E%3Crect width='900' height='640' fill='%23f3f5f1'/%3E%3C/svg%3E";
                }}
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/75 to-transparent p-5 text-white z-10">
                <p className="text-sm font-extrabold text-sun">Dining</p>
                <h3 className="mt-1 text-xl font-extrabold">Warm wood, precise lighting</h3>
              </div>
            </motion.article>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
