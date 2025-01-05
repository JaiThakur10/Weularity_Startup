import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const GetStarted = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    //phoneNumber: "",
    services: [],
    websiteNeeds: "",
    newOrRebuild: "",
    budget: "",
  });

  const [verified, setVerified] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked
          ? [...prevData[name], value] // Add value to array
          : prevData[name].filter((item) => item !== value), // Remove value from array
      }));
    } else if (type === "radio") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value, // Update the selected radio value
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value, // Update other input fields
      }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform validation (example)
    if (!formData.name || !formData.email) {
      alert("Please fill in all required fields.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        alert("Form submitted successfully!");
        console.log("Response from server:", result);
      } else {
        // Handle server errors (e.g., 500, 400, etc.)
        const errorData = await response.json(); // Attempt to parse the error response
        alert(
          `Failed to submit the form: ${errorData.message || "Unknown error"}`
        );
        console.error("Server Error:", errorData);
      }
    } catch (error) {
      // Handle network errors (e.g., server is down, no connection)
      alert(
        "An error occurred while submitting the form. Please try again later."
      );
      console.error("Network Error:", error.message);
    }
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setFormData((prev) => {
      const services = checked
        ? [...prev.services, name] // Add to array if checked
        : prev.services.filter((service) => service !== name); // Remove if unchecked
      return { ...prev, services };
    });
  };

  // Handle ReCAPTCHA
  const onChange = (value) => {
    console.log("ReCAPTCHA value:", value);
    setVerified(true); // Mark ReCAPTCHA as verified
  };

  const sections = [
    {
      title: "What's this for?",
      content:
        "We just need your basic info so we can get in touch with you about your project. We’ll never share your details with anyone else (we’re not mean like that).",
      mt: "20px",
    },
    {
      title: "What if I’m not sure?",
      content:
        "We can help you figure this out! Do you need us to only design you a website or build your new website as well? Plus do you need help with strategy and marketing?",
      mt: "80px",
    },
    {
      title: "Why does this matter?",
      content:
        "We just need your basic info so we can get in touch with you about your project. We’ll never share your details with anyone else (we’re not mean like that).",
      mt: "110px",
    },
    {
      title: "Yeah, I’m not sure?",
      content:
        "We just need your basic info so we can get in touch with you about your project. We’ll never share your details with anyone else (we’re not mean like that).",
      mt: "200px",
    },
    {
      title: "Ah the money question…",
      content:
        "We just need your basic info so we can get in touch with you about your project. We’ll never share your details with anyone else (we’re not mean like that).",
      mt: "80px",
    },
    {
      title: "What do you mean?",
      content:
        "We just need your basic info so we can get in touch with you about your project. We’ll never share your details with anyone else (we’re not mean like that).",
      mt: "220px",
    },
    {
      title: "What info do you need?",
      content:
        "We just need your basic info so we can get in touch with you about your project. We’ll never share your details with anyone else (we’re not mean like that).",
      mt: "110px",
    },
    {
      title: "What do you mean?",
      content:
        "This just helps us get an idea for the type of project you’re looking for. Are you looking to sell your services or sell stuff online? We can help you figure this out if you’re not sure!",
      mt: "100px",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col sm:flex-row">
      <div className="hidden sm:block sm:w-[40%] h-full">
        <div className="h-[300px] mt-[100px] py-4 px-16">
          <h1 className="text-[80px] sm:text-xl md:text-3xl xl:text-7xl font-bold text-[#60A5FA] mt-2">
            Get started!
          </h1>
          <p className="mt-4 text-lg">
            This is your first step to becoming fresh! Fill out the following
            questions as best as you can, we’ll take a closer look then be in
            touch to get things started.
          </p>
        </div>

        {sections.map((section, index) => (
          <div
            key={index}
            className={`h-[400px] mt-[${section.mt}] py-4 px-16 `}
          >
            <h1 className="text-3xl text-white mt-2">{section.title}</h1>
            <p className="mt-4 text-lg">{section.content}</p>
          </div>
        ))}
      </div>

      {/* right div */}
      <div className="w-full sm:w-[60%] h-[full] flex">
        <div className="w-[6%] sm:mt-[445px] mt-[380px]">
          <h1 className="text-[#60A5FA] flex justify-center text-xs">1/8</h1>
        </div>
        <div className="w-[80%]">
          {/* hidden in large screen only visible in mobile */}
          <div className="h-[300px] mt-[20px] py-4 px-2 border-b-[1px] border-white sm:hidden">
            <h1 className="text-[50px] font-bold text-[#87befb] mt-2">
              Get started!
            </h1>
            <p className="mt-4 text-lg">
              This is your first step to becoming fresh! Fill out the following
              questions as best as you can, we’ll take a closer look then be in
              touch to get things started.
            </p>
          </div>
          {/* Form structure */}
          <div className="sm:mt-[445px] mt-[55px]  px-4 border-b-2  border-white">
            <h1 className="text-white flex text-5xl">About you</h1>
            <p className="text-white mt-4">
              Alright let’s start with the basics!
            </p>
            <form className="space-y-10 mt-12 mb-20" onSubmit={handleSubmit}>
              {/* Name */}
              <div className="   sm:mt-[70px] mt-[10px]  px-4 border-b-2  border-white mb-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-20 ">
                  <input
                    type="text"
                    name="name"
                    placeholder="What's your name?*"
                    value={formData.name}
                    onChange={handleChange}
                    className="h-14 w-full bg-black rounded-xl border-white border-2 text-white p-4 mb-4"
                  />

                  {/* Email */}
                  <input
                    type="email"
                    name="email"
                    placeholder="What's your email?*"
                    value={formData.email}
                    onChange={handleChange}
                    className="h-14 w-full bg-black rounded-xl border-white border-2 text-white p-4 mb-4"
                  />

                  {/* Company */}
                  <input
                    type="text"
                    name="company"
                    placeholder="What company are you from?"
                    value={formData.company}
                    onChange={handleChange}
                    className="h-14 w-full bg-black rounded-xl border-white border-2 text-white p-4 mb-4"
                  />

                  {/* phoneNumber */}
                  {/* <input
                    type="tel"
                    name="phoneNumber"
                    placeholder="Your phone number?"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="h-14 w-full bg-black rounded-xl border-white border-2 text-white p-4 mb-4"
                  /> */}
                </div>
              </div>

              {/* Services (Checkboxes) */}
              <div className="   sm:mt-[70px] mt-[10px]  px-4 border-b-2  border-white ">
                <h1 className="text-white flex text-5xl">
                  What services do you need?
                </h1>
                <p className="text-white mt-4">
                  Not sure? Take a guess, we can help you define what you need
                  later!
                </p>
                <div className="space-y-10 mt-12 mb-20 ">
                  {[
                    "Web Design / UI/UX Design",
                    "Webflow Development",
                    "Brand/website strategy",
                    "Marketing Services",
                    "Bit of everything",
                  ].map((service) => (
                    <div className="flex items-center" label key={service}>
                      <input
                        type="checkbox"
                        name="services"
                        value={service}
                        checked={formData.services.includes(service)}
                        onChange={handleChange}
                        className="h-5 w-5 text-yellow-500 checked:text-black checked:bg-[#60A5FA]  bg-black border-[#60A5FA] border-2  focus:ring-yellow-500 focus:ring-1"
                      />

                      <label
                        htmlFor={service.toLowerCase().replace(/ /g, "-")}
                        className="ml-3"
                      >
                        {service}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* New or Rebuild (Radio Buttons) */}
              <div className="   sm:mt-[70px] mt-[10px]  px-4 border-b-2 border-white">
                <h1 className=" text-white flex  text-5xl ">
                  Is this a new website or a rebuild?
                </h1>
                <p className=" text-white mt-4">
                  Looking for something brand new? Or to upgrade your existing
                  site?
                </p>
                <div className="space-y-10 mt-12 mb-20">
                  {[
                    "Brand new website",
                    "Rebuild of existing website",
                    "Updates to existing website",
                  ].map((option) => (
                    <div className="flex items-center mt-10" label key={option}>
                      <input
                        type="radio"
                        name="newOrRebuild"
                        value={option}
                        checked={formData.newOrRebuild === option}
                        onChange={handleChange}
                        className="h-5 w-5 text-yellow-500 checked:text-black checked:bg-[#60A5FA]  bg-black border-[#60A5FA] border-2  focus:ring-yellow-500 focus:ring-1"
                      />
                      <label
                        htmlFor={option.toLowerCase().replace(/ /g, "-")}
                        className="ml-3"
                      >
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* types */}
              <div className="   sm:mt-[70px] mt-[10px]  px-4 border-b-2 border-white">
                <h1 className=" text-white flex  text-5xl ">
                  Is this a new website or a rebuild?
                </h1>
                <p className=" text-white mt-4">
                  Looking for something brand new? Or to upgrade your existing
                  site?
                </p>
                <div className="space-y-10 mt-12 mb-20">
                  {[
                    "Blog",
                    "Ecommerce",
                    "Memberships",
                    "Portfolio",
                    "Not sure yet",
                  ].map((type) => (
                    <div className="flex items-center mt-10" label key={type}>
                      <input
                        type="radio"
                        name="websiteNeeds"
                        value={type}
                        checked={formData.websiteNeeds === type}
                        onChange={handleChange}
                        className="h-5 w-5 text-yellow-500 checked:text-black checked:bg-[#60A5FA]  bg-black border-[#60A5FA] border-2  focus:ring-yellow-500 focus:ring-1"
                      />
                      <label
                        htmlFor={type.toLowerCase().replace(/ /g, "-")}
                        className="ml-3"
                      >
                        {type}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Budget (Checkboxes) */}
              <div className="   sm:mt-[70px] mt-[10px]  px-4 border-b-2 border-white">
                <h1 className="text-white flex text-5xl mt-12">
                  What’s your monthly budget?
                </h1>
                <p className="text-white mt-4">
                  This is just so we can understand the scale of your project.
                  Think about how much revenue you want your site to generate
                  and find a budget that’s proportional to that goal.
                </p>
                <div className="space-y-10 mt-12 mb-20">
                  {[
                    "Less than 20,000 (small project)",
                    "Upto 50,000 (medium project)",
                    "Over 50,000 (large project)",
                  ].map((option) => (
                    <div className="flex items-center mt-10" key={option}>
                      <input
                        type="radio"
                        name="budget"
                        value={option}
                        checked={formData.budget === option}
                        onChange={handleChange}
                        className="h-5 w-5 text-yellow-500 checked:text-black checked:bg-[#60A5FA]  bg-black border-[#60A5FA] border-2  focus:ring-yellow-500 focus:ring-1"
                      />
                      <label
                        htmlFor={option.toLowerCase().replace(/ /g, "-")}
                        className="ml-3"
                      >
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* pages */}
              <div className="   sm:mt-[70px] mt-[10px]  px-4 border-b-2 border-white">
                <h1 className="text-white flex text-5xl mt-12">
                  How many pages do you need?
                </h1>

                <div className="space-y-10 mt-12 mb-20">
                  {["Less than 5", "5-10", "10-15", "15+"].map((option) => (
                    <div className="flex items-center mt-10" label key={option}>
                      <input
                        type="radio"
                        name="pages"
                        value={option}
                        checked={formData.pages === option}
                        onChange={handleChange}
                        className="h-5 w-5 text-yellow-500 checked:text-black checked:bg-[#60A5FA]  bg-black border-[#60A5FA] border-2  focus:ring-yellow-500 focus:ring-1"
                      />
                      <label
                        htmlFor={option.toLowerCase().replace(/ /g, "-")}
                        className="ml-3"
                      >
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional Information */}
              <div className="   sm:mt-[70px] mt-[10px]  px-4 border-b-2 border-white">
                <h1 className=" text-white flex  text-5xl ">
                  Give us the details
                </h1>
                <p className=" text-white mt-4">
                  Tell us as much as you want about your project below.
                </p>
                <div className="col-span-2">
                  <textarea
                    name="details"
                    placeholder="Additional information"
                    value={formData.details}
                    onChange={handleChange}
                    className="w-full h-44 bg-black rounded-xl border-white border-2 text-white p-4 resize-none"
                  ></textarea>
                </div>
              </div>
              {/* ReCAPTCHA */}
              <div className="   sm:mt-[70px] mt-[10px]  px-4 border-b-2 border-white">
                <h1 className=" text-white flex  text-5xl ">Almost there!</h1>
                <p className=" text-white mt-4">
                  Hit the button we will do the rest!
                </p>

                <div className="mt-4 mb-20">
                  {/* <ReCAPTCHA
                    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                    onChange={onChange}
                  /> */}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className={`bg-[#60A5FA] text-black mt-20 w-full h-16 rounded-full text-3xl hover:bg-black hover:border-[#60A5FA] hover:text-white font-bold hover:border-2 ${
                      !verified && "opacity-50 cursor-not-allowed"
                    }`}
                    disabled={verified}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
