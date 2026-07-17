"use client";

import { useState } from "react";
import Link from "next/link";
import navItems from "@/constants/navItems";
import Button from "@/components/shared/Button";
import Subheader from "@/components/shared/Text/Subheader";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-4">
      {/* Container wrapper */}
      <div className="bg-white rounded-4xl p-4 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mx-2">
          {/* Logo / Brand Name */}
          <div className="flex items-center space-x-2">
            <Subheader text="Fidan Khalilova" color="#AC6891" />
          </div>

          <div className="hidden md:flex items-center">
            <ul className="flex space-x-6 font-medium text-gray-700">
              {navItems.map((item: any) => (
                <li
                  key={item.id}
                  className="hover:text-[#AC6891] transition-colors"
                >
                  <Link href={item.link}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden md:flex items-center space-x-2">
            <Link href="/cv.pdf" download="CV_Fidan_Khalilova.pdf">
              <Button text="Download CV" />
            </Link>
            <Link
              href="mailto:fidankhalilova295@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button text="Email Me" />
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-700 hover:text-[#AC6891] focus:outline-none p-2"
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                <X />
              ) : (
                <Menu />
              )}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-gray-100 animate-fadeIn">
            <ul className="flex flex-col space-y-4 mb-4 text-center font-medium text-gray-700">
              {navItems.map((item: any) => (
                <li key={item.id}>
                  <Link
                    href={item.link}
                    onClick={() => setIsOpen(false)}
                    className="block py-2 hover:bg-gray-50 rounded-xl text-lg"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Actions Stack */}
            <div className="flex items-center justify-center gap-3 pt-2 w-full">
              <Link
                href="/cv.pdf"
                download="CV_Fidan_Khalilova.pdf"
                onClick={() => setIsOpen(false)}
                className="text-center"
              >
                <Button text="Download CV" /> 
              </Link> 
              <Link 
                href="mailto:fidankhalilova295@gmail.com" 
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)} 
                className="text-center" 
              > 
                <Button text="Email Me" /> 
              </Link> 
            </div> 
          </div> 
        )}
      </div> 
    </nav> 
  );
}
