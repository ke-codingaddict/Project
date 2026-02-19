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

    <div className="w-full max-w-[1300px] z-10 flex flex-col lg:flex-row justify-center items-center lg:items-start w-full gap-8 lg:gap-16">
      <div className="flex-1 flex flex-col justify-center items-center text-center lg:justify-end lg:items-end lg:text-right lg:pl-8">
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

      <div className="flex justify-center items-center my-8 lg:my-0">
        <div className="h-[500px] w-[150px] lg:h-[700px] lg:w-[200px] relative">
          <Image
            src="/images/knife2.png"
            alt="about_knife"
            layout="fill"
            objectFit="contain"
            className="opacity-80"
          />
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-center items-center text-center lg:justify-start lg:items-start lg:text-left">
        <h1 className="headtext__cormorant text-golden">Our History</h1>
        <Image
          src="/spoon.svg"
          alt="about_spoon"
          width={45}
          height={10}
          className="spoon__img mt-2 mb-4"
        />
        <p className="p__opensans  text-gray-400 mb-8 max-w-[500px] text-center">
          On 13th February 2010, Bravo! Restaurant opened its doors with a clear
          vision — to create a vibrant waterfront destination where great food,
          genuine connections, and island living come together. More than just a
          restaurant, Bravo! is a celebration of flavor, community, and the true
          spirit of Seychelles.
        </p>
      </div>
    </div>
  </div>
);

export default AboutUs;
