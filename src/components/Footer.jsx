import React from 'react';

export default function Footer() {
  return (
    <>
      {/* Media Section */}
      <section className="bg-neutral-100 py-16 -mt-16 relative z-20">
        <div className="container mx-auto px-4 flex justify-center">
          <div className="w-full max-w-4xl bg-white p-4 shadow-xl rounded hover:scale-[1.02] transition-transform duration-300">
            <div className="aspect-w-16 aspect-h-9">
              <iframe 
                className="w-full h-64 md:h-[500px] rounded"
                src="https://www.youtube.com/embed/uU85zi3htlg?autoplay=0" 
                title="YouTube Video"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Legal */}
      <footer className="bg-primary-light py-8">
        <div className="container mx-auto px-4 pb-4">
          <div className="flex flex-col md:flex-row items-center justify-between border-t border-primary pt-8">
            <div className="mb-4 md:mb-0 hover:opacity-80 transition-opacity">
              <a href="/">
                <img src="/imagen/logo.png" alt="Footer Logo" className="w-24 md:w-32" />
              </a>
            </div>
            
            <div className="text-white text-sm text-center md:text-right font-light tracking-wider">
              <p>Development 2015 - {new Date().getFullYear()}, All Rights Reserved. &copy;</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
