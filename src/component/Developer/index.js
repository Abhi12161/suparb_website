import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { fetchProduct } from "../../redux/action/product";
import Footer from "../Footer";
import Header from "../Header";
import "./style.scss";
// import { CardContent } from "@mui/material";
import { Grid, GridItem } from "@chakra-ui/react";
import { BsArrowRight } from "react-icons/bs";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { RiBuildingFill } from "react-icons/ri";
import ScrollButton from "../MoveToTopButton/ScrollButton";
// import loader from "../../asset/loader.gif";
import { Box, CardContent, Skeleton } from "@mui/material";
import { developerListSelector } from "../../redux/reducer/developerListing";
import { fetchDeveloperList } from "../../redux/action/developerlisting";

const Developer = () => {
  const dispatch = useDispatch();
  const { developerList, loading } = useSelector(developerListSelector);

  // useEffect(() => {
  //   // dispatch(fetchDeveloperList());
  //   window.scrollTo({
  //     top: 0,
  //   });
  // }, [developerList[0].name]);

  const [visibleDevelopers, setVisibleDevelopers] = useState(10);
  const showMoreDevelopers = () => {
    setVisibleDevelopers((prevValue) => prevValue + 10);
  };
  let TotalNumber =
    developerList?.length > visibleDevelopers &&
    visibleDevelopers / developerList?.length;

  return (
    <div>
      {loading ? (
        // <div>
        //   <img className="loader-style" src={loader} alt="loader" />
        // </div>
        <>
          <div className="city">
            <div className="gfg">
              <Skeleton
                className="img_banner"
                variant="text"
                animation="wave"
                sx={{ fontSize: "14rem" }}
              />
              {/* <h1 className="first-txt">
                Property in {}
                for Sale
              </h1> */}
            </div>
            <div className="card-list">
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Grid className="listing-grid">
                  <GridItem style={{ marginRight: "4" }}>
                    <Card className="skeleton-city-card">
                      <CardContent>
                        <Skeleton
                          variant="rectangular"
                          width={400}
                          height={180}
                        />
                        <CardContent>
                          <div>
                            <Box>
                              <Skeleton animation="wave" width="100%" />
                              <Skeleton animation="wave" width="10%" />
                            </Box>

                            <Typography variant="body2">
                              <Skeleton animation="wave" width="60%" />
                            </Typography>

                            <Typography
                              style={{
                                display: "inline-flex",
                                justifyContent: "center",
                              }}
                            >
                              <Skeleton
                                animation="wave"
                                variant="circular"
                                width={20}
                                height={40}
                              />
                              <Skeleton
                                animation="wave"
                                width={20}
                                height={40}
                              />
                              <Skeleton
                                animation="wave"
                                width={200}
                                height={40}
                              />
                            </Typography>

                            <Typography
                              style={{
                                display: "inline-flex",
                                justifyContent: "center",
                              }}
                            >
                              <Skeleton width={20} height={40} />
                              <Skeleton width={200} height={40} />
                              <Skeleton width={20} height={40} />
                            </Typography>
                          </div>
                        </CardContent>
                      </CardContent>
                    </Card>
                  </GridItem>
                  <GridItem style={{ marginRight: "4" }}>
                    <Card className="skeleton-city-card">
                      <CardContent>
                        <Skeleton
                          variant="rectangular"
                          width={400}
                          height={180}
                        />
                        <CardContent>
                          <div>
                            <Box>
                              <Skeleton animation="wave" width="100%" />
                              <Skeleton animation="wave" width="10%" />
                            </Box>

                            <Typography variant="body2">
                              <Skeleton animation="wave" width="60%" />
                            </Typography>

                            <Typography
                              style={{
                                display: "inline-flex",
                                justifyContent: "center",
                              }}
                            >
                              <Skeleton
                                animation="wave"
                                variant="circular"
                                width={20}
                                height={40}
                              />
                              <Skeleton
                                animation="wave"
                                width={20}
                                height={40}
                              />
                              <Skeleton
                                animation="wave"
                                width={200}
                                height={40}
                              />
                            </Typography>

                            <Typography
                              style={{
                                display: "inline-flex",
                                justifyContent: "center",
                              }}
                            >
                              <Skeleton width={20} height={40} />
                              <Skeleton width={200} height={40} />
                              <Skeleton width={20} height={40} />
                            </Typography>
                          </div>
                        </CardContent>
                      </CardContent>
                    </Card>
                  </GridItem>
                  <GridItem style={{ marginRight: "4" }}>
                    <Card className="skeleton-city-card">
                      <CardContent>
                        <Skeleton
                          variant="rectangular"
                          width={400}
                          height={180}
                        />
                        <CardContent>
                          <div>
                            <Box>
                              <Skeleton animation="wave" width="100%" />
                              <Skeleton animation="wave" width="10%" />
                            </Box>

                            <Typography variant="body2">
                              <Skeleton animation="wave" width="60%" />
                            </Typography>

                            <Typography
                              style={{
                                display: "inline-flex",
                                justifyContent: "center",
                              }}
                            >
                              <Skeleton
                                animation="wave"
                                variant="circular"
                                width={20}
                                height={40}
                              />
                              <Skeleton
                                animation="wave"
                                width={20}
                                height={40}
                              />
                              <Skeleton
                                animation="wave"
                                width={200}
                                height={40}
                              />
                            </Typography>

                            <Typography
                              style={{
                                display: "inline-flex",
                                justifyContent: "center",
                              }}
                            >
                              <Skeleton width={20} height={40} />
                              <Skeleton width={200} height={40} />
                              <Skeleton width={20} height={40} />
                            </Typography>
                          </div>
                        </CardContent>
                      </CardContent>
                    </Card>
                  </GridItem>
                  <GridItem style={{ marginRight: "4" }}>
                    <Card className="skeleton-city-card">
                      <CardContent>
                        <Skeleton
                          variant="rectangular"
                          width={400}
                          height={180}
                        />
                        <CardContent>
                          <div>
                            <Box>
                              <Skeleton animation="wave" width="100%" />
                              <Skeleton animation="wave" width="10%" />
                            </Box>

                            <Typography variant="body2">
                              <Skeleton animation="wave" width="60%" />
                            </Typography>

                            <Typography
                              style={{
                                display: "inline-flex",
                                justifyContent: "center",
                              }}
                            >
                              <Skeleton
                                animation="wave"
                                variant="circular"
                                width={20}
                                height={40}
                              />
                              <Skeleton
                                animation="wave"
                                width={20}
                                height={40}
                              />
                              <Skeleton
                                animation="wave"
                                width={200}
                                height={40}
                              />
                            </Typography>

                            <Typography
                              style={{
                                display: "inline-flex",
                                justifyContent: "center",
                              }}
                            >
                              <Skeleton width={20} height={40} />
                              <Skeleton width={200} height={40} />
                              <Skeleton width={20} height={40} />
                            </Typography>
                          </div>
                        </CardContent>
                      </CardContent>
                    </Card>
                  </GridItem>
                  <GridItem style={{ marginRight: "4" }}>
                    <Card className="skeleton-city-card">
                      <CardContent>
                        <Skeleton
                          variant="rectangular"
                          width={400}
                          height={180}
                        />
                        <CardContent>
                          <div>
                            <Box>
                              <Skeleton animation="wave" width="100%" />
                              <Skeleton animation="wave" width="10%" />
                            </Box>

                            <Typography variant="body2">
                              <Skeleton animation="wave" width="60%" />
                            </Typography>

                            <Typography
                              style={{
                                display: "inline-flex",
                                justifyContent: "center",
                              }}
                            >
                              <Skeleton
                                animation="wave"
                                variant="circular"
                                width={20}
                                height={40}
                              />
                              <Skeleton
                                animation="wave"
                                width={20}
                                height={40}
                              />
                              <Skeleton
                                animation="wave"
                                width={200}
                                height={40}
                              />
                            </Typography>

                            <Typography
                              style={{
                                display: "inline-flex",
                                justifyContent: "center",
                              }}
                            >
                              <Skeleton width={20} height={40} />
                              <Skeleton width={200} height={40} />
                              <Skeleton width={20} height={40} />
                            </Typography>
                          </div>
                        </CardContent>
                      </CardContent>
                    </Card>
                  </GridItem>
                </Grid>
                <span>
                  <p className="showmorebutton">
                    {TotalNumber ? (
                      <Typography>
                        <div className="inspiredBtn">
                          <span className="btnContainer">
                            <Typography
                              style={{
                                display: "inline-flex",
                                justifyContent: "center",
                              }}
                            >
                              <Skeleton width={300} height={30} />
                            </Typography>
                          </span>
                        </div>
                      </Typography>
                    ) : (
                      ""
                    )}
                  </p>
                </span>
              </div>
              <div className="side-box- ">
                <div className="side-box2">
                  <Typography
                    style={{ display: "inline-flex", justifyContent: "center" }}
                  >
                    <Skeleton width={20} height={40} />
                    <Skeleton width={200} height={40} />
                    <Skeleton width={20} height={40} />
                  </Typography>
                </div>
                <div className="side-box3">
                  <Typography
                    style={{ display: "inline-flex", justifyContent: "center" }}
                  >
                    <Skeleton width={20} height={40} />
                    <Skeleton width={200} height={40} />
                    <Skeleton width={20} height={40} />
                  </Typography>
                </div>
                <div className="side-box4">
                  <Typography
                    style={{ display: "inline-flex", justifyContent: "center" }}
                  >
                    <Skeleton width={20} height={40} />
                    <Skeleton width={200} height={40} />
                    <Skeleton width={20} height={40} />
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div>
          <Header />
          <ScrollButton />
          <div className="city">
            <div className="gfg">
              <img
                src="	https://www.seedwill.co/assets/img/our-product/pune.png"
                alt="bannger"
                className="img_banner"
              />
              <h1 className="first-txt">
              {developerList[0].name}  | New Project for Sale
              </h1>
            </div>
            <div className="card-list">
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Grid className="listing-grid">
                  {developerList
                    ?.slice(0, visibleDevelopers)
                    ?.map((item, index) => {
                      return (
                        <div key={index}>
                          <GridItem>
                            <Card className="city-card">
                              <CardContent>
                                <Swiper
                                  rewind={true}
                                  navigation={true}
                                  modules={[Navigation, Pagination]}
                                  pagination={{
                                    type: "progressbar",
                                  }}
                                  className="mySwiper"
                                >
                                  <SwiperSlide>
                                    <img
                                      height="250"
                                      src={`https://www.seedwill.co/assets/img/${item.proImage}`}
                                      alt="green iguana"
                                      style={{ width: "inherit" }}
                                    />
                                  </SwiperSlide>
                                  <SwiperSlide>
                                    <img
                                      height="250"
                                      src="https://bit.ly/2Z4KKcF"
                                      alt="green iguana"
                                      style={{ width: "inherit" }}
                                    />
                                  </SwiperSlide>
                                </Swiper>
                                {/* <Link
                                to={`/product/${item.name
                                  .toLowerCase()
                                  .replaceAll(/\s/g, "-")}-${item.id}`}
                                className="linkclass"
                              > */}
                                <Link to={`/property/${item.id}`} className="linkclass">
                                  <CardContent
                                    key={index}
                                    value={item.id}
                                    onClick={() =>
                                      dispatch(fetchProduct(item.id))
                                    }
                                  >
                                    <div>
                                      <Typography
                                        gutterBottom
                                        variant="h6"
                                        component="div"
                                      >
                                        {item.name}
                                      </Typography>
                                      <Typography variant="body2">
                                        {item.title
                                          ? `${item.title}`
                                          : "1321 Elk Creek & TBD McCabe Ranch"}
                                      </Typography>
                                      <p
                                        style={{
                                          fontFamily: "Benton,Arial,Sans-Serif",
                                          fontSize: "14px",
                                          fontWeight: "600",
                                          lineHeight: "1.7",
                                        }}
                                      >
                                        {item.proPrice
                                          ? `₹ ${item.proPrice} ${item.priceType}`
                                          : "On Request"}
                                      </p>
                                      {/* <div
                                      style={{
                                        display: "flex",
                                        gap: "9px",
                                        color: "#666",
                                      }}
                                    >
                                      <p style={{ display: "block" }}>
                                        5 Bedroom
                                      </p>
                                      <p>15 Bathroom</p>
                                      <p>75,347 SqFt.</p>
                                    </div> */}
                                      <p
                                        style={{
                                          fontSize: "12px",
                                          lineHeight: "1.3",
                                          marginTop: "10px",
                                          color: "#666",
                                          fontFamily: "Mercury-italic",
                                        }}
                                      >
                                        Marketed By SeedWill Consuiting Pvt. Ltd
                                      </p>
                                    </div>
                                  </CardContent>
                                </Link>
                              </CardContent>
                            </Card>
                          </GridItem>
                        </div>
                      );
                    })}
                </Grid>
                <span onClick={showMoreDevelopers}>
                  <p className="showmorebutton">
                    {TotalNumber ? (
                      <Typography>
                        <div className="inspiredBtn">
                          <a
                            className="btn btnWithArow btnPrimary utextUperCase"
                            target={"_self"}
                          >
                            <span className="btnContainer">
                              <span className="btnText">Show More</span>
                              <HiOutlineArrowNarrowRight
                                className="btnIconArrow"
                                style={{ width: "24px", height: "24px" }}
                              />
                            </span>
                          </a>
                        </div>
                      </Typography>
                    ) : (
                      ""
                    )}
                  </p>
                </span>
              </div>
              <div className="side-box">
                <div className="side-box2">
                  <p>
                    <RiBuildingFill color={"#002349"} size={"20px"} />
                  </p>
                  <p style={{ marginLeft: "-40px" }}>2 BHK Rooms</p>
                  <p>
                    <BsArrowRight color={"#002349"} size={"20px"} />
                  </p>
                </div>
                <div className="side-box3">
                  <p>
                    <RiBuildingFill color={"#002349"} size={"20px"} />
                  </p>
                  <p style={{ marginLeft: "-40px" }}>3 BHK Rooms</p>
                  <p>
                    <BsArrowRight color={"#002349"} size={"20px"} />
                  </p>
                </div>
                <div className="side-box4">
                  <p>
                    <RiBuildingFill color={"#002349"} size={"20px"} />
                  </p>
                  <p style={{ marginLeft: "-40px" }}>4 BHK Rooms</p>
                  <p>
                    <BsArrowRight color={"#002349"} size={"20px"} />
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      )}
    </div>

  );
};
export default Developer;
