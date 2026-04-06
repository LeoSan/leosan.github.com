import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaFacebook, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  const contacts = [
    {
      platform: "GitHub",
      icon: <FaGithub className="w-12 h-12 mb-4 text-neutral-800 group-hover:text-white transition-colors duration-300" />,
      account: "cuenca623@gmail.com",
      link: "https://github.com/LeoSan",
      color: "hover:bg-neutral-800",
      borderColor: "border-neutral-200"
    },
    {
      platform: "LinkedIn",
      icon: <FaLinkedin className="w-12 h-12 mb-4 text-blue-600 group-hover:text-white transition-colors duration-300" />,
      account: "cuenca623@gmail.com",
      link: "https://www.linkedin.com/in/cuenca623/",
      color: "hover:bg-blue-600",
      borderColor: "border-blue-100"
    },
    {
      platform: "Facebook",
      icon: <FaFacebook className="w-12 h-12 mb-4 text-blue-500 group-hover:text-white transition-colors duration-300" />,
      account: "cuenca623@gmail.com",
      link: "https://www.facebook.com/eonara",
      color: "hover:bg-blue-500",
      borderColor: "border-blue-100"
    }
  ];

  return (
    <main className="w-full min-h-screen bg-neutral-100 py-12">
      <div className="container mx-auto px-4">
        
        {/* Title & Breadcrumb */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 pb-4 border-b border-neutral-200">
          <h1 className="text-4xl font-bold text-neutral-800 tracking-tight">Contact</h1>
          <nav className="text-neutral-500 mt-4 md:mt-0 font-medium">
            <ol className="flex space-x-2">
              <li>
                <Link to="/" className="text-primary hover:text-blue-600 transition-colors">Profile</Link>
              </li>
              <li><span className="mx-2">/</span></li>
              <li className="text-neutral-700 font-semibold">Feedback</li>
            </ol>
          </nav>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {contacts.map((contact, index) => (
            <div 
              key={index} 
              className={`group bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border ${contact.borderColor} flex flex-col items-center text-center ${contact.color}`}
            >
              {contact.icon}
              <h3 className="text-2xl font-bold text-neutral-800 group-hover:text-white transition-colors duration-300 mb-2">
                {contact.platform}
              </h3>
              <div className="flex items-center justify-center gap-2 text-neutral-500 group-hover:text-neutral-200 transition-colors duration-300 mb-6">
                <FaEnvelope className="w-4 h-4" />
                <span className="text-sm font-medium">{contact.account}</span>
              </div>
              <a 
                href={contact.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mt-auto px-8 py-3 bg-neutral-100 text-neutral-800 font-bold rounded-full group-hover:bg-white group-hover:text-neutral-900 transition-colors duration-300 w-full"
              >
                Connect
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
           <h2 className="text-2xl font-semibold text-neutral-700 mb-4">Let's build something beautiful together!</h2>
           <p className="text-neutral-500 max-w-2xl mx-auto">Feel free to reach out across any of these platforms. I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
        </div>

      </div>
    </main>
  );
}
