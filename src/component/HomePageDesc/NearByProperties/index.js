import React, { useEffect } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import "./style.scss";
import { BiHeart } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { nearByPropertySelector } from "../../../redux/reducer/nearByProperty";
import { fetchNearByProperty } from "../../../redux/action/nearByProperty";
import { Link } from "react-router-dom";
import { fetchProduct } from "../../../redux/action/product";
function NearByProperties() {
  const dispatch = useDispatch();
  const { nearByProperty } = useSelector(nearByPropertySelector);

  const addImageFallback = (event) => {
    event.currentTarget.src =
      "https://www.seedwill.co/assets/img/be8b9276375372544b708a47fd37becc.png";
  };

  useEffect(() => {
    dispatch(fetchNearByProperty());
  }, [dispatch]);

  return (
    <div className="near-by-properties">
      <div>
        <h3>Near By Properties</h3>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
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
            }}
          >
            We sugg
          </span>
          est you to near by properties
        </p>

        <div className="Seeallproperties">
          <Link to="/nearbyproperty">
            <p className="Seeallproperties-para">See all properties</p>
          </Link>

          <p className="Seeallproperties-lefticon">
            <HiOutlineArrowNarrowRight size={30} />
          </p>
        </div>
      </div>

      <div className="near-by-properties-cards">
        {nearByProperty?.map((item, index) => {
          if (index < 6) {
            return (
              <div key={index} onClick={(e) => dispatch(fetchProduct(item.id))}>
                <Link
                  to={`/property-in-${item.cityName.toLowerCase()}/${
                    item.slug
                  }-${item.id}`}
                  className="linkclass"
                >
                  <div className="near-by-properties-card">
                    {/* <div> */}
                    <img
                      src={item.proImg}
                      alt="Avatar"
                      className="near-by-properties-img"
                      onError={addImageFallback}
                    />
                    <div className="near-by-properties-container">
                      <p style={{ fontWeight: "600" }}>{item.name}</p>
                      <p style={{ color: "#8B8B8B" }}>by {item.DevName}</p>
                      <p>2 BHK FLAT with fully furnished</p>
                      <p style={{ color: "#8B8B8B" }}>
                        {" "}
                        {item.location} {item.cityName}{" "}
                      </p>
                      <p style={{ color: "#8B8B8B" }}>{item.area}</p>
                      <p style={{ fontWeight: "600" }}>{item.price}</p>
                    </div>
                    <BiHeart
                      size={35}
                      color={"#D8D8D8"}
                      style={{ padding: "5px" }}
                    />
                  </div>
                </Link>
              </div>
            );
          } else return "";
        })}
      </div>
    </div>
  );
}

export default NearByProperties;
