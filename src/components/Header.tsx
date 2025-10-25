'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { FaFacebookF, FaTwitter, FaDribbble, FaInstagram } from 'react-icons/fa';

const Header = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.classList.remove('mobile-menu-open');
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove('mobile-menu-open');
    };
  }, [isMobileMenuOpen]);

  const handlePhoneClick = () => {
    window.location.href = 'tel:+13128266764';
  };

  return (
    <>
      <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Left side - Mobile menu and contact */}
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleMobileMenu}
                className="lg:hidden p-2"
                aria-label="Toggle mobile menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <div onClick={handlePhoneClick} className="hidden lg:flex items-center space-x-2 text-gray-900 cursor-pointer">
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <span className="text-xl font-semibold">1 (312) 826-6764</span>
              </div>
            </div>

            {/* Center - Navigation */}
            <nav className="hidden lg:flex space-x-8 items-center">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-gray-900 text-lg font-medium hover:underline hover:decoration-2 hover:underline-offset-4 transition-all duration-300 ${pathname === item.href ? 'underline decoration-2 underline-offset-4' : ''
                    }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Right side - Contact button */}
            <div className="flex items-center space-x-2 md:space-x-4">
              <button className="sm:hidden w-10 h-10 bg-black rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </button>
              <Link href="/contact" className="hidden sm:flex bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors text-md font-semibold">
                Let's Talk
              </Link>
            </div>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 xl:hidden">
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={toggleMobileMenu}></div>
          
          {/* Close Button - Top Right */}
          <div className="fixed top-4 right-4 z-60">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-400 hover:text-white flex items-center space-x-2 p-3"
            >
              <span className="text-lg">Close</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="fixed inset-0 flex">
            {/* Left Section - Navigation */}
            <div className="flex-1 bg-[#1a1a1a] flex flex-col pt-10">
              {/* Logo */}
              <div className="px-6 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center">
                    <Image src="/new-logo-light.png" alt="Logo" width={138} height={52} />
                  </div>
                </div>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 px-6">
                <div className="space-y-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={toggleMobileMenu}
                      className={`block text-3xl font-medium transition-colors ${pathname === item.href
                        ? 'text-orange-500'
                        : 'text-gray-300 hover:text-white'
                        }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </nav>

              {/* Social Media */}
              <div className="px-6 pb-8">
                <div className="border-t border-gray-600 pt-6">
                  <div className="flex space-x-4">
                    <a href="https://business.facebook.com/ThemeRexStudio/" target="_blank" className="w-8 h-8 text-gray-400 hover:text-white transition-colors">
                      <FaFacebookF className="w-5 h-5" />
                    </a>
                    <a href="https://twitter.com/ThemerexThemes" target="_blank" className="w-8 h-8 text-gray-400 hover:text-white transition-colors">
                      <FaTwitter className="w-5 h-5" />
                    </a>
                    <a href="https://dribbble.com/ThemeREX" target="_blank" className="w-8 h-8 text-gray-400 hover:text-white transition-colors">
                      <FaDribbble className="w-5 h-5" />
                    </a>
                    <a href="https://www.instagram.com/themerex_net/" target="_blank" className="w-8 h-8 text-gray-400 hover:text-white transition-colors">
                      <FaInstagram className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section - Call to Action */}
            <div className="flex-1 bg-[#2d2d2d] flex flex-col justify-center px-8">
              <div className="space-y-12">
                {/* Have a Project? */}
                <div>
                  <p className="text-gray-400 text-lg mb-2">Have a Project?</p>
                  <a href="mailto:Ildarhorizont@gmail.com" className="text-gray-300 text-2xl underline hover:text-white transition-colors">
                    info@website.com
                  </a>
                </div>

                {/* Want to Work with Us? */}
                <div>
                  <p className="text-gray-400 text-lg mb-2">Want to Work with Us?</p>
                  <a href="/contact" className="text-gray-300 text-2xl flex items-center space-x-2 hover:text-white transition-colors">
                    <span>Send Brief</span>
                    <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>

                {/* Ready to Order? */}
                <div>
                  <p className="text-gray-400 text-lg mb-2">Ready to Order?</p>
                  <a href="/shop" className="text-gray-300 text-2xl flex items-center space-x-2 hover:text-white transition-colors">
                    <span>Go to Shop</span>
                    <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
