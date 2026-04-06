import React, { useState } from 'react';
import { experiences } from '../data/experience';
import { FaBuilding, FaMapMarkerAlt, FaGlobe, FaCogs, FaCheckCircle, FaBriefcase } from 'react-icons/fa';

export default function Timeline() {
  const [activeItem, setActiveItem] = useState(experiences[0].id);

  return (
    <div className="py-12 bg-white rounded-xl shadow-xl overflow-hidden mt-8 text-neutral-700">
      <div className="flex flex-col lg:flex-row relative">
        {/* Navigation Sidebar */}
        <div className="lg:w-1/4 bg-neutral-50 p-6 lg:border-r border-neutral-200">
          <ul className="space-y-4 relative">
            {/* Connecting line */}
            <div className="absolute left-[27px] top-4 bottom-4 w-1 bg-neutral-200 rounded-full z-0 hidden lg:block"></div>
            
            {experiences.map((exp) => (
              <li key={exp.id} className="relative z-10 flex items-center gap-4 group">
                <button 
                  onClick={() => setActiveItem(exp.id)}
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 shadow-md transform hover:scale-110 
                    ${activeItem === exp.id ? 'bg-primary text-white scale-110' : 'bg-white text-primary border-2 border-primary hover:bg-neutral-100'}`}
                >
                  {exp.id}
                </button>
                <div className="flex-1 cursor-pointer" onClick={() => setActiveItem(exp.id)}>
                  <p className={`font-semibold text-lg transition-colors duration-300 ${activeItem === exp.id ? 'text-primary' : 'text-neutral-500 group-hover:text-primary'}`}>
                    {exp.company}
                  </p>
                  <p className="text-sm text-neutral-400">{exp.year}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Content Area */}
        <div className="lg:w-3/4 p-6 lg:p-12 min-h-[500px]">
          {experiences.map((exp) => (
            <div 
              key={`content-${exp.id}`} 
              className={`transition-all duration-500 transform ${activeItem === exp.id ? 'opacity-100 translate-x-0 block' : 'opacity-0 translate-x-10 hidden'}`}
            >
              <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-6">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500 mb-2">
                    {exp.company}
                  </h2>
                  <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold mb-4 border border-blue-200">
                    <FaBriefcase className="w-4 h-4" />
                    <span>{exp.position}</span>
                  </div>
                </div>
                
                {/* Fallback image rendering (as we don't know if these paths resolve) */}
                <div className="hidden md:block w-32 h-auto object-contain bg-white p-2 rounded-lg shadow-sm border border-neutral-100 flex items-center justify-center min-h-[60px]">
                  <FaBuilding className="text-4xl text-neutral-300" />
                  {/* <img src={`/${exp.logo}`} alt={exp.company} className="max-w-full max-h-full object-contain" onError={(e) => e.target.style.display = 'none'} /> */}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Column: Details */}
                <div className="space-y-6">
                  <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-100 shadow-sm transition hover:shadow-md">
                    <h3 className="text-xl font-bold mb-4 text-primary border-b border-neutral-200 pb-2">Information</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <FaMapMarkerAlt className="text-primary mt-1 mr-3 text-lg" />
                        <div>
                          <span className="block text-sm text-neutral-500 font-semibold uppercase tracking-wider">Place</span>
                          <span className="text-neutral-800 font-medium">{exp.place}</span>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <FaGlobe className="text-primary mt-1 mr-3 text-lg" />
                        <div>
                          <span className="block text-sm text-neutral-500 font-semibold uppercase tracking-wider">Website</span>
                          <a href={exp.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 font-medium hover:underline break-all">
                            {exp.website}
                          </a>
                        </div>
                      </div>

                      {exp.technologies && (
                        <div className="flex items-start">
                          <FaCogs className="text-primary mt-1 mr-3 text-lg shrink-0" />
                          <div>
                            <span className="block text-sm text-neutral-500 font-semibold uppercase tracking-wider">Technologies</span>
                            <div className="flex flex-wrap gap-2 mt-1">
                              {exp.technologies.split(',').map((tech, i) => (
                                <span key={i} className="bg-neutral-200 text-neutral-700 px-2 py-1 rounded text-xs font-medium">
                                  {tech.trim()}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Right Column: Responsibilities */}
                <div>
                  <div className="bg-white p-6 rounded-xl border border-neutral-100 shadow-sm transition hover:shadow-md h-full">
                    <h3 className="text-xl font-bold mb-4 text-primary border-b border-neutral-200 pb-2">Responsibilities</h3>
                    <ul className="space-y-3">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start text-neutral-700">
                          <FaCheckCircle className="text-green-500 mt-1.5 mr-3 shrink-0" />
                          <span className="leading-relaxed">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
