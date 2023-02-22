import {  getrecentBlogs,
  getrecentBlogsSuccess,
  getrecentBlogsFailure,} from '../reducer/recentBlogs'

import axios from 'axios'

export const fetchRecentBlogs = () => {
  return (dispatch) => {
    dispatch(getrecentBlogs())
    axios
      .get('https://nodeapi.seedwill.co/api/v1/recentBlogs?limit=4')
      .then((response) => dispatch(getrecentBlogsSuccess(response.data)))
      .catch((error) => dispatch(getrecentBlogsFailure(error)))
  }
}
