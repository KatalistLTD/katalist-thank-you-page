import React, { useState } from "react";
import ServicesSection from "./ServicesSection";
import Footer from "./Footer";

const ThankYouPage = () => {
  const [feedback, setFeedback] = useState("");
  const [email, setEmail] = useState("");
  const [serviceRequest, setServiceRequest] = useState("");

  const handleFeedbackChange = (e) => setFeedback(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleServiceRequestChange = (e) => setServiceRequest(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Feedback submitted:", { feedback, email });
    console.log("Service Request submitted:", serviceRequest);
  };

  return (
    <div className="min-h-screen px-4 py-10 text-gray-900 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#00ab9b]">Thank You for Your Purchase! 🎉</h1>
        <p className="mb-8 text-lg text-gray-600">
          Your connection has been activated successfully. You’re ready to enjoy blazing-fast internet with Dororosa WiFi powered by <span className="font-semibold text-black">Katalist Limited</span>.
        </p>
        <p className="mb-12 text-sm text-gray-500">Have questions or need assistance? Reach out to us below!</p>

        {/* Contact Info */}
        <div className="grid gap-8 mb-12 md:grid-cols-2">
          <div className="p-8 bg-[#f7f7f7] shadow-xl rounded-xl">
            <h2 className="text-2xl font-semibold text-[#00ab9b] mb-4">📞 Contact Us</h2>
            <p className="mb-2 text-lg text-gray-700">WhatsApp or Call: <span className="font-bold text-black">+254759934650</span></p>
            <p className="text-lg text-gray-700">Email: <span className="font-bold text-black">katalistlimited@gmail.com</span></p>
          </div>

          {/* Feedback Form */}
          <div className="p-8 bg-[#f7f7f7] shadow-xl rounded-xl">
            <h2 className="text-2xl font-semibold text-[#00ab9b] mb-4">💬 We'd Love Your Feedback</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Your email (optional)"
                value={email}
                onChange={handleEmailChange}
                className="w-full mb-4 p-4 rounded-lg bg-white text-gray-800 placeholder-gray-400 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00ab9b]"
              />
              <textarea
                rows="4"
                placeholder="Your feedback..."
                value={feedback}
                onChange={handleFeedbackChange}
                className="w-full mb-4 p-4 rounded-lg bg-white text-gray-800 placeholder-gray-400 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00ab9b]"
              />
              <button
                type="submit"
                className="w-full py-3 bg-[#00ab9b] rounded-lg text-white font-semibold hover:bg-[#009e8e] transition duration-300"
              >
                Submit Feedback
              </button>
            </form>
          </div>
        </div>

        {/* Services Section */}
        <ServicesSection />

        {/* Service Request Form */}
        <div className="max-w-2xl p-8 mx-auto mt-20 bg-[#f7f7f7] shadow-xl rounded-xl">
          <h2 className="text-2xl font-semibold text-[#00ab9b] mb-6 text-center">🛠️ Request Our Services</h2>
          <form onSubmit={handleSubmit}>
            <textarea
              rows="5"
              value={serviceRequest}
              onChange={handleServiceRequestChange}
              placeholder="Tell us about your project or service needs..."
              className="w-full p-4 mb-4 bg-white text-gray-800 placeholder-gray-400 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00ab9b]"
            />
            <button
              type="submit"
              className="w-full py-3 bg-[#00ab9b] rounded-lg text-white font-semibold hover:bg-[#009e8e] transition duration-300"
            >
              Submit Service Request
            </button>
          </form>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ThankYouPage;
