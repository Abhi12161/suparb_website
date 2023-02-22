import React, { useEffect } from "react";
import career from "../../asset/images/infopage/career.png";
import how from "../../asset/images/how.svg";
import Header from "../Header";
import ScrollButton from "../MoveToTopButton/ScrollButton";
import Footer from "../Footer/index";
import "./style.scss";

const HowWeWork = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  return (
    <div>
      <ScrollButton />
      <Header />
      <div>
        <img src={career} alt="bcklogo" className="how-banner" />
        <h1 className="how-banner-imager-text">How We Work</h1>
      </div>
      <div className="how-maindiv">
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
            Welcome T
          </span>
          o SeedWill Consulting
        </p>
        <span
          style={{
            fontFamily: "Montserrat",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "16px",
            color: "#1D221E",
          }}
        >
          We come up with effective investment strategies and help people
          preserve their wealth in a manner that ensures financial security &
          helps them attain financial freedom.
        </span>
        <div style={{ marginTop: "50px", marginBottom: "60px" }}>
          <div className="how-card">
            <div
              style={{
                width: "45px",
                height: "45px",
                backgroundColor: "#647970",
              }}
            >
              <img
                src={how}
                alt="howwework"
                style={{ width: "80%", height: "80%", padding: "12%" }}
              />
            </div>
            <span className="how-card-text">
              Identifying your goals, dreams, needs & preferences.
            </span>
          </div>
          <div className="how-card">
            <div
              style={{
                width: "45px",
                height: "45px",
                backgroundColor: "#647970",
              }}
            >
              <img
                src={how}
                alt="howwework"
                style={{ width: "80%", height: "80%", padding: "12%" }}
              />
            </div>
            <span className="how-card-text">
              Presenting you with an appropriate investment opportunity.
            </span>
          </div>
          <div className="how-card">
            <div
              style={{
                width: "45px",
                height: "45px",
                backgroundColor: "#647970",
              }}
            >
              <img
                src={how}
                alt="howwework"
                style={{ width: "80%", height: "80%", padding: "12%" }}
              />
            </div>
            <span className="how-card-text">Planning Advice.</span>
          </div>
          <div className="how-card">
            <div
              style={{
                width: "45px",
                height: "45px",
                backgroundColor: "#647970",
              }}
            >
              <img
                src={how}
                alt="howwework"
                style={{ width: "80%", height: "80%", padding: "12%" }}
              />
            </div>
            <span className="how-card-text">
              {" "}
              Assisting you in every step towards your goal.
            </span>
          </div>
          <div className="how-card">
            <div
              style={{
                width: "45px",
                height: "45px",
                backgroundColor: "#647970",
              }}
            >
              <img
                src={how}
                alt="howwework"
                style={{ width: "80%", height: "80%", padding: "12%" }}
              />
            </div>
            <span className="how-card-text">Post-sales services.</span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HowWeWork;
