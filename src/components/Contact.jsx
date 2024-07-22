import React from "react";
import Title from "./Title";

function Contact() {
  return (
    <div className="flex flex-col pt-10 pb-10 mx-auto font-jetbrains">
      <div className="flex justify-center items-center">
        <form
          action="https://getform.io/f/bzyllzea"
          method="POST"
          className="flex flex-col w-full md:w-8/12 md:px-4 px-6"
        >
          <span className="text-center"><Title>Let's Connect</Title></span>
          <p className="mb-5 text-lg text-center">
          Interested in collaborating or looking to chat over coffee? Shoot me a message and let's talk.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <div className="flex flex-col w-full sm:w-auto sm:flex-grow">
              <label htmlFor="name" className="block text-sm font-medium text-main">Name</label>
              <input
                required
                type="text"
                name="name"
                className="p-2 bg-transparent border-2 rounded-lg focus:ring-primary focus:border-primary border-gray-300 w-full"
                minLength="2"
              />
            </div>
            <div className="flex flex-col w-full sm:w-auto sm:flex-grow">
              <label htmlFor="email" className="block text-sm font-medium text-main">Email</label>
              <input
                required
                type="email"
                name="email"
                className="p-2 bg-transparent border-2 rounded-lg focus:ring-primary focus:border-primary border-gray-300 w-full"
                minLength="5"
              />
            </div>
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="message" className="block text-sm font-medium text-main">Message</label>
            <textarea
              required
              name="message"
              rows="5"
              className="p-2 mb-4 bg-transparent border-2 rounded-lg focus:ring-primary focus:border-primary border-gray-300 w-full"
              minLength="5"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="relative z-0 h-8 rounded-full bg-cyan-800 px-6 text-neutral-50 after:content-[''] after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-full after:rounded-full after:bg-cyan-800 hover:after:scale-x-125 hover:after:scale-y-150 hover:after:opacity-0 hover:after:transition hover:after:duration-500 active:scale-95 active:bg-cyan-700"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
