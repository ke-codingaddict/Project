"use client";
import React from "react";
import Link from "next/link";

function Navlinks({
  mobile = false,
  onClick,
}: {
  mobile?: boolean;
  onClick?: () => void;
}): React.ReactNode {
  const baseStyles = "text-sm font-bold text-black hover:text-[#e85f16]";

  return (
    <>
      <Link href="/" onClick={onClick} className={baseStyles}>
        Home
      </Link>
      <Link href="/about" onClick={onClick} className={baseStyles}>
        About
      </Link>
      <Link href="/services" onClick={onClick} className={baseStyles}>
        Services
      </Link>
      <Link href="/blog" onClick={onClick} className={baseStyles}>
        Blog
      </Link>
      <Link href="/contact-us" onClick={onClick} className={baseStyles}>
        Contact Us
      </Link>
    </>
  );
}

export default Navlinks;
