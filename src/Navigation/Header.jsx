import React from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navigationItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/" },
    { name: "Services", path: "/" },
    { name: "Materials", path: "/" },
    { name: "Gallery", path: "/" },
    { name: "Contact", path: "/" },
  ];

  return (
    <header className="backdrop-blur-xl bg-white shadow-sm border-b border-gray-50 fixed top-0 left-0 w-full pt-2 z-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/">
            <div className="flex items-center space-x-1">
              <img
                src="https://res.cloudinary.com/dmb5ggmvg/image/upload/v1759492178/WhatsApp_Image_2025-10-03_at_12.49.12_3505a48c_ovx9ud.jpg"
                alt="Brand-logo"
                className="h-16 w-16 rounded-sm"
              />
              <div className="">
              <h1 className="poppins-black text-[#0B4D91] hidden lg:block">CLIMADE PAINTS</h1>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="relative text-gray-700 poppins-regular font-medium  after:content-[''] after:block after:h-0.5 after:bg-[#0B4D91] after:scale-x-0 after:origin-center after:transition-transform after:duration-700 hover:after:scale-x-100"
              >
                {item.name}
              </Link>
            ))}
            {/* Get a quote button */}
            <Link
              to="/quote"
              className="ml-4 px-4 py-2 rounded-xl  bg-[#0B4D91] font-semibold shadow text-white hover:text-gray-200 h"
            >
              Get a Quote
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-black p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block px-3 py-2 text-gray-700 hover:text-[#0B4D91] font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              {/* Get a quote button for mobile */}
              <Link
                to="/quote"
                className="block mt-2 px-3 py-2 rounded bg-[#0B4D91] text-white font-semibold shadow text-center hover:bg-[#F2F5F4] transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Get a quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
