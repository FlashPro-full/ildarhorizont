'use client';

import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaDribbble, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Working Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Working Hours</h3>
            <div className="space-y-2 text-sm">
              <p>Mon-Fri: 9 AM - 10 PM</p>
              <p>Saturday: 9 AM - 10 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>

          {/* Office */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Office</h3>
            <div className="space-y-2 text-sm">
              <p>United States, Illinois—</p>
              <p>1256 Inverrary Ln, Deerfield, IL 60015</p>
              <div className="mt-4">
                <Link 
                  href="mailto:Ildarhorizont@gmail.com" 
                  className="text-lg relative inline-block group"
                >
                  <span className="relative z-10">Ildarhorizont@gmail.com</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-500 ease-out group-hover:w-full"></span>
                </Link>
              </div>
              <div className="mt-2">
                <Link href="tel:+13128266764" className="no-underline text-xl">
                  (312) 826-6764
                </Link>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <div className="space-y-2 text-sm">
              <Link href="/" className="block hover:underline">Home</Link>
              <Link href="/services" className="block hover:underline">Services</Link>
              <Link href="/portfolio" className="block hover:underline">Portfolio</Link>
              <Link href="/news" className="block hover:underline">News</Link>
              <Link href="/contact" className="block hover:underline">Contact</Link>
            </div>
          </div>

          {/* Get In Touch */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <div className="flex space-x-3">
              <a 
                href="https://business.facebook.com/ThemeRexStudio/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 group"
                aria-label="Facebook"
              >
                <FaFacebookF className="w-4 h-4 text-black group-hover:text-white" />
              </a>
              <a 
                href="https://twitter.com/ThemerexThemes" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-blue-400 hover:text-white transition-all duration-300 group"
                aria-label="Twitter"
              >
                <FaTwitter className="w-4 h-4 text-black group-hover:text-white" />
              </a>
              <a 
                href="https://dribbble.com/ThemeREX" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-pink-500 hover:text-white transition-all duration-300 group"
                aria-label="Dribbble"
              >
                <FaDribbble className="w-4 h-4 text-black group-hover:text-white" />
              </a>
              <a 
                href="https://www.instagram.com/themerex_net/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all duration-300 group"
                aria-label="Instagram"
              >
                <FaInstagram className="w-4 h-4 text-black group-hover:text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll to top button */}
      <div className="fixed bottom-4 right-4">
        <button 
          onClick={scrollToTop}
          className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
          aria-label="Scroll to top"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
