import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import AboutUs from "../AboutUs/AboutUs";
import Services from "../Services/Services";
import Portfolio from "../Portfolio/Portfolio";
import Testimonial from "../Testimonial/Testimonial";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

export default function Home() {
  return (
    <div className="font-sans scroll-smooth px-8 bg-black ">
      {/* hero */}

      <div className="h-[630px] w-full flex items-center relative overflow-hidden bg-black">
        {/* Background Decorative Elements */}
        {/* Layered Radial Gradient */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-[120%] h-[120%] bg-gradient-radial from-indigo-500/20 via-purple-500/10 to-transparent blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-[80%] h-[80%] bg-gradient-radial from-blue-500/10 via-transparent to-transparent blur-3xl"></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white bg-opacity-40 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 5 + Math.random() * 3,
                repeat: Infinity,
              }}
            ></motion.div>
          ))}
        </div>

        {/* Left Section */}
        <motion.div
          className="flex flex-col h-[400px] w-1/2 relative z-10"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="text-center py-3 h-[30%] w-[70%] ml-24 text-white text-5xl font-extrabold drop-shadow-lg"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            Crafting Stunning Websites & Digital Experiences
          </motion.div>
          <motion.div
            className="w-[95%] px-4 ml-4 text-white text-lg mt-14 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            We design, build, and grow websites that captivate your audience and
            drive results. From sleek designs to powerful functionality, we
            deliver tailor-made solutions for your business.
          </motion.div>
          <motion.div
            className="w-full flex items-center justify-center mt-8"
            whileHover={{ scale: 1.1 }}
          >
            <button className="bg-white text-purple-600 font-semibold py-3 px-8 rounded-lg shadow-xl hover:bg-gray-100 transition-all duration-300">
              Get Started
            </button>
          </motion.div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="h-[400px] w-1/2 flex items-center justify-center relative z-10"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src="./img/hero10.png"
            alt="Hero Section Graphic"
            className="rounded-lg shadow-2xl mb-8 transform hover:scale-110 transition-transform duration-500"
          />
        </motion.div>
      </div>

      {/* aboutus */}
      <AboutUs />

      {/* Services */}
      <Services />

      {/* portfolio */}
      <Portfolio />

      {/* testimonial */}
      <Testimonial />

      {/* Contact */}
      <Contact />

      {/* footer */}
      <Footer />
    </div>
  );
}
