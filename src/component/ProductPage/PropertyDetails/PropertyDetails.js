import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { FaRegHeart } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { MdIosShare } from "react-icons/md";
import { useSelector } from "react-redux";
import bhk from "../../../asset/images/overview/bhk.svg";
import builder from "../../../asset/images/overview/builder.svg";
import minprice from "../../../asset/images/overview/minprice.svg";
import parking from "../../../asset/images/overview/parking.svg";
import project from "../../../asset/images/overview/project.svg";
import projectsize from "../../../asset/images/overview/projectsize.svg";
import propertytype from "../../../asset/images/overview/propertytype.svg";
import security from "../../../asset/images/overview/security.svg";
import watersupply from "../../../asset/images/overview/watersupply.svg";
import badminton from "../../../asset/images/amenities/badminton.svg";
import basketball from "../../../asset/images/amenities/basketball.svg";
import brochure from "../../../asset/images/amenities/brochure.svg";
import cctv from "../../../asset/images/amenities/cctv.svg";
import club from "../../../asset/images/amenities/club.svg";
import commongarden from "../../../asset/images/amenities/commongarden.svg";
import communityhall from "../../../asset/images/amenities/communityhall.svg";
import firesafty from "../../../asset/images/amenities/firesafty.svg";
import gym from "../../../asset/images/amenities/gym.svg";
import indoorgame from "../../../asset/images/amenities/indoorgame.svg";
import lift from "../../../asset/images/amenities/lift.svg";
import playbutton from "../../../asset/images/amenities/playbutton.svg";
import powerbackup from "../../../asset/images/amenities/powerbackup.svg";
import security1 from "../../../asset/images/amenities/security1.svg";
import swimming from "../../../asset/images/amenities/swimming.svg";
import vastu from "../../../asset/images/amenities/vastu.svg";
import visitorparking from "../../../asset/images/amenities/visitorparking.svg";
import whatsapp from "../../../asset/images/amenities/whatsapp.svg";
import wifi from "../../../asset/images/amenities/wifi.svg";
import { productSelector } from "../../../redux/reducer/product";
import ContactFrom from "./Actionbar";
import Gallery from "./Gallery/Gallery";
import SimilarProjects from "./SimilarProjects/SimilarProjects";
import "./propertydetails.scss";
import FloorPlan from "./FloorPlan";
import Rera from "../../../asset/images/rera.svg";
import Vector from "../../../asset/images/Vector.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import HDFC from "../../../asset/images/hdfc.png";
import { Link } from "react-router-dom";
const PropertyDetails = () => {
  const { product } = useSelector(productSelector);
  //slidervalue handler starts
  const [value, setValue] = React.useState(25);
  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleInputChange = (event) => {
    setValue(event.target.value === "" ? "" : Number(event.target.value));
  };
  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [expanded, setExpanded] = useState(false);

  const handlepanel = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const date = new Date();
  let day = date.getDate();
  let year = date.getFullYear();
  let currentDate = `Feb ${day}, ${year}`;

  // const url_link = window.location.href;

  // console.log(`product`, product?.projectDetails?.cityName);
  const [swiperRef, setSwiperRef] = useState(null);

  const KeyFeatures = product?.projectDetails?.key_feature;
  const whythis = product?.projectDetails?.why_this;
  const MoreDetails = product?.projectDetails?.raw_desc;

  return (
    <>
      {/* <Box className="maindetails-container">
            <div className="maindetails">
              <Grid container spacing={2}>
                <Grid item xs={6} sm={3} md={3}>
                  <Box>
                    <Typography variant="subtitle1" sx={{ color: "#6e6e6e" }}>
                      Bed
                    </Typography>
                    <Typography variant="subtitle1" sx={{ fontWeight: 900 }}>
                      300
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6} sm={3} md={3}>
                  <Box>
                    <Typography variant="subtitle1" sx={{ color: "#6e6e6e" }}>
                      Baths
                    </Typography>
                    <Typography variant="subtitle1" sx={{ fontWeight: 900 }}>
                      200
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6} sm={3} md={3}>
                  <Box>
                    <Typography variant="subtitle1" sx={{ color: "#6e6e6e" }}>
                      Home size
                    </Typography>
                    <Typography variant="subtitle1" sx={{ fontWeight: 900 }}>
                      1,19300 sq. ft.
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6} sm={3} md={3}>
                  <Box>
                    <Typography variant="subtitle1" sx={{ color: "#6e6e6e" }}>
                      Lot size
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{ fontWeight: 900 }}
                      whiteSpace="pre-wrap"
                    >
                      8,276999 sq. ft.
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </div>
          </Box>
          <Typography id="all-title">FEATURES</Typography>
          <Box className="feature-container">
            <Box className="feature-subcontainer">
              <Typography variant="subtitle1" sx={{ color: "#6e6e6e" }}>
                On Opendoor
              </Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: 900 }}>
                1 Month
              </Typography>
            </Box>
            <Box className="feature-subcontainer">
              <Typography variant="subtitle1" sx={{ color: "#6e6e6e" }}>
                Type
              </Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: 900 }}>
                Single-family
              </Typography>
            </Box>
            <Box className="feature-subcontainer">
              <Typography variant="subtitle1" sx={{ color: "#6e6e6e" }}>
                City
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: 900, textTransform: "capitalize" }}
              >
                {product?.city?.cityName}
              </Typography>
            </Box>
          </Box>
          <Box className="feature-container">
            <Box className="feature-subcontainer">
              <Typography variant="subtitle1" sx={{ color: "#6e6e6e" }}>
                Home size
              </Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: 900 }}>
                1,193999 sq.ft.
              </Typography>
            </Box>
            <Box className="feature-subcontainer">
              <Typography variant="subtitle1" sx={{ color: "#6e6e6e" }}>
                Built in
              </Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: 900 }}>
                2050
              </Typography>
            </Box>
            <Box className="feature-subcontainer">
              <Typography variant="subtitle1" sx={{ color: "#6e6e6e" }}>
                Lot size
              </Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: 900 }}>
                8,279996 sq.ft.
              </Typography>
            </Box>
          </Box>
          <Box className="feature-container">
            <Box className="feature-subcontainer">
              <Typography variant="subtitle1" sx={{ color: "#6e6e6e" }}>
                Price per sqft
              </Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: 900 }}>
                ₹ 398
              </Typography>
            </Box>
            <Box className="feature-subcontainer">
              <Typography variant="subtitle1" sx={{ color: "#6e6e6e" }}>
                Beds
              </Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: 900 }}>
                3
              </Typography>
            </Box>
            <Box className="feature-subcontainer">
              <Typography variant="subtitle1" sx={{ color: "#6e6e6e" }}>
                Baths
              </Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: 900 }}>
                2
              </Typography>
            </Box>
          </Box>

          <Box className="below-feature">
            <Box className="below-feature-button">
              <Button variant="outlined" size="large">
                Start an offer
              </Button>
            </Box>
            <Box className="below-feature-text">
              <Typography>
                Buy with SeedWill, and we can buy the home for you.
              </Typography>
              <Typography className="learnmore">Learn more.</Typography>
            </Box>
          </Box>
          <Divider className="product-page-dividers" />

          <Box>
            <Typography id="all-title">MAP</Typography>
          </Box>
          <Box className="map-container">
            <iframe
              title="Map"
              className="map"
              frameBorder={0}
              src={product?.seoProjectDetails?.proMap}
            />
          </Box>
          <Divider className="product-page-dividers" />

          <Box className="estimated-cost-container">
            <Box>
              <Typography id="all-title">Estimated cost</Typography>
              <Box className="estimated-cost-row">
                <Typography sx={{ fontWeight: 700 }}>Purchase price</Typography>
                <Typography sx={{ fontWeight: 700 }}>
                  ₹ {product?.seoProjectDetails?.fullPrice}
                </Typography>
              </Box>
            </Box>

            <Slider
              aria-label="estimated cost"
              defaultValue={0}
              color="primary"
              value={typeof value === "number" ? value : 0}
              onChange={handleSliderChange}
              aria-labelledby="input-slider"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box className="estimate-cost-row-main-container">
              <Box className="estimate-cost-row-container">
                <Typography sx={{ fontWeight: 700 }}>Monthly cost</Typography>
                <Typography sx={{ fontWeight: 700 }}>₹ {value * 66}</Typography>
              </Box>
              <Box className="estimate-cost-row-container">
                <Typography sx={{ fontWeight: 700 }}>
                  Pay when you close
                </Typography>
                <Typography sx={{ fontWeight: 700, mb: 2 }}>
                  ₹ {value + 28700}
                </Typography>
              </Box>
            </Box>
            <Box className="estimate-cost-row-main-container">
              <Box className="estimate-cost-row-container">
                <Typography sx={{ fontWeight: 500, mb: 2 }}>
                  Principal and interest 6.28%
                </Typography>
                <Typography sx={{ fontWeight: 500, mb: 2 }}>
                  ₹ {value * 4}
                </Typography>
              </Box>
              <Box className="estimate-cost-row-container">
                <Typography sx={{ fontWeight: 500, mb: 2 }}>
                  Down payment 20%
                </Typography>
                <Typography
                  sx={{ fontWeight: 500, mb: 2, textDecoration: "underline" }}
                >
                  ₹ {value + 6 * 512}
                </Typography>
              </Box>
            </Box>
            <Box className="estimate-cost-row-main-container">
              <Box className="estimate-cost-row-container">
                <Typography sx={{ fontWeight: 500, mb: 2 }}>
                  Property taxes
                </Typography>
                <Typography sx={{ fontWeight: 500, mb: 2 }}>
                  ₹ {value * 24 + 852}
                </Typography>
              </Box>
              <Box className="estimate-cost-row-container">
                <Typography sx={{ fontWeight: 500, mb: 2 }}>
                  Closing costs
                  <Tooltip
                    arrow
                    title="Closing costs are fees for the services, taxes, and insurance required for a lender to evaluate the home you’re buying and process and finalize your mortgage. We’ve estimated your closing costs based on the home price, down payment, and interest rate."
                  >
                    <IconButton>
                      <AiOutlineInfoCircle />
                    </IconButton>
                  </Tooltip>
                </Typography>
                <Typography sx={{ fontWeight: 500, mb: 2 }}>
                  ₹ {value * 24 - 63}
                </Typography>
              </Box>
            </Box>
            <Box className="estimate-cost-row-main-container">
              <Box className="estimate-cost-row-container">
                <Typography sx={{ fontWeight: 500, mb: 3 }}>
                  Homeowners insurance
                </Typography>
                <Typography sx={{ fontWeight: 500, mb: 3 }}>
                  ₹ {value * 14}
                </Typography>
              </Box>
            </Box>
            <Typography id="estimate-cost-info-text">
              Actual amounts may vary. This cost estimate is meant for
              informational purposes only and is not intended to be construed as
              financial advice. Opendoor always encourages you to reach out to
              an advisor regarding your own situation.
            </Typography>
          </Box>
          <Divider className="product-page-dividers" />

          <Box className="school-container">
            <Box>
              <Typography id="all-title">Schools</Typography>
              <Box className="school-name-container">
                <Typography variant="subtitle1" sx={{ color: "#6e6e6e" }}>
                  Padron Elementary School, PK, K-5
                </Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: 900 }}>
                  B
                </Typography>
              </Box>
              <Box className="school-name-container">
                <Typography variant="subtitle1" sx={{ color: "#6e6e6e" }}>
                  Lanier High School, 9-12
                </Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: 900 }}>
                  B
                </Typography>
              </Box>
              <Box className="school-name-container">
                <Typography variant="subtitle1" sx={{ color: "#6e6e6e" }}>
                  Wooldridge Elementary School, PK, K-5
                </Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: 900 }}>
                  C
                </Typography>
              </Box>
              <Box className="school-name-container">
                <Typography variant="subtitle1" sx={{ color: "#6e6e6e" }}>
                  Burnet Middle School, 6-8C
                </Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: 900 }}>
                  C
                </Typography>
              </Box>
            </Box>
            <Typography
              sx={{
                fontWeight: 100,
                fontSize: 14,
                display: "flex",
                flexDirection: "row",
              }}
            >
              School data provided by{" "}
              <Link href="true" target="_blank" underline="hover">
                <Typography
                  sx={{
                    ml: 1,
                    fontWeight: 700,
                    fontSize: 15,
                    color: "#3e8dd8 !important",
                  }}
                >
                  Niche.
                </Typography>
              </Link>
            </Typography>
          </Box>
          <Divider className="product-page-dividers" />

          <Box className="below-school-container">
            <Box>
              <Typography id="all-title">
                Submit your strongest offer with an Opendoor Agent
              </Typography>
            </Box>
            <Typography sx={{ mb: 1 }}>
              <TiTick />
              Use our cash to get an edge over other buyers
            </Typography>
            <Typography sx={{ mb: 1 }}>
              <TiTick />
              We can buy the home for youAgent
            </Typography>
            <Typography>
              <TiTick />
              Help every step of the way, on your schedule
            </Typography>
            <Typography sx={{ fontWeight: 800 }}>
              <Link target="_blank" underline="click">
                See more about buying a home with Opendoor
              </Link>
            </Typography>
          </Box>
          <Divider className="product-page-dividers" />

          <Box className="also-selling-container">
            <Card>
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  transform: "scale(1)",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 900,
                    fontSize: "24px",
                    color: "#222222",
                    pb: 1,
                  }}
                >
                  <Box
                    component="img"
                    sx={{
                      height: 38,
                      width: 44,
                      maxHeight: { xs: 33, md: 67 },
                      maxWidth: { xs: 50, md: 50 },
                      mr: 1,
                    }}
                    alt="The house from the offer."
                    src="https://imgdrop.imgix.net/b996cb224807410fa17ea6ccc2c5cb7b.png?h=84&w=84"
                  />
                  Also selling a home? We can help with that too.
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontSize: "18px",
                    color: "#222222",
                    mb: 1,
                  }}
                >
                  Tell us about your home and we’ll make a competitive offer to
                  buy it from you.
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: "15px",
                    color: "#3E8DD8",
                    "&:hover": { cursor: "pointer", color: "#3E8aa1" },
                  }}
                >
                  Request a free offer &#62;
                </Typography>
              </CardContent>
            </Card>
            <Divider className="product-page-dividers" />
          </Box>

          <Box>
            <Typography id="all-title">FAQ</Typography>
          </Box>
          <div className="faq-container">
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handlepanel("panel1")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography sx={{ color: "text.secondary" }}>
                  THIS IS THE QUESTION.
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>THIS IS THE ANSWER.</Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <Divider className="product-page-dividers" />*/}

      {/*New component */}
      <div className="property-heading-container">
        <div className="property-heading">
          <div className="main-property-heading">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(12, 1fr)",
              }}
            >
              <div style={{ gridColumn: "span 9" }}>
                <div className="propertypage-header-container">
                  <Link to="/"  className="linkclass1">Home</Link>
                  <IoIosArrowForward size={20} />
                  <Link
                    to={`/property-in-${product?.projectDetails?.cityName.toLowerCase()}`}
                    className="linkclass1"
                  >
                    Property in {product?.projectDetails?.cityName}
                  </Link>
                  <IoIosArrowForward size={20} />
                  {product?.projectDetails?.name}
                  in {product?.projectDetails?.location}
                </div>
              </div>
              <div
                style={{
                  gridColumn: "span 3",
                  display: "inline-flex",
                  justifyContent: "flex-end",
                }}
              >
                <span style={{ fontSize: "12px", color: "#8B8B8B" }}>
                  Last Updated: {currentDate}
                </span>
              </div>
            </div>
            <div className="heading-text-container">
              <span
                style={{
                  fontWeight: 900,
                  fontSize: "20px",
                }}
              >
                {product?.projectDetails?.name}
              </span>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  width: "5%",
                  marginLeft: "2%",
                }}
              >
                <MdIosShare
                  color="#d1913c"
                  size={22}
                  style={{ cursor: "pointer" }}
                />
                <FaRegHeart
                  color="#d1913c"
                  size={22}
                  style={{ cursor: "pointer" }}
                />
              </div>
              <div className="property-price-text-container">
                <span className="property-price-text">
                  ₹ {product?.projectDetails?.price}
                </span>
              </div>
            </div>
            <div className="property-name-subtext-container">
              <span className="property-name-subtext">
                <span
                  style={{
                    textDecoration: "underline",
                    textUnderlineOffset: "8px",
                    textDecorationThickness: "3px",
                    textDecorationColor: "#FFD194",
                  }}
                >
                  2 BHK Independent{" "}
                </span>
                Builder Floor in {product?.projectDetails?.location}
              </span>
              <span className="emi-text">EMI starts at ₹14.82 K</span>
            </div>
          </div>
        </div>
      </div>
      <div className="maindiv">
        <div className="maindetails">
          {product?.galleryArr?.length > 0 ? (
            <div className="gallery-container">
              <div className="gallery">
                <div className="main-gallery">
                  <Gallery />
                </div>
              </div>
            </div>
          ) : (
            ""
          )}

          <div className="overview-container">
            <div className="overview">
              <p
                style={{
                  textDecoration: "underline",
                  textUnderlineOffset: "5px",
                  textDecorationThickness: "2px",
                  textDecorationColor: "#FFD194",
                  fontFamily: "sans-serif",
                  color: "#000000",
                }}
              >
                Overview
              </p>
              <div className="main-overview">
                <div className="overview-grid-container">
                  <div className="overview-grid-item">
                    {" "}
                    <div style={{ display: "flex" }}>
                      <img src={bhk} alt="banner" className="overview-images" />
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <span className="overview-text-heading">
                          unit configuration
                        </span>
                        <span className="overview-text-subheading">
                          2bhk apartment
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="overview-grid-item">
                    {" "}
                    <div style={{ display: "flex" }}>
                      <img
                        src={propertytype}
                        alt="banner"
                        className="overview-images"
                      />
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <span className="overview-text-heading">
                          property type
                        </span>
                        <span className="overview-text-subheading">
                          {product?.projectDetails?.property_type}
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* <div className="overview-grid-item">
                    {" "}
                    <div style={{ display: "flex" }}>
                      <img
                        src={watersupply}
                        alt="banner"
                        className="overview-images"
                      />
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <span className="overview-text-heading">
                          water supply
                        </span>
                        <span className="overview-text-subheading">
                          corporation and borewell
                        </span>
                      </div>
                    </div>
                  </div> */}
                  <div className="overview-grid-item">
                    {" "}
                    <div style={{ display: "flex" }}>
                      <img
                        src={builder}
                        alt="banner"
                        className="overview-images"
                      />
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <span className="overview-text-heading">builder</span>
                        <span className="overview-text-subheading">
                          {product?.projectDetails?.DevName}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="overview-grid-item">
                    {" "}
                    <div style={{ display: "flex" }}>
                      <img
                        src={projectsize}
                        alt="banner"
                        className="overview-images"
                      />
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <span className="overview-text-heading">
                          project size
                        </span>
                        <span className="overview-text-subheading">
                          5 building-1000 units
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="overview-grid-item">
                    {" "}
                    <div style={{ display: "flex" }}>
                      <img
                        src={project}
                        alt="banner"
                        className="overview-images"
                      />
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <span className="overview-text-heading">
                          project area
                        </span>
                        <span className="overview-text-subheading">
                          {product?.projectDetails?.area}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="overview-grid-item">
                    {" "}
                    <div style={{ display: "flex" }}>
                      <img
                        src={minprice}
                        alt="banner"
                        className="overview-images"
                      />
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <span className="overview-text-heading">
                          starting price
                        </span>
                        <span className="overview-text-subheading">
                          {product?.projectDetails?.price}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="overview-grid-item">
                    {" "}
                    <div style={{ display: "flex" }}>
                      <img
                        src={Vector}
                        alt="banner"
                        className="overview-images"
                      />
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <span className="overview-text-heading">
                          Possession Status
                        </span>
                        <span className="overview-text-subheading">
                          {product?.projectDetails?.possession}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="overview-grid-item">
                    {" "}
                    <div style={{ display: "flex" }}>
                      <img
                        src={Rera}
                        alt="banner"
                        className="overview-images"
                      />
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <span className="overview-text-heading">Rera ID</span>
                        <span className="overview-text-subheading">
                          {product?.projectDetails?.rera}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="key-features-container">
            <div className="key-features">
              <p style={{ fontFamily: "sans-serif", color: "#000000" }}>
                <span
                  style={{
                    textDecoration: "underline",
                    textUnderlineOffset: "5px",
                    textDecorationThickness: "2px",
                    textDecorationColor: "#FFD194",
                  }}
                >
                  Key Feat
                </span>
                ures
              </p>
              <div className="main-key-features">
                <div
                  dangerouslySetInnerHTML={{ __html: KeyFeatures }}
                  className="htmlfrombackhand"
                />
              </div>
            </div>
          </div>

          <div className="video-container">
            <div className="video">
              <div className="main-video">
                <iframe
                  title="Property Video"
                  allowFullScreen="allowfullscreen"
                  frameBorder={"0"}
                  tabIndex="0"
                  className="videoIframe"
                  src={`https://www.youtube.com/embed/${product?.projectDetails?.video_id}`}
                />
              </div>
            </div>
          </div>
          <div className="amenities-container">
            <div className="amenities">
              <p
                style={{
                  textDecoration: "underline",
                  textUnderlineOffset: "5px",
                  textDecorationThickness: "2px",
                  textDecorationColor: "#FFD194",
                  fontFamily: "sans-serif",
                  color: "#000000",
                }}
              >
                Amenities
              </p>
              <div className="main-amenities">
                <div className="amenities-grid-container">
                  <div className="amenities-grid-item">
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <img
                        src={lift}
                        alt="banner"
                        className="amenities-images"
                      />
                      <span className="amenities-text-heading">Lift</span>
                    </div>
                  </div>
                  <div className="amenities-grid-item">
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <img
                        src={cctv}
                        alt="banner"
                        className="amenities-images"
                      />
                      <span className="amenities-text-heading">
                        Cctv camera
                      </span>
                    </div>
                  </div>
                  <div className="amenities-grid-item">
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <img
                        src={indoorgame}
                        alt="banner"
                        className="amenities-images"
                      />
                      <span className="amenities-text-heading">
                        Indoor games
                      </span>
                    </div>
                  </div>
                  <div className="amenities-grid-item">
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <img
                        src={swimming}
                        alt="banner"
                        className="amenities-images"
                      />
                      <span className="amenities-text-heading">
                        Swimming pool
                      </span>
                    </div>
                  </div>
                  <div className="amenities-grid-item">
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <img
                        src={wifi}
                        alt="banner"
                        className="amenities-images"
                      />
                      <span className="amenities-text-heading">Wifi</span>
                    </div>
                  </div>
                  <div className="amenities-grid-item">
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <img
                        src={club}
                        alt="banner"
                        className="amenities-images"
                      />
                      <span className="amenities-text-heading">Club house</span>
                    </div>
                  </div>
                  <div className="amenities-grid-item">
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <img
                        src={badminton}
                        alt="banner"
                        className="amenities-images"
                      />
                      <span className="amenities-text-heading">
                        Badminton court
                      </span>
                    </div>
                  </div>
                  <div className="amenities-grid-item">
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <img
                        src={powerbackup}
                        alt="banner"
                        className="amenities-images"
                      />
                      <span className="amenities-text-heading">
                        Power backup
                      </span>
                    </div>
                  </div>
                  <div className="amenities-grid-item">
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <img
                        src={commongarden}
                        alt="banner"
                        className="amenities-images"
                      />
                      <span className="amenities-text-heading">
                        Common garden
                      </span>
                    </div>
                  </div>
                  <div className="amenities-grid-item">
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <img
                        src={communityhall}
                        alt="banner"
                        className="amenities-images"
                      />
                      <span className="amenities-text-heading">
                        Community hall
                      </span>
                    </div>
                  </div>
                  <div className="amenities-grid-item">
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <img
                        src={basketball}
                        alt="banner"
                        className="amenities-images"
                      />
                      <span className="amenities-text-heading">
                        Basketball court
                      </span>
                    </div>
                  </div>
                  <div className="amenities-grid-item">
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <img
                        src={gym}
                        alt="banner"
                        className="amenities-images"
                      />
                      <span className="amenities-text-heading">Gym</span>
                    </div>
                  </div>
                  <div className="amenities-grid-item">
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <img
                        src={security1}
                        alt="banner"
                        className="amenities-images"
                      />
                      <span className="amenities-text-heading">Security</span>
                    </div>
                  </div>
                  <div className="amenities-grid-item">
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <img
                        src={vastu}
                        alt="banner"
                        className="amenities-images"
                      />
                      <span className="amenities-text-heading">
                        Vastu compliant
                      </span>
                    </div>
                  </div>
                  <div className="amenities-grid-item">
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <img
                        src={visitorparking}
                        alt="banner"
                        className="amenities-images"
                      />
                      <span className="amenities-text-heading">
                        Visitor parking
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="floor-plan-container">
            <FloorPlan />
          </div>

          <div className="map-container">
            <div className="map">
              <p style={{ fontFamily: "sans-serif", color: "#000000" }}>
                <span
                  style={{
                    textDecoration: "underline",
                    textUnderlineOffset: "5px",
                    textDecorationThickness: "2px",
                    textDecorationColor: "#FFD194",
                  }}
                >
                  Nearby P
                </span>
                laces
              </p>
              <div>
                <iframe
                  title="Map"
                  className="main-map"
                  src={product?.projectDetails?.pro_map}
                />
              </div>
              <div>
                <Swiper
                  onSwiper={setSwiperRef}
                  slidesPerView={3}
                  centeredSlides={false}
                  spaceBetween={30}
                  // pagination={{
                  //   type: "fraction",
                  // }}
                  navigation={true}
                  modules={[Pagination, Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <div style={{ border: "1px solid #EEEEEE" }}>
                      <div style={{ display: "flex", marginLeft: "8px" }}>
                        <img
                          src={HDFC}
                          alt="Avatar"
                          style={{ width: "100px", margin: "auto" }}
                          // className="PopularBuilder-img"
                        />

                        <div style={{ marginLeft: "5px" }}>
                          <p style={{ fontSize: "14px" }}>HDFC Bank</p>
                          <p style={{ fontSize: "14px", marginTop: "-5px" }}>
                            2Km
                          </p>
                          <p style={{ color: "#8B8B8B", fontSize: "10px" }}>
                            Maruti Housing Colony, Sector 25, Gurugram, Haryana
                            122022
                          </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div style={{ border: "1px solid #EEEEEE" }}>
                      <div style={{ display: "flex", marginLeft: "8px" }}>
                        <img
                          src={HDFC}
                          alt="Avatar"
                          style={{ width: "100px", margin: "auto" }}
                          // className="PopularBuilder-img"
                        />

                        <div style={{ marginLeft: "5px" }}>
                          <p style={{ fontSize: "14px" }}>HDFC Bank</p>
                          <p style={{ fontSize: "14px", marginTop: "-5px" }}>
                            2Km
                          </p>
                          <p style={{ color: "#8B8B8B", fontSize: "10px" }}>
                            Maruti Housing Colony, Sector 25, Gurugram, Haryana
                            122022
                          </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div style={{ border: "1px solid #EEEEEE" }}>
                      <div style={{ display: "flex", marginLeft: "8px" }}>
                        <img
                          src={HDFC}
                          alt="Avatar"
                          style={{ width: "100px", margin: "auto" }}
                          // className="PopularBuilder-img"
                        />

                        <div style={{ marginLeft: "5px" }}>
                          <p style={{ fontSize: "14px" }}>HDFC Bank</p>
                          <p style={{ fontSize: "14px", marginTop: "-5px" }}>
                            2Km
                          </p>
                          <p style={{ color: "#8B8B8B", fontSize: "10px" }}>
                            Maruti Housing Colony, Sector 25, Gurugram, Haryana
                            122022
                          </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div style={{ border: "1px solid #EEEEEE" }}>
                      <div style={{ display: "flex", marginLeft: "8px" }}>
                        <img
                          src={HDFC}
                          alt="Avatar"
                          style={{ width: "100px", margin: "auto" }}
                          // className="PopularBuilder-img"
                        />

                        <div style={{ marginLeft: "5px" }}>
                          <p style={{ fontSize: "14px" }}>HDFC Bank</p>
                          <p style={{ fontSize: "14px", marginTop: "-5px" }}>
                            2Km
                          </p>
                          <p style={{ color: "#8B8B8B", fontSize: "10px" }}>
                            Maruti Housing Colony, Sector 25, Gurugram, Haryana
                            122022
                          </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div style={{ border: "1px solid #EEEEEE" }}>
                      <div style={{ display: "flex", marginLeft: "8px" }}>
                        <img
                          src={HDFC}
                          alt="Avatar"
                          style={{ width: "100px", margin: "auto" }}
                          // className="PopularBuilder-img"
                        />

                        <div style={{ marginLeft: "5px" }}>
                          <p style={{ fontSize: "14px" }}>HDFC Bank</p>
                          <p style={{ fontSize: "14px", marginTop: "-5px" }}>
                            2Km
                          </p>
                          <p style={{ color: "#8B8B8B", fontSize: "10px" }}>
                            Maruti Housing Colony, Sector 25, Gurugram, Haryana
                            122022
                          </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div style={{ border: "1px solid #EEEEEE" }}>
                      <div style={{ display: "flex", marginLeft: "8px" }}>
                        <img
                          src={HDFC}
                          alt="Avatar"
                          style={{ width: "100px", margin: "auto" }}
                          // className="PopularBuilder-img"
                        />

                        <div style={{ marginLeft: "5px" }}>
                          <p style={{ fontSize: "14px" }}>HDFC Bank</p>
                          <p style={{ fontSize: "14px", marginTop: "-5px" }}>
                            2Km
                          </p>
                          <p style={{ color: "#8B8B8B", fontSize: "10px" }}>
                            Maruti Housing Colony, Sector 25, Gurugram, Haryana
                            122022
                          </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
          <div className="why-this-property-container">
            <div className="why-this-property">
              <p style={{ fontFamily: "sans-serif", color: "#000000" }}>
                <span
                  style={{
                    textDecoration: "underline",
                    textUnderlineOffset: "5px",
                    textDecorationThickness: "2px",
                    textDecorationColor: "#FFD194",
                  }}
                >
                  Why This{" "}
                </span>
                Property?
              </p>
              <div className="main-why-this-property-container">
                <div
                  dangerouslySetInnerHTML={{ __html: whythis }}
                  className="htmlfrombackhand"
                />

                {/* <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <li className="bullet-list-text">Spacious properties.</li>
                  <li className="bullet-list-text">
                    Ultra modern amenities like landscaped gardens, swimming
                    pool, Olympic size swimming pool, tree plantation, gated
                    community, community hall and center.
                  </li>
                  <li className="bullet-list-text">
                    Famous for schools, colleges.
                  </li>
                </div>
                <button className="why-this-property-download-btn">
                  <img src={brochure} alt="download-button" />
                  <span className="download-btn-text">Download Brochure</span>
                </button> */}
              </div>
            </div>
          </div>
          <div className="more-details-container">
            <div className="more-details">
              <p style={{ fontFamily: "sans-serif", color: "#000000" }}>
                <span
                  style={{
                    textDecoration: "underline",
                    textUnderlineOffset: "5px",
                    textDecorationThickness: "2px",
                    textDecorationColor: "#FFD194",
                  }}
                >
                  More Det
                </span>
                ails
              </p>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div
                  dangerouslySetInnerHTML={{ __html: MoreDetails }}
                  className="htmlfrombackhand"
                />
              </div>
            </div>
          </div>
          <div className="why-this-property-container">
            <div className="why-this-property">
              <p style={{ fontFamily: "sans-serif", color: "#000000" }}>
                <span
                  style={{
                    textDecoration: "underline",
                    textUnderlineOffset: "5px",
                    textDecorationThickness: "2px",
                    textDecorationColor: "#FFD194",
                  }}
                >
                  Frequentl
                </span>
                y Asked Questions
              </p>
              <div className="main-faq">
                <Accordion
                  expanded={expanded === "panel1"}
                  onChange={handlepanel("panel1")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <span className="faq-question-text">
                      What is the available Apartment size in godrej park
                      retreat?{" "}
                    </span>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>Answer.....</Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
          </div>
          <div className="similar-projects-container">
            <div className="similar-projects">
              <p style={{ fontFamily: "sans-serif", color: "#000000" }}>
                <span
                  style={{
                    textDecoration: "underline",
                    textUnderlineOffset: "5px",
                    textDecorationThickness: "2px",
                    textDecorationColor: "#FFD194",
                  }}
                >
                  Similar P
                </span>
                rojects
              </p>
              <div className="main-similar-projects">
                <SimilarProjects />
              </div>
            </div>
          </div>
        </div>

        <div className="actionbar-container">
          <ContactFrom />
        </div>
      </div>
    </>
  );
};
export default PropertyDetails;

//action bar
{
  /* <div className="lead-form">
              <Card>
                <CardContent className="actionbar-content">
                  <TextField
                    hiddenLabel
                    id="filled-hidden-label-normal"
                    label="Your Name*"
                    variant="filled"
                  />
                  <TextField
                    hiddenLabel
                    id="filled-hidden-label-normal"
                    label="Email ID*"
                    variant="filled"
                  />
                  <FormControl variant="filled">
                    <InputLabel id="demo-simple-select-filled-label">
                      Select Country
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-filled-label"
                      id="demo-simple-select-filled"
                      value={age}
                      onChange={handleChange}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl variant="filled">
                    <InputLabel id="demo-simple-select-filled-label">
                      Select city
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-filled-label"
                      id="demo-simple-select-filled"
                      value={age}
                      onChange={handleChange}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                  <TextField
                    hiddenLabel
                    id="filled-hidden-label-normal"
                    label="Mobile No*"
                    variant="filled"
                  />
                  <Button variant="contained">Submit</Button>
                </CardContent>
              </Card>
            </div> */
}
{
  /* <Card>
<div className="modal-lead-form">
  <Button variant="outlined" fullWidth onClick={handleClickOpen}>
    Contact Us
  </Button>
  <Dialog open={open} onClose={handleClose}>
    <DialogTitle>
      <h3
        style={{
          background: "#002349",
          color: "#fff",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {product?.seoProjectDetails?.proName}
      </h3>
      <h4
        style={{
          background: "#002349",
          color: "#fff",
          display: "flex",
          justifyContent: "center",
        }}
      >
        Assured Call Back in 5 Minutes
      </h4>
    </DialogTitle>

    <DialogContent>
      <div className="modal-form-div">
        <label for="fname">Your Name : </label>
        <input
          type="text"
          id="fname"
          name="firstname"
          placeholder="Your name.."
        />
        <br />
        <label for="lname">Email ID : </label>
        <input
          type="text"
          id="fname"
          name="lastname"
          placeholder="Your email id"
        />
        <br />
        <label for="country">Select : </label>
        <select id="country" name="country">
          <option value="australia">India</option>
          <option value="canada">Canada</option>
          <option value="usa">USA</option>
        </select>
        <label for="cars">Select City : </label>
        <select id="cars" name="cars">
          <option value="volvo">Gurgaon</option>
          <option value="saab">Saab</option>
          <option value="fiat">Fiat</option>
          <option value="audi">Audi</option>
        </select>
        <label for="fname">Mobile Number : </label>
        <input
          type="text"
          id="fname"
          name="firstname"
          placeholder="Enter Contact no.."
        />
      </div>
    </DialogContent>

    <DialogActions>
      <Button onClick={handleClose}>Close</Button>
      <Button> Subscribe </Button>
    </DialogActions>
  </Dialog>
</div>
<CardContent className="actionbar-content">
  <div className="actionbar-price-content">
    <Typography
      sx={{ fontWeight: 600, fontSize: "14px", color: "#6e6e6e" }}
    >
      List price
    </Typography>
    <Typography
      sx={{ fontWeight: 900, fontSize: "34px", color: "#222222" }}
    >
      ₹ {product?.seoProjectDetails?.proPrice}
      {product?.seoProjectDetails?.priceType}
    </Typography>
  </div>

  <div className="actionbar-price-content">
    <Box className="actionbar-content-status-container">
      <Typography
        sx={{
          fontWeight: 600,
          fontSize: "15px",
          color: "#6e6e6e",
        }}
      >
        Rera Number
      </Typography>

      <Typography id="actionbar-content-status">
        {product?.seoProjectDetails?.rera}
      </Typography>
    </Box>
  </div>
</CardContent>
</Card> */
}
