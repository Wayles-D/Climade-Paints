import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  const companyLinks = [
    { name: "About", link: "/" },
    { name: "Services", link: "/" },
    { name: "Portfolio", link: "/" },
    { name: "Contact", link: "/" },
  ];

  const servicesLinks = [
    { name: "Interior Painting", link: "/" },
    { name: "Exterior Painting", link: "/" },
    { name: "Commercial", link: "/" },
    { name: "Materials", link: "/" },
  ];

  const contactItems = [
    { name: "Interior Painting", link: "/" },
    { name: "Exterior Painting", link: "/" },
    { name: "Commercial", link: "/" },
    { name: "Materials", link: "/" },
  ];

  return (
    <footer className="bg-[#2B3663] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="">
              <div className="">
                <img
                  src="https://res.cloudinary.com/dmb5ggmvg/image/upload/v1760822145/Untitled_design_2_cdgihd.png"
                  alt="Brand-logo"
                  className="w-16 h-16 rounded-sm"
                />
              </div>
              <div className="">
                <h2 className="text-white font-bold text-lg">
                  Larr Medas Decorations
                </h2>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Premium Residential & Commercial Painting 
            </p>
          
          </div>

          {/* Company Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Company Links</h4>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-3">
              {servicesLinks.map((category, index) => (
                <li key={index}>
                  <a
                    href={category.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#CB3239] mt-0.5 flex-shrink-0" />
                <p className="text-gray-400 text-sm">
                  21, Ajibola Cresent, Alapere, Ketu, Lagos
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#CB3239] flex-shrink-0" />
                <p className="text-gray-400 text-sm">+234-806-042-9434</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#CB3239] flex-shrink-0" />
                <p className="text-gray-400 text-sm">info@larrmedas.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-xs text-center">
              © 2025 Larr Medas. All rights reserved.
            </p>

            <p className="text-gray-400 text-xs">
              Designed and Developed by{" "}
              <span className="text-white font-semibold">
                {" "}
                <a href="https://wayles-portfolio.vercel.app">WAYLES</a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
