import { useState } from "react";


const footer = () => {
    return (
        
        <footer className="bg-gray-900 text-white p-6 mt-10 w-full">
            <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center sm:text-left">

                {/* About Section */}
                <div>
                    <h3 className="text-xl font-bold mb-3">About Us</h3>
                    <p className="text-gray-400 text-sm">
                        We provide top-notch web development, SEO, and digital marketing services to help businesses grow.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-xl font-bold mb-3">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="text-gray-400 hover:text-blue-500">Home</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-blue-500">Services</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-blue-500">About</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-blue-500">Contact</a></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-xl font-bold mb-3">Contact</h3>
                    <p className="text-gray-400 text-sm">Email: support@example.com</p>
                    <p className="text-gray-400 text-sm">Phone: +91 98765 43210</p>
                    <p className="text-gray-400 text-sm">Location: India</p>
                </div>

                {/* Social Media */}
                <div>
                    <h3 className="text-xl font-bold mb-3">Follow Us</h3>
                    <div className="flex justify-center sm:justify-start space-x-4 text-2xl">
                        <a href="#" className="text-gray-400 hover:text-blue-500">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-blue-500">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-blue-500">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-blue-500">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center text-gray-500 text-sm mt-6 border-t border-gray-700 pt-4">
                © {new Date().getFullYear()} My Website. All rights reserved.
            </div>
        </footer>

    );
};

export default footer;
