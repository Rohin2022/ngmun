"use client";

import { Button } from "@/components/shadcnComponents/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Register', href: '/register' },
    { name: 'Event Information', href: '/info' },
    { name: 'Committees', href: '/committees' },
    { name: 'Staff', href: '/staff' }
  ];

  return (
    <nav className="fixed top-2 left-0 right-0 w-full h-12 md:h-16 z-[4000]">
      <div className={`h-full w-full transition-all duration-300`}>
        <div className="h-full md:max-w-4xl w-full px-4 mx-auto">
          <div className={`flex h-full gap-2 w-full items-center justify-between md:rounded-full transition-all duration-300 ${
            scrolled ? 'md:bg-white/30 md:backdrop-blur-md md:px-6' : ''
          }`}>
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
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-4 lg:gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative pb-1 transition-colors duration-300 ${
                    scrolled ? 'text-gray-800' : 'text-primary-foreground'
                  } hover:opacity-80 text-sm`}
                >
                  {item.name}
                  {pathname === item.href && (
                    <span className={`absolute bottom-0 left-0 w-full h-0.5 ${
                      scrolled ? 'bg-gray-800' : 'bg-primary'
                    }`}></span>
                  )}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              className="md:hidden"
              size="icon"
            >
              <Menu className={`h-6 w-6 ${scrolled ? 'text-gray-800' : 'text-primary-foreground'}`} />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}