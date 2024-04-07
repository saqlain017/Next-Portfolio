"use client";
import { useState } from 'react';
import Link from 'next/link'

const menuItems = [
  { id: 1, text: 'ABOUT', href: '#about' },
  { id: 2, text: 'EXPERIENCE', href: '#experience' },
  { id: 3, text: 'SKILLS', href: '#skills' },
  { id: 4, text: 'EDUCATION', href: '#education' },
  { id: 5, text: 'PROJECTS', href: '#projects' },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="relative px-4 py-4 flex justify-between items-center">
      <Link href="/" className="text-[#16f2b3] text-3xl font-bold">
            Muhammad Saqlain
          </Link>
        <div className="lg:hidden">
          <button className={`navbar-burger flex items-center text-white-600 p-3 ${isOpen ? 'hidden' : 'block'}`} onClick={toggleMenu}>
            <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <ul className={`hidden lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6 ${isOpen ? 'block' : 'hidden'}`}>
          {menuItems.map((item) => (
            <li key={item.id}>
              <a className="text-sm text-gray-400 hover:text-gray-500" href={item.href}>{item.text}</a>
            </li>
          ))}
        </ul>
      </nav>
      {isOpen && (
        <div className="navbar-menu relative z-50">
          <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
          <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-full max-w-[300px] py-6 px-6 bg-[#0d1224] overflow-y-auto">
          <img alt="Hero" loading="lazy" decoding="async" data-nimg="1" class="absolute object-cover top-0 left-0 -z-10 w-full h-full" style={{color:'transparent'}} src="/section.svg" />
            <div className="flex items-center justify-end mb-8">
              <button className="navbar-close" onClick={toggleMenu}>
                <svg className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <div>
              <ul>
                {menuItems.map((item) => (
                  <li key={item.id} className="mb-1">
                    <a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href={item.href}>{item.text}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-auto">
              <p className="my-4 text-xs text-center text-gray-400">
                <span>Copyright © 2021</span>
              </p>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}

export default Navbar;
