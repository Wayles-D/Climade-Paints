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
    <footer className="bg-[#0B4D91] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="">
                <img
                  src="https://res.cloudinary.com/dmb5ggmvg/image/upload/v1759492178/WhatsApp_Image_2025-10-03_at_12.49.12_3505a48c_ovx9ud.jpg"
                  alt="Brand-logo"
                  className="w-16 h-16 rounded-sm"
                />
              </div>
              <div className="ml-1">
                <h2 className="text-green-500 font-bold text-lg">
                  Climade Paints
                </h2>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Premium Residential & Commercial Painting 
            </p>
            <div className="flex space-x-4">
              {companyLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="h-10 w-10 bg-gray-800 hover:bg-green-600 rounded-lg flex items-center justify-center transition-colors duration-200"
                  aria-label={social.name}
                ></a>
              ))}
            </div>
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
                <MapPin className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <p className="text-gray-400 text-sm">
                  21, Ajibola Cresent, Alapere, Ketu, Lagos
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-500 flex-shrink-0" />
                <p className="text-gray-400 text-sm">+234-806-042-9434</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-500 flex-shrink-0" />
                <p className="text-gray-400 text-sm">info@climadepaints.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-xs text-center">
              © 2025 Climade Paints. All rights reserved.
            </p>

            <p className="text-gray-400 text-xs">
              Designed and Developed by{" "}
              <span className="text-[#9E1E8D]">
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
