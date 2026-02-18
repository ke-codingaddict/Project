import React from 'react';
import Header from '@/components/Header';
import AboutUs from '@/components/AboutUs';
import SpecialMenu from '@/components/SpecialMenu';
import Chef from '@/components/Chef';
import VideoIntro from '@/components/VideoIntro';
import FindUs from '@/components/FindUs';
import Footer from '@/components/Footer';
import Gallery from '@/components/Gallery';

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <VideoIntro />
      <Gallery />
      <FindUs />
      <Footer />
    </main>
  );
}
