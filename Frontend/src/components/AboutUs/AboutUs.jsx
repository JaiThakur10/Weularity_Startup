import React from "react";
import { motion } from "framer-motion";

function AboutUs() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center bg-black text-white py-16 px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl"
      >
        <h2 className="text-4xl font-bold drop-shadow-lg">
          Your Digital Growth Partner
        </h2>
        <p className="text-lg text-gray-300 mt-4 leading-relaxed">
          At Weularity, we’re a team of passionate designers, skilled
          developers, and strategic marketers committed to helping businesses
          thrive online. From concept to execution, we craft solutions that
          stand out in the digital landscape.
        </p>
      </motion.div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl px-4">
        {["Proven Track Record", "Tailor-Made Solutions", "Dedicated Team"].map(
          (title, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-indigo-500/20 to-purple-500/10 rounded-lg p-6 shadow-2xl transform hover:scale-105 transition-transform duration-500"
            >
              <h3 className="font-semibold text-xl text-white drop-shadow-md">
                {title}
              </h3>
              <p className="text-gray-300 mt-2 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit, ad.
              </p>
            </motion.div>
          )
        )}
      </div>
    </section>
  );
}

export default AboutUs;
