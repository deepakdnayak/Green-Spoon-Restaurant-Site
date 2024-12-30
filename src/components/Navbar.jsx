import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faSearch, faShoppingBag, faUser } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-transparent w-full relative">
      {/* Logo */}
      <div className="text-2xl font-bold text-black">Green Spoon</div>

      {/* Navigation Links (Desktop) */}
      <div className="hidden md:flex space-x-8 text-black ms-6">
        <a href="#home" className="hover:text-green-600 font-bold">Home</a>
        <a href="#menu" className="hover:text-green-600 font-bold">Menu</a>
        <a href="#about" className="hover:text-green-600 font-bold">About Us</a>
        <a href="#contact" className="hover:text-green-600 font-bold">Contact</a>
      </div>

      {/* Icons and Sign-Up Button */}
      <div className="flex items-center space-x-4 ml-auto">
        <button className="p-2 rounded-full hover:bg-gray-200">
          <FontAwesomeIcon icon={faShoppingBag} className="w-6 h-6" />
        </button>

        <button className="p-2 rounded-full hover:bg-gray-200">
          <FontAwesomeIcon icon={faSearch} className="w-6 h-6" />
        </button>

        {/* Sign In Icon for Mobile */}
        <button className="md:hidden p-2 rounded-full hover:bg-gray-200">
          <FontAwesomeIcon icon={faUser} className="w-6 h-6" />
        </button>

        {/* Sign-Up Button for Desktop */}
        <button className="hidden md:block bg-white text-black px-4 py-2 rounded-full hover:text-green-600">
          Sign Up
        </button>
      </div>

      {/* Hamburger Menu Button (Mobile) */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="p-2 rounded-full hover:bg-gray-200">
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white/10 backdrop-blur-lg shadow-md flex flex-col items-center space-y-4 py-4 md:hidden">
          <a href="#home" className="hover:text-green-600 font-bold">Home</a>
          <a href="#menu" className="hover:text-green-600 font-bold">Menu</a>
          <a href="#about" className="hover:text-green-600 font-bold">About Us</a>
          <a href="#contact" className="hover:text-green-600 font-bold">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
