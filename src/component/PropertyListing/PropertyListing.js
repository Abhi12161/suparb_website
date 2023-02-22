import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import { BsBuilding } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { ImSortAmountDesc } from "react-icons/im";
import { IoIosArrowForward, IoMdTrain } from "react-icons/io";
import { IoGridSharp } from "react-icons/io5";
import { MdIosShare, MdVerified } from "react-icons/md";
import { RiLayout4Fill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import agent from "../../asset/images/agent.jpeg";
import { fetchAllProjectList } from "../../redux/action/allProjectList";
import { allProjectListSelector } from "../../redux/reducer/allProjectList";
import ScrollButton from "../MoveToTopButton/ScrollButton";
import AdvanceFilter from "./AdvanceFilter";
import Navbar from "./Navbar";
import "./style.scss";
import { fetchProduct } from "../../redux/action/product";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const PropertyListing = () => {
  const addImageFallback = (event) => {
    event.currentTarget.src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjCN1Fg1nNOg8sc76MR64L7ZBPWuYs6c1BGg&usqp=CAU";
  };
  const date = new Date();
  let day = date.getDate();
  let year = date.getFullYear();
  let currentDate = `Feb ${day}, ${year}`;

  const [showUi, setShowUi] = useState(false);
  const handleshowUi = () => {
    setShowUi(true);
  };
  const handleshowUiTwo = () => {
    setShowUi(false);
  };
  const [active, setActive] = useState("");
  const handleClick = (event) => {
    setActive(event.target.id);
  };

  const dispatch = useDispatch();
  const { allProjectList } = useSelector(allProjectListSelector);
  const [page, setPage] = useState(1);

  // infinitescrolling
  useEffect(() => {
    dispatch(fetchAllProjectList("", "", "", "", page));
  }, [page]);

  useEffect(() => {
    function handleScroll() {
      const windowHeight = window.innerHeight;
      const fullHeight = document.body.offsetHeight;
      const scrollPoint = window.scrollY + windowHeight;
      if (scrollPoint >= fullHeight) {
        setPage((prev) => prev + 1);
        setCard((prev) => [...prev, ...allProjectList]);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [page]);

  const [card, setCard] = useState([]);
  //...........//

  return (
    <>
      <Navbar />
      <ScrollButton />

      <div className="property">
        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)" }}
        >
          <div style={{ gridColumn: "span 9" }}>
            <div className="propertypage-header-container">
              <Link to="/" className="linkclass1">
                Home
              </Link>
              <IoIosArrowForward size={20} />
              Property in Gurgaon
            </div>
          </div>
          <div
            style={{
              gridColumn: "span 3",
              display: "inline-flex",
              justifyContent: "flex-end",
            }}
          >
            <span style={{ fontSize: "12px", color: "#8B8B8B" }}>
              Last Updated: {currentDate}
            </span>
          </div>
        </div>
        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)" }}
        >
          {/* filter menu Starts */}
          <Box gridColumn="span 3">
            <AdvanceFilter />
          </Box>
          {/* filter menu Ends */}

          {/* Property details Starts */}
          <Box gridColumn="span 9">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(12, 1fr)",
                marginBottom: "2%",
              }}
            >
              <div style={{ gridColumn: "span 8" }}>
                <span style={{ fontSize: "12px" }}>
                  38952 search results | Property in Gurgaon for Sale
                </span>
              </div>
              <div
                style={{ gridColumn: "span 4", backgroundColor: "transparent" }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ display: "flex", gap: "5px" }}>
                    <ImSortAmountDesc size={20} />
                    <Typography backgroundColor="#F5FAF3" marginTop="-3px">
                      <span style={{ fontSize: "14px" }}>Sort By</span>
                    </Typography>
                  </div>

                  <div className="sort-section">
                    <div className="sort-selection">
                      <form action="#">
                        <select
                          name="sort"
                          id="sort"
                          className="sort-selection--style"
                        >
                          <option value="lowest">Relevance</option>
                          <option value="lowest">Newest First</option>
                          <option value="lowest">Price Low to High</option>
                          <option value="highest">Price High to Low</option>
                          <option value="a-z">
                            price / sq.ft : low to high
                          </option>
                          <option value="z-a">
                            price / sq.ft : high to low
                          </option>
                        </select>
                      </form>
                    </div>
                  </div>
                  <RiLayout4Fill
                    onClick={(event) => {
                      handleshowUi();
                      handleClick(event);
                    }}
                    // onClick={handleshowUi handleClick}
                    key={1}
                    id={"1"}
                    className={
                      active === "1" ? "active-layout" : "not-active-layout"
                    }
                  />
                  <IoGridSharp
                    onClick={(event) => {
                      handleshowUiTwo();
                      handleClick(event);
                    }}
                    key={2}
                    id={"2"}
                    className={
                      active === "2" ? "active-layout" : "not-active-layout"
                    }
                  />
                </div>
              </div>
            </div>

            {showUi ? (
              <div className="property-card-main">
                {card.length > 9
                  ? card.map((item, index) => {
                      return (
                        <div
                          key={index}
                          style={{ marginBottom: "15px", marginRight: "15px" }}
                          onClick={(e) => dispatch(fetchProduct(item.id))}
                        >
                          <Link
                            to={`/property-in-${item.cityName.toLowerCase()}/${
                              item.slug
                            }-${item.id}`}
                            className="linkclass"
                          >
                            <div className="property-card">
                              <div className="price-tag">₹ {item.price}</div>
                              <Link
                                to={`/property-in-${item.cityName.toLowerCase()}/${
                                  item.slug
                                }-${item.id}`}
                              >
                                <img
                                  src={item.proImg}
                                  alt="property"
                                  onError={addImageFallback}
                                  style={{
                                    width: "100%",
                                    height: "180px",
                                    borderTopRightRadius: "6px",
                                    borderTopLeftRadius: "6px",
                                  }}
                                />
                              </Link>
                              <div className="property-grid-layout-container">
                                <div
                                  style={{
                                    display: "grid",
                                    gridTemplateColumns: "repeat(12, 1fr)",
                                  }}
                                >
                                  <div style={{ gridColumn: "span 10" }}>
                                    <span className="property-name">
                                      {" "}
                                      {item.DevName}
                                    </span>
                                  </div>
                                  <div style={{ gridColumn: "span 2" }}>
                                    <div
                                      style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        justifyItems: "center",
                                      }}
                                    >
                                      <MdIosShare
                                        color="#FFD194"
                                        size={20}
                                        style={{ cursor: "pointer" }}
                                      />
                                      <FaRegHeart
                                        color="#FFD194"
                                        size={20}
                                        style={{ cursor: "pointer" }}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <span className="property-address">
                                  {item.location}, {item.cityName}
                                </span>
                                <div className="property-detail-grid-container">
                                  <div className="property-detail-grid-item">
                                    <span className="property-detail-subtext">
                                      3 Bhk
                                      <Divider
                                        orientation="vertical"
                                        style={{
                                          marginLeft: "10px",
                                        }}
                                      />
                                    </span>
                                  </div>

                                  <div className="property-detail-grid-item">
                                    <span className="property-detail-subtext">
                                      {item.property_type}{" "}
                                      <Divider
                                        orientation="vertical"
                                        style={{
                                          marginLeft: "10px",
                                        }}
                                      />
                                    </span>
                                  </div>
                                  <div className="property-detail-grid-item">
                                    <span className="property-detail-subtext">
                                      {item.area}{" "}
                                    </span>
                                  </div>
                                  <div className="property-detail-grid-item">
                                    <span className="property-detail-subtext">
                                      <Divider
                                        orientation="vertical"
                                        style={{
                                          marginRight: "10px",
                                        }}
                                      />
                                      Ready to move
                                    </span>
                                  </div>
                                </div>

                                <Divider
                                  style={{
                                    marginTop: "5px",
                                    marginBottom: "22px",
                                  }}
                                />
                                <div
                                  style={{
                                    display: "grid",
                                    gridTemplateColumns: "repeat(12, 1fr)",
                                  }}
                                >
                                  <div
                                    style={{
                                      gridColumn: "span 2",
                                      marginTop: "-15px",
                                    }}
                                  >
                                    <IconButton style={{ padding: "0" }}>
                                      <MdVerified
                                        color="#6aa74d"
                                        className="verified-badge"
                                      />
                                      <Avatar alt="Profile" src={agent} />
                                    </IconButton>
                                  </div>
                                  <span
                                    style={{
                                      gridColumn: "span 6",
                                      marginLeft: "10px",
                                      fontSize: "10px",
                                      color: "#8b8b8b",
                                    }}
                                  >
                                    SEEDWILL EXPERT
                                  </span>
                                  <div
                                    style={{
                                      gridColumn: "span 4",
                                      marginTop: "-14px",
                                    }}
                                  >
                                    <Button
                                      variant="contained"
                                      className="contact-btn"
                                      color="success"
                                    >
                                      contact
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>
                      );
                    })
                  : allProjectList.map((item, index) => {
                      return (
                        <div
                          key={index}
                          style={{ marginBottom: "15px", marginRight: "15px" }}
                          onClick={(e) => dispatch(fetchProduct(item.id))}
                        >
                          <Link
                            to={`/property-in-${item.cityName.toLowerCase()}/${
                              item.slug
                            }-${item.id}`}
                            className="linkclass"
                          >
                            <div className="property-card">
                              <div className="price-tag">₹ {item.price}</div>
                              <Link
                                to={`/property-in-${item.cityName.toLowerCase()}/${
                                  item.slug
                                }-${item.id}`}
                              >
                                <img
                                  src={item.proImg}
                                  alt="property"
                                  onError={addImageFallback}
                                  style={{
                                    width: "100%",
                                    height: "180px",
                                    borderTopRightRadius: "6px",
                                    borderTopLeftRadius: "6px",
                                  }}
                                />
                              </Link>
                              <div className="property-grid-layout-container">
                                <div
                                  style={{
                                    display: "grid",
                                    gridTemplateColumns: "repeat(12, 1fr)",
                                  }}
                                >
                                  <div style={{ gridColumn: "span 10" }}>
                                    <span className="property-name">
                                      {" "}
                                      {item.DevName}
                                    </span>
                                  </div>
                                  <div style={{ gridColumn: "span 2" }}>
                                    <div
                                      style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        justifyItems: "center",
                                      }}
                                    >
                                      <MdIosShare
                                        color="#FFD194"
                                        size={20}
                                        style={{ cursor: "pointer" }}
                                      />
                                      <FaRegHeart
                                        color="#FFD194"
                                        size={20}
                                        style={{ cursor: "pointer" }}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <span className="property-address">
                                  {item.location}, {item.cityName}
                                </span>
                                <div className="property-detail-grid-container">
                                  <div className="property-detail-grid-item">
                                    <span className="property-detail-subtext">
                                      3 Bhk
                                      <Divider
                                        orientation="vertical"
                                        style={{
                                          marginLeft: "10px",
                                        }}
                                      />
                                    </span>
                                  </div>

                                  <div className="property-detail-grid-item">
                                    <span className="property-detail-subtext">
                                      {item.property_type}{" "}
                                      <Divider
                                        orientation="vertical"
                                        style={{
                                          marginLeft: "10px",
                                        }}
                                      />
                                    </span>
                                  </div>
                                  <div className="property-detail-grid-item">
                                    <span className="property-detail-subtext">
                                      {item.area}{" "}
                                    </span>
                                  </div>
                                  <div className="property-detail-grid-item">
                                    <span className="property-detail-subtext">
                                      <Divider
                                        orientation="vertical"
                                        style={{
                                          marginRight: "10px",
                                        }}
                                      />
                                      Ready to move
                                    </span>
                                  </div>
                                </div>

                                <Divider
                                  style={{
                                    marginTop: "5px",
                                    marginBottom: "22px",
                                  }}
                                />
                                <div
                                  style={{
                                    display: "grid",
                                    gridTemplateColumns: "repeat(12, 1fr)",
                                  }}
                                >
                                  <div
                                    style={{
                                      gridColumn: "span 2",
                                      marginTop: "-15px",
                                    }}
                                  >
                                    <IconButton style={{ padding: "0" }}>
                                      <MdVerified
                                        color="#6aa74d"
                                        className="verified-badge"
                                      />
                                      <Avatar alt="Profile" src={agent} />
                                    </IconButton>
                                  </div>
                                  <span
                                    style={{
                                      gridColumn: "span 6",
                                      marginLeft: "10px",
                                      fontSize: "10px",
                                      color: "#8b8b8b",
                                    }}
                                  >
                                    SEEDWILL EXPERT
                                  </span>
                                  <div
                                    style={{
                                      gridColumn: "span 4",
                                      marginTop: "-14px",
                                    }}
                                  >
                                    <Button
                                      variant="contained"
                                      className="contact-btn"
                                      color="success"
                                    >
                                      contact
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>
                      );
                    })}
              </div>
            ) : (
              <>
                {card.length > 9
                  ? card?.map((item, index) => {
                      return (
                        <div
                          // className="card-list"
                          key={index}
                          onClick={() => dispatch(fetchProduct(item.id))}
                        >
                          <Link
                            to={`/property-in-${item.cityName.toLowerCase()}/${
                              item.slug
                            }-${item.id}`}
                            className="linkclass"
                          >
                            <div className="card-list">
                              <div style={{ display: "flex", width: "100%" }}>
                                <p className="price-tag ">{item.price}</p>
                                <img
                                  src={item.proImg}
                                  alt="card"
                                  style={{
                                    borderTopLeftRadius: "6px",
                                    borderBottomLeftRadius: "6px",
                                  }}
                                />

                                <div className="card-list-container">
                                  <p
                                    style={{
                                      fontSize: "12px",
                                      fontWeight: "600",
                                    }}
                                  >
                                    {item.DevName}
                                  </p>
                                  <p
                                    style={{
                                      fontSize: "12px",
                                      fontWeight: "500",
                                      fontFamily: "Montserrat",
                                      color: "#8B8B8B",
                                    }}
                                  >
                                    2 BHK Independent Builder Floor in{" "}
                                    {item.location}
                                  </p>
                                  <div
                                    style={{
                                      display: "flex",
                                      gap: "20px",
                                      fontSize: "12px",
                                    }}
                                  >
                                    <div>
                                      <span
                                        style={{
                                          fontSize: "10px",
                                          color: "#8B8B8B",
                                        }}
                                      >
                                        Rooms
                                      </span>
                                      <p
                                        style={{
                                          marginTop: "3px",
                                          fontFamily: "Montserrat",
                                          fontWeight: "600",
                                        }}
                                      >
                                        2 bhk
                                      </p>
                                    </div>

                                    <div>
                                      <span
                                        style={{
                                          fontSize: "10px",
                                          color: "#8B8B8B",
                                        }}
                                      >
                                        Property type
                                      </span>
                                      <p
                                        style={{
                                          marginTop: "3px",
                                          fontFamily: "Montserrat",
                                          fontWeight: "600",
                                        }}
                                      >
                                        {item.property_type}
                                      </p>
                                    </div>
                                    <div>
                                      <span
                                        style={{
                                          fontSize: "10px",
                                          color: "#8B8B8B",
                                        }}
                                      >
                                        FURNISHING
                                      </span>
                                      <p
                                        style={{
                                          marginTop: "3px",
                                          fontFamily: "Montserrat",
                                          fontWeight: "600",
                                        }}
                                      >
                                        2 bhk
                                      </p>
                                    </div>

                                    <div>
                                      <span
                                        style={{
                                          fontSize: "10px",
                                          color: "#8B8B8B",
                                        }}
                                      >
                                        BUILT-UP AREA
                                      </span>
                                      <p
                                        style={{
                                          marginTop: "3px",
                                          fontFamily: "Montserrat",
                                          fontWeight: "600",
                                        }}
                                      >
                                        {item.area}
                                      </p>
                                    </div>

                                    <div>
                                      <span
                                        style={{
                                          fontSize: "10px",
                                          color: "#8B8B8B",
                                        }}
                                      >
                                        Average price
                                      </span>
                                      <p
                                        style={{
                                          marginTop: "3px",
                                          fontFamily: "Montserrat",
                                          fontWeight: "600",
                                        }}
                                      >
                                        2 bhk
                                      </p>
                                    </div>
                                  </div>

                                  <p
                                    style={{
                                      fontSize: "12px",
                                      color: "#8B8B8B",
                                    }}
                                  >
                                    Godrej properties, one of the oldest
                                    veterans of the realty sector in India have
                                    recently residential in Gurgaon read more
                                  </p>

                                  <div
                                    style={{ border: "1px solid #ECECEC" }}
                                  />
                                  <div
                                    style={{
                                      display: "flex",
                                      marginTop: "10px",
                                      justifyContent: "space-between",
                                    }}
                                  >
                                    <div
                                      style={{
                                        display: "flex",
                                        gap: "10px",
                                        fontSize: "12px",
                                        color: "#8B8B8B",
                                      }}
                                    >
                                      <img
                                        src={agent}
                                        alt="img"
                                        style={{
                                          borderRadius: "50%",
                                          width: "45px",
                                          height: "45px",
                                        }}
                                      />
                                      <span style={{ marginTop: "15px" }}>
                                        Seedwill Expert
                                      </span>
                                    </div>

                                    <button
                                      style={{
                                        width: "120px",
                                        background: "#6AA74D",
                                        color: "#FFFFFF",
                                        borderRadius: "6px",
                                        border: "none",
                                        cursor: "pointer",
                                      }}
                                    >
                                      Contact
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>
                      );
                    })
                  : allProjectList.map((item, index) => {
                      return (
                        <div
                          // className="card-list"
                          key={index}
                          onClick={() => dispatch(fetchProduct(item.id))}
                        >
                          <Link
                            to={`/property-in-${item.cityName.toLowerCase()}/${
                              item.slug
                            }-${item.id}`}
                            className="linkclass"
                          >
                            <div className="card-list">
                              <div style={{ display: "flex", width: "100%" }}>
                                <p className="price-tag ">{item.price}</p>
                                <img
                                  src={item.proImg}
                                  alt="card"
                                  style={{
                                    borderTopLeftRadius: "6px",
                                    borderBottomLeftRadius: "6px",
                                  }}
                                />

                                <div className="card-list-container">
                                  <p
                                    style={{
                                      fontSize: "12px",
                                      fontWeight: "600",
                                    }}
                                  >
                                    {item.DevName}
                                  </p>
                                  <p
                                    style={{
                                      fontSize: "12px",
                                      fontWeight: "500",
                                      fontFamily: "Montserrat",
                                      color: "#8B8B8B",
                                    }}
                                  >
                                    2 BHK Independent Builder Floor in{" "}
                                    {item.location}
                                  </p>
                                  <div
                                    style={{
                                      display: "flex",
                                      gap: "20px",
                                      fontSize: "12px",
                                    }}
                                  >
                                    <div>
                                      <span
                                        style={{
                                          fontSize: "10px",
                                          color: "#8B8B8B",
                                        }}
                                      >
                                        Rooms
                                      </span>
                                      <p
                                        style={{
                                          marginTop: "3px",
                                          fontFamily: "Montserrat",
                                          fontWeight: "600",
                                        }}
                                      >
                                        2 bhk
                                      </p>
                                    </div>

                                    <div>
                                      <span
                                        style={{
                                          fontSize: "10px",
                                          color: "#8B8B8B",
                                        }}
                                      >
                                        Property type
                                      </span>
                                      <p
                                        style={{
                                          marginTop: "3px",
                                          fontFamily: "Montserrat",
                                          fontWeight: "600",
                                        }}
                                      >
                                        {item.property_type}
                                      </p>
                                    </div>
                                    <div>
                                      <span
                                        style={{
                                          fontSize: "10px",
                                          color: "#8B8B8B",
                                        }}
                                      >
                                        FURNISHING
                                      </span>
                                      <p
                                        style={{
                                          marginTop: "3px",
                                          fontFamily: "Montserrat",
                                          fontWeight: "600",
                                        }}
                                      >
                                        2 bhk
                                      </p>
                                    </div>

                                    <div>
                                      <span
                                        style={{
                                          fontSize: "10px",
                                          color: "#8B8B8B",
                                        }}
                                      >
                                        BUILT-UP AREA
                                      </span>
                                      <p
                                        style={{
                                          marginTop: "3px",
                                          fontFamily: "Montserrat",
                                          fontWeight: "600",
                                        }}
                                      >
                                        {item.area}
                                      </p>
                                    </div>

                                    <div>
                                      <span
                                        style={{
                                          fontSize: "10px",
                                          color: "#8B8B8B",
                                        }}
                                      >
                                        Average price
                                      </span>
                                      <p
                                        style={{
                                          marginTop: "3px",
                                          fontFamily: "Montserrat",
                                          fontWeight: "600",
                                        }}
                                      >
                                        2 bhk
                                      </p>
                                    </div>
                                  </div>

                                  <p
                                    style={{
                                      fontSize: "12px",
                                      color: "#8B8B8B",
                                    }}
                                  >
                                    Godrej properties, one of the oldest
                                    veterans of the realty sector in India have
                                    recently residential in Gurgaon read more
                                  </p>

                                  <div
                                    style={{ border: "1px solid #ECECEC" }}
                                  />
                                  <div
                                    style={{
                                      display: "flex",
                                      marginTop: "10px",
                                      justifyContent: "space-between",
                                    }}
                                  >
                                    <div
                                      style={{
                                        display: "flex",
                                        gap: "10px",
                                        fontSize: "12px",
                                        color: "#8B8B8B",
                                      }}
                                    >
                                      <img
                                        src={agent}
                                        alt="img"
                                        style={{
                                          borderRadius: "50%",
                                          width: "45px",
                                          height: "45px",
                                        }}
                                      />
                                      <span style={{ marginTop: "15px" }}>
                                        Seedwill Expert
                                      </span>
                                    </div>

                                    <button
                                      style={{
                                        width: "120px",
                                        background: "#6AA74D",
                                        color: "#FFFFFF",
                                        borderRadius: "6px",
                                        border: "none",
                                        cursor: "pointer",
                                      }}
                                    >
                                      Contact
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>
                      );
                    })}
              </>
            )}
          </Box>
        </div>
      </div>
    </>
  );
};

export default PropertyListing;
