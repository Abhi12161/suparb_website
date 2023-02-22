import React, { useEffect } from "react";
import "./style.scss";
// Import Swiper React components
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";
// import { BiHeart } from "react-icons/bi";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useDispatch, useSelector } from "react-redux";

// import required modules
import { Navigation, Pagination } from "swiper";
import { popularBuildersSelector } from "../../../redux/reducer/popularBuilders";
import { fetchPopularBuilders } from "../../../redux/action/popularBuilders";
import { fetchAllProjectList } from "../../../redux/action/allProjectList";
import { Link } from "react-router-dom";

const PopularBuilder = () => {
  const dispatch = useDispatch();
  const { popularBuilders } = useSelector(popularBuildersSelector);

  useEffect(() => {
    dispatch(fetchPopularBuilders());
  }, [dispatch]);

  // console.log(`popularBuilders`, popularBuilders);

  return (
    <div className="PopularBuilder">
      <h3 className="u-color-dark-blue AboutContent__title">
        Popular Builders{" "}
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
              color: "#000000",
            }}
          >
            Propert
          </span>
          ies by top builders
        </p>

        {/* buttons */}

        <div className="slider-btn-container">
          <button className="popularBuilder-prev">
            <HiOutlineArrowNarrowLeft size={30} />
          </button>
          <button className="popularBuilder-next">
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
              spaceBetween: 6,
            },
            1400: {
              slidesPerView: 3.5,
              spaceBetween: 12,
            },
            1300: {
              slidesPerView: 4,
              spaceBetween: 6,
            },
            1200: {
              slidesPerView: 3.8,
              spaceBetween: 12,
            },
            1100: {
              slidesPerView: 3.5,
              spaceBetween: 12,
            },
            1000: {
              slidesPerView: 3,
              spaceBetween: 10,
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
            nextEl: ".popularBuilder-next",
            prevEl: ".popularBuilder-prev",
          }}
          // navigation= {true}
          modules={[Pagination, Navigation]}
          //   className="mySwiper"
        >
          {popularBuilders.map((item, index) => {
            return (
              <SwiperSlide
                key={index}
                onClick={() => dispatch(fetchAllProjectList("", "", item.id))}
                // onClick={() => alert(item.id)}
              >
                <Link
                  to={`/${item.name
                    .toLowerCase()
                    .replaceAll(/\s/g, "-")}-projects-list/`}
                    className="linkclass"
                >
                  <div className="PopularBuilder-card">
                    <div className="PopularBuilder-box">
                      <img
                        src={item.logo}
                        alt="Avatar"
                        className="PopularBuilder-img"
                      />
                      <div style={{ marginTop: "7px" }}>
                        <p
                          style={{
                            fontWeight: "600",
                            fontFamily: "monospace",
                            fontSize: "14px",
                          }}
                        >
                          {item.name}
                        </p>
                        <p
                          style={{
                            color: "#8B8B8B",
                            fontSize: "13px",
                            marginTop: "-10px",
                          }}
                        >
                          {item.count} Total Project
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default PopularBuilder;
