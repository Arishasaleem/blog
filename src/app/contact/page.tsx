"use client";
import React from "react";

export default function ContactUs() {
  return (
    <div>
      {/* Contact Form Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="md:flex md:space-x-12">
          {/* Left Content */}
          <div className="md:w-1/2 mb-8 md:mb-0 space-y-6">
            <h2 className="text-3xl font-semibold text-gray-800">Get in Touch</h2>
            <p className="text-lg text-gray-600">
              We’d love to hear from you! Whether you have a question about travel
              technology, want to collaborate, or simply want to say hi, feel free
              to drop us a message.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <span className="w-10 h-10 flex items-center justify-center text-white bg-blue-500 rounded-full">
                  <i className="fas fa-map-marker-alt"></i>
                </span>
                <p className="text-lg text-gray-700">123 Tech Lane, Travel City</p>
              </div>
              <div className="flex items-center space-x-4">
                <span className="w-10 h-10 flex items-center justify-center text-white bg-blue-500 rounded-full">
                  <i className="fas fa-phone-alt"></i>
                </span>
                <p className="text-lg text-gray-700">+123 456 789</p>
              </div>
              <div className="flex items-center space-x-4">
                <span className="w-10 h-10 flex items-center justify-center text-white bg-blue-500 rounded-full">
                  <i className="fas fa-envelope"></i>
                </span>
                <p className="text-lg text-gray-700">
                  contact@exploringhorizons.com
                </p>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="md:w-1/2">
            <form className="bg-white p-8 rounded-lg shadow-xl space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 transition"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 transition"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 transition"
                  placeholder="Type your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}