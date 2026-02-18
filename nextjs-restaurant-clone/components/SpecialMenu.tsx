'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import SubHeading from './SubHeading';
import MenuItem from './MenuItem';
import Button from './Button';
import MenuModal from './MenuModal';

// Mock Data
const wines = [
  { title: 'Colle Dei Vescovi', price: 'Scr.175/-', tags: 'Chardonnay IGT | Glass' },
  { title: 'Delle Venezie', price: 'Scr.175/-', tags: 'Pinot Grigio IGT | Glass' },
  { title: 'La Vierge', price: 'Scr.165/-', tags: 'Sauvignon Blanc | Glass' },
  { title: 'Kia Ora- Malborough', price: 'Scr.165/-', tags: 'Sauvignon Blanc | Glass' },
  { title: 'Haute Cabriere', price: 'Scr.195/-', tags: 'Pinot Noir | Glass' },
];

const cocktails = [
  { title: 'Lemon Daiquiri', price: 'Scr.195/-', tags: 'Angel | Coco rum, Passion fruit juice, Pineapple juice, Vodka' },
  { title: "Margarita", price: '$195/-', tags: ' | Tequila, Lime, Triple sec' },
  { title: 'Pinacolada', price: 'Scr.195/-', tags: 'Coconut Milk | Pineapple juice | Rum' },
  { title: 'Aperol Spirtz', price: 'Scr.195/-', tags: 'Prosecco | Aperol | Soda | Orange slice' },
  { title: 'Kir Royale', price: 'Scr.195/-', tags: 'Timeless Classic' },
];

const SpecialMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
  <div className="section__padding bg-black flex flex-col justify-center items-center" id="menu">
    <div className="mb-8 text-center">
      <SubHeading title="Menu that fits you palatte" />
      <h1 className="headtext__cormorant">Happy Hour Special</h1>
      <div className="flex flex-col gap-2 mt-4">
        <p className="p__opensans text-white text-xl">Monday to Thursday</p>
        <p className="p__opensans text-white text-xl">3pm to 6pm</p>
        <p className="p__cormorant text-golden text-2xl font-bold">50% Discount on All Starters and Cocktails</p>
      </div>
    </div>

    <div className="w-full my-8 flex flex-col lg:flex-row justify-center items-start gap-8 lg:gap-16">
      <div className="flex-1 w-full flex flex-col justify-center items-center">
        <p className="text-[45px] leading-[58.5px] font-semibold tracking-[0.04em] text-white font-cormorant mb-8">Wine & Beer</p>
        <div className="w-full flex flex-col my-8">
          {wines.map((wine, index) => (
            <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
          ))}
        </div>
      </div>

      <div className="w-full lg:w-[410px] md:w-[350px] relative">
         {/* Placeholder for menu image. 
             I'll use a cocktail shaker image or similar. */}
         <div className="h-[500px] lg:h-[650px] w-full relative">
            <Image 
                src="/images/KPC01729.jpg" 
                alt="menu__img" 
                layout="fill" 
                objectFit="cover"
                className="rounded-lg opacity-80"
            />
         </div>
      </div>

      <div className="flex-1 w-full flex flex-col justify-center items-center">
        <p className="text-[45px] leading-[58.5px] font-semibold tracking-[0.04em] text-white font-cormorant mb-8">Cocktails</p>
        <div className="w-full flex flex-col my-8">
          {cocktails.map((cocktail, index) => (
            <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
          ))}
        </div>
      </div>
    </div>

    <div className="mt-0">
      <Button name="View Menu" onClick={() => setIsMenuOpen(true)} />
      <MenuModal isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </div>
  </div>
  );
};

export default SpecialMenu;
