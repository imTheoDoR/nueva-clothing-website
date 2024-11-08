"use client";

import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";
import {
  House,
  LayoutDashboard,
  Menu,
  Package2,
  PartyPopper,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";

const Sidebar = () => {
  const pathname = usePathname();

  const links = [
    {
      icon: House,
      label: "Pagina principală",
      href: "/",
    },
    {
      icon: LayoutDashboard,
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      icon: Package2,
      label: "Produse",
      href: "/dashboard/produse",
    },
    {
      icon: PartyPopper,
      label: "Evenimente",
      href: "/dashboard/evenimente",
    },
  ];

  return (
    <div className="relative">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            className="block lg:hidden absolute top-3 left-5 border-0"
            size="icon"
            variant="outline"
          >
            <Menu className="w-8 h-8" />
          </Button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="w-full bg-gradient-to-br from-nueva-gray2/75 to-nueva-black h-screen border-r border-nueva-gray/50 px-6 py-5 backdrop-blur-lg"
        >
          <div className="flex flex-col justify-between h-full">
            <div className="flex flex-col">
              <Image
                src="/images/logo.png"
                width={158}
                height={65}
                alt="Reyes Clothing logo"
                className="mx-auto w-32"
              />
              <p className="text-center text-xs uppercase mt-px">
                Zonă administrativă
              </p>
            </div>

            <ul className="lg:-mt-48 space-y-2">
              {links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className={cn(
                      "flex items-center space-x-2  border border-nueva-orange/10 px-5 py-3 rounded-30 hover:bg-nueva-dark duration-200",
                      pathname === link.href
                        ? "bg-nueva-dark cursor-not-allowed"
                        : "bg-nueva-gray/50"
                    )}
                  >
                    <link.icon className="text-nueva-orange w-5 h-5" />
                    <span className="text-sm">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <div>
              <UserButton />
            </div>
          </div>
        </SheetContent>
      </Sheet>

      <div className="fixed top-0 left-0 hidden lg:block max-w-[270px] w-full bg-gradient-to-br from-nueva-gray2/75 to-nueva-black h-screen border-r border-nueva-gray/50 px-6 py-5 backdrop-blur-lg">
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col">
            <Image
              src="/images/logo.png"
              width={158}
              height={65}
              alt="Reyes Clothing logo"
              className="mx-auto w-32"
            />
            <p className="text-center text-xs uppercase mt-px">
              Zonă administrativă
            </p>
          </div>

          <ul className="lg:-mt-48 space-y-2">
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className={cn(
                    "flex items-center space-x-2  border border-nueva-orange/10 px-5 py-3 rounded-30 hover:bg-nueva-dark duration-200",
                    pathname === link.href
                      ? "bg-nueva-dark cursor-not-allowed"
                      : "bg-nueva-gray/50"
                  )}
                >
                  <link.icon className="text-nueva-orange w-5 h-5" />
                  <span className="text-sm">{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>

          <div>
            <UserButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
