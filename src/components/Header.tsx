import { Menu } from "lucide-react";
import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={`${import.meta.env.BASE_URL}images/logopmcare.png`}
              alt="Logo"
              className="ml-8"
            />
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden"
            aria-label="Toggle menu"
          >
            <Menu className="w-8 h-8 text-orange-500" />
          </button>

          <nav className="hidden lg:flex items-center gap-6">
            <a href="#" className="text-sm text-gray-700 hover:text-orange-500">
              Home
            </a>
            <a href="#" className="text-sm text-gray-700 hover:text-orange-500">
              Domestic Donations
            </a>
            <a href="#" className="text-sm text-gray-700 hover:text-orange-500">
              About
            </a>
            <a href="#" className="text-sm text-gray-700 hover:text-orange-500">
              Contact Us
            </a>
          </nav>
        </div>

        {menuOpen && (
          <nav className="lg:hidden bg-white border-t border-gray-200 px-4 py-3">
            <a
              href="#"
              className="block py-2 text-sm text-gray-700 hover:text-orange-500"
            >
              Home
            </a>
            <a
              href="#"
              className="block py-2 text-sm text-gray-700 hover:text-orange-500"
            >
              Domestic Donations
            </a>
            <a
              href="#"
              className="block py-2 text-sm text-gray-700 hover:text-orange-500"
            >
              About
            </a>
            <a
              href="#"
              className="block py-2 text-sm text-gray-700 hover:text-orange-500"
            >
              Contact Us
            </a>
          </nav>
        )}
      </header>
    </>
  );
}

export default Header;
