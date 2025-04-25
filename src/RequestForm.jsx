import React, { useState, useRef, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import {
  Globe, Wrench, BarChart3, Brain, Laptop2, MonitorCog,
  MessageCircleMore, SquareMousePointer, Check,
  User, Headset, Mail,ChevronDown,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  { value: "web-development", label: "Web Development", icon: <Globe className="w-4 h-4 text-[#00ab9b]" /> },
  { value: "repair-maintenance", label: "Repair & Maintenance", icon: <Wrench className="w-4 h-4 text-[#00ab9b]" /> },
  { value: "seo-optimization", label: "SEO Optimization", icon: <BarChart3 className="w-4 h-4 text-[#00ab9b]" /> },
  { value: "system-soft-dev", label: "Software Development", icon: <Laptop2 className="w-4 h-4 text-[#00ab9b]" /> },
  { value: "consulting", label: "Consulting", icon: <Brain className="w-4 h-4 text-[#00ab9b]" /> },
];

function CustomDropdown({ selected, setSelected }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    const close = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  return (
    <div className="relative" id="contact" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center p-4 bg-gray-50 border border-gray-300 rounded-lg text-left text-gray-800 focus:ring-2 focus:ring-[#00ab9b]"
      >
        <span className="flex items-center gap-2">
          {selected ? (
            <>
              {services.find((s) => s.value === selected)?.icon}
              {services.find((s) => s.value === selected)?.label}
            </>
          ) : (
            <>
              <SquareMousePointer className="w-4 h-4 text-[#00ab9b]" />
              Choose a service
            </>
          )}
        </span>
        <ChevronDown className="w-4 h-4 text-gray-500" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute z-10 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-md max-h-60 overflow-y-auto"
          >
            {services.map((service) => (
              <li
                key={service.value}
                onClick={() => {
                  setSelected(service.value);
                  setOpen(false);
                }}
                className={`flex items-center justify-between px-4 py-3 hover:bg-[#00ab9b]/10 cursor-pointer transition ${
                  selected === service.value ? "bg-[#00ab9b]/20 shadow-sm" : ""
                }`}
              >
                <div className="flex items-center gap-2">
                  {service.icon}
                  <span>{service.label}</span>
                </div>
                {selected === service.value && <Check className="w-4 h-4 text-[#00ab9b]" />}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

function RequestForm() {
  const [state, handleSubmit] = useForm("xqaqkpke");
  const [requestType, setRequestType] = useState("feedback");
  const [serviceRequest, setServiceRequest] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");

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
        {/* --- Request Type Toggle --- */}
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
                {type === "feedback" ? (
                  <MessageCircleMore className="w-4 h-4" />
                ) : (
                  <MonitorCog className="w-4 h-4" />
                )}
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Divider */}
        <hr className="my-4 border-gray-300" />

        {/* --- Input Fields --- */}
        {[["Full Name", fullName, setFullName, "fullName", User],
          ["Phone Number", phoneNumber, setPhoneNumber, "phoneNumber", Headset],
          ["Email", email, setEmail, "email", Mail]
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

        {/* Divider */}
        <hr className="my-4 border-gray-300" />

        {/* --- Conditional Fields --- */}
        {requestType === "services" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
            <CustomDropdown selected={selectedService} setSelected={setSelectedService} />
            <input type="hidden" name="selectedService" value={selectedService} />
            <ValidationError prefix="Service" field="selectedService" errors={state.errors} />
            <textarea
              name="message"
              rows="5"
              value={serviceRequest}
              onChange={(e) => setServiceRequest(e.target.value)}
              placeholder="Tell us about your project or service needs..."
              className="w-full p-4 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00ab9b]"
            />
          </motion.div>
        )}

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
