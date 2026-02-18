import React from 'react';



const Footer = ({ children }: { children?: React.ReactNode }) => (
  <div className="w-full relative z-10 bg-black pt-16 sm:pt-24 flex flex-col justify-start items-center" id="login">
    {children}
    
    <div className="w-full flex justify-center items-center mt-12 p-8 pt-0">
      <p className="p__opensans text-white opacity-80 decoration-none">All rights Bravo restaurant {new Date().getFullYear()}</p>
    </div>
  </div>
);

export default Footer;
