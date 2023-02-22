import {
  getnearByProperty,
  getnearByPropertySuccess,
  getnearByPropertyFailure,
} from "../reducer/nearByProperty";

import axios from "axios";

export const fetchNearByProperty = () => {
  return (dispatch) => {
    dispatch(getnearByProperty());
    axios
      .get("/nearbyProperty")
      .then((response) => dispatch(getnearByPropertySuccess(response.data)))
      .catch((error) => dispatch(getnearByPropertyFailure(error)));
  };
};
