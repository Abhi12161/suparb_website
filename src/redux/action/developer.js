import {
    getDeveloper,
    getDeveloperSuccess,
    getDeveloperFailure,
  } from "../reducer/developer";
  import axios from "axios";
  
  export const fetchDeveloper = () => {  
    const request = axios.get(
      `/popularBuilder`
    );
    return (dispatch) => {
      dispatch(getDeveloper());
      request
        .then((response) => {
          dispatch(getDeveloperSuccess(response.data))
        })
        .catch((error) => dispatch(getDeveloperFailure(error)));
    };
  };
  