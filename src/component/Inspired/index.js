import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import "./style.scss";

const InspiredComponent = () => {
  return (
    <>
      <section className="homePageInspired ">
        <div className="grid homePageInspiredContainer container">
          <div className="gridItem uTextCenter">
            <div className="homePageInspiredVideo">
              <iframe
                title="For those with a vision"
                allowFullScreen="allowfullscreen"
                frameBorder={"0"}
                tabIndex="0"
                className="iframeComponent homePageInspiredVideoIframe"
                src="https://players.brightcove.net/5699924528001/default_default/index.html?videoId=6059328301001"
              ></iframe>
            </div>
            <div className="homePageInspiredContent u-color-white container">
              <h3>Get Inspired</h3>
              <p className="homePageInspiredPara u-color-grey">
                For those who seek an exceptional home and life, browse our video series catalogue.
              </p>
              <div className="inspiredBtn">
                <a className="btn btnWithArow btnPrimary utextUperCase" target={"_self"}>
                  <span className="btnContainer">
                    <span className="btnText">View All</span>
                    <HiOutlineArrowNarrowRight className="btnIconArrow" style={{ width: "24px", height: "24px" }} />
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

export default InspiredComponent;
