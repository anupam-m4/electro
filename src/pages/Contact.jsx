

import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify"; // Optional but useful for alerts
import { MapPin, Mail, Phone, Rocket } from "lucide-react"; // Import new icons

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_m5rgynq", // Your Service ID
        "template_jo68zgb", // Your Template ID (replace with actual ID)
        form.current,
        "qBAklk2E3hDMbKIkJ" // Your Public Key (replace it)
      )
      .then(
        (result) => {
          toast.success("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          toast.error("❌ Failed to send. Please try again!");
          console.error(error.text);
        }
      );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050510] via-[#0F0F2A] to-[#0A0A1A] flex items-center justify-center px-4 py-16 md:py-20">
      <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl shadow-3xl p-8 md:p-12 w-full max-w-6xl overflow-hidden relative">
        {/* Subtle background circles for dynamic feel */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-amber-400/10 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-4000"></div>

        {/* Content - ensure it's above the background circles */}
        <div className="relative z-10">
          <h2 className="text-3xl md:text-6xl font-extrabold text-white text-center mb-12 drop-shadow-lg">
            Connect with <span className="text-amber-300">Electro</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Info Section */}
            <div className="text-white space-y-8 p-6 bg-white/5 rounded-2xl border border-white/10 shadow-lg">
              <h3 className="text-3xl font-bold text-blue-400 mb-4 flex items-center gap-3">
                <Mail className="w-8 h-8" /> Drop Us a Line!
              </h3>
              <p className="text-gray-300 text-base leading-relaxed">
                Have a question, need technical support, or just want to say
                hello? Our team is eager to assist you with all your electronics
                inquiries. Reach out to us anytime!
              </p>
              <div className="space-y-4 text-lg">
                <p className="flex items-center gap-3 text-gray-200">
                  <MapPin className="text-amber-300 w-6 h-6" />{" "}
                  <span className="font-semibold">Address:</span> Puri, Odisha,
                  India
                </p>
                <p className="flex items-center gap-3 text-gray-200">
                  <Mail className="text-amber-300 w-6 h-6" />{" "}
                  <span className="font-semibold">Email:</span>{" "}
                  anup98padhy@gmail.com
                </p>
                <p className="flex items-center gap-3 text-gray-200">
                  <Phone className="text-amber-300 w-6 h-6" />{" "}
                  <span className="font-semibold">Phone:</span> +91-9123456790
                </p>
              </div>
            </div>

            {/* Form Section */}
            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-6 p-6 bg-white/5 rounded-2xl border border-white/10 shadow-lg"
            >
              <div>
                <label
                  htmlFor="from_name"
                  className="block text-white mb-2 text-lg font-medium"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="from_name"
                  name="from_name"
                  required
                  placeholder="Your name"
                  className="w-full px-5 py-3 bg-gray-700/60 border border-gray-600 focus:border-blue-500 text-white rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                />
              </div>
              <div>
                <label
                  htmlFor="reply_to"
                  className="block text-white mb-2 text-lg font-medium"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="reply_to"
                  name="reply_to"
                  required
                  placeholder="yourmail@example.com"
                  className="w-full px-5 py-3 bg-gray-700/60 border border-gray-600 focus:border-blue-500 text-white rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-white mb-2 text-lg font-medium"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  placeholder="Type your message here..."
                  className="w-full px-5 py-3 bg-gray-700/60 border border-gray-600 focus:border-blue-500 text-white rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y transition-all duration-300"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 rounded-xl shadow-lg
                  hover:from-blue-700 hover:to-purple-700 transition duration-300
                  transform hover:scale-105
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75
                  flex items-center justify-center gap-3 text-xl"
              >
                Send Message <Rocket className="w-6 h-6 transform -rotate-45" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
