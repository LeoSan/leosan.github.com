import React from 'react';
import { FaLightbulb, FaRocket, FaFlag, FaFlask } from 'react-icons/fa';

export default function MainGrid() {
  return (
    <section className="bg-neutral-100 py-10 md:py-16">
      <div className="container mx-auto px-4">
        
        {/* Top Grid */}
        <div className="bg-neutral-200 p-8 rounded-lg flex flex-col md:flex-row items-center gap-8 mb-12 shadow-sm relative overflow-hidden">
          <div className="text-primary-light bg-white p-6 rounded-full shadow-inner">
            <FaLightbulb className="text-6xl" />
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl text-neutral-500 font-bold leading-relaxed">
              Young entrepreneur, web media and infrastructure builder, enthusiastic, free innovator, looking for new goals and working to achieve them.
            </h3>
          </div>
        </div>

        {/* 4 Span Grids */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Profile/CV Card */}
          <div className="bg-white rounded p-6 shadow-[inset_0px_-1px_1px_rgb(216,216,216)] hover:-translate-y-2 transition-transform duration-300 relative group text-center flex flex-col items-center">
            <div className="overflow-hidden rounded-full w-32 h-32 mb-4 mt-4 shadow-lg">
              <img src="/imagen/yo_2023.png" alt="Profile" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="absolute -bottom-5">
              <a href="/legacy_backup/cv_doc/CV_2026_Espaniol.pdf" target="_blank" rel="noreferrer" className="inline-block px-8 py-3 bg-secondary hover:bg-red-500 text-white shadow-[0_4px_#ab3c3c] font-bold uppercase rounded transition-colors">
                Read more...
              </a>
            </div>
          </div>

          {/* To Play Card */}
          <div className="bg-white rounded p-6 shadow-[inset_0px_-1px_1px_rgb(216,216,216)] hover:-translate-y-2 transition-transform duration-300 relative group text-center flex flex-col items-center pb-12">
            <FaRocket className="text-5xl text-primary-light mt-4 mb-4 group-hover:text-secondary group-hover:scale-110 transition-all duration-300" />
            <h3 className="uppercase text-xl text-neutral-500 font-bold mb-4">To play</h3>
            <p className="text-sm text-neutral-700 leading-relaxed mb-6">
              The fun of creating is innovating when you enjoy your work, knowing that we feel good about ourselves, everything is fine. linked to our self-esteem.
            </p>
            <div className="absolute -bottom-5">
              <a href="https://github.com/LeoSan" className="inline-block px-8 py-3 bg-white text-primary border border-primary shadow-[0_4px_#47817E] group-hover:bg-secondary group-hover:text-white group-hover:shadow-[0_4px_#ab3c3c] font-bold uppercase rounded transition-all">
                Leer Mas
              </a>
            </div>
          </div>

          {/* To Learn Card */}
          <div className="bg-white rounded p-6 shadow-[inset_0px_-1px_1px_rgb(216,216,216)] hover:-translate-y-2 transition-transform duration-300 relative group text-center flex flex-col items-center pb-12">
            <FaFlag className="text-5xl text-primary-light mt-4 mb-4 group-hover:text-secondary group-hover:scale-110 transition-all duration-300" />
            <h3 className="uppercase text-xl text-neutral-500 font-bold mb-4">To learn</h3>
            <p className="text-sm text-neutral-700 leading-relaxed mb-6">
              The best way to tackle challenges is to grab your best tools and start a hands-on project. Since the best way to learn is by doing.
            </p>
            <div className="absolute -bottom-5">
              <a href="https://github.com/LeoSan" className="inline-block px-8 py-3 bg-white text-primary border border-primary shadow-[0_4px_#47817E] group-hover:bg-secondary group-hover:text-white group-hover:shadow-[0_4px_#ab3c3c] font-bold uppercase rounded transition-all">
                Leer Mas
              </a>
            </div>
          </div>

          {/* To Teach Card */}
          <div className="bg-white rounded p-6 shadow-[inset_0px_-1px_1px_rgb(216,216,216)] hover:-translate-y-2 transition-transform duration-300 relative group text-center flex flex-col items-center pb-12">
            <FaFlask className="text-5xl text-primary-light mt-4 mb-4 group-hover:text-secondary group-hover:scale-110 transition-all duration-300" />
            <h3 className="uppercase text-xl text-neutral-500 font-bold mb-4">To teach</h3>
            <p className="text-sm text-neutral-700 leading-relaxed mb-6">
              Teach others the best way to give back and strengthen our skills and knowledge. Let's pronounce the mantra Let's do good without looking at who!!!
            </p>
            <div className="absolute -bottom-5">
              <a href="https://github.com/LeoSan" className="inline-block px-8 py-3 bg-white text-primary border border-primary shadow-[0_4px_#47817E] group-hover:bg-secondary group-hover:text-white group-hover:shadow-[0_4px_#ab3c3c] font-bold uppercase rounded transition-all">
                Leer Mas
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
