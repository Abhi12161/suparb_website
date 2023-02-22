import AOS from "aos";
import React, { useEffect, useRef } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import v1 from "../../asset/v1.mp4";
import v2 from "../../asset/v2.mp4";
import "./style.scss";
const CarouselComponent = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      startEvent: "DOMContentLoaded",
    });
  }, []);

  const videoEl = useRef(null);
  const videoE2 = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
  };

  const attemptPlay2 = () => {
    videoE2 &&
      videoE2.current &&
      videoE2.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
    attemptPlay2();
  }, []);

  return (
    <div className="hompageCarouselContainer">
      <section className={`hompageCarousel  carousel`}>
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="container">
              <video
              className="slider-video"
                controls={false}
                playsInline
                loop
                muted
                alt="All the devices"
                ref={videoEl}
              >
                <source src={v1} type="video/webm" />
              </video>
              
              <div className="content" data-aos="fade-up">
                Formentera
                <div className="contentContainer">
                  <span className="contentText">Spain</span>
                  <div className="circleContent"></div>
                  <span className="contentPrice">$75,000</span>
                </div>
                <div className="carouselBtn">
                  See details
                  <span className="iconArrow">
                    <HiOutlineArrowNarrowRight
                      style={{ width: "24px", height: "24px" }}
                    />
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container">
              <video
                className="slider-video"
                controls={false}
                playsInline
                loop
                muted
                alt="All the devices"
                ref={videoE2}
              >
                <source src={v2} type="video/webm" />
              </video>
              <div className="content" data-aos="fade-up">
                Formentera
                <div className="contentContainer">
                  <span className="contentText">Spain</span>
                  <div className="circleContent"></div>
                  <span className="contentPrice">$75,000</span>
                </div>
                <div className="carouselBtn">
                  See details
                  <span className="iconArrow">
                    <HiOutlineArrowNarrowRight
                      style={{ width: "24px", height: "24px" }}
                    />
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container">
              <img
                style={{ width: "100vw", height: "100vh" }}
                src="https://img.gtsstatic.net/reno/imagereader.aspx?imageurl=https%3A%2F%2Fsir.azureedge.net%2F1294i215%2Fmvknx7ggdgsn4etmmvr7v9d546i215&option=N&permitphotoenlargement=false&w=1600&h=900"
                alt="video"
              />
              <div className="content" data-aos="fade-up">
                Formentera
                <div className="contentContainer">
                  <span className="contentText">Spain</span>
                  <div className="circleContent"></div>
                  <span className="contentPrice">$75,000</span>
                </div>
                <div className="carouselBtn">
                  See details
                  <span className="iconArrow">
                    <HiOutlineArrowNarrowRight
                      style={{ width: "24px", height: "24px" }}
                    />
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container">
              <img
                style={{ width: "100%", height: "100vh" }}
                src="https://img.gtsstatic.net/reno/imagereader.aspx?imageurl=https%3A%2F%2Fsir.azureedge.net%2F1103i215%2Fdhefmy1pkbvqmgexw0s09vbkn6i215&option=N&permitphotoenlargement=false&w=1600"
                alt="video"
              />
              <div className="content" data-aos="fade-up">
                Formentera
                <div className="contentContainer">
                  <span className="contentText">Spain</span>
                  <div className="circleContent"></div>
                  <span className="contentPrice">$75,000</span>
                </div>
                <div className="carouselBtn">
                  See details
                  <span className="iconArrow">
                    <HiOutlineArrowNarrowRight
                      style={{ width: "24px", height: "24px" }}
                    />
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container">
              <img
                style={{ width: "100%", height: "100vh" }}
                src="https://img.gtsstatic.net/reno/imagereader.aspx?imageurl=https%3A%2F%2Fsir.azureedge.net%2F1194i215%2F5mbsc5qrkzmvmp66pf7xm1qsn4i215&option=N&permitphotoenlargement=false&w=1600"
                alt="video"
              />
              <div className="content" data-aos="fade-up">
                Formentera
                <div className="contentContainer">
                  <span className="contentText">Spain</span>
                  <div className="circleContent"></div>
                  <span className="contentPrice">$75,000</span>
                </div>
                <div className="carouselBtn">
                  See details
                  <span className="iconArrow">
                    <HiOutlineArrowNarrowRight
                      style={{ width: "24px", height: "24px" }}
                    />
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
};

export default CarouselComponent;
