import Aos from "aos";
import React, { useEffect } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import PropertySlider from "../ProductPage/PropertySlider/PropertySlider";
import "./index.scss";
import ReconditionsProperties from "./RecommendedProperties/recommendedProperties";
import ExploreCategories from "./ExploreCategories/Index";
import TrendingProperties from "./TrendingProperties";
import NearByProperties from "./NearByProperties";
import PopularBuilder from "./PopularBuilder";
import OurPartners from "./OurPartners";
import PropertyServices from "./PropertyServices";

const HomePageDesc = () => {

  return (
    <>
      <ExploreCategories />
      <ReconditionsProperties />
      <NearByProperties />
      <TrendingProperties />
      <PopularBuilder />
      <PropertyServices />
      <OurPartners />

    </>
  );
};

export default HomePageDesc;
