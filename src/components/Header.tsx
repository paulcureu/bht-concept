import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="text-2xl font-bold">
          <Link href="/">B.H.T. SMART CONCEPT</Link>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="/servicii" className="hover:text-yellow-400">Servicii</Link></li>
            <li><Link href="/portofoliu" className="hover:text-yellow-400">Portofoliu</Link></li>
            <li><Link href="/despre" className="hover:text-yellow-400">Despre Noi</Link></li>
            <li><Link href="/contact" className="hover:text-yellow-400">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
