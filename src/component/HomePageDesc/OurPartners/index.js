import React, { useEffect } from "react";
import "./style.scss";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useDispatch, useSelector } from "react-redux";
import { topPartnersSelector } from "../../../redux/reducer/topPartners";
import { fetchTopPartners } from "../../../redux/action/topPartners";
import { Navigation, Pagination } from "swiper";
import { fetchAllProjectList } from "../../../redux/action/allProjectList";
import { Link } from "react-router-dom";
const OurPartners = () => {
  const dispatch = useDispatch();
  const { topPartners } = useSelector(topPartnersSelector);

  useEffect(() => {
    dispatch(fetchTopPartners());
  }, [dispatch]);

  // console.log(`topPartners`, topPartners);

  return (
    <div className="OurPartners">
      <h3 className="u-color-dark-blue AboutContent__title">Our Partners</h3>
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
            Most Val
          </span>
          uable partners
        </p>

        {/* buttons */}

        <div className="slider-btn-container">
          <button className="OurPartners-prev">
            <HiOutlineArrowNarrowLeft size={30} />
          </button>
          <button className="OurPartners-next">
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
          slidesPerView={8}
          spaceBetween={2}
          slidesPerGroup={2}
          loopFillGroupWithBlank={false}
          rewind={false}
          speed={1100}
          // grabCursor={true}
          breakpoints={{
            1500: {
              slidesPerView: 10,
              spaceBetween: 6,
            },
            1400: {
              slidesPerView: 9,
              spaceBetween: 12,
            },
            1300: {
              slidesPerView: 8,
              spaceBetween: 6,
            },
            1200: {
              slidesPerView: 7,
              spaceBetween: 12,
            },
            1100: {
              slidesPerView: 5,
              spaceBetween: 12,
            },
            1000: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            890: {
              slidesPerView: 2.3,
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
              slidesPerView: 1,
              spaceBetween: 3,
            },
            280: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
          }}
          navigation={{
            nextEl: ".OurPartners-next",
            prevEl: ".OurPartners-prev",
          }}
          // navigation= {true}
          modules={[Pagination, Navigation]}
          //   className="mySwiper"
        >
          {topPartners.map((item, index) => {
            return (
              <SwiperSlide
                key={index}
                onClick={() => dispatch(fetchAllProjectList("", "", item.id))}
              >
                <Link
                  to={`/${item.name
                    .toLowerCase()
                    .replaceAll(/\s/g, "-")}-projects-list/`}
                >
                  <div className="OurPartners-card">
                    <div className="OurPartners-box">
                      <img
                        src={item.logo}
                        alt="Avatar"
                        className="OurPartners-img"
                      />
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

export default OurPartners;
