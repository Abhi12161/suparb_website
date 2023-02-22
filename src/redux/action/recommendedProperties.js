import {
    getrecommendedProperties,
    getrecommendedPropertiesSuccess,
    getrecommendedPropertiesFailure,
  } from "../reducer/recommendedProperties";
  
  import axios from "axios";
  
  export const fetchRecommendedProperties = () => {
    return (dispatch) => {
      dispatch(getrecommendedProperties());
      axios
        .get("/recommendedProperty")
        .then((response) => dispatch(getrecommendedPropertiesSuccess(response.data)))
        .catch((error) => dispatch(getrecommendedPropertiesFailure(error)));
    };
  };
  