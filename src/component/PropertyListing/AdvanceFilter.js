import { IconButton } from "@mui/material";
import Collapse from "@mui/material/Collapse";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import "./style.scss";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginTop: "-12px",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const AdvanceFilter = () => {
  const [expandedBudget, setExpandedBudget] = useState(true);
  const [expandedPropertyType, setExpandedPropertyType] = useState(true);
  const [expandedBhkType, setExpandedBhkType] = useState(true);
  const [expandedLocality, setExpandedLocality] = useState(true);
  const [expandedSaleType, setExpandedSaleType] = useState(true);
  const [expandedConstructionStatus, setExpandedConstructionStatus] =
    useState(true);
  const [expandedBathrooms, setExpandedBathrooms] = useState(true);
  const [expandedArea, setExpandedArea] = useState(true);
  const [expandedAmenities, setExpandedAmenities] = useState(true);
  const [expandedAge, setExpandedAge] = useState(true);
  const [expandedFacing, setExpandedFacing] = useState(true);
  const [expandedDetail, setExpandedDetail] = useState(true);
  const [expandedRera, setExpandedRera] = useState(true);
  const [active, setActive] = useState("");

  const handleClick = (event) => {
    setActive(event.target.id);
  };

  const handleExpandBudget = () => {
    setExpandedBudget(!expandedBudget);
  };
  const handleExpandPropertyType = () => {
    setExpandedPropertyType(!expandedPropertyType);
  };
  const handleExpandBhkType = () => {
    setExpandedBhkType(!expandedBhkType);
  };
  const handleExpandLocality = () => {
    setExpandedLocality(!expandedLocality);
  };
  const handleExpandSaleType = () => {
    setExpandedSaleType(!expandedSaleType);
  };
  const handleExpandConstructionStatus = () => {
    setExpandedConstructionStatus(!expandedConstructionStatus);
  };
  const handleExpandBathrooms = () => {
    setExpandedBathrooms(!expandedBathrooms);
  };
  const handleExpandArea = () => {
    setExpandedArea(!expandedArea);
  };
  const handleExpandAmenities = () => {
    setExpandedAmenities(!expandedAmenities);
  };
  const handleExpandAge = () => {
    setExpandedAge(!expandedAge);
  };
  const handleExpandFacing = () => {
    setExpandedFacing(!expandedFacing);
  };
  const handleExpandDetail = () => {
    setExpandedDetail(!expandedDetail);
  };
  const handleExpandRera = () => {
    setExpandedRera(!expandedRera);
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

  let minArea = 0;
  let maxArea = 5000;

  const [rangeArea, setRangeArea] = useState([minArea, maxArea]);

  const handleRangeArea = (event, rangeArea) => {
    setRangeArea(rangeArea);
  };

  const customMarksArea = [
    {
      value: 0,
      label: "0",
    },
    {
      value: 1000,
      label: "1000",
    },
    {
      value: 2000,
      label: "2000",
    },
    {
      value: 3000,
      label: "3000",
    },
    {
      value: 4000,
      label: "4000",
    },
    {
      value: 5000,
      label: "5000+",
    },
  ];

  return (
    <>
      <div className="filter-container">
        <div className="filter-text-heading">
          <p className="header-text">Filter</p>
          <p className="clear-all">Clear All</p>
        </div>

        <div className="filter-type-box">
          <div className="filter-text-heading">Budget</div>
          <ExpandMore
            expand={expandedBudget}
            onClick={handleExpandBudget}
            aria-expanded={expandedBudget}
          >
            <MdKeyboardArrowDown className="expandmore-button" />
          </ExpandMore>
        </div>
        <div>
          <Collapse in={expandedBudget}>
            <div style={{ padding: "0px 10px 0px 10px" }}>
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
            <div className="filter-type-box">
              <input placeholder="Min: ₹" className="filter-budget-textbox" />
              <input placeholder="Min: ₹" className="filter-budget-textbox" />
            </div>
          </Collapse>
        </div>

        <div className="filter-type-box">
          <div className="filter-text-heading">Property Type</div>
          <ExpandMore
            expand={expandedPropertyType}
            aria-expanded={expandedPropertyType}
            onClick={handleExpandPropertyType}
          >
            <MdKeyboardArrowDown className="expandmore-button" />
          </ExpandMore>
        </div>
        <Collapse in={expandedPropertyType}>
          <div>
            <button
              key={1}
              id={"1"}
              className={active === "1" ? "active" : "not-active"}
              onClick={handleClick}
            >
              Commercial
            </button>
            <button
              key={2}
              id={"2"}
              className={active === "2" ? "active" : "not-active"}
              onClick={handleClick}
            >
              Residential
            </button>
            <button
              key={3}
              id={"3"}
              className={active === "3" ? "active" : "not-active"}
              onClick={handleClick}
            >
              Plots
            </button>
            <button
              key={4}
              id={"4"}
              className={active === "4" ? "active" : "not-active"}
              onClick={handleClick}
            >
              Apartment
            </button>
            <button
              key={5}
              id={"5"}
              className={active === "5" ? "active" : "not-active"}
              onClick={handleClick}
            >
              Independent House
            </button>
            <button
              key={6}
              id={"6"}
              className={active === "6" ? "active" : "not-active"}
              onClick={handleClick}
            >
              Studio
            </button>
            <button
              key={7}
              id={"7"}
              className={active === "7" ? "active" : "not-active"}
              onClick={handleClick}
            >
              Plots
            </button>
            <button
              key={8}
              id={"8"}
              className={active === "8" ? "active" : "not-active"}
              onClick={handleClick}
            >
              Agricultural Land
            </button>
            <button
              key={9}
              id={"9"}
              className={active === "9" ? "active" : "not-active"}
              onClick={handleClick}
            >
              Villa
            </button>
            <button
              key={10}
              id={"10"}
              className={active === "10" ? "active" : "not-active"}
              onClick={handleClick}
            >
              Duplex
            </button>
          </div>
        </Collapse>

        <div className="filter-type-box" marginTop={"20px"}>
          <div className="filter-text-heading">Bhk Type</div>
          <ExpandMore
            expand={expandedBhkType}
            aria-expanded={expandedBhkType}
            onClick={handleExpandBhkType}
          >
            <MdKeyboardArrowDown className="expandmore-button" />
          </ExpandMore>
        </div>
        <Collapse in={expandedBhkType}>
          <div>
            <button
              key={1}
              id={"1"}
              className={active === "1" ? "active" : "not-active"}
              onClick={handleClick}
            >
              1RK/ 1BHK
            </button>
            <button
              key={2}
              id={"2"}
              className={active === "2" ? "active" : "not-active"}
              onClick={handleClick}
            >
              2 BHK
            </button>
            <button
              key={3}
              id={"3"}
              className={active === "3" ? "active" : "not-active"}
              onClick={handleClick}
            >
              3 BHK
            </button>
            <button
              key={4}
              id={"4"}
              className={active === "4" ? "active" : "not-active"}
              onClick={handleClick}
            >
              4 BHK
            </button>
            <button
              key={5}
              id={"5"}
              className={active === "5" ? "active" : "not-active"}
              onClick={handleClick}
            >
              6 BHK
            </button>
            <button
              key={6}
              id={"6"}
              className={active === "6" ? "active" : "not-active"}
              onClick={handleClick}
            >
              7 BHK
            </button>
            <button
              key={7}
              id={"7"}
              className={active === "7" ? "active" : "not-active"}
              onClick={handleClick}
            >
              8 BHK
            </button>
            <button
              key={8}
              id={"8"}
              className={active === "8" ? "active" : "not-active"}
              onClick={handleClick}
            >
              9 BHK
            </button>
            <button
              key={9}
              id={"9"}
              className={active === "9" ? "active" : "not-active"}
              onClick={handleClick}
            >
              10 BHK
            </button>
          </div>
        </Collapse>

        <div className="filter-type-box" marginTop={"20px"}>
          <div className="filter-text-heading">Locality</div>
          <ExpandMore
            expand={expandedLocality}
            aria-expanded={expandedLocality}
            onClick={handleExpandLocality}
          >
            <MdKeyboardArrowDown className="expandmore-button" />
          </ExpandMore>
        </div>
        <Collapse in={expandedLocality}>
          <div>Locality</div>
        </Collapse>

        <div className="filter-type-box" marginTop={"20px"}>
          <div className="filter-text-heading">Sale Type</div>{" "}
          <ExpandMore
            expand={expandedSaleType}
            aria-expanded={expandedSaleType}
            onClick={handleExpandSaleType}
          >
            <MdKeyboardArrowDown className="expandmore-button" />
          </ExpandMore>{" "}
        </div>
        <Collapse in={expandedSaleType}>
          <div>
            <button
              key={1}
              id={"1"}
              className={active === "1" ? "active" : "not-active"}
              onClick={handleClick}
            >
              New Projects
            </button>
            <button
              key={2}
              id={"2"}
              className={active === "2" ? "active" : "not-active"}
              onClick={handleClick}
            >
              Resale Properties
            </button>
          </div>
        </Collapse>

        <div className="filter-type-box" marginTop={"20px"}>
          <div className="filter-text-heading">Construction Status</div>
          <ExpandMore
            expand={expandedConstructionStatus}
            aria-expanded={expandedConstructionStatus}
            onClick={handleExpandConstructionStatus}
          >
            <MdKeyboardArrowDown className="expandmore-button" />
          </ExpandMore>
        </div>
        <Collapse in={expandedConstructionStatus} timeout="auto" unmountOnExit>
          <div>
            <button
              key={1}
              id={"1"}
              className={active === "1" ? "active" : "not-active"}
              onClick={handleClick}
            >
              Under Construction
            </button>
            <button
              key={2}
              id={"2"}
              className={active === "2" ? "active" : "not-active"}
              onClick={handleClick}
            >
              Ready to Move
            </button>
            <button
              key={3}
              id={"3"}
              className={active === "3" ? "active" : "not-active"}
              onClick={handleClick}
            >
              In 1 Year
            </button>
            <button
              key={4}
              id={"4"}
              className={active === "4" ? "active" : "not-active"}
              onClick={handleClick}
            >
              In 1 Year
            </button>
            <button
              key={5}
              id={"5"}
              className={active === "5" ? "active" : "not-active"}
              onClick={handleClick}
            >
              Beyond 3 Years
            </button>
          </div>
        </Collapse>

        <p className="header-text">Features</p>

        <div className="filter-type-box" marginTop={"20px"}>
          <div className="filter-text-heading">Bathrooms</div>
          <ExpandMore
            expand={expandedBathrooms}
            aria-expanded={expandedBathrooms}
            onClick={handleExpandBathrooms}
          >
            <MdKeyboardArrowDown className="expandmore-button" />
          </ExpandMore>
        </div>
        <Collapse in={expandedBathrooms}>
          <div>
            <button
              key={1}
              id={"1"}
              className={active === "1" ? "active" : "not-active"}
              onClick={handleClick}
            >
              1+
            </button>
            <button
              key={2}
              id={"2"}
              className={active === "2" ? "active" : "not-active"}
              onClick={handleClick}
            >
              2+
            </button>
            <button
              key={3}
              id={"3"}
              className={active === "3" ? "active" : "not-active"}
              onClick={handleClick}
            >
              3+
            </button>
            <button
              key={4}
              id={"4"}
              className={active === "4" ? "active" : "not-active"}
              onClick={handleClick}
            >
              4+
            </button>
            <button
              key={5}
              id={"5"}
              className={active === "5" ? "active" : "not-active"}
              onClick={handleClick}
            >
              5+
            </button>
          </div>
        </Collapse>

        <div className="filter-type-box" marginTop={"20px"}>
          <div className="filter-text-heading">Build Up Area (Sq. Ft.)</div>
          <ExpandMore
            expand={expandedArea}
            aria-expanded={expandedArea}
            onClick={handleExpandArea}
          >
            <MdKeyboardArrowDown className="expandmore-button" />
          </ExpandMore>
        </div>
        <div padding={"10px"}>
          <Collapse in={expandedArea}>
            <div style={{ padding: "0px 15px 0px 10px" }}>
              <Slider
                valueLabelDisplay="auto"
                step={100}
                marks={customMarksArea}
                min={0}
                max={5000}
                value={rangeArea}
                onChange={handleRangeArea}
              />
            </div>
          </Collapse>
        </div>

        <div className="filter-type-box" marginTop={"20px"}>
          <div className="filter-text-heading">Amenities</div>
          <ExpandMore
            expand={expandedAmenities}
            aria-expanded={expandedAmenities}
            onClick={handleExpandAmenities}
          >
            <MdKeyboardArrowDown className="expandmore-button" />
          </ExpandMore>
        </div>
        <Collapse in={expandedAmenities}>
          <div>
            <button
              key={1}
              id={"1"}
              className={active === "1" ? "active" : "not-active"}
              onClick={handleClick}
            >
              Gated Community
            </button>
            <button
              key={1}
              id={"1"}
              className={active === "1" ? "active" : "not-active"}
              onClick={handleClick}
            >
              Lift
            </button>
            <button
              key={1}
              id={"1"}
              className={active === "1" ? "active" : "not-active"}
              onClick={handleClick}
            >
              Swimming Pool
            </button>
            <button
              key={1}
              id={"1"}
              className={active === "1" ? "active" : "not-active"}
              onClick={handleClick}
            >
              Gym
            </button>
            <button
              key={1}
              id={"1"}
              className={active === "1" ? "active" : "not-active"}
              onClick={handleClick}
            >
              Parking
            </button>
            <button
              key={1}
              id={"1"}
              className={active === "1" ? "active" : "not-active"}
              onClick={handleClick}
            >
              Gas Pipeline
            </button>
          </div>
        </Collapse>

        <div className="filter-type-box" marginTop={"20px"}>
          <div className="filter-text-heading">Age Of Property</div>
          <ExpandMore
            expand={expandedAge}
            aria-expanded={expandedAge}
            onClick={handleExpandAge}
          >
            <MdKeyboardArrowDown className="expandmore-button" />
          </ExpandMore>
        </div>
        <Collapse in={expandedAge}>
          <div>
            <button
              key={1}
              id={"1"}
              className={active === "1" ? "active" : "not-active"}
              onClick={handleClick}
            >
              Less than 1 Year
            </button>
            <button
              key={1}
              id={"1"}
              className={active === "1" ? "active" : "not-active"}
              onClick={handleClick}
            >
              Less than 3 Year
            </button>
            <button
              key={1}
              id={"1"}
              className={active === "1" ? "active" : "not-active"}
              onClick={handleClick}
            >
              Less than 5 Year
            </button>
            <button
              key={1}
              id={"1"}
              className={active === "1" ? "active" : "not-active"}
              onClick={handleClick}
            >
              Less than 10 Year
            </button>
            <button
              key={1}
              id={"1"}
              className={active === "1" ? "active" : "not-active"}
              onClick={handleClick}
            >
              More than 10 Year
            </button>
            <button
              key={1}
              id={"1"}
              className={active === "1" ? "active" : "not-active"}
              onClick={handleClick}
            >
              Less than 1 Year
            </button>
          </div>
        </Collapse>

        <div className="filter-type-box" marginTop={"20px"}>
          <div className="filter-text-heading">Facing (Direction)</div>
          <ExpandMore
            expand={expandedFacing}
            aria-expanded={expandedFacing}
            onClick={handleExpandFacing}
          >
            <MdKeyboardArrowDown className="expandmore-button" />
          </ExpandMore>
        </div>
        <Collapse in={expandedFacing}>
          <div>
            <button
              key={1}
              id={"1"}
              className={active === "1" ? "active" : "not-active"}
              onClick={handleClick}
            >
              North Facing
            </button>
            <button
              key={1}
              id={"1"}
              className={active === "1" ? "active" : "not-active"}
              onClick={handleClick}
            >
              East Facing
            </button>
            <button
              key={1}
              id={"1"}
              className={active === "1" ? "active" : "not-active"}
              onClick={handleClick}
            >
              West Facing
            </button>
            <button
              key={1}
              id={"1"}
              className={active === "1" ? "active" : "not-active"}
              onClick={handleClick}
            >
              South Facing
            </button>
            <button
              key={1}
              id={"1"}
              className={active === "1" ? "active" : "not-active"}
              onClick={handleClick}
            >
              North-East Facing
            </button>
            <button
              key={1}
              id={"1"}
              className={active === "1" ? "active" : "not-active"}
              onClick={handleClick}
            >
              North-West Facing
            </button>
            <button
              key={1}
              id={"1"}
              className={active === "1" ? "active" : "not-active"}
              onClick={handleClick}
            >
              South-East Facing
            </button>
            <button
              key={1}
              id={"1"}
              className={active === "1" ? "active" : "not-active"}
              onClick={handleClick}
            >
              South-East Facing
            </button>
          </div>
        </Collapse>

        <div className="filter-type-box" marginTop={"20px"}>
          <div className="filter-text-heading">Property Detail</div>
          <ExpandMore
            expand={expandedDetail}
            aria-expanded={expandedDetail}
            onClick={handleExpandDetail}
          >
            <MdKeyboardArrowDown className="expandmore-button" />
          </ExpandMore>
        </div>
        <Collapse in={expandedDetail}>
          <div>
            <button
              key={1}
              id={"1"}
              className={active === "1" ? "active" : "not-active"}
              onClick={handleClick}
            >
              Corner Property
            </button>
            <button
              key={1}
              id={"1"}
              className={active === "1" ? "active" : "not-active"}
              onClick={handleClick}
            >
              Boundary Wall Present
            </button>
          </div>
        </Collapse>

        <div className="filter-type-box" style={{ marginTop: "20px" }}>
          <div className="filter-text-heading">Rera Approved</div>
          <ExpandMore
            expand={expandedRera}
            aria-expanded={expandedRera}
            onClick={handleExpandRera}
          >
            <MdKeyboardArrowDown className="expandmore-button" />
          </ExpandMore>
        </div>
        <Collapse in={expandedRera}>
          <div>
            <button
              key={1}
              id={"1"}
              className={active === "1" ? "active" : "not-active"}
              onClick={handleClick}
            >
              RERA Approved Properties
            </button>
            <button
              key={1}
              id={"1"}
              className={active === "1" ? "active" : "not-active"}
              onClick={handleClick}
            >
              RERA Registered Dealers
            </button>
          </div>
        </Collapse>
      </div>
    </>
  );
};

export default AdvanceFilter;
