import {
  getCityData,
  getCityDataSuccess,
  getCityDataFailure,
} from "../reducer/cityData";
import axios from "axios";

export const fetchCityData = (cityName) => {
  const request = axios.get(`/property-in-${cityName}`);
  return (dispatch) => {
    dispatch(getCityData());
    request
      .then((response) => {
        dispatch(getCityDataSuccess(response));
      })
      .catch((error) => dispatch(getCityDataFailure(error)));
  };
};
