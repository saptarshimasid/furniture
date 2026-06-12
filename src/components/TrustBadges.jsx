"use client";

import { motion } from "framer-motion";
import { Truck, CreditCard, Headphones } from "lucide-react";

export default function TrustBadges() {
  const badges = [
    {
      icon: <Truck className="h-7 w-7" />,
      title: "Free Shipping",
      description: "Free doorstep delivery for orders above $180.",
    },
    {
      icon: <CreditCard className="h-7 w-7" />,
      title: "Flexible Payment",
      description: "Multiple secure payment options and split plans.",
    },
    {
      icon: <Headphones className="h-7 w-7" />,
      title: "24 x 7 Support",
      description: "Real people online all day, every day.",
    },
  ];

  return (
    <section className="border-b border-ink/10 bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-3 lg:px-8">
        {badges.map((badge, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4, scale: 1.01 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
            className="flex items-start gap-4 p-4 rounded-xl hover:bg-smoke/30 transition-colors duration-300"
          >
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-sun/20 text-forest">
              {badge.icon}
            </span>
            <div>
              <h2 className="font-extrabold text-ink">{badge.title}</h2>
              <p className="mt-1 text-sm leading-6 text-ink/50">{badge.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
