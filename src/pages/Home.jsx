import React from "react";
import Header from "../components/header";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero Section */}
     
      <section className="bg-blue-600 text-white text-center py-16 px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold p-4 sm:p-6 m-10 sm:m-4 transition-all duration-300 hover:text-gray-200 hover:scale-105">
          Welcome to My Website
        </h1>
        <p className="mt-3 text-lg sm:text-xl">Your One-Stop Solution for Digital Growth</p>
      </section>

      {/* Services Section */}
      <section id="services" className="p-6 text-center">
        <h2 className="text-3xl font-bold text-blue-600">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <div className="p-4 border rounded-lg shadow-md hover:bg-sky-500 hover:text-white transition duration-300">
            Web Development
          </div>
          <div className="p-4 border rounded-lg shadow-md hover:bg-sky-500 hover:text-white transition duration-300">
            SEO Optimization
          </div>
          <div className="p-4 border rounded-lg shadow-md hover:bg-sky-500 hover:text-white transition duration-300">
            Digital Marketing
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="p-6 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold text-blue-600">About Us</h2>
        <p className="mt-4 text-gray-700 max-w-3xl mx-auto">
          We are a team of experts providing top-notch digital services.  
          Welcome to The Cozy Book Nook, your online haven for all things bookish!  
          Our journey began with a simple love for books and a desire to create a warm and welcoming space for fellow readers.  
        </p>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="p-6 text-center bg-white">
        <h2 className="text-3xl font-bold text-blue-600">What Our Clients Say</h2>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="p-4 border rounded-lg shadow-md">
            <p className="text-gray-700 italic">"Excellent services! My website traffic has doubled in just a few months."</p>
            <h3 className="mt-3 font-semibold">- Alex Johnson</h3>
          </div>
          <div className="p-4 border rounded-lg shadow-md">
            <p className="text-gray-700 italic">"Highly recommended for SEO and web development services!"</p>
            <h3 className="mt-3 font-semibold">- Sarah Williams</h3>
          </div>
        </div>
      </section>

      {/* Call to Action (CTA) Section */}
      <section id="cta" className="py-12 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold">Ready to Grow Your Business?</h2>
        <p className="mt-3 text-lg">Contact us today and take your brand to the next level!</p>
        <a
          href="/contact"
          className="mt-4 inline-block bg-white text-blue-600 px-6 py-2 rounded-md hover:bg-gray-200 transition"
        >
          Get Started
        </a>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="p-6 text-center bg-gray-100">
        <h2 className="text-3xl font-bold text-blue-600">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto mt-6 text-left">
          <div className="p-4 border rounded-lg shadow-md mb-4">
            <h3 className="font-semibold">What services do you offer?</h3>
            <p className="text-gray-700">We specialize in web development, SEO optimization, and digital marketing.</p>
          </div>
          <div className="p-4 border rounded-lg shadow-md">
            <h3 className="font-semibold">How can I contact you?</h3>
            <p className="text-gray-700">You can reach us via email at support@example.com or through our contact page.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="p-6 text-center">
        <h2 className="text-3xl font-bold text-blue-600">Contact Us</h2>
        <p className="mt-4 text-gray-700">Email: support@example.com</p>
      </section>
    </div>
  );
};

export default Home;
