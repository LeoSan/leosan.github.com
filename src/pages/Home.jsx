import React from 'react';
import MainSlider from '../components/MainSlider';
import MainGrid from '../components/MainGrid';
import ParallaxSection from '../components/ParallaxSection';
import SectionVideo from '../components/SectionVideo';

export default function Home() {
  return (
    <>
      <MainSlider />
      <MainGrid />
      <ParallaxSection />
      <SectionVideo />
    </>
  );
}
