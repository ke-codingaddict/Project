import React from 'react';
import Image from 'next/image';
import SubHeading from './SubHeading';

const Chef = () => (
  <div className="section__padding bg-black bg-[url('/bg.png')] flex flex-col lg:flex-row justify-between items-center w-full gap-12 lg:gap-24" id="intro">
    <div className="flex-1 flex justify-center items-center relative">
         {/* Chef image placeholder */}
        <div className="w-full max-w-[500px] h-[400px] lg:h-[600px] relative">
            <Image 
              src="/images/KPC01803.jpg" 
              alt="chef" 
              layout="fill" 
              objectFit="cover"
              className="rounded-lg"
            />
        </div>
    </div>

    <div className="flex-1 flex flex-col justify-center items-center lg:items-start text-center lg:text-left w-full">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant py-4">What we believe in</h1>

      <div className="flex flex-col w-full mt-4 lg:mt-12">
        <p className="p__opensans text-white mb-8">
            Head Chef Berard, known simply as “Chef” to his team, has been part of Bravo! Restaurant since the very beginning. Born and raised in Seychelles, he later spent six years in Canada refining his culinary training and sharpening his craft.
        </p>

        <div className="flex justify-center items-center lg:justify-start lg:items-end mb-4">
          <div className="w-[47px] h-[40px] relative mr-4">
               {/* Quote image. original was quote.png. I'll use text quote or a simple Quote icon from react-icons. */}
               <span className="text-6xl text-white font-cormorant">“</span>
          </div>
          <p className="p__opensans">Chef’s philosophy is rooted in a simple belief: exceptional food begins with the finest ingredients and a true passion for culinary excellence.</p>
        </div>
        <p className="p__opensans">
          Each dish is thoughtfully prepared to tell a story… Every flavor carefully balanced and every plate crafted with purpose. Our aim is always to deliver an authentic waterfront dining experience in Seychelles that lingers in your memory long after the last bite.
        </p>
      </div>

      <div className="w-full mt-12">

      </div>
    </div>
  </div>
);

export default Chef;
