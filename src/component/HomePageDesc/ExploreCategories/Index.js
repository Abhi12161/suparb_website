import React, { useEffect } from "react";
import "./exploreCategories.scss";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useDispatch, useSelector } from "react-redux";
import { Navigation, Pagination } from "swiper";
import { propertyTypeSelector } from "../../../redux/reducer/propertyType";
import { fetchPropertyType } from "../../../redux/action/propertyType";
import { fetchAllProjectList } from "../../../redux/action/allProjectList";
import { Link } from "react-router-dom";

const ExploreCategories = () => {
  const dispatch = useDispatch();
  const { propertyType } = useSelector(propertyTypeSelector);

  useEffect(() => {
    dispatch(fetchPropertyType());
  }, [dispatch]);

  // console.log(`propertyType`, propertyType);

  return (
    <div className="ExploreCategories">
      <h3 className="u-color-dark-blue AboutContent__title">
        Explore Categories
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
          <button className="explore-prev">
            <HiOutlineArrowNarrowLeft size={30} />
          </button>
          <button className="explore-next">
            <HiOutlineArrowNarrowRight size={30} />
          </button>
        </div>
      </div>

      <div
        style={{
          display: "flex",
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
              slidesPerView: 5,
              // spaceBetween: 6,
            },
            1300: {
              slidesPerView: 4.8,
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
            nextEl: ".explore-next",
            prevEl: ".explore-prev",
          }}
          // navigation= {true}
          modules={[Pagination, Navigation]}
          //   className="mySwiper"
        >
          {propertyType?.map((item, index) => {
            return (
              <SwiperSlide
                key={index}
                onClick={() => dispatch(fetchAllProjectList("", item.name.toLowerCase()))}
              >
                <Link to={`${item.name.toLowerCase()}-property-in-india`}>
                  <div className="explore-slider-container">
                    <div className="explore-slider-cards">
                      <img
                        src={item.icon}
                        alt="card"
                        style={{ width: "100%" }}
                      />
                      <div className="explore-slider-box">
                        <p className="explore-card-heading">{item.name}</p>
                        <p className=" explore-card-text ">
                          {item.count}+ Properties
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

export default ExploreCategories;
