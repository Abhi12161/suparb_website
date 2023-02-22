import {
    getCity,
    getCitySuccess,
    getCityFailure,
  } from "../reducer/cityName";
  import axios from "axios";
  
  export const fetchCity = () => {  
    const request = axios.get(
      `/cityList`
    );
    return (dispatch) => {
      dispatch(getCity());
      request
        .then((response) => {
          dispatch(getCitySuccess(response.data))
        })
        .catch((error) => dispatch(getCityFailure(error)));
    };
  };
  