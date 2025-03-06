import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white text-center py-16 px-4">
        <h1 className="text-4xl sm:text-5xl font-bold m-10">About Us</h1>
        <p className="mt-3 text-lg sm:text-xl">Empowering Innovation Through Technology</p>
      </section>

      {/* Our Mission */}
      <section className="max-w-5xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold text-center text-blue-600">Our Mission</h2>
        <p className="mt-4 text-gray-700 text-center">
          We are dedicated to providing top-notch web development, SEO optimization, and digital marketing solutions. 
          Our goal is to help businesses thrive in the digital landscape with cutting-edge technologies and strategies.
        </p>
      </section>

      {/* Our Team */}
      <section className="bg-white py-12">
        <h2 className="text-3xl font-bold text-center text-blue-600">Meet Our Team</h2>
        <div className="flex flex-wrap justify-center gap-8 mt-6">
          {/* Team Member 1 */}
          <div className="bg-gray-200 p-6 rounded-lg shadow-lg text-center w-72">
            <img src="https://cdn-icons-png.flaticon.com/512/7084/7084424.png" alt="Team Member" className="w-24 h-24 mx-auto rounded-full" />
            <h3 className="mt-4 text-xl font-semibold">Arjun</h3>
            <p className="text-gray-600">Founder & CEO</p>
          </div>

          {/* Team Member 2 */}
          <div className="bg-gray-200 p-6 rounded-lg shadow-lg text-center w-72">
            <img src="https://cdn-icons-png.flaticon.com/512/7084/7084424.png" alt="Team Member" className="w-24 h-24 mx-auto rounded-full" />
            <h3 className="mt-4 text-xl font-semibold">Jay</h3>
            <p className="text-gray-600">Lead Developer</p>
          </div>

          {/* Team Member 3 */}
          <div className="bg-gray-200 p-6 rounded-lg shadow-lg text-center w-72">
            <img src="https://cdn-icons-png.flaticon.com/512/7084/7084424.png" alt="Team Member" className="w-24 h-24 mx-auto rounded-full" />
            <h3 className="mt-4 text-xl font-semibold">Om</h3>
            <p className="text-gray-600">Marketing Head</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="text-center py-12">
        <h2 className="text-3xl font-bold text-blue-600">Get in Touch</h2>
        <p className="mt-3 text-gray-700">We'd love to hear from you! Contact us for any inquiries.</p>
        <a href="/contact" className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default About;
