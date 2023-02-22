import {
    getDeveloperList, getDeveloperListSuccess, getDeveloperListFailure 
  } from "../reducer/developerListing";
  import axios from "axios";
  
  // export const fetchDeveloperList = () => {
  //   // const request = axios.get(`http://3.108.0.174:8080/api/project-listing-summaries/developers/pune`);
  //   const request = axios.get(`/developers`);
  //   return (dispatch) => {
  //     dispatch(getDeveloperList());
  //     request
  //       .then((response) => {
  //         dispatch(getDeveloperListSuccess(response));
  //       })
  //       .catch((error) => dispatch(getDeveloperListFailure(error)));
  //   };
  // };
  

  export const fetchDeveloperList = (developer) => {
    const request = axios.get(`/project-listing-summaries/projects/${developer}`);
    // const request = axios.get(`/project-listing-summaries/projects/Godrej Properties`);

    return (dispatch) => {
      dispatch(getDeveloperList());
      request
        .then((response) => {
          dispatch(getDeveloperListSuccess(response));
        })
        .catch((error) => dispatch(getDeveloperListFailure(error)));
    };
  };
  