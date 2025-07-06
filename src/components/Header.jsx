import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import Icon from "@mdi/react";
import { mdiMenu } from "@mdi/js";
import logo from "/images/retroglassLogoWhite.png";
import { FaSquareInstagram, FaSquareFacebook, FaTiktok } from "react-icons/fa6";

export default function Header() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  function handleShowMenu() {
    document.getElementById("menu").style.display = "flex";
    document.body.style.overflow = "hidden";
    window.scrollTo(0, 0);
    setShowMenu(true);
  }

  function handleHideMenu() {
    document.getElementById("menu").style.display = "none";
    document.body.style.overflow = "visible";
    setShowMenu(false);
  }

  const links = [
    { text: "HOME", route: "/" },
    { text: "WORK", route: "/Portfolio" },
    { text: "ABOUT", route: "/About" },
    { text: "BOOKING", route: "/Booking" },
  ];

  return (
    <>
      <header>
        <div className="w-full bg-black text-white flex items-center justify-between p-8 px-14">
          {/* Logo */}
          <div>
            <a
              className="text-2xl cursor-pointer"
              onClick={() => {
                navigate("/");
                handleHideMenu();
              }}
            >
              <div className="hover:text-gray-800 hover:border-b-2 h-10 flex gap-x-3 border-gray-800">
                <img src={logo} className="h-full" alt="Logo" />
                <p className="hidden lg:block">Retro Glass Photography</p>
              </div>
            </a>
          </div>

          {/* Desktop Nav + Icons */}
          <div className="hidden md:flex items-center gap-6">
            {/* Navigation Links */}
            <div className="flex flex-row">
              {links.map((link, index) => (
                <a
                  key={index}
                  className="text-lg px-4 cursor-pointer"
                  onClick={() => navigate(link.route ?? "/")}
                >
                  <span className="hover:text-gray-800 hover:border-b-2 border-gray-800">
                    {link.text}
                  </span>
                </a>
              ))}
            </div>

            {/* Social Icons */}
            <div className="flex flex-row gap-4 items-center">
              <a href="https://www.instagram.com/retro_glass_" target="_blank" rel="noopener noreferrer">
                <FaSquareInstagram className="text-white hover:text-gray-400" size={24} />
              </a>
              <a href="https://www.facebook.com/your_username" target="_blank" rel="noopener noreferrer">
                <FaSquareFacebook className="text-white hover:text-gray-400" size={24} />
              </a>
              <a href="https://www.tiktok.com/@your_username" target="_blank" rel="noopener noreferrer">
                <FaTiktok className="text-white hover:text-gray-400" size={24} />
              </a>
            </div>
          </div>

          {/* Mobile Menu Icon */}
          <div className="items-center flex md:hidden">
            <a
              className="hover:text-gray-800 cursor-pointer"
              onClick={() => {
                showMenu ? handleHideMenu() : handleShowMenu();
              }}
            >
              <Icon path={mdiMenu} size={1.3} />
            </a>
          </div>
        </div>
      </header>

      {/* Mobile Dropdown Menu */}
      <div
        id="menu"
        className="w-full bg-white text-black absolute p-8 px-14 z-50 flex-col"
        style={{ display: "none", height: "200vh" }}
      >
        {/* Mobile Navigation */}
        <div className="flex flex-col justify-start">
          {links.map((link, index) => (
            <a
              key={index}
              className="text-lg cursor-pointer block py-4"
              onClick={() => {
                navigate(link.route ?? "/");
                handleHideMenu();
              }}
            >
              <span className="hover:text-gray-800 hover:border-b-2 border-gray-800">
                {link.text}
              </span>
            </a>
          ))}
        </div>

        {/* Mobile Social Icons */}
        <div className="flex flex-row gap-4 pt-6">
          <a href="https://www.instagram.com/retro_glass_" target="_blank" rel="noopener noreferrer">
            <FaSquareInstagram className="text-black hover:text-gray-600" size={28} />
          </a>
          <a href="https://www.facebook.com/your_username" target="_blank" rel="noopener noreferrer">
            <FaSquareFacebook className="text-black hover:text-gray-600" size={28} />
          </a>
          <a href="https://www.tiktok.com/@your_username" target="_blank" rel="noopener noreferrer">
            <FaTiktok className="text-black hover:text-gray-600" size={28} />
          </a>
        </div>
      </div>
    </>
  );
}
