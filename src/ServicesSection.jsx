import { FolderCode, MonitorCheck, Laptop, Wrench } from "lucide-react";

const services = [
  {
    icon: <Laptop size={36} />,
    title: "Website Development",
    desc: "We build fast, responsive, and modern websites tailored to your business needs.",
  },
  {
    icon: <Wrench size={36} />,
    title: "Repair & Maintenance",
    desc: "Affordable and reliable repair for computers, networking, and IT infrastructure.",
  },
  {
    icon: <MonitorCheck size={36} />,
    title: "SEO Optimization",
    desc: "Boost your online presence with expert SEO strategies that bring results.",
  },
  {
    icon: <FolderCode size={36} />,
    title: "System & Software Dev",
    desc: "Custom software, ERPs, and solutions for businesses, schools, and organizations.",
  },
];

const ServicesSection = () => {
  return (
    <section className="w-full px-6 py-20 text-gray-900 bg-white">
      <div className="mx-auto text-center max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#00ab9b]">Our Services</h2>
        <p className="max-w-3xl mx-auto mb-12 text-lg text-gray-600">
          Explore a wide range of IT services crafted to grow your business and solve technical challenges with ease.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 transition duration-300 transform bg-white shadow-lg rounded-2xl hover:shadow-xl hover:-translate-y-1"
            >
              <div className="mb-4 flex items-center justify-center w-16 h-16 rounded-full bg-[#00ab9b]/10 text-[#00ab9b] mx-auto">
                {service.icon}
              </div>
              <h3 className="mb-2 text-xl font-semibold text-[#00ab9b]">{service.title}</h3>
              <p className="text-sm text-gray-600">{service.desc}</p>
              <a href="https://katalistlimited.vercel.app/#services">
                <button className="mt-4 text-[#00ab9b] font-medium hover:underline">
                  View More →
                </button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
