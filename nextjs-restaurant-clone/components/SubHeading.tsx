import React from 'react';
import Image from 'next/image';

const SubHeading = ({ title }: { title: string }) => (
  <div className="mb-4">
    <p className="p__cormorant">{title}</p>
    <div className="mt-2">
      <Image src="/spoon.svg" alt="spoon" width={45} height={10} className="spoon__img" />
    </div>
  </div>
);

export default SubHeading;
