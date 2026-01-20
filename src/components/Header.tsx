import { Menu, Flag } from 'lucide-react';
import { useState } from 'react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-gray-200 border-b border-gray-300">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Flag className="w-6 h-6 text-orange-500" />
            <span className="text-sm font-medium text-gray-700">India</span>
          </div>
          <div className="flex items-center gap-3">
            <button className="text-xs px-2 py-1 hover:bg-gray-300 rounded">A+</button>
            <button className="text-xs px-2 py-1 hover:bg-gray-300 rounded">A</button>
            <button className="text-xs px-2 py-1 hover:bg-gray-300 rounded">A-</button>
            <button className="text-xs px-2 py-1 bg-gray-900 text-white hover:bg-gray-800 rounded">A</button>
            <button className="text-xs px-2 py-1 hover:bg-gray-300 rounded">हिंदी</button>
          </div>
        </div>
      </div>

      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 flex items-center justify-center">
              <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-white text-xs font-bold">
                GOI
              </div>
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-gray-900">PM CARES</h1>
              <p className="text-xs text-gray-600 hidden md:block">Prime Minister's Citizen Assistance and Relief in Emergency Situations Fund</p>
            </div>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden"
            aria-label="Toggle menu"
          >
            <Menu className="w-8 h-8 text-orange-500" />
          </button>

          <nav className="hidden lg:flex items-center gap-6">
            <a href="#" className="text-sm text-gray-700 hover:text-orange-500">Home</a>
            <a href="#" className="text-sm text-gray-700 hover:text-orange-500">Domestic Donations</a>
            <a href="#" className="text-sm text-gray-700 hover:text-orange-500">About</a>
            <a href="#" className="text-sm text-gray-700 hover:text-orange-500">Contact Us</a>
          </nav>
        </div>

        {menuOpen && (
          <nav className="lg:hidden bg-white border-t border-gray-200 px-4 py-3">
            <a href="#" className="block py-2 text-sm text-gray-700 hover:text-orange-500">Home</a>
            <a href="#" className="block py-2 text-sm text-gray-700 hover:text-orange-500">Domestic Donations</a>
            <a href="#" className="block py-2 text-sm text-gray-700 hover:text-orange-500">About</a>
            <a href="#" className="block py-2 text-sm text-gray-700 hover:text-orange-500">Contact Us</a>
          </nav>
        )}
      </header>
    </>
  );
}

export default Header;
