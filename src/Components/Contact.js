import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">
          Contact Us
        </h2>
        <form className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="john.doe@example.com"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your message here..."
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
