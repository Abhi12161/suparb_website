import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";
import Tab from "@mui/material/Tab";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import formimage from "../../../asset/images/formimage.png";
import call from "../../../asset/images/call.svg";
import whatsapp from "../../../asset/images/amenities/whatsapp.svg";
import "./style.scss";

const ContactFrom = () => {
  const [active, setActive] = useState("");
  const handleClick = (event) => {
    setActive(event.target.id);
  };
  const [valueTab, setValueTab] = useState("1");

  const handleChangeFormTabs = (event, newTabValue) => {
    setValueTab(newTabValue);
  };
  return (
    <div className="actionbar">
      <TabContext value={valueTab}>
        <TabList className="contact-from-tabs" onChange={handleChangeFormTabs}>
          <Tab label="Contact" value="1" className="form-tabs" />
          <Tab label="Quick Connect" value="2" className="form-tabs" />
        </TabList>
        <div className="form-maindiv">
          <TabPanel value="1">
            <div className="form-one-container">
              <span
                style={{
                  width: "90%",
                  margin: "0 auto",
                  marginTop: "10px",
                  fontFamily: "Montserrat",
                  fontWeight: 600,
                  fontSize: "12px",
                  textTransform: "capitalize",
                  color: "#000000",
                }}
              >
                please share your contact details
              </span>
              <div
                style={{ width: "90%", margin: "0 auto", marginTop: "10px" }}
              >
                <TextField
                  label="Name"
                  variant="standard"
                  fullWidth
                  placeholder="Name"
                />
                <TextField
                  label="Mobile No."
                  variant="standard"
                  fullWidth
                  placeholder="Mobile No."
                />
                <TextField
                  label="Email"
                  variant="standard"
                  fullWidth
                  placeholder="Email"
                />
                <TextField
                  label="City"
                  variant="standard"
                  fullWidth
                  placeholder="City"
                />{" "}
              </div>
              <div className="other-options">
                {/* <p
                  style={{
                    fontFamily: "Montserrat",
                    fontWeight: "600",
                    fontSize: "14px",
                    lineHeight: "20px",
                    color: "#8B8B8B",
                  }}
                >
                  Optional Information
                </p> */}
                <p
                  style={{
                    fontFamily: "Montserrat",
                    fontWeight: "600",
                    fontSize: "12px",
                    color: "#8B8B8B",
                  }}
                >
                  By when you are planning to buy the property?
                </p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginBottom: "20px",
                  }}
                >
                  <div>
                    <input type="checkbox" />
                    <span
                      style={{
                        fontFamily: "Montserrat",
                        fontWeight: "500",
                        fontSize: "10px",
                        color: "#8B8B8B",
                        marginLeft: "10px",
                      }}
                    >
                      I am interested in home loan{" "}
                    </span>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <span
                      style={{
                        fontFamily: "Montserrat",
                        fontWeight: "500",
                        fontSize: "10px",
                        color: "#8B8B8B",
                        marginLeft: "10px",
                      }}
                    >
                      I am interested in site visits.{" "}
                    </span>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <span
                      style={{
                        fontFamily: "Montserrat",
                        fontWeight: "500",
                        fontSize: "10px",
                        color: "#8B8B8B",
                        marginLeft: "10px",
                      }}
                    >
                      I agree to be contacted by seedwill and other agents via
                      WhatsApp, SMS, phone, email etc.
                    </span>
                  </div>
                  <button className="form-one-download-btn">
                    <span className="form-one-download-btn-text">
                      Get Contact Details
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel value="2">
            <div className="form-two-container">
              <div
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: 600,
                  fontSize: "12px",
                  lineHeight: "18px",
                  textTransform: "capitalize",
                  color: "#000000",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                please call / chat with us to know more about property details.{" "}
              </div>
              <div>
                <img src={formimage} alt="banner" className="form-image" />
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <button className="form-btn-image-btn">
                    <img src={call} alt="call" className="form-btn-image" />
                    <span className="form-btn-image-text">Call Agent</span>
                  </button>
                  <button className="form-btn-image-btn">
                    <img
                      src={whatsapp}
                      alt="whatsapp"
                      className="form-btn-image"
                    />
                    <span className="form-btn-image-text">WhatsApp</span>
                  </button>
                </div>
              </div>
            </div>
          </TabPanel>
        </div>
      </TabContext>
    </div>
  );
};

export default ContactFrom;
