import { Avatar, Button, Divider, IconButton } from "@mui/material";
import React from "react";
import { BsBuilding } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";
import { IoMdTrain } from "react-icons/io";
import { MdIosShare, MdVerified } from "react-icons/md";
import { Link } from "react-router-dom";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import home3d from "../../../../asset/images/3dhome.svg";
import agent from "../../../../asset/images/agent.jpeg";
import "./style.scss";
import { useSelector } from "react-redux";
import { productSelector } from "../../../../redux/reducer/product";

const SimilarProjects = () => {
  const { product } = useSelector(productSelector);
  // console.log(`product`, product?.similarProjcetArr);

  return (
    <>
      <div className="similar-projects-button-container">
        <button className="similar-projects-prev">
          <HiOutlineArrowNarrowLeft size={30} />
        </button>
        <button className="similar-projects-next">
          <HiOutlineArrowNarrowRight size={30} />
        </button>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={1}
        slidesPerGroup={1}
        loopFillGroupWithBlank={false}
        rewind={false}
        speed={1100}
        grabCursor={true}
        breakpoints={{
          2500: {
            slidesPerView: 4,
            spaceBetween: 6,
          },
          2000: {
            slidesPerView: 3.5,
            spaceBetween: 6,
          },
          1900: {
            slidesPerView: 3.3,
            spaceBetween: 6,
          },
          1700: {
            slidesPerView: 3.1,
            spaceBetween: 6,
          },
          1500: {
            slidesPerView: 3,
            spaceBetween: 6,
          },
          1400: {
            slidesPerView: 2.8,
            spaceBetween: 5,
          },
          1300: {
            slidesPerView: 2.4,
            spaceBetween: 10,
          },
          1200: {
            slidesPerView: 2.2,
            spaceBetween: 12,
          },
          1100: {
            slidesPerView: 2,
            spaceBetween: 12,
          },
          1000: {
            slidesPerView: 1.8,
            spaceBetween: 10,
          },
          890: {
            slidesPerView: 1.6,
            spaceBetween: 8,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 8,
          },
          578: {
            slidesPerView: 1.5,
            spaceBetween: 7,
          },
          424: {
            slidesPerView: 1.2,
            spaceBetween: 3,
          },
          375: {
            slidesPerView: 1,
          },
        }}
        navigation={{
          nextEl: ".similar-projects-next",
          prevEl: ".similar-projects-prev",
        }}
        modules={[Pagination, Navigation]}
      >
        {product?.similarProjcetArr?.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="similar-projects-card">
                <div className="price-tag">₹ {item.price}</div>
                <Link to={"/product"}>
                  <img
                    width="100%"
                    height="200px"
                    src={item.proImg}
                    alt="#6aa74d iguana"
                    style={{
                      borderTopRightRadius: "6px",
                      borderTopLeftRadius: "6px",
                    }}
                  />
                </Link>
                <div className="similar-projects-grid-layout-container">
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(12, 1fr)",
                    }}
                  >
                    <div style={{ gridColumn: "span 10" }}>
                      <span className="property-name">{item.name}</span>
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
                          color="#d1913c"
                          size={20}
                          style={{ cursor: "pointer" }}
                        />
                        <FaRegHeart
                          color="#d1913c"
                          size={20}
                          style={{ cursor: "pointer" }}
                        />
                      </div>
                    </div>
                  </div>
                  <span className="property-address">
                  
                    {item.location}, {item.cityName}
                  </span>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(12, 1fr)",
                      marginBottom: "2%",
                    }}
                  >
                    <div
                      style={{
                        gridColumn: "span 12",
                        display: "flex",
                        gap: "1.2",
                      }}
                    >
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "repeat(12, 1fr)",
                        }}
                      >
                        <div style={{ gridColumn: "span 12" }}>
                          <span className="property-detail-text">Rooms</span>
                        </div>
                        <div style={{ gridColumn: "span 12" }}>
                          <span className="property-detail-subtext">3 BHK</span>
                        </div>
                      </div>
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "repeat(12, 1fr)",
                        }}
                      >
                        <div style={{ gridColumn: "span 12" }}>
                          <span className="property-detail-text">
                            Bath rooms
                          </span>
                        </div>
                        <div style={{ gridColumn: "span 12" }}>
                          <span className="property-detail-subtext">3 </span>
                        </div>
                      </div>
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "repeat(12, 1fr)",
                        }}
                      >
                        <div style={{ gridColumn: "span 12" }}>
                          <span className="property-detail-text">
                            Furnishing
                          </span>
                        </div>
                        <div style={{ gridColumn: "span 12" }}>
                          <span className="property-detail-subtext">
                            Fully Furnished{" "}
                          </span>
                        </div>
                      </div>
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "repeat(12, 1fr)",
                        }}
                      >
                        <div style={{ gridColumn: "span 12" }}>
                          <span className="property-detail-text">
                            Build-up area
                          </span>
                        </div>
                        <div style={{ gridColumn: "span 12" }}>
                          <span className="property-detail-subtext">
                            {" "}
                            {item.area}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(12, 1fr)",
                    }}
                  >
                    <span style={{ gridColumn: "span 4", fontSize: "10px" }}>
                      14 nearby places
                    </span>
                    <div style={{ gridColumn: "span 4" }}>
                      <button className="nearby-places">
                        <IoMdTrain color="#6aa74d" />
                        Metro Station
                      </button>
                    </div>
                    <div style={{ gridColumn: "span 4" }}>
                      <button className="nearby-places">
                        <BsBuilding color="#6aa74d" />
                        Shopping Mall
                      </button>
                    </div>
                  </div>
                  <Divider
                    style={{
                      marginTop: "10px",
                      marginBottom: "20px",
                    }}
                  />
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(12, 1fr)",
                    }}
                  >
                    <div style={{ gridColumn: "span 2", marginTop: "-15px" }}>
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
                        fontSize: "12px",
                        color: "#8b8b8b",
                      }}
                    >
                      SEEDWILL EXPERT
                    </span>
                    <div style={{ gridColumn: "span 4", marginTop: "-14px" }}>
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
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default SimilarProjects;
