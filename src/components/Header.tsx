"use client";

import { Button } from "@/components/shadcnComponents/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Committees', href: '/committees' },
    { name: 'Staff', href: '/staff' }
  ];

  return (
    <nav className="bg-transparent top-0 left-0 right-0 w-full fixed max-w-full h-12 md:h-16 z-[4000]">
      <div className="h-full w-full px-4 md:px-[20%] mx-auto max-w-screen-2xl">
        <div className="flex h-full gap-2 w-full items-center justify-between">
          <Link href="/" className="flex gap-2 h-full items-center">
            <Image
              unoptimized
              src="/debateMUN.png"
              alt="Logo"
              width={40}
              height={40}
              className="md:w-[50px] md:h-[50px]"
              loading="eager"
            />
          </Link>
          <div className="md:flex items-center gap-4 lg:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-primary-foreground relative pb-1`}
              >
                {item.name}
                {pathname === item.href && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></span>
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}