import React, { useState, useEffect, useRef } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { FiMenu, FiSearch } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import "./navbar.scss";
import { BiChevronDown } from "react-icons/bi";
import Select from "react-select";
import Swlogo from "../../../asset/images/swlogo.png";
import Tabs from "@mui/material/Tabs";
import { Tab, Box, Divider } from "@mui/material";
import { CgSearch } from "react-icons/cg";
function useComponentVisible(initialIsVisible) {
  const [isComponentVisible, setIsComponentVisible] = useState(
    !initialIsVisible
  );
  const ref = useRef(null);

  const handleHideDropdown = (event) => {
    if (event.key === "Escape") {
      setIsComponentVisible(false);
    }
  };

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsComponentVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleHideDropdown, true);
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("keydown", handleHideDropdown, true);
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  return { ref, isComponentVisible, setIsComponentVisible };
}

const Navbar = () => {
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

  const option = [
    { value: "Gurgaon", label: "Gurgaon" },
    { value: "Delhi", label: "Delhi" },
    { value: "Pune", label: "Pune" },
    { value: "Bangalore", label: "Bangalore" },
    { value: "Noida", label: "Noida" },
    { value: "Mumbai", label: "Mumbai" },
  ];

  // const [cityDropdown, setCityDropdown] = useState(false);
  // const handleCityDropdown = () => {
  //   setCityDropdown(!cityDropdown);
  // };

  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(true);

  const [valueOne, setValueOne] = useState(0);
  const handleChange = (event, newValue) => {
    setValueOne(newValue);
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
              <a href className="navbarMobileLogo">
                <img
                  className="navImg"
                  loading="loaded"
                  src={Swlogo}
                  alt="img"
                />
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
        <div className="propertyPageNavbarContainer">
          <Link to="/">
            <a href className="navLogo2">
              <img
                className="navImg2"
                loading="loaded"
                src={Swlogo}
                alt="SeedWill Logo"
              ></img>
            </a>
          </Link>
          <Divider orientation="vertical" />

          <p
            onClick={() => setIsComponentVisible(true)}
            style={{
              cursor: "pointer",
              margin: "0 auto",
              marginLeft: "20px",
              display: "inline-flex",
              color: "white",
            }}
          >
            Buy in Delhi <BiChevronDown />
          </p>

          <div className="property-searchbar">
            <div className="container_form">
              <div className="dropdown">
                <Select
                  className="home_input"
                  placeholder={<CgSearch size={20} />}
                  isMulti
                  theme={(theme) => ({
                    ...theme,
                    borderRadius: 0,
                    colors: {
                      ...theme.colors,
                      primary25: "rgba(29, 34, 30, 0.89)",
                      primary: "white",
                    },
                  })}
                  styles={{
                    multiValue: (baseStyles, state) => ({
                      ...baseStyles,
                      backgroundColor: "#D8E8D2",
                      borderRadius: "25px",
                      color: "#6AA74D",
                    }),
                    // control: (baseStyles, state) => ({
                    //   ...baseStyles,
                    //   borderColor: state.isFocused ? "white" : "white",
                    // }),
                    option: (baseStyles, state) => ({
                      ...baseStyles,
                      ":hover": {
                        color: "#FFD194",
                        cursor: "pointer",
                      },
                    }),
                    multiValueLabel: (baseStyles, state) => ({
                      ...baseStyles,
                      color: "#6AA74D",
                      ":hover": {
                        backgroundColor: state.color,
                        color: "#6AA74D",
                        cursor: "pointer",
                      },
                    }),
                    multiValueRemove: (baseStyles, state) => ({
                      ...baseStyles,
                      color: "#6AA74D",
                      ":hover": {
                        backgroundColor: state.color,
                        color: "#6AA74D",
                        cursor: "pointer",
                      },
                    }),
                  }}
                  options={option}
                  classNamePrefix="select"
                />
              </div>
            </div>
          </div>

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
              <Link to="/blog">
                <li className="navMenu-item">
                  <div className="nav-menu-button nav-menu-button-search">
                    Blog
                  </div>
                </li>
              </Link>
              <Link to="/">
                <li className="navMenu-item">
                  <div className="nav-menu-link">
                    <Link to="/sellwithus">
                      <a href className="nav-button">
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
      <div ref={ref}>
        {isComponentVisible && (
          <>
            <div className="tooltiptail"></div>
            <Box className="citydropdown-container">
              <Box className="citydropdown">
                <Tabs
                  value={valueOne}
                  onChange={handleChange}
                  className="citydropdown-ui"
                >
                  <Tab
                    label="Buy"
                    className="dropdown-tabs"
                    sx={{ width: "15%" }}
                  />
                  <Tab
                    label="Plot"
                    className="dropdown-tabs"
                    sx={{ width: "15%" }}
                  />
                  <Tab
                    label="Residential"
                    className="dropdown-tabs"
                    sx={{ width: "35%" }}
                  />
                  <Tab
                    label="Commercial"
                    className="dropdown-tabs"
                    sx={{ width: "35%" }}
                  />
                </Tabs>
                <Box className="citydropdown-input-box">
                  <Select
                    className="citydropdown-input"
                    defaultMenuIsOpen={true}
                    name="colors"
                    options={option}
                    classNamePrefix="select"
                    styles={{
                      option: (baseStyles, state) => ({
                        ...baseStyles,
                        ":hover": {
                          color: "#FFD194",
                          cursor: "pointer",
                        },
                      }),
                    }}
                    theme={(theme) => ({
                      ...theme,
                      borderRadius: "none",
                      colors: {
                        ...theme.colors,
                        primary: "rgba(42, 52, 47, 0.89);",
                        primary25: "rgba(42, 52, 47, 0.89);",
                      },
                    })}
                  />
                </Box>
              </Box>
            </Box>
          </>
        )}
        {!isComponentVisible && ""}
      </div>
    </div>
  );
};

export default Navbar;
