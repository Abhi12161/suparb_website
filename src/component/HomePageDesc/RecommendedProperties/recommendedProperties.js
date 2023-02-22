import React, { useEffect } from "react";
import "./recommendedProperties.scss";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";
import { BiHeart } from "react-icons/bi";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";
import { useDispatch, useSelector } from "react-redux";
import { recommendedPropertiesSelector } from "../../../redux/reducer/recommendedProperties";
import { fetchRecommendedProperties } from "../../../redux/action/recommendedProperties";
import { fetchProduct } from "../../../redux/action/product";
import { Link } from "react-router-dom";
import { fetchNearByProperty } from "../../../redux/action/nearByProperty";

const RecommendedProperties = () => {
  const dispatch = useDispatch();
  const { recommendedProperties } = useSelector(recommendedPropertiesSelector);

  useEffect(() => {
    dispatch(fetchRecommendedProperties());
  }, [dispatch]);

  // console.log(`recommendedProperties`, recommendedProperties);
  return (
    <div className="ReconditionsProperties">
      <h3 className="u-color-dark-blue AboutContent__title">
        Recommended Properties{" "}
      </h3>
      {/* head text */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          //   marginTop: 2,
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
            }}
          >
            Curated{" "}
          </span>{" "}
          specially for you
        </p>

        {/* buttons */}

        <div className="slider-btn-container">
          <button className="recondition-prev">
            <HiOutlineArrowNarrowLeft size={30} />
          </button>
          <button className="recondition-next">
            <HiOutlineArrowNarrowRight size={30} />
          </button>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          // justifyContent: "center",
          // alignItems: "center",
          marginBottom: "50px",
          marginTop: "5px",
        }}
      >
        <Swiper
          slidesPerView={4}
          spaceBetween={2}
          slidesPerGroup={2}
          loopFillGroupWithBlank={false}
          rewind={false}
          speed={1100}
          // grabCursor={true}
          breakpoints={{
            1500: {
              slidesPerView: 5,
              // spaceBetween: 6,
            },
            1400: {
              slidesPerView: 4.7,
              // spaceBetween: 6,
            },
            1300: {
              slidesPerView: 4,
              // spaceBetween: 6,
            },
            1200: {
              slidesPerView: 3.8,
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
            nextEl: ".recondition-next",
            prevEl: ".recondition-prev",
          }}
          // navigation= {true}
          modules={[Pagination, Navigation]}
          //   className="mySwiper"
        >
          {recommendedProperties.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="recondition-slider-container">
                  <Link
                    to={`/property-in-${item.cityName.toLowerCase()}/${
                      item.slug
                    }-${item.id}`}
                    className="linkclass"
                  >
                    <div
                      className="recondition-slider-cards"
                      onClick={(e) => dispatch(fetchProduct(item.id))}
                    >
                      <BiHeart
                        style={{
                          position: "absolute",
                          right: "25px",
                          top: "21px",
                        }}
                        color={"#FFFFFF"}
                        size={20}
                      />
                      <div className="recondition-price-tag">₹{item.price}</div>
                      <img
                        src={item.proImg}
                        alt="card"
                        style={{ width: "100%", borderRadius: "13px" }}
                      />
                      <div className="recondition-slider-box">
                        <p className="recondition-card-heading">
                          {item.DevName}, {item.location}, {item.cityName}
                        </p>
                        <div className="recondition-card-text">
                          <p style={{ fontSize: "13px" }}> Size</p>
                          <p style={{ fontSize: "13px" }}> {item.area}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default RecommendedProperties;
