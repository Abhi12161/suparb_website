import React, { useEffect } from "react";
import sitemap from "../../asset/images/infopage/sitemap.png";
import Footer from "../Footer/index";
import Header from "../Header";
import ScrollButton from "../MoveToTopButton/ScrollButton";
import "./style.scss";

const SiteMap = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  return (
    <>
      <ScrollButton />
      <Header />
      <div>
        <img src={sitemap} alt="bcklogo" className="site-map-banner" />
        <h1 className="banner-imager-text">Site Map</h1>
      </div>
      <div className="site-map-maindiv">
        <div style={{ marginBottom: "50px" }}>
          <p className="page-heading">
            <span
              style={{
                fontFamily: "Prata",
                textDecoration: "underline",
                textUnderlineOffset: "15px",
                textDecorationThickness: "2px",
                textDecorationColor: "#FFD194",
                color: "#000000",
              }}
            >
              GENERAL{" "}
            </span>
            LINKS
          </p>
          <div className="site-map-grid-container">
            <div className="site-map-grid-item">HOME</div>
            <div className="site-map-grid-item">HOW WE WORK</div>
            <div className="site-map-grid-item">BLOG</div>
            <div className="site-map-grid-item">Contact US</div>
            <div className="site-map-grid-item">ABOUT US</div>
            <div className="site-map-grid-item">Privacy policy</div>
            <div className="site-map-grid-item">Services</div>
            <div className="site-map-grid-item">CAREERS</div>
          </div>
        </div>
        <div style={{ marginBottom: "50px" }}>
          <p className="page-heading">
            <span
              style={{
                fontFamily: "Prata",
                textDecoration: "underline",
                textUnderlineOffset: "15px",
                textDecorationThickness: "2px",
                textDecorationColor: "#FFD194",
                color: "#000000",
              }}
            >
              Residential{" "}
            </span>
            Property in India
          </p>
          <div className="site-map-grid-container">
            <div className="site-map-grid-item">
              Residential Property in Gurgaon{" "}
            </div>
            <div className="site-map-grid-item">
              Residential Property in Lucknow{" "}
            </div>
            <div className="site-map-grid-item">
              Residential Property in Greater Noida{" "}
            </div>
            <div className="site-map-grid-item">
              Residential Property in Noida{" "}
            </div>
            <div className="site-map-grid-item">
              Residential Property in Chandigarh{" "}
            </div>
            <div className="site-map-grid-item">
              Residential Property in Pune{" "}
            </div>
            <div className="site-map-grid-item">
              Residential Property in Bangalore{" "}
            </div>
            <div className="site-map-grid-item">
              Residential Property in Mumbai{" "}
            </div>
            <div className="site-map-grid-item">
              Residential Property in Thane{" "}
            </div>
            <div className="site-map-grid-item">
              Residential Property in Delhi{" "}
            </div>
          </div>
        </div>

        <div style={{ marginBottom: "50px" }}>
          <p className="page-heading">
            <span
              style={{
                fontFamily: "Prata",
                textDecoration: "underline",
                textUnderlineOffset: "15px",
                textDecorationThickness: "2px",
                textDecorationColor: "#FFD194",
                color: "#000000",
              }}
            >
              Commercial{" "}
            </span>
            Property in India
          </p>
          <div className="site-map-grid-container">
            <div className="site-map-grid-item">
              Commercial Property in Gurgaon{" "}
            </div>
            <div className="site-map-grid-item">
              Commercial Property in Lucknow{" "}
            </div>
            <div className="site-map-grid-item">
              Commercial Property in Greater Noida{" "}
            </div>
            <div className="site-map-grid-item">
              Commercial Property in Noida{" "}
            </div>
            <div className="site-map-grid-item">
              Commercial Property in Chandigarh{" "}
            </div>
            <div className="site-map-grid-item">
              Commercial Property in Pune{" "}
            </div>
            <div className="site-map-grid-item">
              Commercial Property in Bangalore{" "}
            </div>
            <div className="site-map-grid-item">
              Commercial Property in Mumbai{" "}
            </div>
            <div className="site-map-grid-item">
              Commercial Property in Thane{" "}
            </div>
            <div className="site-map-grid-item">
              Commercial Property in Delhi{" "}
            </div>
          </div>
        </div>
        <div style={{ marginBottom: "50px" }}>
          <p className="page-heading">
            <span
              style={{
                fontFamily: "Prata",
                textDecoration: "underline",
                textUnderlineOffset: "15px",
                textDecorationThickness: "2px",
                textDecorationColor: "#FFD194",
                color: "#000000",
              }}
            >
              Property{" "}
            </span>
            in City
          </p>
          <div className="site-map-grid-container">
            <div className="site-map-grid-item">Property in Gurgaon </div>
            <div className="site-map-grid-item">Property in Lucknow </div>
            <div className="site-map-grid-item">Property in Greater Noida </div>
            <div className="site-map-grid-item">Property in Noida </div>
            <div className="site-map-grid-item">Property in Chandigarh </div>
            <div className="site-map-grid-item">Property in Pune </div>
            <div className="site-map-grid-item">Property in Bangalore </div>
            <div className="site-map-grid-item">Property in Mumbai </div>
            <div className="site-map-grid-item">Property in Thane </div>
            <div className="site-map-grid-item">Property in Delhi </div>
          </div>
        </div>
        <div style={{ marginBottom: "50px" }}>
          <p className="page-heading">
            <span
              style={{
                fontFamily: "Prata",
                textDecoration: "underline",
                textUnderlineOffset: "15px",
                textDecorationThickness: "2px",
                textDecorationColor: "#FFD194",
                color: "#000000",
              }}
            >
              Popular D
            </span>
            eveloper
          </p>
          <div className="site-map-grid-container">
            <div className="site-map-grid-item">Shapoorji Pallonji Group </div>
            <div className="site-map-grid-item">WTC Group </div>
            <div className="site-map-grid-item">Emaar </div>
            <div className="site-map-grid-item">Godrej Properties </div>
            <div className="site-map-grid-item">Prestige Piramal </div>
            <div className="site-map-grid-item">Rishita Developers</div>
            <div className="site-map-grid-item">Realty Marathon Group </div>
            <div className="site-map-grid-item">Bhutani Group </div>
            <div className="site-map-grid-item">Purvanchal Group </div>
            <div className="site-map-grid-item">VTP Realty </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SiteMap;
