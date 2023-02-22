import React from "react";
// import CarouselComponent from "../Carousel";
import Exception from "../Exceptional";
import Exclusive from "../Exclusive";
import Footer from "../Footer";
import Header from "../Header";
import HomePageDesc from "../HomePageDesc";
import HomepageSearch from "../HomePageSearch";
import InspiredComponent from "../Inspired";
import ScrollButton from "../MoveToTopButton/ScrollButton";
import OurAchievements from "../OurAchievements";
import Testimonial from "../Testimonial";

const HomeComponent = () => {
  return (
    <>
      <ScrollButton />
      <Header />
      <HomepageSearch />
      {/* <CarouselComponent /> */}
      <HomePageDesc />
      <Footer />
      {/* <Exclusive />
      <InspiredComponent />
      <Exception />
      <OurPartners/>
      <OurAchievements/>
      <Testimonial/>
      <Footer /> */}
    </>
  );
};

export default HomeComponent;
