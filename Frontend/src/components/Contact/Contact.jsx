import React from "react";
import { Button } from "../ui/button";

function Contact() {
  return (
    <section className=" text-white text-center py-16 px-6">
      <h2 className="text-3xl font-bold">Ready to Build Something Amazing?</h2>
      <p className="mt-4">
        We’re here to help you succeed online. Share your vision, and we’ll make
        it a reality.
      </p>
      <div className="mt-6 space-x-4">
        <Button variant="default" className="bg-white text-blue-500">
          Get in Touch
        </Button>
        <Button variant="outline" className="border-black text-black">
          Schedule a Free Consultation
        </Button>
      </div>
      <form className="mt-8 max-w-lg mx-auto space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full p-3 rounded-md  bg-black text-white"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded-md bg-black text-white"
        />
        <textarea
          placeholder="Project Details"
          className="w-full p-3 rounded-md bg-black text-white"
          rows="4"
        ></textarea>
        <Button
          type="submit"
          variant="default"
          className="bg-blue-600 w-full text-white"
        >
          Submit
        </Button>
      </form>
    </section>
  );
}

export default Contact;
