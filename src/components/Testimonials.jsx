"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Maya Chen",
      role: "Apartment Owner",
      avatar: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=120&q=80",
      content: "The product pages made it easy to compare finishes, and the delivery team placed everything exactly where it needed to go.",
    },
    {
      name: "Jordan Miles",
      role: "Creative Director",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=120&q=80",
      content: "The room bundle arrived cohesive without feeling generic. It brought a boutique studio feel into our new workspace.",
    },
    {
      name: "Lina Brooks",
      role: "Home Stylist",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80",
      content: "I saved weeks of showroom trips. The pieces look considered, the pricing is clear, and the support team was quick.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
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
    <section id="testimonials" className="bg-smoke py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-clay">Testimonials</p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-normal text-ink sm:text-4xl">
            Loved by modern home makers.
          </h2>
        </div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-12 grid gap-6 md:grid-cols-3"
        >
          {testimonials.map((t, idx) => (
            <motion.article
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="rounded-lg bg-white p-6 shadow-card flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 text-sun" aria-label="5 star rating">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-sun text-sun" />
                  ))}
                </div>
                <p className="mt-5 text-base leading-8 text-ink/70">"{t.content}"</p>
              </div>

              <div className="mt-6 flex items-center gap-3">
                <img
                  className="h-12 w-12 rounded-full object-cover"
                  src={t.avatar}
                  alt={`Portrait of ${t.name}`}
                  onError={(e) => {
                    e.target.src = `data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%23006C3A'/%3E%3Ctext x='50' y='55' text-anchor='middle' font-family='Arial' font-size='24' font-weight='bold' fill='white'%3E${t.name[0]}%3C/text%3E%3C/svg%3E`;
                  }}
                />
                <div>
                  <h3 className="font-extrabold text-ink">{t.name}</h3>
                  <p className="text-sm text-ink/50">{t.role}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
