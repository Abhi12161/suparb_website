import {
    getpropertyServices,
    getpropertyServicesSuccess,
    getpropertyServicesFailure,
  } from "../reducer/propertyServices";
  
  import axios from "axios";
  
  export const fetchPropertyServices = () => {
    return (dispatch) => {
      dispatch(getpropertyServices());
      axios
        .get("/propertyServices")
        .then((response) => dispatch(getpropertyServicesSuccess(response.data)))
        .catch((error) => dispatch(getpropertyServicesFailure(error)));
    };
  };
  