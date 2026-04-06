import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
            <Link to="/">
              <img src="/imagen/logo3.png" alt="Logo" className="w-24 md:w-32" />
            </Link>
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
          <Link id="touch-menu" className="mobile-menu" to="/">Profile</Link>
          <nav>
            <ul className="menu">
              <li className="activate"><Link to="/">Profile</Link></li>
              <li className=""><a href="#">Knowledge</a>
                <ul className="sub-menu">
                  <li><Link to="/back">Back-End</Link></li>
                  <li><Link to="/front">Front-End</Link></li>
                  <li><Link to="/ia">IA & Data Science</Link></li>
                  <li><Link to="/project">Project Management</Link></li>
                  <li><Link to="/block">Blockchain</Link></li>
                  <li><Link to="/courses">Courses</Link></li>
                </ul>
              </li>
              <li><Link to="/experience">Experience</Link></li>
              <li ><a href="desarrollo.html">Developing</a></li>
              <li ><a href="contactame.html">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
