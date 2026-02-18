import React from 'react';
import Image from 'next/image';
import Button from './Button';

const AboutUs = () => (
  <div className="relative flex justify-center items-center section__padding bg-black overflow-hidden" id="about">
    {/* Background Image is set in global CSS or here. `app_bg` class was used in original. 
        But `about` also had specific styles. 
        I'll add the background pattern here. */}
    <div className="absolute inset-0 bg-[url('/bg.png')] bg-cover bg-center bg-fixed z-0" />
    
    <div className="absolute inset-0 flex justify-center items-center z-0">
        {/* Placeholder for G overlay image. I'll use text as fallback. */}
        <div className="w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] relative opacity-20 select-none">
             {/* <Image src="/G.png" layout="fill" objectFit="contain" alt="G_overlay" /> */}
             <span className="text-[300px] lg:text-[400px] font-bold text-golden leading-none flex items-center justify-center">G</span>
        </div>
    </div>

    <div className="w-full max-w-[1300px] z-10 flex flex-col lg:flex-row justify-center items-center w-full gap-8 lg:gap-16">
      <div className="flex-1 flex flex-col justify-end items-end text-right">
        <h1 className="headtext__cormorant text-golden">About Us</h1>
        <Image src="/spoon.svg" alt="about_spoon" width={45} height={10} className="spoon__img rotate-180 mb-4 mt-2" />
        <p className="p__opensans text-gray-400 mb-8 max-w-[500px]">
          At Bravo, we blend tradition with innovation to bring you an unforgettable dining experience. Our commitment to quality and service ensures that every visit is a special occasion.
        </p>
        
      </div>

      <div className="flex justify-center items-center my-8 lg:my-0">
         {/* Knife image placeholder */}
         <div className="h-[500px] w-[80px] lg:h-[700px] lg:w-[100px] relative">
            {/* Using a tall thin image or just the knife if I had it. 
                I'll use a placeholder of a knife from web or just a div. 
                I will skip the knife image if I can't find a good vertical one, or use a generic one. */}
            <Image 
                src="/knife.avif" 
                alt="about_knife"
                layout="fill"
                objectFit="contain" // Using cover for placeholder but original was contain of a transparent png
                className="opacity-80"
            />
         </div>
      </div>

      <div className="flex-1 flex flex-col justify-start items-start text-left">
        <h1 className="headtext__cormorant text-golden">Our History</h1>
        <Image src="/spoon.svg" alt="about_spoon" width={45} height={10} className="spoon__img mt-2 mb-4" />
        <p className="p__opensans text-gray-400 mb-8 max-w-[500px]">
          Established in 2021, Bravo started as a humble bistro and has grown into a culinary landmark. Our journey is defined by a passion for food and a dedication to our community.
        </p>
        
      </div>
    </div>
  </div>
);

export default AboutUs;
