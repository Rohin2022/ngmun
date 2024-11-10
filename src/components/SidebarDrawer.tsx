"use client";

import { X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from "framer-motion";

interface SidebarDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: Array<{ name: string; href: string; }>;
}

export default function SidebarDrawer({ isOpen, onClose, navItems }: SidebarDrawerProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[4001] md:hidden"
            onClick={onClose}
          />

          {/* Sidebar */}
          <motion.div 
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 20, stiffness: 100 }}
            className="fixed top-0 right-0 h-full w-[300px] bg-white z-[4002] shadow-2xl md:hidden"
          >
            {/* Header */}
            <div className="p-4 border-b flex items-center justify-between">
              <div className="flex items-center gap-3">
                <h2 className="font-semibold text-lg text-black">NGMUN VII</h2>
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
              >
                <X className="h-5 w-5 text-gray-500" />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="py-4">
              <div className="px-3 mb-2">
                <p className="text-sm text-gray-500 px-3">Navigation</p>
              </div>
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className={`flex items-center px-6 py-3 my-1 mx-3 rounded-xl transition-all duration-200 ${
                      pathname === item.href
                        ? 'text-primary border-[1.5px] border-primary/30'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <span className="text-sm font-medium">{item.name}</span>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Footer */}
            <div className="absolute bottom-0 left-0 right-0 p-6 border-t">
              <div className="flex flex-col gap-2">
                <p className="text-sm text-gray-500">
                  Join us at NGMUN 2025
                </p>
                <Link
                  href="/register"
                  onClick={onClose}
                  className="w-full bg-primary text-primary-foreground py-2.5 px-4 rounded-lg text-sm font-medium text-center 
                    hover:bg-primary/90 transition-colors duration-200"
                >
                  Register Now
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}