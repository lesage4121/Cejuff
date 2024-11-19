import React from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-secondary font-bold text-2xl">CEJuFF</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-secondary">
                  Accueil
                </a>
                <a href="#services" className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-secondary">
                  Services
                </a>
                <a href="#about" className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-secondary">
                  À propos
                </a>
                <a href="#contact" className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-secondary">
                  Contact
                </a>
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-secondary focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-secondary">
              Accueil
            </a>
            <a href="#services" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-secondary">
              Services
            </a>
            <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-secondary">
              À propos
            </a>
            <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-secondary">
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;