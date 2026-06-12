"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TiltCard from "./TiltCard";
import { Star } from "lucide-react";

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 5,
    hours: 12,
    minutes: 30,
    seconds: 25,
  });

  useEffect(() => {
    let totalSeconds = 5 * 86400 + 12 * 3600 + 30 * 60 + 25;

    const timer = setInterval(() => {
      if (totalSeconds <= 0) {
        clearInterval(timer);
        return;
      }
      totalSeconds -= 1;

      const d = Math.floor(totalSeconds / 86400);
      const h = Math.floor((totalSeconds % 86400) / 3600);
      const m = Math.floor((totalSeconds % 3600) / 60);
      const s = totalSeconds % 60;

      setTimeLeft({
        days: d,
        hours: h,
        minutes: m,
        seconds: s,
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute bottom-3 left-3 right-3 grid grid-cols-4 gap-1 rounded-lg bg-sun p-2 text-center text-pine shadow-card font-mono z-20">
      <div>
        <strong className="block text-sm font-extrabold">{String(timeLeft.days).padStart(2, "0")}</strong>
        <span className="text-[10px] font-bold uppercase tracking-wider">Days</span>
      </div>
      <div>
        <strong className="block text-sm font-extrabold">{String(timeLeft.hours).padStart(2, "0")}</strong>
        <span className="text-[10px] font-bold uppercase tracking-wider">Hours</span>
      </div>
      <div>
        <strong className="block text-sm font-extrabold">{String(timeLeft.minutes).padStart(2, "0")}</strong>
        <span className="text-[10px] font-bold uppercase tracking-wider">Mins</span>
      </div>
      <div>
        <strong className="block text-sm font-extrabold">{String(timeLeft.seconds).padStart(2, "0")}</strong>
        <span className="text-[10px] font-bold uppercase tracking-wider">Sec</span>
      </div>
    </div>
  );
}

export default function Products() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "All Products" },
    { id: "latest", label: "Latest Products" },
    { id: "best", label: "Best Sellers" },
    { id: "featured", label: "Featured Products" },
  ];

  const products = [
    {
      id: 1,
      categories: ["best", "featured"],
      title: "Wooden Sofa Chair",
      type: "Chair",
      price: 80.0,
      oldPrice: 160.0,
      rating: 4.9,
      discount: "50% off",
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=900&q=82",
      hasCountdown: true,
    },
    {
      id: 2,
      categories: ["latest", "best"],
      title: "Circular Sofa Chair",
      type: "Chair",
      price: 108.0,
      oldPrice: 120.0,
      rating: 5.0,
      discount: "10% off",
      image: "https://images.unsplash.com/photo-1617104551722-3b2d51366400?auto=format&fit=crop&w=900&q=82",
    },
    {
      id: 3,
      categories: ["latest", "featured"],
      title: "Wooden Nightstand",
      type: "Nightstand",
      price: 54.0,
      oldPrice: 60.0,
      rating: 4.8,
      discount: "10% off",
      image: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=900&q=82",
    },
    {
      id: 4,
      categories: ["best", "latest"],
      title: "Bean Bag Chair",
      type: "Chair",
      price: 72.0,
      oldPrice: 85.0,
      rating: 4.7,
      discount: "15% off",
      image: "https://images.unsplash.com/photo-1519947486511-46149fa0a254?auto=format&fit=crop&w=900&q=82",
    },
  ];

  const filteredProducts =
    activeFilter === "all"
      ? products
      : products.filter((p) => p.categories.includes(activeFilter));

  return (
    <section id="products" className="bg-porcelain py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 text-sm font-bold text-ink/60">
            <span className="h-px w-8 bg-sun"></span>
            Our Products
          </p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-normal text-ink sm:text-4xl">
            Our <span className="text-forest">Products</span> Collections
          </h2>
          <p className="mt-4 text-base leading-8 text-ink/60">
            Browse best-selling designs inspired by the clean product-grid rhythm of the reference store.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="mt-8 flex flex-wrap justify-center gap-3" role="tablist" aria-label="Product filters">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              type="button"
              className={`rounded-full border px-5 py-2.5 text-sm font-extrabold transition duration-300 ${
                activeFilter === filter.id
                  ? "bg-forest border-forest text-white shadow-soft"
                  : "bg-white border-ink/10 text-ink hover:border-forest hover:text-forest"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <motion.div
          layout
          className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, index) => (
              <motion.article
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                key={product.id}
                className="w-full"
              >
                <TiltCard className="group rounded-lg bg-white p-4 shadow-card h-full flex flex-col justify-between">
                  <div className="relative overflow-hidden rounded-lg bg-smoke">
                    {product.discount && (
                      <span className="absolute left-3 top-3 z-10 rounded-full bg-forest px-3 py-1 text-xs font-extrabold text-white">
                        {product.discount}
                      </span>
                    )}
                    <div className="image-sheen relative h-64 overflow-hidden">
                      <img
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                        src={product.image}
                        alt={product.title}
                        onError={(e) => {
                          // Clean SVG fallback
                          const label = encodeURIComponent(product.title);
                          e.target.src = `data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 900 640'%3E%3Crect width='900' height='640' fill='%23f3f5f1'/%3E%3Ctext x='450' y='320' text-anchor='middle' font-family='Arial' font-size='40' font-weight='bold' fill='%231B211F'%3E${label}%3C/text%3E%3C/svg%3E`;
                        }}
                      />
                    </div>
                    {product.hasCountdown && <CountdownTimer />}
                  </div>

                  <div className="mt-4 flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs font-semibold text-ink/40">{product.type}</p>
                      <h3 className="mt-1 font-extrabold text-ink">{product.title}</h3>
                      <p className="mt-2 text-lg font-extrabold text-ink">
                        ${product.price.toFixed(2)}{" "}
                        {product.oldPrice && (
                          <span className="text-sm font-semibold text-ink/30 line-through">
                            ${product.oldPrice.toFixed(2)}
                          </span>
                        )}
                      </p>
                    </div>
                    <div className="flex items-center gap-1 text-sm font-extrabold text-ink shrink-0">
                      <Star className="h-4 w-4 fill-sun text-sun" />
                      {product.rating.toFixed(1)}
                    </div>
                  </div>
                </TiltCard>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
