"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import SubHeading from './SubHeading';

const galleryImages = [
  {
    src: "/images/KPC01707.jpg",
    title: "Culinary Artistry",
    description: "Dishes crafted with passion and precision."
  },
  {
    src: "/images/KPC01717.jpg",
    title: "Signature Cocktails",
    description: "Expertly mixed drinks for every palate."
  },
  {
    src: "/images/KPC01729.jpg",
    title: "Elegant Atmosphere",
    description: "Experience dining in a sophisticated setting."
  },
  {
    src: "/images/KPC01803.jpg",
    title: "Master Chef",
    description: "Led by our renowned culinary expert."
  },
  {
    src: "/images/KPC01959.jpg",
    title: "Unforgettable Events",
    description: "The perfect venue for your celebrations."
  },
  {
    src: "/images/KPC01906-Edit.jpg",
    title: "Decadent Desserts",
    description: "A sweet conclusion to your meal."
  }
];

const Gallery = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    const { current } = scrollRef;
    if (current) {
      if (direction === 'left') {
        current.scrollLeft -= 320;
      } else {
        current.scrollLeft += 320;
      }
    }
  };

  // Auto-scroll functionality
  React.useEffect(() => {
    const interval = setInterval(() => {
      scroll('right');
    }, 6000); // Scroll every 6 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center py-16 px-4 lg:px-16 bg-black w-full" id="gallery">
      <div className="text-center mb-12 max-w-[800px]">
        <SubHeading title="Menu Highlights" />
        <h1 className="headtext__cormorant text-golden mb-4">From Morning Coffee<br />to Weekend Brunch</h1>
        <p className="p__opensans text-gray-400 mt-4">
          From the first sip of our artisanal coffee to the last bite of our decadent brunch, every moment is crafted to delight. Join us for a weekend experience like no other.
        </p>
      </div>

      <div className="relative w-full">
        <div 
          className="flex flex-row overflow-x-scroll gap-8 no-scrollbar scroll-smooth px-4" 
          ref={scrollRef}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {galleryImages.map((item, index) => (
            <div 
              className="relative min-w-[300px] h-[400px] rounded-lg overflow-hidden flex-shrink-0 group cursor-pointer" 
              key={index}
            >
              <Image 
                src={item.src} 
                alt={item.title} 
                layout="fill" 
                objectFit="cover" 
                className="transition duration-500 ease-in-out transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6">
                <h3 className="font-cormorant text-2xl text-white mb-2 font-bold">{item.title}</h3>
                <p className="font-open-sans text-gray-300 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="absolute top-[50%] left-2 transform -translate-y-1/2 z-10 hidden md:block">
           <div 
             className="w-[50px] h-[50px] rounded-full bg-[#Dcca87] flex justify-center items-center cursor-pointer hover:bg-[#c5b573] transition shadow-lg"
             onClick={() => scroll('left')}
           >
             <BsArrowLeftShort className="text-white text-3xl" />
           </div>
        </div>
        <div className="absolute top-[50%] right-2 transform -translate-y-1/2 z-10 hidden md:block">
           <div 
             className="w-[50px] h-[50px] rounded-full bg-[#Dcca87] flex justify-center items-center cursor-pointer hover:bg-[#c5b573] transition shadow-lg"
             onClick={() => scroll('right')}
           >
             <BsArrowRightShort className="text-white text-3xl" />
           </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
