import React, { useEffect } from "react";
import sitemap from "../../asset/images/infopage/sitemap.png";
import services1 from "../../asset/images/services1.png";
import services2 from "../../asset/images/services2.png";
import services3 from "../../asset/images/services3.png";
import services4 from "../../asset/images/services4.png";
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
        <h1 className="banner-imager-text">Services</h1>
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
              Services
            </span>
          </p>
          <p className="services-below-text">
            We offer a full spectrum of customer-oriented services from the
            ground up till the execution. We provide our customers with valuable
            & forward-looking insights to help them make informed decisions. Our
            wide array of services includes:
          </p>
          <div className="services-grid-container">
            <div className="services-grid-item">
              <div className="services-slider-cards">
                <div className="services-price-tag">Home Loan</div>
                <img src={services1} alt="card" className="services-card-img" />
                <p className="services-card-text">
                  We have tie-ups with some of the leading banks to help you
                  avail home loan with minimum documentation & easy loan
                  repayment methods.
                </p>
              </div>
            </div>
            <div className="services-grid-item">
              <div className="services-slider-cards">
                <div className="services-price-tag">Property Management</div>
                <img src={services2} alt="card" className="services-card-img" />
                <p className="services-card-text">
                  We offer end to end property management services & bring you
                  the most profitable & risk-free investments in real estate to
                  help you capitalise on your investment.
                </p>
              </div>
            </div>
            <div className="services-grid-item">
              <div className="services-slider-cards">
                <div className="services-price-tag">Resale</div>
                <img src={services3} alt="card" className="services-card-img" />
                <p className="services-card-text">
                  We evaluate your property rate, set the best property rate &
                  find a suitable buyer for your property.
                </p>
              </div>
            </div>
            <div className="services-grid-item">
              <div className="services-slider-cards">
                <div className="services-price-tag">Property Listing</div>
                <img src={services4} alt="card" className="services-card-img" />
                <p className="services-card-text">
                  We bring both residential & commercial properties to the
                  market for sale & rent through a hassle-free process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SiteMap;
