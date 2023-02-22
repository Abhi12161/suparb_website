import React, { useEffect } from "react";
import "./style.scss";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { BiHeart } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { trendingPropertiesSelector } from "../../../redux/reducer/trendingProperties";
import { fetchTrendingProperties } from "../../../redux/action/trendingProperties";
import { Link } from "react-router-dom";
import { fetchProduct } from "../../../redux/action/product";
import { fetchAllProjectList } from "../../../redux/action/allProjectList";

const TrendingProperties = () => {
  const dispatch = useDispatch();
  const { trendingProperties } = useSelector(trendingPropertiesSelector);

  useEffect(() => {
    dispatch(fetchTrendingProperties());
  }, [dispatch]);

  return (
    <div className="TrendingProperties">
      <div>
        <h3> Trending Properties </h3>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          //   marginTop: 2,
          position: "relative",
          justifyContent: "space-between",
        }}
      >
        <p style={{ fontFamily: "sans-serif", color: "#000000" }}>
          <span
            style={{
              textDecoration: "underline",
              textUnderlineOffset: "5px",
              textDecorationThickness: "2px",
              textDecorationColor: "#FFD194",
              //   marginBottom: "20px",
            }}
          >
            Most tre
          </span>
          nding properties
        </p>

        {/* buttons */}

        <div
          className="Seeallproperties"
          onClick={() => dispatch(fetchAllProjectList("", "", "", 1))}
        >
          <Link to={`/property-in-india/trending`}>
            <p className="Seeallproperties-para">See all properties</p>
          </Link>
          <p className="Seeallproperties-lefticon">
            <HiOutlineArrowNarrowRight size={30} />
          </p>
        </div>
      </div>

      <div className="TrendingProperties-cards">
        {trendingProperties?.map((item, index) => {
          if (index < 4) {
            return (
              <div
                className="TrendingProperties-card"
                key={index}
                onClick={(e) => dispatch(fetchProduct(item.id))}
              >
                <Link
                  to={`/property-in-${item.cityName.toLowerCase()}/${
                    item.slug
                  }-${item.id}`}
                  className="linkclass"
                >
                  <div className="img-container">
                    <img
                      src={item.proImg}
                      alt="Avatar"
                      className="TrendingProperties-img"
                    />
                    <BiHeart
                      style={{
                        position: "absolute",
                        right: "5px",
                        top: "21px",
                      }}
                      color={"#FFFFFF"}
                      size={20}
                    />
                    <div className="TrendingProperties-price">
                      <p
                        style={{
                          textAlign: "center",
                          fontFamily: "Montserrat",
                        }}
                      >
                        {item.price}
                      </p>
                    </div>
                  </div>
                  <div className="TrendingPropertiesContainer">
                    <p style={{ fontWeight: "600" }}>{item.name}</p>
                    <p
                      style={{
                        color: "#8B8B8B",
                        marginTop: "-10px",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      by {item.DevName}
                    </p>
                    <span style={{ fontWeight: "600" }}>
                      {item.property_type}
                    </span>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginTop: "-10px",
                      }}
                    >
                      <p style={{ color: "#8B8B8B" }}>
                        {item.cityName} {item.location}
                      </p>
                      <p style={{ color: "#8B8B8B" }}>{item.created}</p>
                    </div>
                  </div>
                </Link>
              </div>
            );
          } else return "";
        })}
      </div>
    </div>
  );
};

export default TrendingProperties;
