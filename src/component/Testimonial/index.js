import { Box, CardContent } from "@mui/material";
import React from "react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import five from "../../asset/images/five.png";
import four from "../../asset/images/four.png";
import one from "../../asset/images/one.png";
import six from "../../asset/images/six.png";
import three from "../../asset/images/three.png";
import two from "../../asset/images/two.png";
import "./style.scss";

const Testimonial = () => {
  return (
    <div style={{ width: "100%" }}>
      <p className="head-text">
        WHAT OUR CLIENTS OFTEN SAY!{" "}
      </p>

      {/* slider component */}
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "90%",
          margin: "0 auto",
        }}
      >
        <Swiper
          style={{ margin: "2% 0% 2% 0%", backgroundColor: "#F8F9FA" }}
          slidesPerView={4}
          slidesPerGroup={1}
          loopFillGroupWithBlank={false}
          rewind={false}
          speed={2100}
          grabCursor={true}
          loop= {true}
          autoplay={{
            delay: 2500,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            1400: {
              slidesPerView: 5,
            },
            1200: {
              slidesPerView: 4,
            },
            1100: {
              slidesPerView: 4,
            },
            1000: {
              slidesPerView: 4,
            },
            890: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 3,
            },
            578: {
              slidesPerView: 3,
            },
            424: {
              slidesPerView: 2,
            },
            280: {
              slidesPerView: 1,
            },
          }}
          navigation={false}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <CardContent>
              <img alt="img" src={one} />
            </CardContent>
          </SwiperSlide>
          <SwiperSlide>
            <CardContent>
              <img alt="img" src={two} />
            </CardContent>
          </SwiperSlide>
          <SwiperSlide>
            <CardContent>
              <img alt="img" src={three} />
            </CardContent>
          </SwiperSlide>
          <SwiperSlide>
            <CardContent>
              <img alt="img" src={four} />
            </CardContent>
          </SwiperSlide>
          <SwiperSlide>
            <CardContent>
              <img alt="img" src={five} />
            </CardContent>
          </SwiperSlide>
          <SwiperSlide>
            <CardContent>
              <img alt="img" src={six} />
            </CardContent>
          </SwiperSlide>
        </Swiper>
      </Box>
      {/* slider component */}
    </div>
  );
};

export default Testimonial;
