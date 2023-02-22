import {
    getpopularBuilders,
    getpopularBuildersSuccess,
    getpopularBuildersFailure,
  } from "../reducer/popularBuilders";
  
  import axios from "axios";
  
  export const fetchPopularBuilders = () => {
    return (dispatch) => {
      dispatch(getpopularBuilders());
      axios
        .get("/popularBuilder")
        .then((response) => dispatch(getpopularBuildersSuccess(response.data)))
        .catch((error) => dispatch(getpopularBuildersFailure(error)));
    };
  };
  