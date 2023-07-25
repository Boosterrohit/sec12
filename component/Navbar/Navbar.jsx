import React, { useState } from "react";
import logo from "../../image/logo.png";
import Link from "./Link";
import "../../style/Style.css";
import NavLink from "./NavLink";
import { FaBars, FaTimes } from "react-icons/fa";
const Navbar = () => {
  const [Click, setClick] = useState(false);
  const handelClick = () => setClick(!Click);

  const [Color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);
  return (
    <div
      className={
        Color
          ? "header header-bg py-2 fixed z-10 w-full"
          : "header py-2 fixed z-10 w-full"
      }
    >
      <div className="flex item-center mx-3 justify-between">
        <img src={logo} className="w-40 h-8 mt-2" />
        <div
          className={
            Click
              ? "nav_link active flex items-center justify-center gap-11 nav_link"
              : "nav_link flex items-center justify-center gap-11 nav_link"
          }
        >
          <h6 className="text-white mt-2 flex gap-8  pr-3 h-full justify-center items-center take1 ">
            <Link />
            <h6 className="text-white  mt-2 uppercase flex gap-8 h-full justify-center items-center font-[dosis] take">
              <NavLink />
            </h6>
          </h6>
        </div>
        <div className="hamburger mx-3" onClick={handelClick}>
          {Click ? (
            <FaTimes size={20} style={{ color: "white" }} />
          ) : (
            <FaBars size={20} style={{ color: "white" }} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
