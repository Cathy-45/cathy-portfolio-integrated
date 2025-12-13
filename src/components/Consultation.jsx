import React, { useState } from "react";
import backgroundImage from "../../assets/background.jpg";
import { loadStripe } from "@stripe/stripe-js";

const Consultation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("");

    try {
      const res = await fetch('/api/consultations', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Submission failed");

      const paymentRes = await fetch('/api/payments', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          amount: 7500,
        }),
      });

      const paymentData = await paymentRes.json();
      if (!paymentRes.ok) throw new Error(paymentData.error || "Payment failed");

      window.location.href = paymentData.url;
      setStatus("Redirecting to secure payment…");

    } catch (err) {
      setStatus("Error: " + err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="min-h-screen relative overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center 20%",
        backgroundSize: "contain",
        backgroundRepeat: "repeat",
      }}
    >
      {/* EXACT SAME OVERLAY AS HOME */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70 md:from-black/60 md:via-black/40 md:to-black/80" />

      {/* FLOATING ORANGE PARTICLES — IDENTICAL TO HOME */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-[#da6d20] rounded-full opacity-30 animate-float"
            style={{
              top: `${10 + i * 12}%`,
              left: `${5 + i * 12}%`,
              animationDelay: `${i * 0.8}s`,
            }}
          />
        ))}
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-24">
        <div className="text-center max-w-2xl mx-auto w-full">
          {/* REAL WAVING HAND EMOJI */}
          <div className="text-6xl sm:text-8xl animate-wave mb-8 select-none">👋</div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8
                         text-transparent bg-clip-text 
                         bg-gradient-to-r from-[#da6d20] via-[#fdba74] to-[#da6d20]
                         bg-[length:200%_200%] animate-gradient-x">
            Book a Consultation
          </h1>

          <p className="text-xl sm:text-2xl text-gray-300 mb-12">
            1-hour deep-dive • Strategy • Architecture • Growth
          </p>

          {/* 3D GLASS FORM — UNCHANGED */}
          <form
            onSubmit={handleSubmit}
            className="backdrop-blur-xl bg-white/10 rounded-3xl p-10 border border-white/20
                       shadow-2xl shadow-black/70 max-w-xl mx-auto w-full"
          >
            <div className="grid grid-cols-1 gap-8">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
                className="px-6 py-4 rounded-2xl bg-white/10 border border-white/30 
                           backdrop-blur-md text-white placeholder-gray-400
                           focus:outline-none focus:border-[#da6d20] transition"
              />

              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="px-6 py-4 rounded-2xl bg-white/10 border border-white/30 
                           backdrop-blur-md text-white placeholder-gray-400
                           focus:outline-none focus:border-[#da6d20] transition"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone (optional)"
                value={formData.phone}
                onChange={handleChange}
                className="px-6 py-4 rounded-2xl bg-white/10 border border-white/30 
                           backdrop-blur-md text-white placeholder-gray-400
                           focus:outline-none focus:border-[#da6d20] transition"
              />

              <textarea
                name="message"
                placeholder="Tell me about your project or challenge…"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="px-6 py-4 rounded-2xl bg-white/10 border border-white/30 
                           backdrop-blur-md text-white placeholder-gray-400 resize-none
                           focus:outline-none focus:border-[#da6d20] transition"
              />

              <div className="text-center py-6 bg-gradient-to-r from-[#da6d20]/20 to-[#fd923c]/20 rounded-2xl border border-[#da6d20]/50">
                <p className="text-gray-400">Consultation Fee</p>
                <p className="text-4xl font-black text-[#fdba74]">$75</p>
                <p className="text-sm text-gray-500">One-time • 60 minutes • No hidden fees</p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-5 px-8 bg-gradient-to-r from-[#da6d20] to-[#fd923c]
                           hover:from-[#c75a10] hover:to-[#e07b2a] text-white font-bold text-xl
                           rounded-2xl shadow-2xl transform hover:scale-105 
                           transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Processing…" : "Pay $75 & Book Now"}
              </button>

              {status && (
                <p className={`text-center mt-6 text-lg ${status.includes("Error") ? "text-red-400" : "text-[#fdba74]"}`}>
                  {status}
                </p>
              )}
            </div>
          </form>

          <p className="mt-20 text-gray-400 text-lg">
            AgriConnect. Powered by Namzeforge. Made in Zambia, scaling Africa.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Consultation;