import React from 'react';
import Image from 'next/image';
import SubHeading from './SubHeading';

const FindUs = () => (
  <div className="section__padding bg-black w-full" id="contact">
    <div className="flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-24 max-w-[1300px] mx-auto">
      <div className="flex-1 flex flex-col justify-center items-start">
        <SubHeading title="Contact" />
        <h1 className="headtext__cormorant mb-8">Find Us</h1>
        <div className="flex flex-col gap-4">
          <p className="p__opensans text-gray-400">Eden Island, Seychelles</p>
          <p className="p__opensans text-gray-400">Email: bravo@seychelles.net</p>
          <p className="p__opensans text-gray-400">Mobile: +248 434 6020</p>
          <p className="p__cormorant text-golden mt-4 mb-2">Opening Hours</p>
          <p className="p__opensans">Mon - Fri: 10:00 am - 02:00 am</p>
          <p className="p__opensans">Sat - Sun: 10:00 am - 03:00 am</p>
        </div>
      
      </div>

      <div className="flex-1 flex justify-center items-center relative">
        {/* Placeholder image for FindUs if findus.png is not available in copied assets.
            I will use a placeholder or verify if I have it. 
            repo had src/assets/bg.png, sign.png, spoon.svg. NO FINDUS IMAGE.
            I will use a random food image from unsplash or just a placeholder. */}
        <div className="w-full max-w-[500px] h-[500px] relative">
             <Image 
                src="/images/KPC01763.jpg" 
                alt="finus_img" 
                layout="fill"
                objectFit="cover"
                className="rounded-lg opacity-80"
             />
        </div>
      </div>
    </div>
  </div>
);

export default FindUs;
