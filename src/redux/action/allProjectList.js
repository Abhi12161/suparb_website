import {
  getallProjectList,
  getallProjectListSuccess,
  getallProjectListFailure,
} from "../reducer/allProjectList";
import axios from "axios";

export const fetchAllProjectList = (
  cityid,
  propertytype,
  devid,
  trending,
  size
) => {
  // console.log(`cityid`, cityid);
  // console.log(`devid`, devid);
  let city = cityid ? cityid : "";
  let propertyType = propertytype ? propertytype : "";
  let dev = devid ? devid : "";
  let min = "";
  let max = "";
  let start = "";
  let end = "";
  let location = "";
  let bhk = "";
  let amenties = "";
  let trendingProperty = trending ? trending : "";
  let pageIncrease = size ? size : 0;
  return (dispatch) => {
    dispatch(getallProjectList());
    axios
      .get(
        `getFilterProjects?city=${city}&type=${propertyType}&dev=${dev}&price_min=${min}&price_max=${max}&start_size=${start}&end_size=${end}&location=${location}&bhk=${bhk}&amenities=${amenties}&trending=${trendingProperty}&limit=10&offset=${pageIncrease}`
      )
      .then((response) => {
        dispatch(getallProjectListSuccess(response.data));
      })
      .catch((error) => dispatch(getallProjectListFailure(error)));
  };
};
