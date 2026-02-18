import React from 'react';
import Image from 'next/image';
import SubHeading from './SubHeading';

const FindUs = () => (
  <div className="section__padding bg-black w-full" id="contact">
    <div className="flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-24 max-w-[1300px] mx-auto">
      <div className="flex-1 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
        <SubHeading title="Contact" />
        <h1 className="headtext__cormorant mb-8">Contact Us</h1>
        <div className="flex flex-col gap-4">
          
          <p className="p__opensans text-gray-400">Eden Island, Seychelles</p>
          <p className="p__opensans text-gray-400">Email: <a href="mailto:bravo@seychelles.net" className="font-bold text-[#DCCA87] hover:text-white lowercase">bravo@seychelles.net</a></p>
          <p className="p__opensans text-gray-400">Mobile: <a href="tel:+2484346020" className="font-bold text-[#DCCA87] hover:text-white">+248 434 6020</a></p>
          <p className="p__cormorant text-golden mt-4 mb-2">Opening Hours</p>
          <p className="p__opensans">Mon - Sat: 12:00 pm - 10:00 pm</p>
          <p className="p__opensans">Sun: 12:00 pm - 10:00 pm</p>
        </div>
      
      </div>

      <div className="hidden lg:flex lg:flex-1 lg:justify-center lg:items-center relative">
       
        <div className="w-full max-w-[500px] h-[300px] lg:h-[500px] relative">
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
