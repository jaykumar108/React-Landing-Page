import React from "react";

const Service = () => {
  const services = [
    {
      title: "Web Development",
      description:
        "We create stunning, fast, and user-friendly websites tailored to your business needs.",
      icon: "🌐",
    },
    {
      title: "SEO Optimization",
      description:
        "Boost your website’s ranking on search engines and drive organic traffic to your business.",
      icon: "📈",
    },
    {
      title: "Digital Marketing",
      description:
        "Enhance your brand’s online presence with strategic digital marketing solutions.",
      icon: "📢",
    },
    {
      title: "Graphic Design",
      description:
        "Create visually appealing designs that resonate with your audience and enhance brand identity.",
      icon: "🎨",
    },
    {
      title: "Content Writing",
      description:
        "Engage your audience with high-quality content, blogs, and copywriting services.",
      icon: "✍️",
    },
    {
      title: "App Development",
      description:
        "We develop mobile applications with intuitive user experiences and smooth performance.",
      icon: "📱",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white text-center py-16 px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold m-10">
          Our Services
        </h1>
        <p className="mt-3 text-lg sm:text-xl">
          Transform your business with our top-notch digital solutions.
        </p>
      </section>

      {/* Services Grid */}
      <section className="p-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 border rounded-lg shadow-md bg-white text-center transition-all duration-300 hover:bg-blue-600 hover:text-white"
            >
              <div className="text-5xl">{service.icon}</div>
              <h3 className="text-2xl font-bold mt-4">{service.title}</h3>
              <p className="mt-2 text-gray-700 hover:text-white">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold">Ready to Elevate Your Business?</h2>
        <p className="mt-3 text-lg">Let’s work together to bring your vision to life.</p>
        <a
          href="/contact"
          className="mt-4 inline-block bg-white text-blue-600 px-6 py-2 rounded-md hover:bg-gray-200 transition"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default Service;
