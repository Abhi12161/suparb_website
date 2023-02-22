import {
  getBlogContent,
  getBlogContentSuccess,
  getBlogContentFailure,
} from "../reducer/blogContent";
import axios from "axios";

export const fetchBlogContent = (id) => {
  // console.log(`id`, id);
  const request = axios.get(`/blogDetails?id=${id}`);
  return (dispatch) => {
    dispatch(getBlogContent());
    request
      .then((response) => {
        dispatch(getBlogContentSuccess(response.data));
      })
      .catch((error) => dispatch(getBlogContentFailure(error)));
  };
};
