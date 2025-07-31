import React, { useState, useEffect } from "react";
import logo_lightt from "../pages/ece-removebg-preview.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/AboutUs" },
    { name: "Initiatives", href: "/Initiatives" },
    { name: "Blogs", href: "/blog" },
    { name: "The Team", href: "/MeettheTeam" },
    { name: "MES", href: "/mes" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Close menu on escape key press and handle body scroll
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Main Navbar */}
      <nav className="w-full bg-[#01132b] shadow-lg z-50 font-serif">
        <div className="flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src={logo_lightt}
              alt="Logo"
              className="w-12 h-auto cursor-pointer transition-transform duration-300 hover:scale-105 sm:w-16 lg:w-[70px]"
            />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-6 lg:space-x-12 xl:space-x-16">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="text-white font-semibold text-base lg:text-lg transition-all duration-300 hover:text-blue-400 relative group"
                >
                  {item.name}
                  <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-[#01132b] transition-colors duration-300 z-50"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            <FontAwesomeIcon
              icon={isMenuOpen ? faTimes : faBars}
              className="w-6 h-6 transition-transform duration-300"
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-30 transition-opacity duration-300 md:hidden ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
      />

      {/* Mobile menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-[#01132b] z-40 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="pt-20 px-6">
          <ul className="space-y-4">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  onClick={closeMenu}
                  className="block py-3 px-4 text-white font-semibold text-lg rounded-lg hover:bg-white/10 hover:text-blue-400 transition-all duration-300"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
