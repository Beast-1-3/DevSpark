import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main
      className="min-h-screen"
      style={{
        background: "linear-gradient(135deg, #000428, #004e92)",
      }}
    >
      {/* Hero Section */}
      <section className="text-center py-12 px-4 max-w-6xl mx-auto text-white">
        <h1 className="text-5xl font-extrabold mb-4 text-[#00F5FF]">
          Welcome to <span className="text-white">DevSpark</span>
        </h1>
        <p className="text-lg max-w-2xl mx-auto mb-8 text-gray-300">
          Empower your coding journey. Join a creative, bold community of
          developers who love to build, share, and grow.
        </p>
        <Link
          to="/about"
          className="inline-block mt-4 px-6 py-3 bg-[#00F5FF] text-black font-semibold text-lg rounded-full shadow-lg hover:bg-cyan-300 transition duration-300"
        >
          Learn More
        </Link>
      </section>

      {/* Highlights Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center text-white mb-10">
          Why DevSpark?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div
            className="group rounded-xl p-6 shadow-xl bg-gradient-to-br from-[#b2bae6] to-[#26D0CE] text-gray-800 hover:shadow-[0_0_20px_#8A2BE2] transition duration-300"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/854/854894.png"
              alt="Innovation"
              className="w-full h-44 object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <h3 className="mt-4 text-xl font-semibold group-hover:text-[#8A2BE2] transition">
              Innovative Ideas
            </h3>
            <p className="mt-2 text-gray-700">
              Turn imagination into real-world impact with creative solutions.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="group rounded-xl p-6 shadow-xl bg-gradient-to-br from-[#b2bae6] to-[#26D0CE] text-gray-800 hover:shadow-[0_0_20px_#8A2BE2] transition duration-300"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/942/942748.png"
              alt="Code"
              className="w-full h-44 object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <h3 className="mt-4 text-xl font-semibold group-hover:text-[#8A2BE2] transition">
              Elegant Code
            </h3>
            <p className="mt-2 text-gray-700">
              Deliver clean, maintainable solutions that scale with ease.
            </p>
          </div>

          {/* Card 3 */}
          <div
            className="group rounded-xl p-6 shadow-xl bg-gradient-to-br from-[#b2bae6] to-[#26D0CE] text-gray-800 hover:shadow-[0_0_20px_#8A2BE2] transition duration-300"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/2620/2620175.png"
              alt="Teamwork"
              className="w-full h-44 object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <h3 className="mt-4 text-xl font-semibold group-hover:text-[#8A2BE2] transition">
              Team Collaboration
            </h3>
            <p className="mt-2 text-gray-700">
              Work with people who turn ideas into amazing digital products.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
