import { FolderCode, MonitorCheck, Laptop, Wrench } from "lucide-react";

const services = [
  {
    icon: <Laptop size={36} />,
    title: "Website Development",
    desc: "We build fast, responsive, and modern websites tailored to your business needs.",
    details: "We specialize in modern stacks like React, Next.js, Node.js, and integrate SEO, analytics, and mobile-first design. Ideal for startups, personal brands, and SMEs.",
  },
  {
    icon: <Wrench size={36} />,
    title: "Repair & Maintenance",
    desc: "Affordable and reliable repair for computers, networking, and IT infrastructure.",
    details: "We fix hardware, troubleshoot software issues, and offer networking and cabling support for home and business use.",
  },
  {
    icon: <MonitorCheck size={36} />,
    title: "SEO Optimization",
    desc: "Boost your online presence with expert SEO strategies that bring results.",
    details: "Includes on-page SEO, keyword research, content audits, backlink building, and Google Search Console integration.",
  },
  {
    icon: <FolderCode size={36} />,
    title: "System & Software Dev",
    desc: "Custom software, ERPs, and solutions for businesses, schools, and organizations.",
    details: "Custom-built web and desktop applications, database solutions, inventory, school systems, and CRMs.",
  },
];

export default services;
