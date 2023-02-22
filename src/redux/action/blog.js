import {
    getBlog,
    getBlogSuccess,
    getBlogFailure,
  } from "../reducer/blog";
  import axios from "axios";
  
  export const fetchBlog = () => {  
    return (dispatch) => {
      dispatch(getBlog());
      axios
        .get(`/blogList?limit=5&offset=0`)
        .then((response) => {
          dispatch(getBlogSuccess(response.data))
        })
        .catch((error) => dispatch(getBlogFailure(error)));
    };
  };
