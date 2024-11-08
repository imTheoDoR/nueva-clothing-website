"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
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

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav className="container-sm lg:container bg-nueva-black/50 text-nueva-white rounded-none lg:rounded-30 mt-0 lg:mt-5 py-2 z-20 relative backdrop-blur-lg">
      <div className="w-full flex items-center justify-between px-5 lg:px-0">
        <Link href="/">
          <Image
            src="/images/logo.png"
            width={69}
            height={69}
            alt="Reyes Clothing Logo"
            className="h-[34px]"
          />
        </Link>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="block lg:hidden focus:bg-transparent focus:text-nueva-white hover:bg-inherit hover:text-nueva-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Menu className="w-8 h-8" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="w-full bg-nueva-gray/50 backdrop-blur-xl border-none"
          >
            <ul className="flex space-y-8 flex-col justify-center items-center text-xl mt-24">
              {links.map((link) =>
                link.isButton ? (
                  <li
                    key={link.label}
                    className="block text-nueva-white bg-nueva-orange hover:text-nueva-white/70 hover:bg-nueva-orange/50 duration-200 rounded-30 font-bold uppercase"
                  >
                    <Link href={link.href} className="block py-3 px-10">
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
          </SheetContent>
        </Sheet>

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
