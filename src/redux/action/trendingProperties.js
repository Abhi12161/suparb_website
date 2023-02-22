import {
  gettrendingProperties,
  gettrendingPropertiesSuccess,
  gettrendingPropertiesFailure,
} from "../reducer/trendingProperties";

import axios from "axios";

export const fetchTrendingProperties = () => {
  return (dispatch) => {
    dispatch(gettrendingProperties());
    axios
      .get("/trendingProperty")
      .then((response) => dispatch(gettrendingPropertiesSuccess(response.data)))
      .catch((error) => dispatch(gettrendingPropertiesFailure(error)));
  };
};
