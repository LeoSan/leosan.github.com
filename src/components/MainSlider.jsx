import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

export default function MainSlider() {
  return (
    <div className="w-full relative h-[60vh] md:h-[80vh] bg-black group overflow-hidden">
      {/* Botón Anterior */}
      <button className="custom-prev absolute top-1/2 left-4 md:left-8 z-20 -translate-y-1/2 w-[50px] h-[50px] bg-black/40 hover:bg-black/70 text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-all shadow-lg cursor-pointer md:opacity-0 md:group-hover:opacity-100 flex-shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>

      {/* Botón Siguiente */}
      <button className="custom-next absolute top-1/2 right-4 md:right-8 z-20 -translate-y-1/2 w-[50px] h-[50px] bg-black/40 hover:bg-black/70 text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-all shadow-lg cursor-pointer md:opacity-0 md:group-hover:opacity-100 flex-shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      <Swiper
        modules={[Autoplay, Navigation]}
        navigation={{
          nextEl: '.custom-next',
          prevEl: '.custom-prev',
        }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-full"
      >
        {/* Slide 1 - Image */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img src="/imagen/slider_1.png" alt="Slider 1" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50 z-0"></div>
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <h2 className="text-white text-3xl md:text-5xl font-bold p-4 text-center drop-shadow-lg">
                "Change is the end result of all true learning." <br /> <span className="text-xl md:text-2xl font-light">Leo Buscaglia.</span>
              </h2>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 - Image */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img src="/imagen/slider_2.png" alt="Slider 2" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50 z-0"></div>
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <h2 className="text-white text-3xl md:text-5xl font-bold p-4 text-center drop-shadow-lg">
                If you fall seven times, get up eight.
              </h2>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 - Video MP4 */}
        <SwiperSlide>
          <div className="relative w-full h-full overflow-hidden bg-black">
            <video autoPlay muted loop playsInline className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover">
              <source src="/imagen/bg_video2.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/50 z-0"></div>
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <h2 className="text-white text-3xl md:text-5xl font-bold p-4 text-center drop-shadow-lg">
                Change is the end result of all true learning.
              </h2>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 4 - Video WebM */}
        <SwiperSlide>
          <div className="relative w-full h-full overflow-hidden bg-black">
            <video autoPlay muted loop playsInline className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover" poster="/imagen/slider_3.jpg">
              <source src="/imagen/slider_3.webm" type="video/webm" />
            </video>
            <div className="absolute inset-0 bg-black/50 z-0"></div>
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <p className="text-white text-2xl md:text-4xl font-light p-4 text-center drop-shadow-lg">
                The Greatness. It's a lot of little things done right.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
