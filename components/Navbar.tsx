'use client';
import React from "react";
import Link from "next/link";
import { SignInButton, UserButton, SignedIn, SignedOut } from '@clerk/nextjs';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/About" },
    { name: "Services", link: "/Services" },
    { name: "Contact Us", link: "/Contact" },
    { name: "Video Call", link: "/VideoCall" },
  ];

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  React.useEffect(() => {
    // Lock body scroll when menu is open
    if (isMenuOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isMenuOpen]);
  return (
    <nav className="flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
     
      <nav className="fixed inset-x-0 top-0 z-50 bg-white/30 shadow-lg backdrop-blur-lg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="shrink-0">
                <div className="flex cursor-pointer items-center space-x-2">
                  <Image src="/EaglesRingLogo.png" alt="Eagles Ring Logo" width={40} height={40} />
                </div>
              </div>
              <div className="hidden sm:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {menuItems.map((item, index) => (
                    <Link key={index} href={item.link} passHref>
                      <p className="text-gray-800 transition-colors duration-300 hover:text-yellow-500">{item.name}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="hidden sm:block">
              <div className="ml-4 flex items-center space-x-4 md:ml-6">
                <SignedOut>
                  <div className="cursor-pointer text-black hover:text-yellow-500">
                    <SignInButton />
                  </div>
                </SignedOut>
                <SignedIn>
                  <UserButton />
                </SignedIn>
              </div>
            </div>
            <div className="-mr-2 flex sm:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                type="button"
                className="inline-flex items-center justify-center rounded-md bg-gray-900 p-2 text-gray-300 transition duration-300 hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                aria-controls="mobile-menu"
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                {!isMenuOpen ? (
                  <svg
                    className="block size-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block size-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <div className={`${isMenuOpen ? "block" : "hidden"} sm:hidden`} id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {menuItems.map((item, index) => (
              <Link key={index} href={item.link} passHref>
                <p onClick={handleMenuItemClick} className="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:text-yellow-500">{item.name}</p>
              </Link>
            ))}
            <SignedOut>
              <div onClick={handleMenuItemClick} className="block cursor-pointer rounded-md px-3 py-2 text-base font-medium text-black hover:text-yellow-500">
                <SignInButton />
              </div>
            </SignedOut>
            <SignedIn>
              <div onClick={handleMenuItemClick} className="block cursor-pointer rounded-md px-3 py-2 text-base font-medium">
                <UserButton />
              </div>
            </SignedIn>
          </div>
        </div>
      </nav>

      {/* Main content wrapper */}
      <div className={`${isMenuOpen ? "overflow-y-hidden" : ""}`}>
        {/* Your main content goes here */}
      </div>
     
    </nav>
  );
};

export default Navbar;
