import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import deleteBlog from "../../redux/thunk/blogs/deleteBlog";
// import deleteProduct from "../../redux/thunk/products/deleteProduct";
// import loadProductData from "../../redux/thunk/products/fetchProducts";
// import fetchBlogs from "../redux/thunk/blogs/fetchBlogs";
import fetchBlogs from "../../redux/thunk/blogs/fetchBlogs";
// import editImage from "./assets/edit1.png";
import Blog from "./Blog";
const ProductList = () => {
  const [allowEdit, setAllowEdit] = useState(false);
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState(null);

  // const products = useSelector((state) => state.product.products);
  const blogs = useSelector((state) => state.blogs.blogs);
  const dispatch = useDispatch();
  const handleInput = (e) => {
    setInput(e.target.value);
  };
  const handleEdit = (todoId) => {
    setAllowEdit(!allowEdit);
    setEditId(todoId);
    // console.log(todoId);
    // dispatch(deleteTodo(todoId));
  };
  const editHandler = (e) => {
    e.preventDefault();
    // console.log(id);
    // dispatch(updateText(editId, input));
    //  console.log(e.target.value);
    setAllowEdit(!allowEdit);
  };
  useEffect(() => {
    dispatch(fetchBlogs());
  },[dispatch]);
  // console.log("blogs", blogs);
  return (
    <div class="flex flex-col justify-center items-center h-full w-full ">
      <div class="w-full max-w-7xl mx-auto rounded-lg  bg-white shadow-lg border border-gray-200">
        <header class="px-5 py-4 border-b border-gray-100">
          <div class="font-semibold text-gray-800">Blogs</div>
        </header>

        <div class="overflow-x-auto p-3">
          <table class="table-auto w-full">
            <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
              <tr>
                <th></th>
                <th class="p-2">
                  <div class="font-semibold text-left">Blog Title</div>
                </th>
                <th class="p-2">
                  <div class="font-semibold text-left">Image</div>
                </th>
                <th class="p-2">
                  <div class="font-semibold text-left">Author Name</div>
                </th>
                <th class="p-2">
                  <div class="font-semibold text-left">time</div>
                </th>
                <th class="p-2">
                  <div class="font-semibold text-left">date</div>
                </th>
                <th class="p-2">
                  <div class="font-semibold text-center">Action</div>
                </th>
              </tr>
            </thead>

            <tbody class="text-sm divide-y divide-gray-100">
                {
               
                  blogs?.map((blog)=>(
                    <Blog blog={blog} key={blog._id}></Blog>
                  ))
                }
            </tbody>
          </table>
        </div>
      </div>
    </div>
    // </section>
  );
};

export default React.memo(ProductList);
