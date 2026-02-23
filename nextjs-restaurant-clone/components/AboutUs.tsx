import React from "react";
import Image from "next/image";
import Button from "./Button";

const AboutUs = () => (
  <div
    className="relative flex justify-center items-center section__padding bg-black overflow-hidden"
    id="about"
  >
    <div className="absolute inset-0 bg-[url('/bg.png')] bg-cover bg-center bg-fixed z-0" />

    <div className="absolute inset-0 flex justify-center items-center z-0">
      <div className="w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] relative opacity-20 select-none"></div>
    </div>

    <div className="w-full max-w-[1300px] z-10 flex flex-col justify-center items-center text-center px-4">
      <div className="w-full lg:w-fit flex flex-col justify-center items-center text-center">
        <h1 className="headtext__cormorant text-golden">About Us</h1>
        <Image
          src="/spoon.svg"
          alt="about_spoon"
          width={45}
          height={10}
          className="spoon__img rotate-180 mb-4 mt-2"
        />
        <p className="p__opensans text-gray-400 mb-8 max-w-[500px] text-center">
          Bravo! Restaurant is a trendy casual dining restaurant set on the
          serene waterfront of Eden Island. We offer a vibrant yet relaxed
          dining atmosphere where fresh flavors, handcrafted dishes, and
          stunning marina views come together. Our versatile menu blends
          authentic Creole cuisine with carefully curated international
          favorites, ensuring something for every craving. Bravo! is the perfect
          waterfront restaurant in Seychelles to unwind, indulge, and savor an
          unforgettable island dining experience.
        </p>
      </div>
    </div>
  </div>
);

export default AboutUs;
