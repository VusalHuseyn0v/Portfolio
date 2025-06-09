import React, { useState } from "react";
import logo from "../data/images/logo.png";
import { navlink } from "../data/images/dummydata";
import { NavLink } from "react-router-dom";
import { Menu } from "@mui/icons-material";

export const Header = () => {
  const [responsive, setResponsive] = useState(false);
  return (
    <>
      <header>
        <div className="container flexsb">
          <div className="logo">
            <img src={logo} alt="" data-aos="zoom-in-right" />
          </div>
          <div className={responsive ? "hideMenu" : "nav"}>
            {navlink.map((links, i) => (
              <NavLink to={links.url} key={i} data-aos="zoom-in-left">
                {links.text}
              </NavLink>
            ))}
          </div>
          <button className="toogle" onClick={() => setResponsive(!responsive)}>
            <Menu className="icon"></Menu>
          </button>
        </div>
      </header>
    </>
  );
};
