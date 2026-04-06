import React from 'react';
import { FaCalendarAlt, FaCode, FaBuilding, FaEye, FaCommentAlt, FaExternalLinkAlt } from 'react-icons/fa';

export default function ProjectCard({ project, index }) {
  const isVideoArray = Array.isArray(project.video);

  return (
    <div id={`section-${project.id}`} className="flex flex-col md:flex-row bg-white rounded-2xl shadow-md overflow-hidden mb-8 border border-neutral-100 hover:shadow-xl transition-shadow duration-300">
      
      {/* Left Sidebar (Date & Tech) */}
      <div className="md:w-1/4 bg-neutral-50 p-6 flex flex-col items-center text-center border-b md:border-b-0 md:border-r border-neutral-200">
        <div className="flex flex-col items-center justify-center w-24 h-24 bg-white rounded-full shadow-sm mb-4 border-2 border-primary">
          <FaCalendarAlt className="text-primary text-xl mb-1" />
          <span className="text-sm font-bold text-neutral-500 uppercase">Year</span>
          <span className="font-extrabold text-neutral-800 leading-tight">{project.year}</span>
        </div>
        
        <div className="w-full mt-2">
          <h4 className="flex items-center justify-center gap-2 font-bold text-neutral-700 mb-4 pb-2 border-b border-neutral-200">
            <FaCode className="text-primary" /> Used Technology
          </h4>
          <div className="flex flex-wrap justify-center gap-2">
            {project.technologies.map((tech, idx) => (
              <span key={idx} className="bg-white border border-neutral-200 text-xs text-neutral-600 px-3 py-1.5 rounded-full font-medium shadow-sm hover:border-primary hover:text-primary transition-colors cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Right Content */}
      <div className="md:w-3/4 p-6 lg:p-8 flex flex-col justify-between">
        
        {/* Videos Container */}
        {project.video && (
          <div className={`grid gap-4 mb-6 ${isVideoArray ? 'grid-cols-2 lg:grid-cols-2' : 'grid-cols-1'}`}>
            {isVideoArray ? (
              project.video.map((vid, idx) => (
                <video key={idx} className="w-full rounded-lg shadow-sm border border-neutral-200" controls autoPlay={false} loop muted src={`/${vid}`}></video>
              ))
            ) : (
              <video className="w-full max-h-[300px] object-cover rounded-lg shadow-sm border border-neutral-200 bg-neutral-900" controls autoPlay={false} loop muted src={`/${project.video}`}></video>
            )}
          </div>
        )}

        {/* Project Info */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-800 to-neutral-500 flex items-center gap-2">
            {project.companyUrl && project.companyUrl !== "#" ? (
              <a href={project.companyUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-2">
                <FaBuilding className="text-primary text-xl" /> Company: {project.company}
              </a>
            ) : (
               <span className="flex items-center gap-2"><FaBuilding className="text-primary text-xl" /> Company: {project.company}</span>
            )}
          </h3>
          
          <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100">
            <h4 className="flex items-start gap-2 text-lg font-bold text-neutral-800 mb-2">
              <FaEye className="text-primary mt-1 shrink-0" /> 
              <span>Project: <span className="font-semibold text-primary">{project.projectName}</span></span>
            </h4>
            
            <p className="flex items-start gap-2 text-neutral-600 leading-relaxed">
              <FaCommentAlt className="text-neutral-400 mt-1 shrink-0" /> 
              <span><strong className="text-neutral-700">Description:</strong> {project.description}</span>
            </p>
          </div>

          {/* Links */}
          {project.links && project.links.length > 0 && (
            <div className="mt-6">
              <h5 className="font-bold text-neutral-700 mb-3 border-b border-neutral-200 pb-2">Examples & References</h5>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.links.map((link, idx) => (
                  <li key={idx}>
                    <a href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-blue-600 hover:text-primary transition-colors group">
                      <FaExternalLinkAlt className="text-xs text-blue-400 group-hover:text-primary transition-colors" />
                      <span className="truncate">{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
