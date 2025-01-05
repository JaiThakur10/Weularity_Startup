import React from "react";

function Footer() {
  return (
    <footer className="bg-black text-white text-center py-8 px-6">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-lg font-semibold">Weularity</h3>
        <p className="text-gray-400 mt-2">
          Building stunning websites and driving digital success.
        </p>
        <div className="mt-4 space-x-4">
          <a href="#" className="text-blue-400 hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="text-blue-400 hover:underline">
            Terms of Service
          </a>
          <a href="#" className="text-blue-400 hover:underline">
            Contact Us
          </a>
        </div>
        <p className="text-gray-500 mt-6">
          &copy; {new Date().getFullYear()} Weularity. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
