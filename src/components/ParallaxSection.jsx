import React from 'react';

export default function ParallaxSection() {
  return (
    <section 
      className="relative w-full py-32 bg-fixed bg-center bg-cover bg-no-repeat flex items-center justify-center transform transition-all duration-500" 
      style={{ backgroundImage: "url('/imagen/slider_3.jpg')" }}
    >
      <div className="absolute inset-0 bg-primary/70 mix-blend-multiply"></div>
      <div className="relative z-10 container mx-auto px-4 text-center">
        <blockquote className="text-2xl md:text-4xl text-white font-light italic leading-loose">
          <span className="font-bold">Martha Beck:</span> <br/>
          "The 'yes' is the emotion or inspiration that drives you to follow what you are passionate about; 
          The 'but' is the intrusion of fear that prevents you from doing it."
        </blockquote>
      </div>
    </section>
  );
}
