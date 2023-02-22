import { Grid, GridItem } from "@chakra-ui/react";
import { Box, CardContent, Skeleton } from "@mui/material";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { MdLocationPin } from "react-icons/md";
import { RiBuildingFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import {
  Link, useParams, useRouteMatch
} from "react-router-dom";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import whatsapp from "../../asset/whatsapp.svg";
import { fetchCityData } from "../../redux/action/cityData";
import { fetchProduct } from "../../redux/action/product";
import { cityDataSelector } from "../../redux/reducer/cityData";
import Footer from "../Footer";
import Header from "../Header";
import ScrollButton from "../MoveToTopButton/ScrollButton";
import "./style.scss";
const City = () => {
  const dispatch = useDispatch();
  const { cityData, loading } = useSelector(cityDataSelector);

  const [count, setCount] = useState(20);

  // useEffect(() => {
  //   window.addEventListener(`scroll`, handleScroll);

  //   const timeoutId = setTimeout(() => {
  //     setCount((count) => count + 1);
  //   }, 600);
  //   // clearTimeout(timeoutId)
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [count]);

  // const handleScroll = (e) => {
  //   if (
  //     window.innerHeight + e.target.documentElement.scrollTop + 1 >=
  //     e.target.documentElement.scrollHeight
  //   ) {
  //     // console.log(typeof dataLength)
  //     // if(dataLength){

  //     dispatch(fetchCityData(count));
  //     // }
  //   }
  // };

  const [page, setPage] = useState(2);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const [visibleCities, setVisibleCities] = useState(10);
  const showMoreCity = () => {
    cityData.length > visibleCities &&
      setVisibleCities((prevValue) => prevValue + 10);
  };

  // let header = "";
  // if (summary?.headers?.link) {
  //   header = summary?.headers?.link;
  //   let headerMod = header.split(",");
  //   let finalElements = {};

  //   headerMod.map(function (idv, idx) {
  //     let comInfo = idv.replace("<", "").replace(">", "").split(";");
  //     let url = comInfo[0];
  //     let rel = comInfo[1]
  //       .replace(" ", "")
  //       .replace('rel="', "")
  //       .replace('"', "");

  //     finalElements[rel] = {};
  //     finalElements[rel].rel = rel;
  //     finalElements[rel].url = url;

  //     let pageInfo = url.split("?");
  //     let pageParameters = pageInfo[1];

  //     let pageAloneParms = pageParameters.split("&");

  //     pageAloneParms.map((idv1, idx1) => {
  //       let params = idv1.split("=");
  //       finalElements[rel][params[0]] = parseInt(params[1]);
  //     });
  //   });
  // console.log("output: ", finalElements);

  const handlewhatsappicon = () => {
    const win = window.open(
      "https://api.whatsapp.com/send?phone=918076454930",
      "_blank"
    );
    win.focus();
  };

  const { propertyincity } = useParams();
  const { path, url } = useRouteMatch();
  // console.log(`path`, path);
  // console.log(`URL`, url);
  // console.log(`URL`, propertyincity);

  let newCity = propertyincity;
  let newCity2 = newCity.split("-").splice(-1)[0];
  useEffect(() => {
    dispatch(fetchCityData(newCity2));
    window.scrollTo({
      top: 0,
      });
  }, [newCity2]);

  let TotalNumber =
    cityData.length > visibleCities && visibleCities / cityData.length;
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
                  <GridItem style={{marginRight:"4"}}>
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
                  <GridItem style={{marginRight:"4"}}>
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
                  <GridItem style={{marginRight:"4"}}>
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
                  <GridItem style={{marginRight:"4"}}>
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
                  <GridItem style={{marginRight:"4"}}>
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
                <span onClick={showMoreCity}>
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
              <div className="side-box-">
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
                src={`https://www.seedwill.co/assets/img/our-product/${cityData[0]?.cityName}.png`}
                alt="bannger"
                className="img_banner"
              />
              <h1 className="first-txt">
                Property in{" "}
                {cityData[0]?.cityName.charAt(0).toUpperCase() +
                  cityData[0]?.cityName.slice(1)}{" "}
                for Sale
              </h1>
            </div>

            <div className="card-list">
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Grid className="listing-grid">
                  {cityData?.slice(0, visibleCities)?.map((item, index) => {
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
                                <SwiperSlide>
                                  <img
                                    height="250"
                                    src="https://bit.ly/2Z4KKcF"
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
                                <SwiperSlide>
                                  <img
                                    height="250"
                                    src="https://bit.ly/2Z4KKcF"
                                    alt="green iguana"
                                    style={{ width: "inherit" }}
                                  />
                                </SwiperSlide>
                              </Swiper>
                              <Link
                                to={`/property-in-${item.cityName}/${item.proName
                                  .toLowerCase()
                                  .replaceAll(/\s/g, "-")}-${item.id}`}
                                className="linkclass"
                              >
                                <CardContent
                                  key={index}
                                  value={item.id}
                                  onClick={() =>
                                    dispatch(fetchProduct(item.id))
                                  }
                                >
                                  <div
                                    style={{
                                      display: "flex",
                                      justifyContent: "space-between",
                                      width: "95%",
                                    }}
                                  >
                                    <Typography
                                      gutterBottom
                                      variant="h6"
                                      component="div"
                                    >
                                      {item.proName}
                                    </Typography>
                                    <img
                                      src={whatsapp}
                                      alt="whatsapp logo"
                                      onClick={handlewhatsappicon}
                                    />
                                  </div>

                                  <Typography variant="body2">
                                    {item.propertyType}
                                  </Typography>

                                  <Typography
                                    variant="body2"
                                    style={{
                                      display: "flex",
                                      gap: "5px",
                                      marginTop: "5px",
                                    }}
                                  >
                                    <MdLocationPin size="20px" color="red" />{" "}
                                    {item.proLocation}
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

                                  <p
                                    style={{
                                      fontSize: "14px",
                                      color: "#666",
                                      fontFamily: "Mercury-italic",
                                    }}
                                  >
                                    Start Area {item.startSize} SqFt - End Area{" "}
                                    {item.endSize} SqFt
                                  </p>
                                </CardContent>
                              </Link>
                            </CardContent>
                          </Card>
                        </GridItem>
                      </div>
                    );
                  })}
                </Grid>
                <span onClick={showMoreCity}>
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
    // <><h1>hey hay</h1></>
  );
  // }
};
export default City;
