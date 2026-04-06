import React from 'react';
import Timeline from '../components/Timeline';
import { Link } from 'react-router-dom';

export default function Experience() {
  return (
    <main className="w-full min-h-screen bg-neutral-100 py-12">
      <div className="container mx-auto px-4">

        {/* Title & Breadcrumb */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 pb-4 border-b border-neutral-200">
          <h1 className="text-4xl font-bold text-neutral-800 tracking-tight">Experience</h1>
          <nav className="text-neutral-500 mt-4 md:mt-0 font-medium">
            <ol className="flex space-x-2">
              <li>
                <Link to="/" className="text-primary hover:text-blue-600 transition-colors">Profile</Link>
              </li>
              <li><span className="mx-2">/</span></li>
              <li className="text-neutral-700 font-semibold">Experience</li>
            </ol>
          </nav>
        </div>


        <Timeline />

      </div>
    </main>
  );
}
