import {
  getSummary,
  getSummarySuccess,
  getSummaryFailure,
} from "../reducer/summary";

import axios from "axios";

export const fetchSummary = (cityId, searchKey) => {
  let city = cityId ? cityId : "";
  let search = searchKey ? searchKey : "";

  console.log(`cityIDinSummaryID`, city);
  return (dispatch) => {
    dispatch(getSummary());
    axios
      // .get(`getResults?city=${city}&keyword=${search}`)
      .get(`getResults?city=${city}&keyword=godrej`)
      .then((response) =>
        dispatch(getSummarySuccess(console.log(response?.data?.data)))
      )

      .catch((error) => dispatch(getSummaryFailure(error)));
  };
};
