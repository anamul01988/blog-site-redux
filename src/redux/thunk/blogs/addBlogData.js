// import { addProduct } from "../../actions/productAction";
import { addContent } from "../../blogs/actions";

const addBlogData = (product) => {
  return async (dispatch, getState) => {
    const res = await fetch("http://localhost:5000/product", {
      method: "POST",
      body: JSON.stringify(product),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await res.json();

    if (data.acknowledged) {
      dispatch(
        addContent({
          _id: data.insertedId,
          ...product,
        })
      );
    }
  };
};

export default addBlogData;
