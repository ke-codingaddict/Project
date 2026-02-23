import React from "react";
import Image from "next/image";

const OurHistory = () => (
  <div
    className="relative flex justify-center items-center section__padding bg-black overflow-hidden"
    id="history"
  >
    <div className="absolute inset-0 bg-[url('/bg.png')] bg-cover bg-center bg-fixed z-0" />

    <div className="w-full max-w-[1300px] z-10 flex flex-col justify-center items-center text-center px-4">
      <div className="w-full lg:w-fit flex flex-col justify-center items-center text-center">
        <h1 className="headtext__cormorant text-golden">Our History</h1>
        <Image
          src="/spoon.svg"
          alt="about_spoon"
          width={45}
          height={10}
          className="spoon__img mt-2 mb-4"
        />
        <p className="p__opensans text-gray-400 mb-8 max-w-[500px] text-center">
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

export default OurHistory;
