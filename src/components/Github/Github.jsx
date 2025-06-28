import React from 'react';
import { useLoaderData } from 'react-router-dom';

export default function Github() {
  const data = useLoaderData();

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#000428] to-[#004e92] text-white py-20 px-6 overflow-hidden">
      
      {/* Floating Squares Background */}
      <div className="animated-bg-squares z-0">
        {Array.from({ length: 30 }).map((_, i) => {
          const top = Math.floor(Math.random() * 100);
          const left = Math.floor(Math.random() * 100);
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
      </div>

      {/* GitHub Card */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
        <img
          src={data.avatar_url}
          alt="GitHub Avatar"
          className="w-48 h-48 rounded-full mb-8 glow-avatar transition-transform duration-300 hover:scale-105"
        />

        <h2 className="text-5xl font-bold mb-3 text-[#00F5FF]">GitHub Profile</h2>
        <p className="text-xl text-cyan-300 mb-8">@{data.login}</p>

        <div className="grid grid-cols-2 gap-10 w-full bg-gradient-to-br from-[#b2bae6] to-[#26D0CE] text-gray-900 p-10 rounded-2xl shadow-2xl hover:shadow-[#00F5FF] transition-all duration-300">
          <div>
            <h3 className="text-2xl font-semibold">Followers</h3>
            <p className="text-3xl font-bold text-[#004e92]">{data.followers}</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold">Following</h3>
            <p className="text-3xl font-bold text-[#004e92]">{data.following}</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold">Public Repos</h3>
            <p className="text-3xl font-bold text-[#004e92]">{data.public_repos}</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold">GitHub URL</h3>
            <a
              href={data.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#004e92] underline hover:text-[#00F5FF]"
            >
              Visit Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/Beast-1-3');
  return response.json();
};
