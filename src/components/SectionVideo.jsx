import React from 'react';

export default function SectionVideo() {
  return (
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
  );
}
