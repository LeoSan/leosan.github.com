import React, { useState, useEffect } from 'react';

const words = [
  'Cuenca', 'Architect', 'Develop', 'Analyze Data', 'Model',
  'Visualize', 'Predict', 'Testing', 'Deploy', 'Optimize',
  'Design', 'Evaluate', 'Encode', 'Innovate', 'Learn', 'Teach'
];

export default function Header() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="bg-primary-light w-full">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col items-center text-white mb-6 md:mb-0">
          <div className="rotarY">
            <a href="/">
              <img src="/imagen/logo2.png" alt="Logo" className="w-24 md:w-32" />
            </a>
          </div>
          <div className="mt-4 text-3xl md:text-5xl font-bold flex items-center gap-3">
            <span>Leonard</span>
            <span className="inline-block overflow-hidden relative h-10 md:h-14">
              <span className="block animate-pulse text-neutral-100 transition-all duration-300">
                {words[currentWordIndex]}
              </span>
            </span>
          </div>
        </div>


        <div className="h_menu">
          <a id="touch-menu" className="mobile-menu" href="#">Profile</a>
          <nav>
            <ul className="menu">
              <li className="activate"><a href="index.html">Profile</a></li>
              <li className=""><a href="#">Knowledge</a>
                <ul className="sub-menu">
                  <li><a href="back.html">Back-End</a></li>
                  <li><a href="front.html">Front-End</a></li>
                  <li><a href="gestion.html">Project Management</a></li>
                  <li><a href="block.html">Blockchain</a></li>
                </ul>
              </li>
              <li ><a href="experiencia.html">Experience</a></li>
              <li ><a href="desarrollo.html">Developing</a></li>
              <li ><a href="contactame.html">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
