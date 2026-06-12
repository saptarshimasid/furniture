"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star, Grid, Truck, Feather } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Star className="h-6 w-6" />,
      title: "Design Match",
      description: "Room-by-room styling picks that match your palette, floor plan, and daily rhythm.",
    },
    {
      icon: <Grid className="h-6 w-6" />,
      title: "Modular Sets",
      description: "Expandable sofas, nesting tables, and storage that adapts as rooms change.",
    },
    {
      icon: <Truck className="h-6 w-6" />,
      title: "White-Glove Setup",
      description: "Scheduled delivery, assembly, placement, and package removal in one visit.",
    },
    {
      icon: <Feather className="h-6 w-6" />,
      title: "Better Materials",
      description: "Durable woods, recycled fill, low-VOC finishes, and traceable textile options.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="features" className="overflow-hidden bg-ink py-20 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-sun">Services</p>
            <h2 className="mt-4 max-w-2xl text-3xl font-extrabold tracking-normal sm:text-4xl">
              A full furniture experience, from selection to setup.
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-extrabold text-pine transition duration-300 hover:-translate-y-0.5 hover:bg-sun"
          >
            Talk to a stylist
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>

        {/* Services Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service, idx) => (
            <motion.article
              key={idx}
              variants={itemVariants}
              className="rounded-lg border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:bg-white/10"
            >
              <span className="grid h-12 w-12 place-items-center rounded-lg bg-sun text-pine">
                {service.icon}
              </span>
              <h3 className="mt-5 text-xl font-extrabold">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/60">{service.description}</p>
            </motion.article>
          ))}
        </motion.div>

        {/* Infinite Running Text Marquee */}
        <div className="mt-14 overflow-hidden border-y border-white/10 py-4">
          <div className="marquee-track flex w-max gap-10 text-sm font-extrabold uppercase tracking-[0.18em] text-white/50">
            <span>Living Room</span><span className="text-sun">Chairs</span><span>Sofas</span><span>Lighting</span><span className="text-sun">Storage</span><span>Bedroom</span><span>Dining</span><span className="text-sun">Home Office</span>
            <span>Living Room</span><span className="text-sun">Chairs</span><span>Sofas</span><span>Lighting</span><span className="text-sun">Storage</span><span>Bedroom</span><span>Dining</span><span className="text-sun">Home Office</span>
          </div>
        </div>
      </div>
    </section>
  );
}
