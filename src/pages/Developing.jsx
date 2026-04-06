import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

export default function Developing() {
  return (
    <main className="w-full min-h-screen bg-neutral-100 py-12">
      <div className="container mx-auto px-4">
        
        {/* Title & Breadcrumb */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 pb-4 border-b border-neutral-200">
          <h1 className="text-4xl font-bold text-neutral-800 tracking-tight">Projects</h1>
          <nav className="text-neutral-500 mt-4 md:mt-0 font-medium">
            <ol className="flex space-x-2">
              <li>
                <Link to="/" className="text-primary hover:text-blue-600 transition-colors">Profile</Link>
              </li>
              <li><span className="mx-2">/</span></li>
              <li className="text-neutral-700 font-semibold">Developing</li>
            </ol>
          </nav>
        </div>

        {/* Quick Scroll Navigation */}
        <div className="flex flex-wrap gap-2 mb-12 justify-center">
          {projects.map((p) => (
            <button 
              key={p.id}
              onClick={() => {
                const el = document.getElementById(`section-${p.id}`);
                if(el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="bg-white px-4 py-2 rounded-full text-sm font-semibold text-neutral-600 shadow-sm border border-neutral-200 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
            >
              Projects {p.id}
            </button>
          ))}
        </div>

        {/* Projects List */}
        <div className="max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

      </div>
    </main>
  );
}
