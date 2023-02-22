import {
  getpropertyType,
  getpropertyTypeSuccess,
  getpropertyTypeFailure,
} from "../reducer/propertyType";

import axios from "axios";

export const fetchPropertyType = () => {
  return (dispatch) => {
    dispatch(getpropertyType());
    axios
      .get("/propertyType")
      .then((response) => dispatch(getpropertyTypeSuccess(response.data)))
      .catch((error) => dispatch(getpropertyTypeFailure(error)));
  };
};
