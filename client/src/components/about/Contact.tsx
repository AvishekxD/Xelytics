"use client";

import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section id="contact" className="max-w-3xl mx-auto py-24 px-6 text-center bg-zinc-100/20 flex flex-col justify-center items-center rounded-2xl shadow-xl ring-1 ring-zinc-200 mt-30">
      <h2 className="text-4xl font-bold text-black mb-6">Get in touch 💬</h2>

      <p className="text-lg text-gray-700 mb-8">
        Whether you have a question, a suggestion, or just want to say hello—I'd love to hear from you!  
        Don’t hesitate to reach out.
      </p>

      <div className="mb-12">
        <a
          href="https://github.com/AvishekxD"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="py-1.5 mr-2 px-5 rounded-lg bg-gray-200/20 shadow-md hover:shadow-lg cursor-pointer ring-1 ring-zinc-200/60 hover:scale-105 transition-all duration-300 ease-in-out">
                GitHub ↗
          </button>
        </a>
        <a
          href="https://github.com/AvishekxD"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="py-1.5 ml-2 px-5 rounded-lg bg-gray-200/20 shadow-md hover:shadow-lg cursor-pointer ring-1 ring-zinc-200/60 hover:scale-105 transition-all duration-300 ease-in-out">
                Linkedin ↗
          </button>
        </a>
      </div>

      <Link
        to="/"
        className="py-2.5 mr-2 px-5 rounded-lg bg-gray-200/20 shadow-md hover:shadow-lg cursor-pointer ring-1 ring-zinc-200/60 hover:scale-105 transition-all duration-300 ease-in-out"
      >
        Go back to Home
      </Link>
    </section>
  );
};

export default Contact;
