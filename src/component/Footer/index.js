import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import DiscoverHome from "../../asset/images/discoverhome.png";
import footerBuilding from "../../asset/images/footer.svg";
import { fetchAllProjectList } from "../../redux/action/allProjectList";
import { fetchCity } from "../../redux/action/cityName";
import { fetchDeveloper } from "../../redux/action/developer";
import { citySelector } from "../../redux/reducer/cityName";
import { developerSelector } from "../../redux/reducer/developer";
import "./style.scss";

function Footer() {
  const dispatch = useDispatch();
  const { cityName } = useSelector(citySelector);
  const { developer } = useSelector(developerSelector);

  useEffect(() => {
    dispatch(fetchCity());
    dispatch(fetchDeveloper());
  }, [dispatch]);

  // console.log(`name`, developer)
  return (
    <div className="footer-main">
      <div>
        <img
          src={DiscoverHome}
          alt="DiscoverHome"
          className="footer-DiscoverHome-img"
        />
      </div>

      <div className="footer-footerBuilding">
        <div className="footer-footerCity">
          <div>
            <ul>Top City</ul>
            <ul className="footer-ul">
              {" "}
              {cityName?.map((item, index) => {
                return (
                  // <Link to="/property">

                  <Link to={`/property-in-${item.cityName.toLowerCase()}`}>
                    <div
                      key={index}
                      onClick={() => dispatch(fetchAllProjectList(item.id))}
                    >
                      <li className="footer-li" style={{ color: "#a6a6a6" }}>
                        Property in{" "}
                        <span
                          style={{
                            textTransform: "capitalize",
                            color: "#a6a6a6",
                          }}
                          value={item.cityName}
                        >
                          {item.cityName}
                        </span>
                      </li>
                    </div>
                  </Link>
                );
              })}
            </ul>
          </div>
          <div>
            <ul>Top Developers</ul>
            <ul className="footer-ul">
              {" "}
              {developer.map((item, index) => {
                return (
                  // <Link
                  //   to={`/projects-list-${item.name
                  //     .toLowerCase()
                  //     .replaceAll(/\s/g, "-")}`}
                  // >
                  <Link
                    to={`/${item.name
                      .toLowerCase()
                      .replaceAll(/\s/g, "-")}-projects-list/`}
                  >
                    <div
                      key={index}
                      onClick={() =>
                        dispatch(fetchAllProjectList("", "", item.id))
                      }
                    >
                      <li className="footer-li">
                        <span
                          style={{
                            textTransform: "capitalize",
                            color: "#a6a6a6",
                          }}
                        >
                          {item.name}
                        </span>
                      </li>
                    </div>
                  </Link>
                );
              })}
            </ul>
          </div>
          <div>
            <ul>Residential Property in Top City</ul>
            <ul className="footer-ul">
              {cityName?.map((item, index) => {
                return (
                  <Link to={`/property-in-${item.cityName.toLowerCase()}`}>
                    <div
                      key={index}
                      onClick={() =>
                        dispatch(fetchAllProjectList(item.id, "residential"))
                      }
                    >
                      <li className="footer-li" style={{ color: "#a6a6a6" }}>
                        Residential Property in{" "}
                        <span
                          style={{
                            textTransform: "capitalize",
                            color: "#a6a6a6",
                          }}
                          value={item.cityName}
                        >
                          {item.cityName}
                        </span>
                      </li>
                    </div>
                  </Link>
                );
              })}
            </ul>
          </div>
          <div>
            <ul> Commercial Property in Top City</ul>
            <ul className="footer-ul">
              {" "}
              {cityName?.map((item, index) => {
                return (
                  <Link to={`/property-in-${item.cityName.toLowerCase()}`}>
                    <div
                      key={index}
                      onClick={() =>
                        dispatch(fetchAllProjectList(item.id, "commercial"))
                      }
                    >
                      <li className="footer-li" style={{ color: "#a6a6a6" }}>
                        Commercial Property in{" "}
                        <span
                          style={{
                            textTransform: "capitalize",
                            color: "#a6a6a6",
                          }}
                          value={item.cityName}
                        >
                          {item.cityName}
                        </span>
                      </li>
                    </div>
                  </Link>
                );
              })}
            </ul>
          </div>
          <div>
            <ul>Quick Links</ul>
            <ul className="footer-ul">
              <Link to="/about-us" className="linkclass">
                <li className="footer-li" style={{ color: "#a6a6a6" }}>
                  {" "}
                  About-Us
                </li>
              </Link>
              <Link to="/contact-us" className="linkclass">
                <li className="footer-li" style={{ color: "#a6a6a6" }}>
                  {" "}
                  Contact US
                </li>
              </Link>
              <Link to="/career" className="linkclass">
                <li className="footer-li" style={{ color: "#a6a6a6" }}>
                  {" "}
                  Career
                </li>
              </Link>
              <Link to="/our-services" className="linkclass">
                <li className="footer-li" style={{ color: "#a6a6a6" }}>
                  {" "}
                  Services
                </li>
              </Link>
              <Link to="/how-we-work" className="linkclass">
                <li className="footer-li" style={{ color: "#a6a6a6" }}>
                  {" "}
                  How we Work
                </li>
              </Link>
              <Link to="/site-map" className="linkclass">
                <li className="footer-li" style={{ color: "#a6a6a6" }}>
                  {" "}
                  Site Map
                </li>
              </Link>
              {/* <li className="footer-li"> Property in India</li> */}
              <Link to="/privacy-policy" className="linkclass">
                <li className="footer-li" style={{ color: "#a6a6a6" }}>
                  {" "}
                  Privacy Policy
                </li>
              </Link>
              <li className="footer-li"> Terms And Conditions</li>
              <li className="footer-li"> Plots No. 51, Sector 18</li>
              <li className="footer-li"> Contact</li>
              <li className="footer-li">Gurgaon, Haryana</li>
              <li className="footer-li"> 122008+ 91-9205-735-63</li>
              <li className="footer-li"> Contact@Seedwill.Co</li>
            </ul>
          </div>
        </div>
        <img
          src={footerBuilding}
          alt="footerBuilding"
          className="footer-footerBuilding-img"
        />
      </div>
    </div>
  );
}

export default Footer;
