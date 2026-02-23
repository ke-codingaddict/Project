import React from "react";

import AboutUs from "@/components/AboutUs";
import SpecialMenu from "@/components/SpecialMenu";
import Chef from "@/components/Chef";
import VideoIntro from "@/components/VideoIntro";
import FindUs from "@/components/FindUs";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import OurHistory from "@/components/OurHistory";

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      <AboutUs />
      <Gallery />
      <OurHistory />

      <Chef />
      <VideoIntro />
      <FindUs />
      <Footer />
    </main>
  );
}
