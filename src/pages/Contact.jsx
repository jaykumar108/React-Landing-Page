import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Message Sent:", { name, email, message });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000); // Reset message after 5 seconds
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-3xl font-bold text-center text-blue-600 m-10    ">Contact Us</h2>
        <p className="text-center text-gray-600 mt-2">We'd love to hear from you! Send us a message.</p>

        {submitted && (
          <p className="text-green-600 text-center mt-4">
            ✅ Your message has been sent successfully!
          </p>
        )}

        <form onSubmit={handleSubmit} className="mt-6">
          {/* Name Input */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Message Input */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Message</label>
            <textarea
              placeholder="Write your message..."
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="mt-6 text-center">
          <p className="text-gray-600">📧 Email: support@example.com</p>
          <p className="text-gray-600">📞 Phone: +91 99999 43210</p>
          <p className="text-gray-600">📍 Address: @Mithila Stack , Darbhanga Bihar, India</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
