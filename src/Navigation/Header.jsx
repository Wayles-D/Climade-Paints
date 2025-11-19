import React from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navigationItems = [
    { name: "Home", path: "/" },
    { name: "Gallery", path: "/Gallery" },
    { name: "Materials", path: "/Materials" },
    { name: "Services", path: "/Services" },
    { name: "About", path: "/About" },
    { name: "Contact", path: "/Contact" },
  ];

  return (
    <header className="backdrop-blur-xl bg-white shadow-sm border-b border-gray-50 fixed top-0 left-0 w-full pt-2 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between ">
          {/* Logo */}
          <Link to="/">
            <div className="flex items-center space-x-1">
              <img
                src="https://res.cloudinary.com/dmb5ggmvg/image/upload/v1760822145/Untitled_design_2_cdgihd.png"
                alt="Brand-logo"
                className="h-16 w-16 rounded-sm"
              />
              <div className="">
              <h1 className="text-lg poppins-black text-[#0B4D91] hidden lg:block">Larr Medas Decorations</h1>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 justify-items-center">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="relative text-gray-700 font-bold after:content-[''] after:block after:h-0.5 after:bg-[#0B4D91] after:scale-x-0 after:origin-center after:transition-transform after:duration-700 hover:after:scale-x-100"
              >
                {item.name}
              </Link>
            ))}
            {/* Get a quote button */}
            <Link
              to="/Quote"
              className="ml-4 px-4 py-2 rounded-xl  bg-[#0B4D91] font-semibold shadow text-white hover:text-gray-200 md:ml-0"
            >
            Book a Site Visit
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
                to="/Quote"
                className="block mt-2 px-3 py-2 rounded bg-[#0B4D91] text-white font-semibold shadow text-center hover:bg-[#F2F5F4] transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Book a Site Visit
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

