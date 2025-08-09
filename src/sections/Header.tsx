'use client';

import { useEffect, useState } from 'react';

export const Header = () => {
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id); // Set active section when it intersects
          }
        });
      },
      { threshold: 0.25 } // Change threshold to 0.25
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect(); // Cleanup observer when component unmounts
    };
  }, []);

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a
          href="#home"
          className={`nav-item ${activeSection === 'home' ? 'bg-white text-gray-900' : ''}`}
        >
          Home
        </a>
        <a
          href="#skills"
          className={`nav-item ${activeSection === 'skills' ? 'bg-white text-gray-900' : ''}`}
        >
          Skills
        </a>
        <a
          href="#projects"
          className={`nav-item ${activeSection === 'projects' ? 'bg-white text-gray-900' : ''}`}
        >
          Projects
        </a>
        <a
          href="#contact"
          className={`nav-item ${activeSection === 'contact' ? 'bg-white text-gray-900' : ''}`}
        >
          Contact
        </a>
      </nav>
    </div>
  );
};
