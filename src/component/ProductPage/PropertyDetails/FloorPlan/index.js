import React, { useState } from "react";
import "./style.scss";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";
import Tab from "@mui/material/Tab";
import home3d from "../../../../asset/images/3dhome.svg";

const FloorPlan = () => {
  const [valuePrice, setValuePrice] = useState("2");
  const handleChangePriceTabs = (event, newTabValue) => {
    setValuePrice(newTabValue);
  };

  return (
    <div className="floor-plan">
      <p style={{ fontFamily: "sans-serif", color: "#000000" }}>
        <span
          style={{
            textDecoration: "underline",
            textUnderlineOffset: "5px",
            textDecorationThickness: "2px",
            textDecorationColor: "#FFD194",
          }}
        >
          Price & Fl
        </span>
        oor Plan
      </p>
      <div className="main-floor-plan">
        <div className="floor-plan-image-container">
          <img src={home3d} alt="banner" className="floor-plan-image" />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <TabContext value={valuePrice}>
            <TabList
              TabIndicatorProps={{
                style: { display: "none" },
              }}
              onChange={handleChangePriceTabs}
            >
              <div className="tab-container">
                <Tab
                  value="1"
                  label="1 BHK APPARTMENT"
                  className="floor-plan-tab-btn"
                />
                <Tab
                  value="2"
                  label="2 BHK APPARTMENT"
                  className="floor-plan-tab-btn"
                />
                <Tab
                  value="3"
                  label="3 BHK APPARTMENT"
                  className="floor-plan-tab-btn"
                />
              </div>
            </TabList>
            <div className="floor-plan-tab-content">
              <TabPanel value="1">
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span className="floor-plan-tab-content-price">
                    ₹ 22 LAKHS
                  </span>
                  <span className="floor-plan-tab-content-area">1280 sqft</span>
                </div>
              </TabPanel>
              <TabPanel value="2">
                {" "}
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span className="floor-plan-tab-content-price">
                    ₹ 22 LAKHS
                  </span>
                  <span className="floor-plan-tab-content-area">2000 sqft</span>
                </div>
              </TabPanel>
              <TabPanel value="3">
                {" "}
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span className="floor-plan-tab-content-price">
                    ₹ 22 LAKHS
                  </span>
                  <span className="floor-plan-tab-content-area">3080 sqft</span>
                </div>
              </TabPanel>
            </div>
          </TabContext>
        </div>
      </div>
    </div>
  );
};

export default FloorPlan;
