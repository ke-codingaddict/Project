'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import SubHeading from './SubHeading';
import Button from './Button';
import MenuModal from './MenuModal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
  <div className="bg-black section__padding flex flex-col-reverse lg:flex-row justify-between items-center w-full" id="home">
    <div className="flex-1 w-full flex flex-col justify-center items-start lg:pr-20">
      <SubHeading title="Chase the new flavour" />
      <h1 className="headtext__cormorant mb-8 text-golden">The Key To Fine Dining</h1>
      <p className="p__opensans mb-8 text-gray-400 max-w-[450px]">
        Experience a symphony of flavors crafted with passion. Our menu is a celebration of culinary artistry, designed to ignite your senses and create unforgettable moments.
      </p>
      <div className="flex gap-4">
        
        <Button name="View Menu" onClick={() => setIsMenuOpen(true)} />
        <MenuModal isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      </div>
    </div>

    <div className="flex-1 w-full flex justify-center items-center relative mt-12 lg:mt-0">
      
       <div className="w-full max-w-[600px] h-[400px] lg:h-[600px] relative">
            <Image 
              src="/images/_DSC0086-Edit-4.jpg"
              alt="header_img"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
              priority
            />
       </div>
    </div>
  </div>
  );
};

export default Header;
