import React from "react";
import { motion } from "framer-motion";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

function Testimonial() {
  const testimonials = [
    {
      name: "Alex Johnson",
      role: "CEO, TechCorp",
      avatar: "https://via.placeholder.com/150",
      review:
        "Working with this team has been an absolute pleasure. Their dedication to excellence is unmatched!",
      rating: 5,
    },
    {
      name: "Sophia Lee",
      role: "Founder, Design Studio",
      avatar: "https://via.placeholder.com/150",
      review:
        "The creativity and professionalism they brought to our project were phenomenal. Highly recommend!",
      rating: 4.5,
    },
    {
      name: "Michael Brown",
      role: "CTO, StartupX",
      avatar: "https://via.placeholder.com/150",
      review:
        "Their ability to transform ideas into reality is remarkable. Their team exceeded our expectations!",
      rating: 5,
    },
    {
      name: "Emily White",
      role: "Product Manager, Innovate Inc.",
      avatar: "https://via.placeholder.com/150",
      review:
        "Exceptional service and results. They understood our goals and delivered beyond what we imagined!",
      rating: 4.8,
    },
  ];

  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="bg-black text-white py-16 px-6 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-4xl font-extrabold drop-shadow-md">
          What Our Clients Say
        </h2>
        <p className="text-gray-300 mt-4 text-lg">
          Hear from our clients who’ve experienced our dedication and expertise.
        </p>
      </motion.div>

      <div className="mt-12 relative overflow-hidden">
        <motion.div
          className="flex gap-6"
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            duration: 50, // Slower speed
            ease: "linear",
          }}
          style={{
            display: "inline-flex", // Ensure horizontal alignment
          }}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-indigo-800/40 to-purple-700/20 p-8 rounded-xl shadow-lg flex-shrink-0 w-[320px]"
            >
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage
                    src={testimonial.avatar}
                    alt={testimonial.name}
                  />
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-300">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300 mt-6 italic">
                &ldquo;{testimonial.review}&rdquo;
              </p>
              <div className="flex items-center mt-4">
                {Array.from({ length: Math.floor(testimonial.rating) }).map(
                  (_, starIndex) => (
                    <Star
                      key={starIndex}
                      className="text-yellow-400 w-5 h-5"
                      fill="currentColor"
                    />
                  )
                )}
                {testimonial.rating % 1 ? (
                  <Star className="text-yellow-400 w-5 h-5" />
                ) : null}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Testimonial;
