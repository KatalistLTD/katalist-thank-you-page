import React, { useState, useRef, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import {
  Globe, Wrench, BarChart3, Brain, Laptop2, MonitorCog,
  MessageCircleMore, SquareMousePointer, Check,
  User, Headset, Mail, ChevronDown,
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  { value: "web-development", label: "Web Development", icon: <Globe className="w-4 h-4 text-[#00ab9b]" /> },
  { value: "repair-maintenance", label: "Repair & Maintenance", icon: <Wrench className="w-4 h-4 text-[#00ab9b]" /> },
  { value: "seo-optimization", label: "SEO Optimization", icon: <BarChart3 className="w-4 h-4 text-[#00ab9b]" /> },
  { value: "system-soft-dev", label: "Software Development", icon: <Laptop2 className="w-4 h-4 text-[#00ab9b]" /> },
  { value: "consulting", label: "Consulting", icon: <Brain className="w-4 h-4 text-[#00ab9b]" /> },
];

function RequestForm() {
  const [state, handleSubmit] = useForm("xqaqkpke");
  const [requestType, setRequestType] = useState("feedback");
  const [serviceRequest, setServiceRequest] = useState("");
  const [selectedServices, setSelectedServices] = useState([]);
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleServiceChange = (e) => {
    const { value, checked } = e.target;
    setSelectedServices((prev) =>
      checked ? [...prev, value] : prev.filter((s) => s !== value)
    );
  };

  if (state.succeeded) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-xl mx-auto mt-10 p-8 text-center text-green-700 bg-green-100 rounded-xl shadow-md"
      >
        <h3 className="text-xl font-semibold">Thank you!</h3>
        <p>Your request has been submitted successfully.</p>
      </motion.div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto bg-white p-10 shadow-2xl rounded-2xl border border-gray-100">
      <h2 className="text-3xl font-bold text-[#00ab9b] mb-8 text-center">
        Request Our Services
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Request Type Toggle */}
        <div>
          <label className="block text-lg font-semibold text-gray-700 mb-2">Request Type</label>
          <div className="flex items-center gap-4">
            {["feedback", "services"].map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setRequestType(type)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition ${
                  requestType === type
                    ? "bg-[#00ab9b] text-white shadow-md"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                {type === "feedback" ? <MessageCircleMore className="w-4 h-4" /> : <MonitorCog className="w-4 h-4" />}
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <hr className="my-4 border-gray-300" />

        {/* Input Fields */}
        {[
          ["Full Name", fullName, setFullName, "fullName", User],
          ["Phone Number", phoneNumber, setPhoneNumber, "phoneNumber", Headset],
          ["Email", email, setEmail, "email", Mail],
        ].map(([label, value, setter, name, Icon]) => (
          <div key={name} className="relative">
            <label
              htmlFor={name}
              className="absolute left-4 -top-3 text-[#00ab9b] bg-white px-1 text-sm font-semibold flex items-center gap-2"
            >
              <Icon className="w-4 h-4" />
              {label}
            </label>
            <input
              id={name}
              name={name}
              type={name === "email" ? "email" : "text"}
              value={value}
              onChange={(e) => setter(e.target.value)}
              required
              className="w-full p-4 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00ab9b] pt-6"
              placeholder={`Enter your ${label.toLowerCase()}`}
            />
            <ValidationError prefix={label} field={name} errors={state.errors} />
          </div>
        ))}

        <hr className="my-4 border-gray-300" />

        {/* Services Section */}
        {requestType === "services" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
            <label className="block text-lg font-semibold text-gray-700 mb-2">
              Select Services
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((service) => (
                <label
                  key={service.value}
                  htmlFor={service.value}
                  className={`flex items-center gap-3 border border-gray-200 rounded-lg px-4 py-3 cursor-pointer transition hover:shadow-sm ${
                    selectedServices.includes(service.value)
                      ? "bg-[#e6f9f7] border-[#00ab9b]"
                      : "bg-white"
                  }`}
                >
                  <input
                    type="checkbox"
                    id={service.value}
                    name="services"
                    value={service.value}
                    checked={selectedServices.includes(service.value)}
                    onChange={handleServiceChange}
                    className="h-4 w-4 text-[#00ab9b] accent-[#00ab9b] focus:ring-0"
                  />
                  <div className="flex items-center gap-2 text-sm text-gray-800">
                    {service.icon}
                    {service.label}
                  </div>
                </label>
              ))}
            </div>

            <textarea
              name="message"
              rows="5"
              value={serviceRequest}
              onChange={(e) => setServiceRequest(e.target.value)}
              placeholder="Tell us about your project or service needs..."
              className="w-full p-4 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00ab9b]"
            />

            <ValidationError prefix="Services" field="services" errors={state.errors} />
          </motion.div>
        )}

        {/* Feedback Textarea */}
        {requestType === "feedback" && (
          <motion.textarea
            name="feedback"
            rows="5"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Please provide your feedback..."
            className="w-full p-4 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00ab9b]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />
        )}

        <button
          type="submit"
          disabled={state.submitting}
          className="w-full py-3 bg-[#00ab9b] text-white font-semibold rounded-lg hover:bg-[#008a72] transition"
        >
          {state.submitting ? "Submitting..." : "Submit Request"}
        </button>
      </form>
    </div>
  );
}

export default RequestForm;
