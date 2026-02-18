import Navlinks from "@/components/Navlinks";
import { Heart } from "lucide-react";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b bg-white">
      <div className="mx-auto max-w-7xl ">
        <div className="flex h-16 justify-between items-start">
          <Link href="/">
           <Heart className="text-[#e85f16] w-20 h-20"></Heart>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Navlinks />
          </div>
        </div>
      </div>
    </nav>
  );
}
