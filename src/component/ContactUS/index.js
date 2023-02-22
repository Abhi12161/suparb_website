import React, { useEffect } from "react";
import contactus from "../../asset/images/infopage/contactus.png";
import Header from "../Header";
import ScrollButton from "../MoveToTopButton/ScrollButton";
import Footer from "../Footer/index";
import ContactFrom from "./Actionbar/index";
import agent from "../../asset/images/agent.jpeg";

import "./style.scss";
const ContactUs = () => {
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
        <img src={contactus} alt="bcklogo" className="contact-us-banner" />
        <h1 className="banner-imager-text">Contact Us</h1>
      </div>

      <div className="contact-us-maindiv">
        <div className="maindetails">
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
              offices{" "}
            </span>
            in india
          </p>
          <div className="contact-us-grid-container">
            <div className="contact-us-grid-item">
              {/* <img src={agent} style={{ width: "200px", height: "100px" }} /> */}
              <span className="contact-us-card-heading">Gurgaon </span>{" "}
              <p className="contact-us-card-text">
                Plot No. 51, Sector 18 Gurugram, Haryana 122008 +91-806-964-2710
                Contact@Seedwill.Co
              </p>
            </div>
            <div className="contact-us-grid-item">
              <span className="contact-us-card-heading">Bangalore </span>{" "}
              <p className="contact-us-card-text">
                Plot No. 51, Sector 18 Gurugram, Haryana 122008 +91-806-964-2710
                Contact@Seedwill.Co
              </p>
            </div>
            <div className="contact-us-grid-item">
              <span className="contact-us-card-heading">Luckow </span>{" "}
              <p className="contact-us-card-text">
                Plot No. 51, Sector 18 Gurugram, Haryana 122008 +91-806-964-2710
                Contact@Seedwill.Co
              </p>
            </div>
            <div className="contact-us-grid-item">
              <span className="contact-us-card-heading">Delhi </span>{" "}
              <p className="contact-us-card-text">
                Plot No. 51, Sector 18 Gurugram, Haryana 122008 +91-806-964-2710
                Contact@Seedwill.Co
              </p>
            </div>
            <div className="contact-us-grid-item">
              <span className="contact-us-card-heading">Thane </span>{" "}
              <p className="contact-us-card-text">
                Plot No. 51, Sector 18 Gurugram, Haryana 122008 +91-806-964-2710
                Contact@Seedwill.Co
              </p>
            </div>
            <div className="contact-us-grid-item">
              <span className="contact-us-card-heading">Mumbai </span>{" "}
              <p className="contact-us-card-text">
                Plot No. 51, Sector 18 Gurugram, Haryana 122008 +91-806-964-2710
                Contact@Seedwill.Co
              </p>
            </div>
          </div>

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
              Offices{" "}
            </span>
            In International
          </p>
          <div className="contact-us-grid-container">
            <div className="contact-us-grid-item">
              <span className="contact-us-card-heading">Qatar </span>
              <p className="contact-us-card-text">
                3rd floor, Global business center, Al hitmi village, building
                no. 36, corniche road, Doha, Qatar, P.o Box 25422
              </p>
            </div>
            <div className="contact-us-grid-item">
              <span className="contact-us-card-heading">
                United Arab Emirates{" "}
              </span>{" "}
              <p className="contact-us-card-text">
                SeedWill Real Estate Broker LLC, Office # 311, Bayswater by
                Omniyat, Al Abraj Street, Business Bay, Dubai, UAE
              </p>
            </div>
          </div>
        </div>

        <div className="actionbar-container">
          <ContactFrom />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
