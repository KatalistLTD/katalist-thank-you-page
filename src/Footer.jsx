import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-900 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        {/* Logo + Tagline */}
        <div className="space-y-4">
          <img
            src="/src/assets/logo.png"
            alt="Katalist Limited Logo"
            className="w-36 mx-auto md:mx-0"
          />
          <p className="text-lg font-medium text-[#00ab9b]">
            "Have Already Figured It Out"
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-[#00ab9b]">Explore</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li><a href="https://katalistlimited.vercel.app/#services" className="hover:text-[#00ab9b] transition">Services</a></li>
            <li><a href="https://katalistlimited.vercel.app/#about" className="hover:text-[#00ab9b] transition">About Us</a></li>
            <li><a href="/contact" className="hover:text-[#00ab9b] transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-[#00ab9b]">Get in Touch</h3>
          <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-gray-700">
            <Phone size={16} className="text-[#00ab9b]" />
            <span>+254 759 934 650</span>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-gray-700">
            <Mail size={16} className="text-[#00ab9b]" />
            <span>katalistlimited@gmail.com</span>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-gray-700">
            <MapPin size={16} className="text-[#00ab9b]" />
            <span>Nairobi, Kenya</span>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-100 py-6 text-center text-sm text-gray-500">
        © 2025 <span className="text-[#00ab9b] font-semibold">Katalist Limited</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
