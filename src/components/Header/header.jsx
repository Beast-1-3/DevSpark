import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaHome, FaInfoCircle, FaEnvelope, FaGithub, FaSignInAlt, FaRocket, FaUser } from "react-icons/fa";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-[#b2bae6] to-[#26D0CE] shadow-md text-white">
      <nav className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo + Name */}
        <Link to="/" className="flex items-center space-x-3 animate-slideInLeft">
          <img
            src="/vite.svg"
            className="h-10"
            alt="Logo"
          />
          <span className="text-2xl font-extrabold text-white tracking-wide">
            Dev<span className="text-[#000428]">Spark</span>
          </span>
        </Link>

        {/* Navigation */}
        <ul className="hidden md:flex space-x-6 font-medium">
          {[
            { to: "/", label: "Home", icon: <FaHome /> },
            { to: "/about", label: "About", icon: <FaInfoCircle /> },
            { to: "/contact", label: "Contact", icon: <FaEnvelope /> },
            { to: "/github", label: "GitHub", icon: <FaGithub /> },
            { to: "/user/You", label: "User", icon: <FaUser /> },
          ].map(({ to, label, icon }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `flex items-center space-x-2 px-3 py-2 group relative transition-all duration-300 ${
                    isActive
                      ? "text-[#8A2BE2] font-semibold"
                      : "hover:text-[#8A2BE2]"
                  }`
                }
              >
                <span className="text-lg">{icon}</span>
                <span className="relative after:block after:absolute after:h-0.5 after:bg-[#8A2BE2] after:w-0 after:bottom-0 after:left-0 group-hover:after:w-full after:transition-all">
                  {label}
                </span>
              </NavLink>
            </li>
          ))}
        </ul>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center space-x-4 animate-slideInRight">
          <Link
            to="#"
            className="flex items-center space-x-1 px-4 py-2 rounded-lg text-sm font-medium text-black border border-white hover:bg-white/30 transition duration-300"
          >
            <FaSignInAlt />
            <span>Log In</span>
          </Link>
          <Link
            to="#"
            className="flex items-center space-x-1 px-4 py-2 rounded-lg text-sm font-medium bg-[#8A2BE2] text-white hover:bg-purple-700 shadow-lg transition duration-300"
          >
            <FaRocket />
            <span>Get Started</span>
          </Link>
        </div>

        {/* Mobile Icon */}
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
