"use client";
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';

const WhatsAppButton = () => {
  return (
    <Link 
      href="https://wa.me/2484346020" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-10 right-10 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 z-50 flex justify-center items-center"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={32} />
    </Link>
  );
};

export default WhatsAppButton;
