import React from 'react';

export default function Footer() {
  return (
    <>
      <footer className="bg-primary-light py-8">
        <div className="container mx-auto px-4 pb-4">
          <div className="flex flex-col md:flex-row items-center justify-between border-t border-primary pt-8">
            <div className="mb-4 md:mb-0 hover:opacity-80 transition-opacity">
              <a href="/">
                <img src="../public/imagen/logo.png" alt="Footer Logo" className="w-24 md:w-32" />
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
