import React from 'react';

const MenuItem = ({ title, price, tags }: { title: string, price: string, tags: string }) => (
  <div className="w-full my-4 flex flex-col">
    <div className="flex justify-between items-center">
      <div className="flex-1">
        <p className="p__cormorant text-golden">{title}</p>
      </div>
      <div className="w-[90px] h-[1px] bg-golden mx-4" />
      <div className="flex justify-end items-end">
        <p className="p__cormorant">{price}</p>
      </div>
    </div>

    <div className="w-full mt-2">
      <p className="p__opensans text-gray-400 text-xs">{tags}</p>
    </div>
  </div>
);

export default MenuItem;
