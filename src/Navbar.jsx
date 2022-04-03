import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";

import "./Navbar.scss";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  const closeMenu = () => {
    setShowMenu(false);
  };
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  useEffect(() => {
    menuRef.current.style.height = showMenu ? "200px" : "0px";
  }, [showMenu]);

  return (
    <>
      <div className="container">
        <div className="logo">
          <NavLink end to="/" onClick={closeMenu}>
            Patrick Wieland
          </NavLink>
        </div>
        <div className="internal-links">
          <ul>
            <li>
              <NavLink end to="/" onClick={closeMenu}>
                home
              </NavLink>
            </li>
            <li>
              <NavLink to="/articles" onClick={closeMenu}>
                articles
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={closeMenu}>
                about
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="right">
          <button className="round-btn" type="button" onClick={toggleMenu}>
            <FaBars />
          </button>
        </div>
      </div>
      <div className="menu" ref={menuRef}>
        <ul>
          <li>
            <hr />
            <NavLink end to="/" onClick={closeMenu}>
              home
            </NavLink>
          </li>
          <li>
            <hr />
            <NavLink to="/articles" onClick={closeMenu}>
              articles
            </NavLink>
          </li>
          <li>
            <hr />
            <NavLink to="/about" onClick={closeMenu}>
              about
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}
