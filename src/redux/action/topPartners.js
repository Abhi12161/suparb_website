import {
  gettopPartners,
  gettopPartnersSuccess,
  gettopPartnersFailure,
} from "../reducer/topPartners";

import axios from "axios";

export const fetchTopPartners = () => {
  return (dispatch) => {
    dispatch(gettopPartners());
    axios
      .get("/topPartners")
      .then((response) => dispatch(gettopPartnersSuccess(response.data)))
      .catch((error) => dispatch(gettopPartnersFailure(error)));
  };
};
