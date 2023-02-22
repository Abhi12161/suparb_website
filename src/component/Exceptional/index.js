import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import "./style.scss";
const Exception = () => {
  useEffect(() => {
    Aos.init({
      duration: 500,
      startEvent: "DOMContentLoaded",
    });
  }, []);

  return (
    <div style={{ width: "100%", marginBottom: "20px" }}>
      <div>
        <div className="Exception">
          <p className="Exception-p">Reside Magazine</p>
          <h2 className="Exception-h2">Exceptional Locations, Unrivaled Lifestyles.</h2>
          <p className="Exception-p-2">
            Conceived in the belief that home and living in full are inextricably entwined, RESIDE® is the SeedWill magazine devoted to the finest in inspirational locales and lifestyles.
          </p>
          <span className="Exception-span">
            Explore More <IoIosArrowRoundForward size={"30"} style={{ marginTop:'-5px' }} />
          </span>
        </div>
        <div className="Exception-container">
          <div data-aos="fade-up">
            <img
              className="Exception-img"
              src="https://img.gtsstatic.net/reno/imagereader.aspx?imageurl=https%3A%2F%2Fapi.sothebysrealty.com%2Fresources%2Fsiteresources%2FMy%20Folder%2Fstatic-pages%2Freside-magazine%2Freside-june2022%2Fwhats-new-in-art-architecture-and-design%2Fimage2.jpg&option=N&h=353&permitphotoenlargement=false"
              alt="img"
            />
            <div className="centerline" />
            <h5 className="Exception-h5">What’s New in Art, Architecture & Design </h5>
            <p className="Exception-p3">
              Contemporary landscapes, party barns, and bespoke home cocktail bars are all the rage.
            </p>
          </div>
          <div data-aos="fade-up" style={{ marginTop: "30px" }} data-aos-duration="1000">
            <img
              className="Exception-img"
              src="https://img.gtsstatic.net/reno/imagereader.aspx?imageurl=https%3A%2F%2Fapi.sothebysrealty.com%2Fresources%2Fsiteresources%2FMy%20Folder%2Fstatic-pages%2Fluxury-outlook%2Fluxury-outlook-2022%2Fcover%2Fheader_luxoutlook.jpg&option=N&h=353&permitphotoenlargement=false"
              alt="img"
            />
            <div className="centerline" />
            <h5 className="Exception-h5">Luxury Outlook 2022 </h5>
            <p className="Exception-p3">An ambitious exploration into high-end residential markets across the globe.</p>
          </div>
          <div data-aos="fade-up">
            <img
              className="Exception-img"
              src="https://img.gtsstatic.net/reno/imagereader.aspx?imageurl=https%3A%2F%2Fapi.sothebysrealty.com%2Fresources%2Fsiteresources%2FMy%20Folder%2FhugeImages%2Fhomepage%2Freside%2Fvirtual.jpg&option=N&h=353&permitphotoenlargement=false"
              alt="img"
            />
            <div className="centerline" />
            <h5 className="Exception-h5">View Homes, From the Comfort of Yours </h5>
            <p className="Exception-p3">Experience luxury homes like never before, all from the comfort of yours.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exception;
