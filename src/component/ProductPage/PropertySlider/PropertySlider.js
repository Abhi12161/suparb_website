// import { div } from '@mui/material';
// import {  div, div, p } from "@mui/material";
import React from "react";
import "./propertyslider.scss";
// Import Swiper React components
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Home from "../../../asset/images/home.png";

// import required modules
import { Navigation, Pagination } from "swiper";

const PropertySlider = () => {
  return (
    <div className="property-slider-container">
      {/* head text */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          // marginTop: 2,
          position: "relative",
          justifyContent: "space-between",
        }}
      >
        <p style={{ fontFamily: "sans-serif", color: "#000000" }}>
          <span
            style={{
              textDecoration: "underline",
              textUnderlineOffset: "5px",
              textDecorationThickness: "2px",
              textDecorationColor: "#FFD194",
              marginBottom: "20px",
            }}
          >
            Choose{" "}
          </span>{" "}
          as per your preference. we will give you the best deal on any of them.
        </p>

        {/* buttons */}

        <div className="slider-btn-container">
          <button className="prev">
            <HiOutlineArrowNarrowLeft size={30} />
          </button>
          <button className="next">
            <HiOutlineArrowNarrowRight size={30} />
          </button>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: 50,
          color:'#F5F5F5'
        }}
      >
        <Swiper
          slidesPerView={4}
          // spaceBetween={20}
          slidesPerGroup={2}
          loopFillGroupWithBlank={false}
          rewind={false}
          speed={1100}
          // grabCursor={true}
          breakpoints={{
            1400: {
              slidesPerView: 4.5,
              spaceBetween: 6,
            },
            1200: {
              slidesPerView: 4.5,
              // spaceBetween: 12,
            },
            1100: {
              slidesPerView: 3.5,
              // spaceBetween: 12,
            },
            1000: {
              slidesPerView: 3,
              // spaceBetween: 10,
            },
            890: {
              slidesPerView: 2.8,
              spaceBetween: 8,
            },
            768: {
              slidesPerView: 2.5,
              spaceBetween: 8,
            },
            578: {
              slidesPerView: 2,
              spaceBetween: 7,
            },
            424: {
              slidesPerView: 1.2,
              spaceBetween: 3,
            },
            280: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
          }}
          navigation={{
            nextEl: ".next",
            prevEl: ".prev",
          }}
          // navigation= {true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div
              templateColumns="repeat(4, 1fr)"
              gap={2}
              className="property-slider-cards"
             
            >
              <div>
                <div
                  style={{
                    maxWidth: "260px",
                    borderRadius: "20px",
                    boxShadow:
                      "0 10px 22px rgb(29 71 123 / 18%)",
                  }}
                >
                  <div>
                    <img src={Home} alt="green iguana" />
                    <div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          position: "relative",
                          marginLeft: 2,
                          marginTop: 2,
                          marginBottom: 2,
                        }}
                      >
                        <div className="PropertySlider-box">
                          <p
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              position: "left",
                              fontWeight: 500,
                              color: "#000000",
                              fontSize: "15px",
                              marginTop: 0.3,
                            }}
                          >
                            Independent House
                          </p>
                          <p
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              position: "left",
                              fontWeight: 500,
                              color: "#6e6e6e",
                              fontSize: "15px",
                              marginTop: 0.3,
                            }}
                          >
                            650+ Properties
                          </p>
                          {/* <p
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              position: "left",
                              fontWeight: 500,
                              color: "#6e6e6e",
                              fontSize: "15px",
                              marginTop: 0.3,
                            }}
                          >
                            Austin, TX
                          </p> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              templateColumns="repeat(4, 1fr)"
              gap={2}
              className="property-slider-cards"
            >
              <div>
                <div
                  style={{
                    maxWidth: "260px",
                    borderRadius: "20px",
                    boxShadow:
                      "0 10px 22px rgb(29 71 123 / 18%), 0 2px 12px rgb(29 71 123 / 18%",
                  }}
                >
                  <div>
                    <img src={Home} alt="green iguana" />
                    <div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          position: "relative",
                          marginLeft: 2,
                          marginTop: 2,
                          marginBottom: 2,
                        }}
                      >
                        <div className="PropertySlider-box">
                          <p
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              position: "left",
                              fontWeight: 500,
                              color: "#000000",
                              fontSize: "15px",
                              marginTop: 0.3,
                            }}
                          >
                            Independent House
                          </p>
                          <p
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              position: "left",
                              fontWeight: 500,
                              color: "#6e6e6e",
                              fontSize: "15px",
                              marginTop: 0.3,
                            }}
                          >
                            650+ Properties
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              templateColumns="repeat(4, 1fr)"
              gap={2}
              className="property-slider-cards"
            >
              <div>
                <div
                  style={{
                    maxWidth: "260px",
                    borderRadius: "20px",
                    boxShadow:
                      "0 10px 22px rgb(29 71 123 / 18%), 0 2px 12px rgb(29 71 123 / 18%",
                  }}
                >
                  <div>
                    <img src={Home} alt="green iguana" />
                    <div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          position: "relative",
                          marginLeft: 2,
                          marginTop: 2,
                          marginBottom: 2,
                        }}
                      >
                        <div className="PropertySlider-box">
                          <p
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              position: "left",
                              fontWeight: 500,
                              color: "#000000",
                              fontSize: "15px",
                              marginTop: 0.3,
                            }}
                          >
                            Independent House
                          </p>
                          <p
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              position: "left",
                              fontWeight: 500,
                              color: "#6e6e6e",
                              fontSize: "15px",
                              marginTop: 0.3,
                            }}
                          >
                            650+ Properties
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              templateColumns="repeat(4, 1fr)"
              gap={2}
              className="property-slider-cards"
            >
              <div>
                <div
                  style={{
                    maxWidth: "260px",
                    borderRadius: "20px",
                    boxShadow:
                      "0 10px 22px rgb(29 71 123 / 18%), 0 2px 12px rgb(29 71 123 / 18%",
                  }}
                >
                  <div>
                    <img src={Home} alt="green iguana" />
                    <div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          position: "relative",
                          marginLeft: 2,
                          marginTop: 2,
                          marginBottom: 2,
                        }}
                      >
                        <div className="PropertySlider-box">
                          <p
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              position: "left",
                              fontWeight: 500,
                              color: "#000000",
                              fontSize: "15px",
                              marginTop: 0.3,
                            }}
                          >
                            Independent House
                          </p>
                          <p
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              position: "left",
                              fontWeight: 500,
                              color: "#6e6e6e",
                              fontSize: "15px",
                              marginTop: 0.3,
                            }}
                          >
                            650+ Properties
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              templateColumns="repeat(4, 1fr)"
              gap={2}
              className="property-slider-cards"
            >
              <div>
                <div
                  style={{
                    maxWidth: "260px",
                    borderRadius: "20px",
                    boxShadow:
                      "0 10px 22px rgb(29 71 123 / 18%), 0 2px 12px rgb(29 71 123 / 18%",
                  }}
                >
                  <div>
                    <img
                      src={Home}
                      alt="green iguana"
                      // style={{ width: "inherit" }}
                    />
                    <div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          position: "relative",
                          marginLeft: 2,
                          marginTop: 2,
                          marginBottom: 2,
                        }}
                      >
                        <div className="PropertySlider-box">
                          <p
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              position: "left",
                              fontWeight: 500,
                              color: "#000000",
                              fontSize: "15px",
                              marginTop: 0.3,
                            }}
                          >
                            Independent House
                          </p>
                          <p
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              position: "left",
                              fontWeight: 500,
                              color: "#6e6e6e",
                              fontSize: "15px",
                              marginTop: 0.3,
                            }}
                          >
                            650+ Properties
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              templateColumns="repeat(4, 1fr)"
              gap={2}
              className="property-slider-cards"
            >
              <div>
                <div
                  style={{
                    maxWidth: "260px",
                    borderRadius: "20px",
                    boxShadow:
                      "0 10px 22px rgb(29 71 123 / 18%), 0 2px 12px rgb(29 71 123 / 18%",
                  }}
                >
                  <div>
                    <img src={Home} alt="green iguana" />
                    <div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          position: "relative",
                          marginLeft: 2,
                          marginTop: 2,
                          marginBottom: 2,
                        }}
                      >
                        <div className="PropertySlider-box">
                          <p
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              position: "left",
                              fontWeight: 500,
                              color: "#000000",
                              fontSize: "15px",
                              marginTop: 0.3,
                            }}
                          >
                            Independent House
                          </p>
                          <p
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              position: "left",
                              fontWeight: 500,
                              color: "#6e6e6e",
                              fontSize: "15px",
                              marginTop: 0.3,
                            }}
                          >
                            650+ Properties
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              templateColumns="repeat(4, 1fr)"
              gap={2}
              className="property-slider-cards"
            >
              <div>
                <div
                  style={{
                    maxWidth: "260px",
                    borderRadius: "20px",
                    boxShadow:
                      "0 10px 22px rgb(29 71 123 / 18%), 0 2px 12px rgb(29 71 123 / 18%",
                  }}
                >
                  <div>
                    <img src={Home} alt="green iguana" />
                    <div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          position: "relative",
                          marginLeft: 2,
                          marginTop: 2,
                          marginBottom: 2,
                        }}
                      >
                        <div className="PropertySlider-box">
                          <p
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              position: "left",
                              fontWeight: 500,
                              color: "#000000",
                              fontSize: "15px",
                              marginTop: 0.3,
                            }}
                          >
                            Independent House
                          </p>
                          <p
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              position: "left",
                              fontWeight: 500,
                              color: "#6e6e6e",
                              fontSize: "15px",
                              marginTop: 0.3,
                            }}
                          >
                            650+ Properties
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              templateColumns="repeat(4, 1fr)"
              gap={2}
              className="property-slider-cards"
            >
              <div>
                <div
                  style={{
                    maxWidth: "260px",
                    borderRadius: "20px",
                    boxShadow:
                      "0 10px 22px rgb(29 71 123 / 18%), 0 2px 12px rgb(29 71 123 / 18%",
                  }}
                >
                  <div>
                    <img src={Home} alt="green iguana" />

                    <div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          position: "relative",
                          marginLeft: 2,
                          marginTop: 2,
                          marginBottom: 2,
                        }}
                      >
                        <div className="PropertySlider-box">
                          <p
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              position: "left",
                              fontWeight: 500,
                              color: "#000000",
                              fontSize: "15px",
                              marginTop: 0.3,
                            }}
                          >
                            Independent House
                          </p>
                          <p
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              position: "left",
                              fontWeight: 500,
                              color: "#6e6e6e",
                              fontSize: "15px",
                              marginTop: 0.3,
                            }}
                          >
                            650+ Properties
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default PropertySlider;
