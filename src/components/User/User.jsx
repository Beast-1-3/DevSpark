import React from 'react';
import { useParams } from 'react-router-dom';
import { FaUserAstronaut } from 'react-icons/fa';

export default function User() {
  const { userid } = useParams();

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#000428] to-[#004e92] flex items-center justify-center overflow-hidden p-6">
      
      {/* Floating Background Squares */}
      {/* <div className="absolute inset-0 pointer-events-none z-0 animated-bg-squares">
        {Array.from({ length: 15 }).map((_, i) => {
          const top = Math.floor(Math.random() * 90);
          const left = Math.floor(Math.random() * 90);
          const delay = Math.random() * 6;
          return (
            <div
              key={i}
              className="floating-square"
              style={{
                top: `${top}%`,
                left: `${left}%`,
                animationDelay: `${delay}s`,
              }}
            />
          );
        })}
      </div> */}

      {/* Card */}
      <div className="relative z-10 bg-gradient-to-br from-[#b2bae6] to-[#26D0CE] text-gray-800 rounded-2xl p-10 max-w-2xl w-full text-center shadow-2xl hover:shadow-[#00F5FF]/50 transition duration-500 transform hover:-translate-y-1 animate-fade-in">
        
        {/* Avatar Icon */}
        <div className="w-28 h-28 mx-auto mb-6 rounded-full bg-gradient-to-r from-[#26D0CE] to-[#8A2BE2] flex items-center justify-center text-white text-5xl shadow-lg glow-avatar">
          <FaUserAstronaut />
        </div>

        <h1 className="text-4xl font-extrabold mb-4 text-[#004e92] tracking-wide">
          Welcome, <span className="text-[#8A2BE2]">{userid}</span>!
        </h1>

        <p className="text-lg leading-relaxed text-gray-700">
          You’re more than just a username — <span className="text-[#004e92] font-semibold">"{userid}"</span> represents a digital identity, filled with creativity and passion.
          <br /><br />
          At <span className="text-[#8A2BE2] font-semibold">DevSpark</span>, every spark matters. Let your ideas shine, collaborate fearlessly, and build boldly.
          <br /><br />
          The future is yours to code.
        </p>
      </div>
    </section>
  );
}
