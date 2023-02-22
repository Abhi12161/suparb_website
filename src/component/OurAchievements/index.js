import { Box, CardContent } from "@mui/material";
import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import pic1 from "../../asset/images/certificate/1.webp";
import pic2 from "../../asset/images/certificate/2.webp";
import pic3 from "../../asset/images/certificate/3.webp";
import pic4 from "../../asset/images/certificate/4.webp";
import pic5 from "../../asset/images/certificate/5.webp";
import "./style.scss";

// import required modules
import { Pagination } from "swiper";

const OurAchievements = () => {
  return (
    <div style={{backgroundColor:"#F2F2F2",margin: "0% 0% 0% 0%"}}>
      <div style={{margin: "4% 0% 2% 0%"}}>
      <p className="head-text">
        OUR ACHIEVEMENTS
      </p>
      </div>
      {/* slider component */}
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "0% 5% 0% 5%",
        }}
      >
        <Swiper style={{margin: "1% 0% 4% 0%"}}
          slidesPerView={5}
          spaceBetween={20}
          slidesPerGroup={2}
          loopFillGroupWithBlank={false}
          rewind={false}
          speed={1100}
          grabCursor={true}
          breakpoints={{
            768: {
              slidesPerView: 5,
              spaceBetween: 15,
            },
            578: {
              slidesPerView: 4,
              spaceBetween: 7,
            },
            424: {
              slidesPerView: 3,
              spaceBetween: 3,
            },
            280: {
              slidesPerView: 3,
              spaceBetween: 0,
            },
          }}
          navigation={false}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <CardContent>
              <img alt="img" src={pic1} />
            </CardContent>
          </SwiperSlide>
          <SwiperSlide>
            <CardContent>
              <img alt="img" src={pic2} />
            </CardContent>
          </SwiperSlide>
          <SwiperSlide>
            <CardContent>
              <img alt="img" src={pic3} />
            </CardContent>
          </SwiperSlide>
          <SwiperSlide>
            <CardContent>
              <img alt="img" src={pic4} />
            </CardContent>
          </SwiperSlide>
          <SwiperSlide>
            <CardContent>
              <img alt="img" src={pic5} />
            </CardContent>
          </SwiperSlide>
        </Swiper>
      </Box>
      {/* slider component */}
    </div>
  );
};

export default OurAchievements;
