import React, { useEffect } from "react";
import "./style.scss";
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
// import services1 from "../../../asset/images/services1.png";
// import services2 from "../../../asset/images/services2.png";
// import services3 from "../../../asset/images/services3.png";
// import services4 from "../../../asset/images/services4.png";
import banner from "../../../asset/images/banner.png";
import { useDispatch, useSelector } from "react-redux";
// import required modules
import { Navigation, Pagination } from "swiper";
import { propertyServicesSelector } from "../../../redux/reducer/propertyServices";
import { fetchPropertyServices } from "../../../redux/action/propertyServices";
import { fetchBlogContent } from "../../../redux/action/blogContent";
import { Link } from "react-router-dom";
const PropertyServices = () => {
  const dispatch = useDispatch();
  const { propertyServices } = useSelector(propertyServicesSelector);

  useEffect(() => {
    dispatch(fetchPropertyServices());
  }, [dispatch]);

  // console.log(`propertyServices`, propertyServices)
  return (
    <div className="PropertyServices">
      <h3 className="u-color-dark-blue AboutContent__title">
        Property Services
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
            We give{" "}
          </span>
          you the best property buying experience{" "}
        </p>

        {/* buttons */}

        <div className="slider-btn-container">
          <button className="PropertyServices-prev">
            <HiOutlineArrowNarrowLeft size={30} />
          </button>
          <button className="PropertyServices-next">
            <HiOutlineArrowNarrowRight size={30} />
          </button>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          // justifyContent: "center",
          // alignItems: "center",
          marginBottom: "20px",
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
            nextEl: ".PropertyServices-next",
            prevEl: ".PropertyServices-prev",
          }}
          // navigation= {true}
          modules={[Pagination, Navigation]}
          //   className="mySwiper"
        >
          {propertyServices.map((item, index) => {
            return (
              <SwiperSlide
                key={index}
                onClick={() => dispatch(fetchBlogContent(item.id))}
              >
                <Link to={`/blog/${item.slug}/`} className="linkclass">
                  <div className="PropertyServices-slider-container">
                    <div className="PropertyServices-slider-cards">
                      <div className="PropertyServices-price-tag">
                        Home Loan
                      </div>
                      <img
                        src={item.img_url}
                        alt="card"
                        style={{
                          width: "100%",
                          borderTopLeftRadius: "13px",
                          borderTopRightRadius: "13px",
                        }}
                      />
                      <div className="PropertyServices-slider-box">
                        <p className="PropertyServices-card-text">
                          {item.title}
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

      <div className="lets-get-started-banner">
        <button className="banner-btn">Lets Get Started</button>
        <p className="lets-get-started-banner-text1 ">
          Start listing or buying
        </p>
        <p className="lets-get-started-banner-text2">
          a property with seedwill
        </p>
        <img src={banner} alt="banner" style={{ width: "100%" }} />
      </div>
    </div>
  );
};

export default PropertyServices;
