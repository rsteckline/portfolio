import React from "react";
import Title from "./Title";

function Contact() {
  return (
    <div className="flex flex-col mb-10 mx-auto">
      <div className="flex justify-center items-center">
        <form
          action="https://getform.io/f/bzyllzea"
          method="POST"
          className="flex flex-col w-full md:w-7/12"
        >
          <span className="text-center"><Title>Contact Me</Title></span>
          <p class="mb-5 text-lg text-center">
    Send a message if you have any questions or want to work together.
  </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <div className="flex flex-col flex-grow">
            <label htmlFor="name" className="block text-sm font-medium text-gray-500">Name</label>
          <input
              required
              type="text"
              name="name"
              className="p-2 bg-transparent border-2 rounded-lg focus:ring-primary focus:border-primary border-gray-300"
              minLength="2"
            />
            </div>
            <div className="flex flex-col flex-grow">
            <label htmlFor="email" className="block text-sm font-medium text-gray-500">Email</label>
            <input
              required
              type="email"
              name="email"
              className="p-2 bg-transparent border-2 rounded-lg focus:ring-primary focus:border-primary border-gray-300"
              minLength="5"
            />
          </div>
          </div>
          <label for="message" class="block text-sm font-medium text-gray-500">Message</label>
          <textarea
            required
            name="message"
            rows="3"
            className="p-2 mb-4 bg-transparent border-2 rounded-lg focus:ring-primary focus:border-primary  border-gray-300"
            minLength="5"
          />
          <button
            type="submit"
            className="relative z-0 h-10 rounded-full bg-cyan-800 px-6 text-neutral-50 after:content-[''] after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-full after:rounded-full after:bg-cyan-800 hover:after:scale-x-125 hover:after:scale-y-150 hover:after:opacity-0 hover:after:transition hover:after:duration-500 active:scale-95 active:bg-cyan-700"
          >
            Let's Connect
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
