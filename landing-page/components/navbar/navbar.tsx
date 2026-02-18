import Link from "next/link";

import { NavLinks } from "./navlinks";
import NavItem from "./navItem";

export default function Navbar() {
  return (
    <div className="items-center flex flex-col">
      <div className="bg-white w-full h-[80] pr-5 pl-5 rounded-lg items-center justify-between">
        <nav className=" w-full  flex flex-row py-5 items-center justify-center">
         <div> <Link href="/" className="text-xl font-bold text-blue">
            SmarterApp
          </Link>
          </div>
          <div className="flex gap-x-4 justify-centrt items-center ">
            
            {NavLinks.map((link) => (
              <NavItem key={link.name} item={{ href: link.href, label: link.name }}/>
             
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
}
