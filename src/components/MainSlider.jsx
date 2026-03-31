import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

export default function MainSlider() {
  return (
    <div className="w-full relative h-[60vh] md:h-[80vh] bg-black">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="w-full h-full"
      >
        {/* Slide 1 - Image */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img src="/imagen/slider_1.png" alt="Slider 1" className="w-full h-full object-cover opacity-70" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-white text-3xl md:text-5xl font-bold bg-black/50 p-4 rounded text-center">
                "Change is the end result of all true learning." <br /> <span className="text-xl md:text-2xl font-light">Leo Buscaglia.</span>
              </h2>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 - Image */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img src="/imagen/slider_2.png" alt="Slider 2" className="w-full h-full object-cover opacity-70" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-white text-3xl md:text-5xl font-bold bg-black/50 p-4 rounded text-center">
                If you fall seven times, get up eight.
              </h2>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 - Video MP4 */}
        <SwiperSlide>
          <div className="relative w-full h-full overflow-hidden">
            <video autoPlay muted loop playsInline className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover opacity-60">
              <source src="/imagen/bg_video2.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <h2 className="text-white text-3xl md:text-5xl font-bold bg-black/50 p-4 rounded text-center">
                Change is the end result of all true learning.
              </h2>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 4 - Video WebM */}
        <SwiperSlide>
          <div className="relative w-full h-full overflow-hidden">
            <video autoPlay muted loop playsInline className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover opacity-60" poster="/imagen/slider_3.jpg">
              <source src="/imagen/slider_3.webm" type="video/webm" />
            </video>
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <p className="text-white text-2xl md:text-4xl font-light bg-black/50 p-4 rounded text-center">
                The Greatness. It's a lot of little things done right.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
