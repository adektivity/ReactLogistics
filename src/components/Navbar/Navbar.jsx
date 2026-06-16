import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";
import Logo from "../../assets/logo.svg";
import { LucideMoon, LucideGlobe } from "lucide-react";

function Navbar() {
  return (
    <header>
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <div className="logo">
            <img src={Logo} alt="logo" />
          </div>
          {/* Navigation Links */}
          <nav>
            <Link className="nav-links">Home</Link>
            <Link className="nav-links">Services</Link>
            <Link className="nav-links">Track & Trace</Link>
            <Link className="nav-links">Pricing</Link>
            <Link className="nav-links">Resources</Link>
            <Link className="nav-links">About Us</Link>
          </nav>
          {/* Site Settings */}
          <div className="site-settings">
            <div className="icons">
              <div className="nav-icons theme">
                <LucideMoon />
              </div>
              <div className="nav-icons">
                <LucideGlobe />
              </div>
              <div className="dropdown">
                <form action="">
                  <select name="languageOptions" id="language">
                    <option value="EN">EN</option>
                    <option value="FR">FR</option>
                    <option value="CN">CN</option>
                  </select>
                </form>
              </div>
            </div>
            <div className="nav-buttons">
              <button>Sign Up</button>
              <button className="sign-in">Sign In</button>
              <button className="quote">Get a Qoute</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
