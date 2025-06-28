import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaDiscord, FaFacebookF, FaTwitter, FaLinkedin, FaDribbble } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 animate-fadeInUp">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-gray-700 pb-8">
          <div>
            <h2 className="text-xl font-bold mb-4">Company</h2>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-orange-400 transition">Home</Link></li>
              <li><Link to="/about" className="hover:text-orange-400 transition">About</Link></li>
              <li><Link to="/contact" className="hover:text-orange-400 transition">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4">Follow Us</h2>
            <ul className="space-y-2">
              <li><a href="https://github.com/" className="flex items-center hover:text-orange-400 transition"><FaGithub className="mr-2" /> GitHub</a></li>
              <li><a href="https://discord.com/" className="flex items-center hover:text-orange-400 transition"><FaDiscord className="mr-2" /> Discord</a></li>
              <li><a href="https://linkedin.com/" className="flex items-center hover:text-orange-400 transition"><FaLinkedin className="mr-2" /> LinkedIn</a></li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4">Legal</h2>
            <ul className="space-y-2">
              <li><Link to="#" className="hover:text-orange-400 transition">Privacy Policy</Link></li>
              <li><Link to="#" className="hover:text-orange-400 transition">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 text-sm text-gray-400">
          <p>© 2025 YourName. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-orange-400 transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-orange-400 transition"><FaTwitter /></a>
            <a href="#" className="hover:text-orange-400 transition"><FaDribbble /></a>
            <a href="#" className="hover:text-orange-400 transition"><FaGithub /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
