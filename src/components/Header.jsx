import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import Icon from "@mdi/react"
import { mdiMenu } from "@mdi/js";
import img1 from "/images/_O3A2269 copy.jpg"
import logo from "/images/_O3A2269 copy.jpg"

export default function Header() {
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);

  function handleShowMenu() {
    document.getElementById("menu").style.display = "flex";
    document.body.style.overflow = "hidden";
    window.scrollTo(0,0)
    setShowMenu(true)
  }

  function handleHideMenu() {
    document.getElementById("menu").style.display = "none";
    document.body.style.overflow = "visible";
    setShowMenu(false)
  }
  const links = [
    {
      text: "HOME",
      route: "/",
    },
    {
      text: "WORK",
      route: "/Portfolio",
    },
    {
      text: "ABOUT",
      route: "/About",
    },
    {
      text: "CONTACT",
      route: "/Contact",
    },
  ];
  return (
    <>
    <header>
      <div className="w-full bg-black text-white flex flex-row items-center justify-between p-8 px-14">
          <div>
            <a
            className="text-2xl cursor-pointer"
            onClick={() => {
              navigate("/")
              handleHideMenu()
            }}
            >
              <div className="hover:text-gray-800 hover:border-b-2 h-10 flex gap-x-3 border-gray-800">

                <img src ={logo} className='h-full'/> <p className='hidden lg:block'> Retro Glass Photography</p>
              
              </div>
            </a>
          </div>
          
          <div className="hidden md:flex md:flex-row">
            {links.map(link => (
              <a
              className="text-lg px-4 cursor-pointer"
              onClick={() => navigate(link.route ?? "/")}
              >
                <span className="hover:text-gray-800 hover:border-b-2 border-gray-800">
                  {link.text}
                </span>
              </a>
            ))}
          </div>

          <div className="items-center flex md:hidden">
            <a
            className="hover:text-gray-800 cursor-pointer"
            onClick={() => {
              if (showMenu == false) {
                handleShowMenu()
              } else {
                handleHideMenu()
              }
            }}
            >
              <Icon path={mdiMenu} size={1.3}/>
            </a>
          </div>
        </div>
    </header>
    <div id="menu" className="w-full bg-white text-black absolute p-8 px-14 z-50" style={{display: "none", height: "200vh"}}>
        <div className="flex flex-col justify-start">
          {links.map(link => (
              <a
              className="text-lg cursor-pointer block py-4"
              onClick={() => {
                navigate(link.route ?? "/")
                handleHideMenu()
              }}
              >
                <span className="hover:text-gray-800 hover:border-b-2 border-gray-800">
                  {link.text}
                </span>
              </a>
          ))}
        </div>
      </div>
    </>
  )
}