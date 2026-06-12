"use client";

import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Preloader({ onComplete }) {
  const [count, setCount] = useState(0);
  const containerRef = useRef(null);
  const counterRef = useRef(null);
  const logoRef = useRef(null);

  useGSAP(() => {
    // Disable scrolling while loading
    document.body.style.overflow = "hidden";

    const obj = { value: 0 };
    const tl = gsap.timeline({
      onComplete: () => {
        // Swipe out preloader screen
        gsap.timeline({
          onComplete: () => {
            document.body.style.overflow = "";
            if (onComplete) onComplete();
          }
        })
        .to(counterRef.current, { opacity: 0, y: -20, duration: 0.4 })
        .to(logoRef.current, { opacity: 0, y: -20, duration: 0.4 }, "-=0.2")
        .to(containerRef.current, {
          yPercent: -100,
          duration: 0.8,
          ease: "power4.inOut"
        });
      }
    });

    tl.to(obj, {
      value: 100,
      duration: 1.8,
      ease: "power1.out",
      onUpdate: () => {
        setCount(Math.floor(obj.value));
      }
    });

    return () => {
      tl.kill();
      document.body.style.overflow = "";
    };
  }, { dependencies: [onComplete], revertOnUpdate: true });

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-ink text-white"
    >
      <div className="flex flex-col items-center gap-6">
        {/* Animated Brand Logo Icon */}
        <div ref={logoRef} className="flex items-center gap-3">
          <span className="grid h-12 w-12 place-items-center rounded-lg bg-forest text-white shadow-card">
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 10h16v8H4z" />
              <path d="M7 10V6h10v4" />
              <path d="M6 18v2M18 18v2" />
            </svg>
          </span>
          <span className="text-xl font-extrabold tracking-normal">Nook & Timber</span>
        </div>

        {/* Counter */}
        <div ref={counterRef} className="flex flex-col items-center">
          <span className="text-6xl font-extrabold font-mono tracking-tight text-sun">
            {count}%
          </span>
          <span className="text-xs uppercase tracking-[0.2em] text-white/40 mt-2">
            Loading Collection
          </span>
        </div>
      </div>
    </div>
  );
}
