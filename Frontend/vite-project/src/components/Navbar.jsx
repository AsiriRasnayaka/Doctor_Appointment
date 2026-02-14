import React from 'react'
import { useContext, useState} from "react";
import { AppContext } from '../context/AppContext';
import { Link } from 'react-router-dom';
import { assets} from '../assets/assets.js';
import { X, Menu, User } from 'lucide-react';


const Navbar = () => {
    const { navigate, user, setUser } = useContext(AppContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menus = [
        { name: "Home", link: "/" },
        { name: "About", link: "/about" },
        { name: "Contact", link: "/contact" },
        { name: "Services", link: "/services" },
        { name: "Doctor", link: "/doctor" },
    ];
  return (
    <div className="max-w-7xl mx-auto mt-8">
        {/* Desktop Menu */}

    <div className="hidden md:flex item-center justify-between bg-white py-4 px-4 rounded-2xl border border-gray-200 shadow-5m">
    <Link to="/">
    <img src={assets.logo} alt="" className="w-52 font-bold"/>
    </Link>
    <div className="flex items-center gap-4">
    {menus.map((menu, index) => (
        <Link className="font-medium text-lg text-[#231F69]" to={menu.link} key={index}>
        {menu.name}
        </Link>
    ))}
    </div>
    <button
    onClick={() => navigate("/login")}
    className="bg-secondary text-white cursor-pointer py-2 px-8 hover:bg-primary duration-300 transition-all rounded-lg">
    Login
    </button>
    </div>

    {/* Mobile Navbar */}
    <div className="md:hidden bg-white py-4 px-4 rounded-2xl border border-gray-200">
        <div className="flex items-center justify-between">
          <Link to={"/"}>
            <img src={assets.logo} alt="" className="w-40 font-bold" />
          </Link>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <X className="w-6 h-6 " />
            ) : (
              <Menu className="w-6 h-6 " />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="mt-4 flex flex-col gap-2">
            {menus.map((menu, index) => (
              <Link
                onClick={() => setIsMenuOpen(false)}
                key={index}
                to={menu.link}
                className="text-[#231F69] font-medium text-lg"
              >
                {menu.name}
              </Link>
            ))}
            <button
                onClick={() => navigate("/login")}
                className="bg-secondary text-white cursor-pointer py-2 px-8 hover:bg-primary duration-300 transition-all rounded-lg"
              >
                Login
              </button>
        </div>
    )}
    </div>
    </div>
  )
}

export default Navbar