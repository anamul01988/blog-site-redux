// import { removeProduct } from "../../actions/productAction";
import { deleteContent } from "../../blogs/actions";

const deleteBlog = (id) => {
  return async (dispatch, getState) => {
    const res = await fetch(`http://localhost:5000/product/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await res.json();

    if (data.acknowledged) {
      dispatch(deleteContent(id));
    }
  };
};

export default deleteBlog;
