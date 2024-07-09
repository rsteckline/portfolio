import React, { useRef } from "react";

function Contact() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const handleContactFormSubmit = (e) => {
    e.preventDefault();
    if (
      !nameRef.current.value ||
      !emailRef.current.value ||
      !messageRef.current.value
    ) {
      alert("Please fill out completely so we can connect!");
      return;
    }
    e.target.submit();
  };

  return (
    <div className="flex flex-col mb-10 mx-auto">
      <div className="flex justify-center items-center">
        <form
          action="https://getform.io/f/bzyllzea"
          method="POST"
          className="flex flex-col w-full md:w-7/12"
          onSubmit={handleContactFormSubmit}
        >
          <input
            ref={nameRef}
            type="text"
            name="name"
            placeholder="Name"
            className="p-2 bg-transparent border-2 rounded-lg focus:outline-none"
          />
          <input
            ref={emailRef}
            type="text"
            name="name"
            placeholder="Email"
            className="my-2 p-2 bg-transparent border-2 rounded-lg focus:outline-none"
          />
          <textarea
            ref={messageRef}
            name="message"
            placeholder="Message"
            rows="4"
            className="p-2 mb-4 bg-transparent border-2 rounded-lg focus:outline-none"
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