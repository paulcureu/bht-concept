'use client'; // Necesar pentru a folosi state (useState)

import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="text-xl font-bold">
          <Link href="/">B.H.T. SMART CONCEPT</Link>
        </div>

        {/* Meniu pentru ecrane mari */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-6">
            <li><Link href="/servicii" className="hover:text-yellow-400">Servicii</Link></li>
            <li><Link href="/portofoliu" className="hover:text-yellow-400">Portofoliu</Link></li>
            <li><Link href="/blog" className="hover:text-yellow-400">Blog</Link></li>
            <li><Link href="/despre" className="hover:text-yellow-400">Despre Noi</Link></li>
            <li><Link href="/contact" className="hover:text-yellow-400">Contact</Link></li>
          </ul>
        </nav>

        {/* Buton Hamburger pentru ecrane mici */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle Menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Meniu mobil (apare/dispare) */}
      {isMenuOpen && (
        <nav className="md:hidden bg-gray-800">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li><Link href="/servicii" onClick={() => setIsMenuOpen(false)} className="hover:text-yellow-400">Servicii</Link></li>
            <li><Link href="/portofoliu" onClick={() => setIsMenuOpen(false)} className="hover:text-yellow-400">Portofoliu</Link></li>
            <li><Link href="/blog" onClick={() => setIsMenuOpen(false)} className="hover:text-yellow-400">Blog</Link></li>
            <li><Link href="/despre" onClick={() => setIsMenuOpen(false)} className="hover:text-yellow-400">Despre Noi</Link></li>
            <li><Link href="/contact" onClick={() => setIsMenuOpen(false)} className="hover:text-yellow-400">Contact</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
