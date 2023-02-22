import Aos from "aos";
import React, { useEffect, useState } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import "./style.scss";

const Exclusive = () => {
  const [active, setActive] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setActive(true);
    }, 500);

    Aos.init({
      duration: 700,
      startEvent: "DOMContentLoaded",
    });
  }, []);

  return (
    <>
      <section className="exclusive dark">
        <div className="conatiner grid">
          <div className="grid-item default-6-12" data-aos="fade-up">
            <div className={`exclusiveLeft  ${active && "active"}`}>
              <div className="exclusiveLeftImgWrap">
                <img
                  className="exclusiveImage"
                  src="https://img.gtsstatic.net/reno/imagereader.aspx?imageurl=http%3A%2F%2Fm.sothebysrealty.com%2F4i0%2Fw4z16xrbwerbmseatha9ktw055i&option=N&h=375&permitphotoenlargement=false"
                  alt="exclusive img"
                />
              </div>
              <div className="exclusiveLeft-text-info">
                <div className="el u-text-uppercase u-color-gold Exclusive-left__eyebrow u-color-gold">
                  Your local office
                </div>
                <div className="exclusiveLeftBtn">
                  <a className="btn u-text-uppercase btn-primary btn-no-padding" target="_self" href="#eng">
                    <span className="btnContainer">
                      <span className="btn_text">Learn more</span>
                      <HiOutlineArrowNarrowRight
                        className="btn-arrow-right btn-icon-arrow"
                        style={{ width: "24px", height: "24px" }}
                      />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="grid-item default-4-12 push-desk" data-aos="fade-up">
            <div className="exclusiveRight">
              <p className="u-color-white exclusiveRight__title">Exclusive Access to Local Experts</p>
              <p className="exclusiveRightDesc u-color-grey">
                With experts in every part of the world, we are local everywhere, allowing us to walk alongside our
                clients at every stage of their journey. With innovative technology and unrivaled service, we ensure
                that your home is connected with buyers, locally and worldwide.
              </p>
              <div className="exclusiveBtn">
                <a
                  className="btn btn--with-arrow btn btn--secondary u-text-uppercase exclusive_right__button"
                  target="_self"
                  href="true" 
                >
                  <span className="btnContainer">
                    <span className="btn_text">Sell with us</span>
                    <HiOutlineArrowNarrowRight
                      className="btn-arrow-right btn-icon-arrow"
                      style={{ width: "24px", height: "24px" }}
                    />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Exclusive;
