import React, { useEffect, useState } from "react";
import { Divider, Grid } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import Slider from "@mui/material/Slider";
import TextField from "@mui/material/TextField";
import { BsCheckLg } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { fetchCityData } from "../../redux/action/cityData";
import { fetchProduct } from "../../redux/action/product";
import { cityDataSelector } from "../../redux/reducer/cityData";
import { citySelector } from "../../redux/reducer/cityName";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import filter from "../../asset/images/filter.svg";
import backgroundimg from "../../asset/images/bckground.png";
import { fetchCity } from "../../redux/action/cityName";
import "./style.scss";
import { fetchSummary } from "../../redux/action/summary";

const HomepageSearch = () => {
  const [active, setActive] = useState("");
  const handleClick = (event) => {
    setActive(event.target.id);
  };

  const dispatch = useDispatch();
  const { cityName } = useSelector(citySelector);
  const { cityData } = useSelector(cityDataSelector);

  const [search, setSearchInput] = useState("");

  const handleInput = (e) => {
    setSearchInput(e.target.value);
  };

  const [showUl, setShowul] = useState(false);
  const handleShowUl = () => {
    setShowul(!showUl);
  };

  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [status, setStatus] = useState(null);
  const [city, setCity] = useState();

  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus("Geolocation NOT suppoted");
    } else {
      setStatus("Locating...");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setStatus(null);
          setLat(position.coords.latitude);
          setLng(position.coords.longitude);
        },
        () => {
          setStatus("Unable to get location.");
        }
      );
    }
  };

  let geoUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`;

  fetch(geoUrl)
    .then((response) => response.json())
    .then((data) => setCity(data?.city));

  useEffect(() => {
    dispatch(fetchCity());
    getLocation();
  }, []);

  const uniqueObjects = [
    ...new Map(cityName.map((item) => [item, item?.id])).values(),
  ];

  let newCity = uniqueObjects.map((item) => {
    return item.id;
  });
  // const fromIndex = newCity.indexOf(city);
  // const toIndex = 0;

  // const element = newCity.splice(fromIndex, 1)[0];

  // newCity.splice(toIndex, 0, element);

  useEffect(() => {
    dispatch(fetchSummary(newCity[0]));
  }, [newCity[0]]);
  const [valueOne, setValueOne] = useState(0);
  const handleChange = (event, newValue) => {
    setValueOne(newValue);
  };
  const [visibleFilter, setVisibleFilter] = useState(false);
  const [visibleBudget, setVisibleBudget] = useState(false);
  const [value, setValue] = useState("1");

  const handleChangeTabs = (event, newTabValue) => {
    setValue(newTabValue);
  };

  let min = 3000000;
  let max = 40000000;

  const [range, setRange] = useState([min, max]);

  const handleRange = (event, range) => {
    setRange(range);
  };

  const customMarks = [
    {
      value: 3000000,
      label: "₹30L",
    },
    {
      value: 10000000,
      label: "₹1CR",
    },
    {
      value: 20000000,
      label: "₹2CR",
    },
    {
      value: 30000000,
      label: "₹3CR",
    },
    {
      value: 40000000,
      label: "₹4CR",
    },
  ];

  return (
    <>
      {/* <section className="homePageSearch">
        <div className="homePageContainer">
          <div className="grid">
            <div className="homePageSearchItem grid-item default">
              <div className={`homePageSearchTitle`}>
                <h1 className={`homePageHeading ${active && "active"} `}>
                  Find a home that suits your lifestyle.
                </h1>
              </div>
            </div>
            <div className="homePageSearchItem grid-item default">
              <div className={`homePageSearchTab ${active && "active"}`}>
                <div className="channelTabs channelTabs--light">
                  <div className="entitySearch">
                    <div className="el-input1">
                      {newCity.length > 0 && (
                        <FormControl fullWidth>
                          <InputLabel>Select City</InputLabel>
                          <Select
                            className="city-select-input"
                            label="City Name"
                            // defaultValue={newCity[0]}
                            onChange={(e) =>
                              dispatch(fetchCityData(e.target.value || ""))
                            }
                          >
                            {newCity?.map((item, index) => (
                              <MenuItem
                                value={item}
                                key={index}
                                style={{ textTransform: "capitalize" }}
                              >
                                {item}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      )}
                    </div>
                    <Autocomplete
                      className="el-input"
                      getOptionLabel={(cityData) =>
                        `${cityData.proName} ${cityData.propertyType} ${cityData.proLocation} ${cityData.cityName}`
                      }
                      options={cityData}
                      isOptionEqualToValue={(option, value) =>
                        option.cityName === value.cityName
                      }
                      noOptionsText={"Not Avaiable"}
                      renderOption={(props, cityData) => (
                        <Link
                          to={`/property-in-${
                            cityData.cityName
                          }/${cityData.proName
                            .toLowerCase()
                            .replaceAll(/\s/g, "-")}-${cityData.id}`}
                          className="linkclass"
                        >
                          <div
                            component="li"
                            {...props}
                            key={cityData.id}
                            onClick={() => dispatch(fetchProduct(cityData.id))}
                          >
                            <Grid
                              container
                              xs={12}
                              sm={12}
                              md={12}
                              lg={12}
                              justifyContent="space-between !important"
                              display="inline-flex"
                            >
                              <Grid item xs={7} sm={7} md={7} lg={7}>
                                <span className="product-name-text">
                                  {cityData.proName}
                                </span>
                              </Grid>
                              <Divider
                                orientation="vertical"
                                // variant="middle"
                                flexItem
                              />
                              <Grid item xs={3} sm={3} md={3} lg={3}>
                                <span className="product-location-text">
                                  {cityData.proLocation}
                                </span>
                              </Grid>
                              <Grid item xs={2} sm={2} md={2} lg={2}>
                                <span className="product-type-text">
                                  {cityData.propertyType}
                                </span>
                              </Grid>
                            </Grid>
                          </div>
                        </Link>
                      )}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Country, City, Address, Postal Code or ID"
                        />
                      )}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <div style={{ marginBottom: "195px" }}>
        <img src={backgroundimg} alt="bcklogo" className="bck-logo" />

        <div>
          <h1 className="h1-para">Your Dream | Our Passion</h1>
        </div>

        <div className="homepage-searchbar-container">
          <div className="container_form">
            <Tabs
              value={valueOne}
              onChange={handleChange}
              TabIndicatorProps={{
                style: { backgroundColor: "#d1913c" },
              }}
              style={{ width: "100%", marginLeft: "2%" }}
            >
              <Tab label="Buy" className="tabs-button" />
              <Tab label="Plot" className="tabs-button" />
              <Tab label="COMMERICAL" className="tabs-button" />
              <Tab label="Post Free Property Ad" className="tabs-button" />
            </Tabs>

            <div className="dropdown">
              <select
                className="dropdown-content"
                onChange={(e) => dispatch(fetchSummary(e.target.value || ""))}
              >
                {cityName?.map((item, index) => (
                  <option
                    value={item.id}
                    key={index}
                    style={{ textTransform: "capitalize" }}
                  >
                    {item?.cityName}
                  </option>
                ))}
              </select>

              {/* <input
                    placeholder="Search for locality, landmark, project, or builder"
                    className="home_input"
                  /> */}
              <div>
                <Divider
                  className="search-divider"
                  orientation="vertical"
                  variant="middle"
                  flexItem
                />
              </div>

              <Autocomplete
                className="home_input"
                freeSolo
                getOptionLabel={(cityData) =>
                  `${cityData.proName} ${cityData.propertyType} ${cityData.proLocation} ${cityData.cityName}`
                }
                options={cityData}
                isOptionEqualToValue={(option, value) =>
                  option.cityName === value.cityName
                }
                noOptionsText={"Not Avaiable"}
                renderOption={(props, cityData) => (
                  <Link
                    to={`/property-in-${cityData.cityName}/${cityData.proName
                      .toLowerCase()
                      .replaceAll(/\s/g, "-")}-${cityData.id}`}
                    className="linkclass"
                  >
                    <div
                      {...props}
                      key={cityData.id}
                      onClick={() => dispatch(fetchProduct(cityData.id))}
                    >
                      <Grid
                        container
                        xs={12}
                        sm={12}
                        md={12}
                        lg={12}
                        justifyContent="space-between !important"
                        display="inline-flex"
                        sx={{ color: "black" }}
                      >
                        <Grid item xs={7} sm={7} md={7} lg={7}>
                          <span className="product-name-text">
                            {cityData.proName}
                          </span>
                        </Grid>
                        {/* <Divider
                            orientation="vertical"
                            // variant="middle"
                            flexItem
                          /> */}
                        <Grid item xs={2} sm={2} md={2} lg={2}>
                          <span className="product-type-text">
                            {cityData.propertyType}
                          </span>
                        </Grid>
                        {/* <Grid item xs={3} sm={3} md={3} lg={3}>
                            <span className="product-location-text">
                              {cityData.proLocation}
                            </span>
                          </Grid> */}
                      </Grid>
                    </div>
                  </Link>
                )}
                renderInput={(params) => (
                  <TextField
                    style={{ marginTop: "1.4%" }}
                    {...params}
                    label="Country, City, Address, Postal Code or ID"
                  />
                )}
              />
              <style>{`.element-visible { display: block } .element-hidden { display: none }`}</style>
              <img
                src={filter}
                alt="filter"
                style={{ cursor: "pointer" }}
                onClick={() => setVisibleFilter(!visibleFilter)}
              />
              <button className="btn1">Search</button>
            </div>
          </div>
        </div>

        {/* Filters dropdown menu Starts*/}
        <div className={visibleFilter ? "element-visible" : "element-hidden"}>
          <div className="search_filter_main search-container ">
            <TabContext value={value}>
              <TabList
                style={{
                  marginTop: "4.5%",
                  marginLeft: "3%",
                }}
                TabIndicatorProps={{
                  style: { display: "none", border: "none" },
                }}
                onChange={handleChangeTabs}
              >
                <Tab
                  label="Budget"
                  value="1"
                  className="filter-btn"
                  icon={<IoIosArrowDown />}
                  iconPosition="end"
                />
                <Tab
                  label="Room"
                  value="2"
                  className="filter-btn"
                  icon={<IoIosArrowDown />}
                  iconPosition="end"
                />
                <Tab
                  label="Property Type"
                  value="3"
                  className="filter-btn"
                  icon={<IoIosArrowDown />}
                  iconPosition="end"
                />
                <Tab
                  label="Construction Status"
                  value="4"
                  className="filter-btn"
                  icon={<IoIosArrowDown />}
                  iconPosition="end"
                />
                <Tab
                  label="Posted By"
                  value="5"
                  className="filter-btn"
                  icon={<IoIosArrowDown />}
                  iconPosition="end"
                />
              </TabList>
              <div style={{ marginBottom: "1.5%" }}>
                <TabPanel value="1">
                  <div style={{ width: "91%", marginLeft: "3.6%" }}>
                    <p className="p_type_text">Select Price Range</p>
                    <div style={{ marginLeft: "1%" }}>
                      <Slider
                        valueLabelDisplay="auto"
                        step={1000000}
                        marks={customMarks}
                        min={3000000}
                        max={40000000}
                        value={range}
                        onChange={handleRange}
                      />
                    </div>
                  </div>
                </TabPanel>
                <TabPanel value="2">
                  <div style={{ width: "90%", marginLeft: "3.6%" }}>
                    <p className="p_type_text">No of Rooms</p>
                    <div>
                      <button
                        key={1}
                        id={"1"}
                        className={active === "1" ? "active" : "not-active"}
                        onClick={handleClick}
                      >
                        <BsCheckLg className="btn-check" />
                        1RK/BHK
                      </button>
                      <button
                        key={2}
                        id={"2"}
                        className={active === "2" ? "active" : "not-active"}
                        onClick={handleClick}
                      >
                        <BsCheckLg className="btn-check" />
                        2BHK
                      </button>
                      <button
                        key={3}
                        id={"3"}
                        className={active === "3" ? "active" : "not-active"}
                        onClick={handleClick}
                      >
                        <BsCheckLg className="btn-check" />
                        3BHK
                      </button>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel value="3">
                  <div style={{ width: "90%", marginLeft: "3.6%" }}>
                    <p className="p_type_text">Property Type</p>
                    <div>
                      <button
                        key={4}
                        id={"4"}
                        className={active === "4" ? "active" : "not-active"}
                        onClick={handleClick}
                      >
                        <BsCheckLg className="btn-check" />
                        Residential
                      </button>
                      <button
                        key={5}
                        id={"5"}
                        className={active === "5" ? "active" : "not-active"}
                        onClick={handleClick}
                      >
                        <BsCheckLg className="btn-check" />
                        Commercial
                      </button>
                      <button
                        key={6}
                        id={"6"}
                        className={active === "6" ? "active" : "not-active"}
                        onClick={handleClick}
                      >
                        <BsCheckLg className="btn-check" />
                        Plots
                      </button>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel value="4">
                  <div style={{ width: "90%", marginLeft: "3.6%" }}>
                    <p className="p_type_text">Construction Status</p>
                    <div>
                      <button
                        key={7}
                        id={"7"}
                        className={active === "7" ? "active" : "not-active"}
                        onClick={handleClick}
                      >
                        <BsCheckLg className="btn-check" />
                        Under Construction
                      </button>
                      <button
                        key={8}
                        id={"8"}
                        className={active === "8" ? "active" : "not-active"}
                        onClick={handleClick}
                      >
                        <BsCheckLg className="btn-check" />
                        Ready To Move
                      </button>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel value="5">
                  <div style={{ width: "90%", marginLeft: "3.6%" }}>
                    <p className="p_type_text">Posted By</p>
                    <div>
                      <button
                        key={9}
                        id={"9"}
                        className={active === "9" ? "active" : "not-active"}
                        onClick={handleClick}
                      >
                        <BsCheckLg className="btn-check" />
                        Owner
                      </button>
                      <button
                        key={10}
                        id={"10"}
                        className={active === "10" ? "active" : "not-active"}
                        onClick={handleClick}
                      >
                        <BsCheckLg className="btn-check" />
                        Builder
                      </button>
                      <button
                        key={11}
                        id={"11"}
                        className={active === "11" ? "active" : "not-active"}
                        onClick={handleClick}
                      >
                        <BsCheckLg className="btn-check" />
                        Dealer
                      </button>
                    </div>
                  </div>
                </TabPanel>
              </div>
            </TabContext>
          </div>
        </div>
        {/* Filters dropdown menu Ends*/}
      </div>
    </>
  );
};

export default HomepageSearch;
