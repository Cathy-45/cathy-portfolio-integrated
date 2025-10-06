import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import backgroundImage from "../assets/background.jpg";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY); // Use env var

const Consultation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    amount: 50,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting form data:", formData);
    setIsSubmitting(true);
    setStatus(""); // Reset status before submission

    try {
      // Submit consultation
      const response = await fetch('/api/consultations', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      console.log("Response status:", response.status);
      const data = await response.json();
      console.log("Response data:", data);

      if (!response.ok) {
        throw new Error(data.error || "Unknown error");
      }

      setStatus("Thank you for your request! I will get back to you soon.");

      // Initiate payment
      const paymentResponse = await fetch('/api/payments', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          amount: formData.amount.toString(), // Ensure string
        }),
      });

      console.log("Payment response status:", paymentResponse.status);
      const paymentData = await paymentResponse.json();
      console.log("Payment response data:", paymentData);

      if (!paymentResponse.ok) {
        throw new Error(paymentData.error || "Payment initiation failed");
      }

      // Redirect to Stripe Checkout using the URL (new method)
      window.location.href = paymentData.url; // Use the URL from the response

    } catch (error) {
      console.error("Fetch error:", error);
      setStatus("Error: " + error.message);
    } finally {
      setIsSubmitting(false);
      // Reset form if you want after submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        amount: 50,  // Reset to the default amount
      });
    }
  };

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center bg-[#1a1a1a] text-white bg-contain bg-center p-4 sm:p-6 md:p-10"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(26, 26, 26, 0.96)",
        opacity: 0.7,
        backgroundPosition: "center top",
        backgroundSize: "contain",
      }}
    >
      <div className="text-4xl sm:text-6xl animate-wave mb-4 sm:mb-6">👋</div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-poppins font-bold mb-6 sm:mb-8 text-center text-[#fdba74]">
        Book a Consultation
      </h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg w-full bg-[#2a2a2a] rounded-lg p-4 sm:p-6 md:p-8 shadow-xl"
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm sm:text-base font-roboto text-[#9ca3af] mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 rounded bg-[#1a1a1a] text-white border border-[#fdba74] border-opacity-50 focus:outline-none focus:border-[#fdba74]"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm sm:text-base font-roboto text-[#9ca3af] mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 rounded bg-[#1a1a1a] text-white border border-[#fdba74] border-opacity-50 focus:outline-none focus:border-[#fdba74]"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="phone"
            className="block text-sm sm:text-base font-roboto text-[#9ca3af] mb-2"
          >
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 rounded bg-[#1a1a1a] text-white border border-[#fdba74] border-opacity-50 focus:outline-none focus:border-[#fdba74]"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-sm sm:text-base font-roboto text-[#9ca3af] mb-2"
          >
            How can I help you?
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full p-2 rounded bg-[#1a1a1a] text-white border border-[#fdba74] border-opacity-50 focus:outline-none focus:border-[#fdba74]"
          ></textarea>
        </div>
        <div className="mb-4">
          <label
            htmlFor="amount"
            className="block text-sm sm:text-base font-roboto text-[#9ca3af] mb-2"
          >
            Amount (USD)
          </label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            required
            min="1"
            className="w-full p-2 rounded bg-[#1a1a1a] text-white border border-[#fdba74] border-opacity-50 focus:outline-none focus:border-[#fdba74]"
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full text-sm sm:text-lg font-poppins text-white bg-[#fdba74] hover:bg-[#fb923c] px-4 sm:px-6 py-2 rounded-lg transition-colors disabled:opacity-50"
        >
          {isSubmitting ? "Processing..." : "Pay and Submit"}
        </button>
        {status && (
          <p className="mt-4 text-center text-sm sm:text-base text-[#fdba74]">
            {status}
          </p>
        )}
      </form>
    </section>
  );
};
export default Consultation;
