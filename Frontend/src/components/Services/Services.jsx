import React from "react";
import { motion } from "framer-motion";
import {
  MonitorPlay,
  Target,
  Settings,
  Brush,
  Code,
  Rocket,
} from "lucide-react";

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col items-center relative">
      {/* Background Gradient */}
      <motion.div
        className="absolute inset-0 z-0 bg-black animate-gradient"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      />

      {/* Header Section */}
      <motion.div
        className="relative z-10 w-full h-[270px] flex flex-col items-center justify-center text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-white text-[4.5rem] font-extrabold uppercase">
          Our Services
        </h1>
        <p className="text-lg text-white max-w-[700px] mt-4">
          Dive into our expertise in user experience optimization, digital
          strategy, and cutting-edge technology.
        </p>
        <div className="w-12 h-[4px] bg-black mt-4" />
      </motion.div>

      {/* Services Container */}
      <div className="relative  z-10 h-[850px] w-full grid grid-cols-3 gap-8 px-12 py-12">
        {[
          {
            id: 1,
            title: "Web Design",
            description:
              "From corporate sites to e-commerce platforms, we create stunning websites that captivate and convert.",
            icon: MonitorPlay,
          },
          {
            id: 2,
            title: "SEO",
            description:
              "We optimize your website to rank higher, driving more organic traffic and attracting qualified leads.",
            icon: Target,
          },
          {
            id: 3,
            title: "UX/UI Design",
            description:
              "From wireframing to prototyping, we focus on user-centric design to elevate your digital presence.",
            icon: Settings,
          },
          {
            id: 4,
            title: "Graphic Design",
            description:
              "We bring your brand to life with visually stunning and creative graphic designs tailored to your audience.",
            icon: Brush,
          },
          {
            id: 5,
            title: "Custom Development",
            description:
              "Our expert developers create custom solutions to meet your unique business needs and challenges.",
            icon: Code,
          },
          {
            id: 6,
            title: "Digital Marketing",
            description:
              "Expand your reach with targeted marketing strategies, from social media campaigns to PPC ads.",
            icon: Rocket,
          },
        ].map((service, index) => (
          <motion.div
            key={service.id}
            className="relative bg-white w-[400px] h-[300px] rounded-2xl shadow-lg border-2 border-black flex flex-col items-center justify-start p-6 overflow-hidden transition-transform duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.05,
              rotate: 1,
            }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
          >
            {/* Hover Effect Overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-500 z-0 opacity-0 rounded-2xl transition-opacity duration-300"
              whileHover={{ opacity: 0.9 }}
            />

            {/* Icon */}
            <motion.div
              className="z-10 bg-[#101010] w-16 h-16 rounded-full flex items-center justify-center text-white mb-6"
              whileHover={{
                backgroundColor: "#FFB100",
                transition: { duration: 0.3 },
              }}
            >
              <service.icon className="w-8 h-8" />
            </motion.div>

            {/* Title */}
            <motion.h2
              className="z-10 text-2xl font-bold text-[#101010] text-center mb-4"
              whileHover={{
                color: "#FFF",
                transition: { duration: 0.3 },
              }}
            >
              {service.title}
            </motion.h2>

            {/* Description */}
            <motion.p
              className="z-10 text-gray-800 text-center"
              whileHover={{
                color: "#120E24",
                transition: { duration: 0.3 },
              }}
            >
              {service.description}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
