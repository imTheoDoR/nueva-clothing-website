"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const links = [
    {
      label: "Acasă",
      href: "/",
    },
    {
      label: "Magazin",
      href: "/magazin",
    },
    {
      label: "Evenimente",
      href: "/evenimente",
    },
    {
      label: "Contact",
      href: "/contact",
    },
    {
      label: "Depune CV",
      href: "/depune-cv",
      isButton: true,
    },
  ];

  return (
    <nav className="container-sm lg:container bg-nueva-black/50 text-nueva-white rounded-none lg:rounded-30 mt-0 lg:mt-5 py-2 z-20 relative backdrop-blur-lg">
      <div className="w-full flex items-center justify-between">
        <Link href="/">
          <Image
            src="/images/logo.png"
            width={158}
            height={65}
            alt="Nueva Clothing Logo"
            className="w-32"
          />
        </Link>

        <ul className="hidden lg:flex items-center gap-x-16">
          {links.map((link) =>
            link.isButton ? (
              <li
                key={link.label}
                className="block text-nueva-white bg-nueva-orange hover:text-nueva-white/70 hover:bg-nueva-orange/50 duration-200 rounded-30 font-bold uppercase ml-10"
              >
                <Link href={link.href} className="block py-3 px-6">
                  {link.label}
                </Link>
              </li>
            ) : (
              <li
                key={link.label}
                className={cn(
                  "block hover:text-nueva-orange duration-200",
                  pathname === link.href
                    ? "text-nueva-orange"
                    : "text-nueva-white"
                )}
              >
                <Link href={link.href} className="block">
                  {link.label}
                </Link>
              </li>
            )
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
