"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItemProps {
  item: {
    href: string;
    label: string;
  };
}

const NavItem = ({ item }: NavItemProps) => {
  const pathName = usePathname();
  const isActive = pathName === item.href;
  return (
    <Link
      href={item.href}
      className={`px-4 py-2 rounded-md ${
        isActive ? "text-blue-600 font-semibold" : "text-gray-600  font-bold"
      }`}
    >
      {item.label}
    </Link>
  );
};

export default NavItem;
