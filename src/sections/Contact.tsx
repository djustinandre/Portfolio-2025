'use client'; // This makes the component a Client Component

import React from 'react';
import grainImage from '@/assets/images/grain.jpg';

const Contact = () => (
  <section id="contact" className="py-24 lg:py-32">
    <div className="container">
      {/* Section label */}
      <div className="flex justify-center">
        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent text-center">
          Contact Me
        </p>
      </div>

      {/* Heading */}
      <h2 className="font-serif text-3xl md:text-5xl text-center mt-6 text-white">
        Get in Touch
      </h2>

      {/* Description */}
      <p className="text-center text-white/60 md:text-lg mt-4 max-w-xl mx-auto">
        Submit the form below or shoot me an email —{' '}
        <a
          href="mailto:deleonjustinandre@gmail.com"
          className="text-emerald-300 underline hover:text-sky-400 transition"
        >
          deleonjustinandre@gmail.com
        </a>
      </p>

      {/* Form card with grain background inside */}
      <form
        method="POST"
        action="https://getform.io/f/adrdykpa"
        className="relative max-w-[600px] mx-auto mt-12 bg-gray-800 rounded-3xl border border-white/10 p-10 flex flex-col gap-6 overflow-hidden"
      >
        {/* Grain overlay inside form */}
        <div
          className="absolute inset-0 -z-10 opacity-5"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        />

        <input
          className="bg-[#112240] text-white p-3 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-offset-gray-800 focus:ring-gradient transition"
          type="text"
          placeholder="Name"
          name="name"
          required
        />
        <input
          className="bg-[#112240] text-white p-3 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-offset-gray-800 focus:ring-gradient transition"
          type="email"
          placeholder="Email"
          name="email"
          required
        />
        <textarea
          className="bg-[#112240] text-white p-3 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-offset-gray-800 focus:ring-gradient transition resize-none"
          name="message"
          rows={10}
          placeholder="Message"
          required
        />
        <button
          type="submit"
          className="text-white border-2 border-transparent bg-gradient-to-r from-emerald-300 to-sky-400 px-6 py-3 mx-auto flex items-center rounded-xl font-semibold transition hover:brightness-110"
        >
          Let's Collaborate
        </button>
      </form>
    </div>
  </section>
);

export default Contact;