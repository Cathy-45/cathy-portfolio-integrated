import React, { useState } from "react";
import backgroundImage from "../assets/background.jpg";

const Consultation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");
  const [selectedTier, setSelectedTier] = useState("premium"); // default to premium

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFreeSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("");

    try {
      const res = await fetch("/api/consultations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Submission failed");

      setStatus(
        "✅ Request received! I'll contact you within 24 hours to schedule your free call."
      );
      setFormData({ name: "", email: "", phone: "", message: "" }); // reset form
    } catch (err) {
      setStatus("Error: " + err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePaidSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("");

    try {
      const res = await fetch("/api/consultations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Submission failed");

      const paymentRes = await fetch("/api/payments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
        }),
      });

      const paymentData = await paymentRes.json();
      if (!paymentRes.ok)
        throw new Error(paymentData.error || "Payment failed");

      window.location.href = paymentData.url;
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
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70 md:from-black/60 md:via-black/40 md:to-black/80" />
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

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-24">
        <div className="text-center max-w-5xl mx-auto w-full">
          <div className="text-6xl sm:text-8xl animate-wave mb-8 select-none">
            👋
          </div>

          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8
                         text-transparent bg-clip-text 
                         bg-gradient-to-r from-[#da6d20] via-[#fdba74] to-[#da6d20]
                         bg-[length:200%_200%] animate-gradient-x"
          >
            Book Your Consultation
          </h1>

          <p className="text-xl sm:text-2xl text-gray-300 mb-16 max-w-3xl mx-auto">
            Choose the option that fits your needs today
          </p>

          {/* TIER SELECTION CARDS */}
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto mb-16">
            {/* FREE TIER */}
            <div
              className={`backdrop-blur-xl bg-white/10 rounded-3xl p-10 border-2 transition-all cursor-pointer
                ${
                  selectedTier === "free"
                    ? "border-[#da6d20] shadow-2xl shadow-[#da6d20]/30 scale-105"
                    : "border-white/20 hover:border-white/40"
                }`}
              onClick={() => setSelectedTier("free")}
            >
              <h3 className="text-3xl font-bold text-white mb-4">
                Discovery Call
              </h3>
              <p className="text-5xl font-black text-[#fdba74] mb-6">Free</p>
              <ul className="text-left text-gray-300 space-y-3 mb-8">
                <li>✓ 15–20 minute intro call</li>
                <li>✓ Discuss your vision & goals</li>
                <li>✓ Get clarity on next steps</li>
                <li>✓ No commitment</li>
              </ul>
              <div className="text-center">
                <span className="text-gray-400">
                  Perfect if you're exploring
                </span>
              </div>
            </div>

            {/* PREMIUM TIER - HERO */}
            <div
              className={`backdrop-blur-xl rounded-3xl p-10 border-2 transition-all cursor-pointer relative overflow-hidden
                ${
                  selectedTier === "premium"
                    ? "border-[#da6d20] shadow-2xl shadow-[#da6d20]/50 scale-105"
                    : "border-white/30 hover:border-white/50"
                }`}
              onClick={() => setSelectedTier("premium")}
            >
              <div className="absolute top-4 right-4 bg-[#da6d20] text-black px-4 py-2 rounded-full text-sm font-bold">
                Recommended
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Deep-Dive Consultation
              </h3>
              <p className="text-5xl font-black text-[#fdba74] mb-6">$75</p>
              <ul className="text-left text-gray-300 space-y-3 mb-8">
                <li>✓ Full 60-minute strategy session</li>
                <li>✓ Technical architecture review</li>
                <li>✓ Custom roadmap & proposal</li>
                <li>✓ Priority access & support</li>
              </ul>
              <div className="text-center">
                <span className="text-gray-400">Best for serious projects</span>
              </div>
            </div>
          </div>

          {/* SHARED FORM */}
          <form
            onSubmit={
              selectedTier === "free" ? handleFreeSubmit : handlePaidSubmit
            }
            className="backdrop-blur-xl bg-white/10 rounded-3xl p-10 border border-white/20
                       shadow-2xl shadow-black/70 max-w-2xl mx-auto w-full"
          >
            <div className="grid grid-cols-1 gap-8">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
                className="px-6 py-4 rounded-2xl bg-white/10 border border-white/30 backdrop-blur-md text-white placeholder-gray-400 focus:outline-none focus:border-[#da6d20] transition"
              />

              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="px-6 py-4 rounded-2xl bg-white/10 border border-white/30 backdrop-blur-md text-white placeholder-gray-400 focus:outline-none focus:border-[#da6d20] transition"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone (optional)"
                value={formData.phone}
                onChange={handleChange}
                className="px-6 py-4 rounded-2xl bg-white/10 border border-white/30 backdrop-blur-md text-white placeholder-gray-400 focus:outline-none focus:border-[#da6d20] transition"
              />

              <textarea
                name="message"
                placeholder="Tell me about your project or challenge…"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="px-6 py-4 rounded-2xl bg-white/10 border border-white/30 backdrop-blur-md text-white placeholder-gray-400 resize-none focus:outline-none focus:border-[#da6d20] transition"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-5 px-8 bg-gradient-to-r from-[#da6d20] to-[#fd923c]
                           hover:from-[#c75a10] hover:to-[#e07b2a] text-white font-bold text-xl
                           rounded-2xl shadow-2xl transform hover:scale-105 
                           transition-all duration-300 disabled:opacity-70"
              >
                {isSubmitting
                  ? "Processing…"
                  : selectedTier === "free"
                  ? "Request Free Call"
                  : "Pay $75 & Book Premium Session"}
              </button>

              {status && (
                <p
                  className={`text-center mt-6 text-lg ${
                    status.includes("Error") || status.includes("failed")
                      ? "text-red-400"
                      : "text-[#fdba74]"
                  }`}
                >
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
