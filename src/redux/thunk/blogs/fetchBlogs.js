// import { loadProduct } from "../../actions/productAction";
import React from "react";
import { getContent } from "../../blogs/actions";

const fetchBlogs = () => {
  return async (dispatch, getState) => {
    const res = await fetch("http://localhost:5000/products");
    const data = await res.json();

    if (data?.data.length) {
        console.log(data?.data);
      dispatch(getContent(data?.data));
    }
  };
};

export default fetchBlogs;
