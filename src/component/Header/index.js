import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { FiMenu, FiSearch } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import "./style.scss";
import Swlogo from '../../asset/images/swlogo.png'
const Header = () => {
  let prevScrollpos = window.pageYOffset;
  const [toggle, setToggle] = useState(false);

  const [open, setOPen] = useState(false);
  const toggles = () => {
    setOPen(!open);
  };

  // window.onscroll = function () {
  //   var currentScrollPos = window.pageYOffset;
  //   // console.log("prevScrollpos", prevScrollpos, currentScrollPos);
  //   if (prevScrollpos > currentScrollPos) {
  //     document.getElementById("navbar").style.top = "0";
  //   } else {
  //     document.getElementById("navbar").style.top = "-125px";
  //   }
  //   prevScrollpos = currentScrollPos;
  // };
  const handleMenu = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <div className="header" id="navbar">
        <div className="desktopHide">
          <div className="navbarMobile">
            <span className="navbarMobileSearch">
              <FiSearch size={"24px"} />
            </span>
            <Link to="/">
            <a aria-label="SeedWill home page" className="navbarMobileLogo">
              <img
                className="navImg"
                loading="loaded"
                src={Swlogo}
                alt="img"
              ></img>
            </a>
            </Link>
            <span
              className={`navbarMobileMenu ${toggle && "toggle"} `}
              onClick={handleMenu}
            >
              {!toggle ? (
                <FiMenu size={"24px"} />
              ) : (
                <IoCloseOutline size={"24px"} />
              )}
            </span>
          </div>
          <div
            className="navbarMobileOverlay"
            style={{
              opacity: "1",
              visibility: "inherit",
              display: !toggle ? "none" : "block",
            }}
          >
            {/* <div className="navbar">
              <Link to="/login">
                <div style={{ fontSize: "14px" }}>Join/Log In</div>
              </Link>
              <div
                style={{ display: "flex", gap: "10px", alignItems: "center" }}
              >
                <span style={{}}>
                  <AiFillSetting size={"12px"} />
                </span>
                Prefrences
              </div>
            </div> */}
            <div
              className={`navMobileAccordian conainer ${toggle && "toggle"}`}
              style={{ opacity: "1", visibility: "inherit" }}
            >
              <div>
              <Link to="/property-in-india">
                <div className="footer-3-p" style={{ color: "white" }}>
                  PROPERTIES <AiOutlinePlus onClick={toggles} />
                  {open && (
                    <div>
                      <p>Luxury Outlook 2022</p>
                      <p>About Us</p>
                      <p>Giving Back</p>
                      <p>Press</p>
                      <p>Join Us</p>
                      <p>Luxury Real Estate</p>
                    </div>
                  )}
                 
                </div>
                </Link>
                <Link to="/blog">
                <div className="footer-3-p" style={{ color: "white" }}>
                  BLOGS <AiOutlinePlus onClick={toggles} />
                </div>
                </Link>
               
              </div>
            </div>
          </div>
        </div>
        {/* <div className="navbar">
          <Link to="/login">
            <div style={{ fontSize: "14px" }}>Join/Log In</div>
          </Link>
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <span style={{}}>
              <AiFillSetting size={"12px"} />
            </span>
            Prefrences
          </div>
        </div> */}
        <div className="navbarContainer">
          <Link to="/">
            <a aria-label="Sotheby's home page" className="navLogo">
              <img
                className="navImg"
                loading="loaded"
                src={Swlogo}
                alt="SeedWill Logo"
              ></img>
            </a>
          </Link>
          <div className="navMenuContainer">
            <ul className="navMenu">
            <Link to="/how-we-work">
              <li className="navMenu-item">
                <div className="nav-menu-button nav-menu-button-search">
                 How We Work
                </div>
              </li>
              </Link>
              <li className="navMenu-item">
                <Link to="/property-in-india">
                  <div className="nav-menu-button nav-menu-button-search">
                    Properties
                  </div>
                </Link>
              </li>
              {/* <Link to="/agent">
                <li className="navMenu-item">
                  <div className="nav-menu-button nav-menu-button-search">
                    AGENTS
                  </div>
                </li>
              </Link>
              <Link to="/stories">
                <li className="navMenu-item">
                  <div className="nav-menu-button nav-menu-button-search">
                    STORIES
                  </div>
                </li>
              </Link> */}
              <Link to='/blog'>
              <li className="navMenu-item">
                <div className="nav-menu-button nav-menu-button-search">Blog</div>
              </li>
              </Link>
              <Link to='/'>
              <li className="navMenu-item">
                <div className="nav-menu-link">
                  <Link to='/sellwithus'>
                  <a className="nav-button">
                    Login
                  </a>
                  </Link>
                  
                </div>
              </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <div className="navbar_bg"></div>
    </div>
  );
};

export default Header;
