import React from "react";
import { Link } from "react-router-dom";
import { FaLightbulb, FaRocket } from "react-icons/fa";

export default function About() {
  return (
    <main
      className="min-h-screen"
      style={{
        background: "linear-gradient(135deg, #000428, #004e92)",
      }}
    >
      <section className="py-16 px-4 max-w-6xl mx-auto text-white">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#00F5FF]">
            About <span className="text-white">DevSpark</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            DevSpark is a vibrant community built for developers, by developers.
            We’re on a mission to ignite your passion for building software —
            whether you're a beginner or a pro. Join us to create, collaborate,
            and grow together!
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Vision Card */}
          <div className="group bg-gradient-to-br from-[#b2bae6] to-[#26D0CE] p-8 rounded-xl shadow-xl hover:shadow-[#00F5FF] hover:shadow-2xl transition-all duration-300 text-gray-900">
            <div className="flex items-center gap-4 mb-4">
              <FaLightbulb className="text-3xl text-[#8A2BE2] group-hover:text-[#00F5FF] transition" />
              <h2 className="text-2xl font-bold group-hover:text-[#8A2BE2] transition">
                Our Vision
              </h2>
            </div>
            <p className="text-gray-800 leading-relaxed">
              Empower every developer to learn, innovate, and make an impact.
              We believe in the power of open knowledge, shared experiences, and
              inclusive collaboration.
            </p>
          </div>

          {/* Mission Card */}
          <div className="group bg-gradient-to-br from-[#b2bae6] to-[#26D0CE] p-8 rounded-xl shadow-xl hover:shadow-[#00F5FF] hover:shadow-2xl transition-all duration-300 text-gray-900">
            <div className="flex items-center gap-4 mb-4">
              <FaRocket className="text-3xl text-[#8A2BE2] group-hover:text-[#00F5FF] transition" />
              <h2 className="text-2xl font-bold group-hover:text-[#8A2BE2] transition">
                Our Mission
              </h2>
            </div>
            <p className="text-gray-800 leading-relaxed">
              Build tools, resources, and experiences that help developers unlock
              their true potential — through real-world projects, peer learning,
              and a spark of creativity.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-16 text-center">
          <Link
            to="/contact"
            className="inline-block px-6 py-3 bg-[#8A2BE2] text-white font-semibold text-lg rounded-full shadow-lg hover:bg-purple-700 transition duration-300"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </main>
  );
}
