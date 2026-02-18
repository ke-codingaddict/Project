'use client';

import React from 'react';
import { MdOutlineClose } from 'react-icons/md';

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MenuModal: React.FC<MenuModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/90 p-2 md:p-8">
      <div className="relative w-full h-full max-w-7xl bg-black rounded-lg overflow-hidden flex flex-col">
        <div className="absolute top-2 right-2 md:top-4 md:right-4 z-50">
          <MdOutlineClose 
            fontSize={40} 
            className="text-white cursor-pointer hover:text-golden transition-colors" 
            onClick={onClose} 
          />
        </div>
        <div className="w-full h-full pt-16">
            <iframe 
                src="/Bravo-Menu/index.html" 
                className="w-full h-full border-none"
                title="Bravo Menu"
            />
        </div>
      </div>
    </div>
  );
};

export default MenuModal;
