"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    room: "Living Room",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle, submitting, success, error
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "/api/contact";
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        setStatusMessage(data.message || "Thanks! Your style request has been received.");
        setFormData({
          name: "",
          email: "",
          room: "Living Room",
          message: "",
        });
      } else {
        setStatus("error");
        setStatusMessage(data.message || "An error occurred. Please try again.");
      }
    } catch (err) {
      console.error("Form submit error:", err);
      setStatus("error");
      setStatusMessage("Failed to reach the server. Please check that the backend is running.");
    }
  };

  return (
    <section id="contact" className="bg-porcelain py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8">
        {/* Left Side Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-clay">Contact</p>
          <h2 className="mt-4 max-w-xl text-3xl font-extrabold tracking-normal text-ink sm:text-4xl">
            Ready to furnish your next favorite room?
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-ink/60">
            Tell us what you are styling and we will send a concise set of product picks, layout ideas, and delivery options.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-ink/10 bg-white p-5">
              <p className="text-sm font-bold text-ink/50">Average response</p>
              <p className="mt-2 text-2xl font-extrabold text-forest">12 minutes</p>
            </div>
            <div className="rounded-lg border border-ink/10 bg-white p-5">
              <p className="text-sm font-bold text-ink/50">Design consults</p>
              <p className="mt-2 text-2xl font-extrabold text-forest">Free</p>
            </div>
          </div>
        </motion.div>

        {/* Right Side Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <form onSubmit={handleSubmit} className="rounded-lg bg-white p-5 shadow-soft sm:p-7">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-bold text-ink/70">
                Name
                <input
                  required
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Avery Stone"
                  disabled={status === "submitting"}
                  className="rounded-lg border border-ink/10 bg-smoke px-4 py-3 text-base font-medium text-ink outline-none transition placeholder:text-ink/40 focus:border-forest focus:bg-white disabled:opacity-50"
                />
              </label>
              <label className="grid gap-2 text-sm font-bold text-ink/70">
                Email
                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="avery@example.com"
                  disabled={status === "submitting"}
                  className="rounded-lg border border-ink/10 bg-smoke px-4 py-3 text-base font-medium text-ink outline-none transition placeholder:text-ink/40 focus:border-forest focus:bg-white disabled:opacity-50"
                />
              </label>
            </div>

            <label className="mt-5 grid gap-2 text-sm font-bold text-ink/70">
              Room Type
              <select
                name="room"
                value={formData.room}
                onChange={handleChange}
                disabled={status === "submitting"}
                className="rounded-lg border border-ink/10 bg-smoke px-4 py-3 text-base font-medium text-ink outline-none transition focus:border-forest focus:bg-white disabled:opacity-50"
              >
                <option value="Living Room">Living Room</option>
                <option value="Bedroom">Bedroom</option>
                <option value="Dining Room">Dining Room</option>
                <option value="Home Office">Home Office</option>
              </select>
            </label>

            <label className="mt-5 grid gap-2 text-sm font-bold text-ink/70">
              Project Notes
              <textarea
                required
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="Share your room size, style, timeline, or favorite pieces."
                disabled={status === "submitting"}
                className="resize-none rounded-lg border border-ink/10 bg-smoke px-4 py-3 text-base font-medium text-ink outline-none transition placeholder:text-ink/40 focus:border-forest focus:bg-white disabled:opacity-50"
              ></textarea>
            </label>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-forest px-6 py-3.5 text-sm font-extrabold text-white shadow-card transition duration-300 hover:-translate-y-0.5 hover:bg-pine sm:w-auto disabled:opacity-60 cursor-pointer"
            >
              {status === "submitting" ? (
                <>
                  Sending...
                  <Loader2 className="h-4 w-4 animate-spin" />
                </>
              ) : (
                <>
                  Request Picks
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>

            {/* Status Feedback Panels */}
            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 flex items-center gap-2 rounded-lg bg-forest/10 px-4 py-3 text-sm font-bold text-forest border border-forest/20"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0" />
                <span>{statusMessage}</span>
              </motion.div>
            )}

            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 flex items-center gap-2 rounded-lg bg-red-500/10 px-4 py-3 text-sm font-bold text-red-600 border border-red-500/20"
              >
                <AlertCircle className="h-5 w-5 shrink-0" />
                <span>{statusMessage}</span>
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
