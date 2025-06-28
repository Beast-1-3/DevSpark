import React from 'react';

export default function Contact() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#000428] to-[#004e92] py-16 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center text-white">
        {/* Left Section */}
        <div>
          <h2 className="text-4xl font-extrabold text-[#00F5FF] mb-6">Let's Connect</h2>
          <p className="text-lg text-gray-300 mb-4">
            We'd love to hear from you. Whether it's feedback, ideas, or just a hello — reach out!
          </p>
          <ul className="space-y-4 text-white">
            <li className="flex items-center gap-4">
              <span className="text-[#00F5FF]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              <span className="text-gray-200">info@yourdomain.com</span>
            </li>
            <li className="flex items-center gap-4">
              <span className="text-[#00F5FF]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493m1.302 3.51l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1" />
                </svg>
              </span>
              <span className="text-gray-200">+91 9876543210</span>
            </li>
            <li className="flex items-center gap-4">
              <span className="text-[#00F5FF]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </span>
              <span className="text-gray-200">Jaipur, Rajasthan, India</span>
            </li>
          </ul>
        </div>

        {/* Right Form Section */}
       <form className="bg-gradient-to-br from-[#b2bae6] to-[#26D0CE] p-8 rounded-xl shadow-2xl space-y-6 text-[#1a1a1a] hover:shadow-[#00F5FF] transition-all duration-300">
  <h3 className="text-2xl font-semibold text-[#004e92]">Send a Message</h3>

  <input
    type="text"
    placeholder="Your Name"
    className="w-full bg-white bg-opacity-80 text-[#1a1a1a] placeholder-gray-600 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00F5FF]"
  />

  <input
    type="email"
    placeholder="Your Email"
    className="w-full bg-white bg-opacity-80 text-[#1a1a1a] placeholder-gray-600 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00F5FF]"
  />

  <textarea
    rows="4"
    placeholder="Your Message"
    className="w-full bg-white bg-opacity-80 text-[#1a1a1a] placeholder-gray-600 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00F5FF]"
  ></textarea>

  <button
    type="submit"
    className="w-full bg-[#00F5FF] text-black py-3 rounded-lg hover:bg-cyan-300 transition duration-200 font-semibold"
  >
    Send Message
  </button>
</form>


      </div>
    </section>
  );
}
