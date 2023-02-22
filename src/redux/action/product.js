import {
  getProduct,
  getProductSuccess,
  getProductFailure,
} from "../reducer/product";
import axios from "axios";

export const fetchProduct = (id) => {
  //https://nodeapi.seedwill.co/api/v1/projectDetails?id=1226
  // console.log(id)
  const request = axios.get(`projectDetails?id=${id}`);
  return (dispatch) => {
    dispatch(getProduct());
    request
      .then((response) => {
        dispatch(getProductSuccess(response));
      })

      .catch((error) => dispatch(getProductFailure(error)));
  };
};
