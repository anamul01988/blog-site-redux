import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchBlogs from "../../redux/thunk/blogs/fetchBlogs";
import deleteBlog from "../../redux/thunk/blogs/deleteBlog";
// import fetchBlogs from "../../redux/thunk/blogs/fetchBlogs";
import editImage from "./assets/edit1.png";
import updateBlog from "../../redux/thunk/blogs/updateBlog";
 
function Blog({blog}) {
    // console.log(blog);
        const [allowEdit, setAllowEdit] = useState(false);
        const [input, setInput] = useState("");
        const [editId, setEditId] = useState(null);
        const { title,
            author_title,
            author_time,
            author_td,
            author_img,
            status,
            _id} = blog;
      
        // const products = useSelector((state) => state.product.products);
        // const blogs = useSelector((state) => state.blogs.blogs);
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
            console.log("click porce");
          e.preventDefault();
          // console.log(id);
          dispatch(updateBlog(editId, input));
          //  console.log(e.target.value);
          setAllowEdit(!allowEdit);
        };
        useEffect(() => {
          // dispatch(loadProductData());
          dispatch(fetchBlogs());
        },[dispatch]);
        // console.log("blogs", blogs);
  return (
    <tr key={{ _id }}>
    <td class="p-2">
      <input type="checkbox" class="w-5 h-5" value="id-1" />
    </td>
    <td class="p-2">
      {!allowEdit ? (
        <div class="font-medium text-gray-800">{title}</div>
      ) : (
        <form className="flex-1 " onSubmit={editHandler}>
          <input
            type="text"
            value={input}
            onChange={handleInput}
            class="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg
           border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 
           dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
           dark:focus:border-blue-500"
          ></input>
            {/* <button type="submit">submit</button> */}
        </form>
      )}
    </td>
    <td class="p-2">
      <div class="text-left capitalize">
        <img style={{height:"80px", width:"80px"}} src={author_img} alt="image"/>
      </div>
    </td>
    <td class="p-2">
      <div class="text-left capitalize">{author_title}</div>
    </td>
    <td class="p-2">
      <div class="text-left">
      
          <p className="text-green-500 font-medium">
             {author_time}
          </p>
      
      </div>
    </td>
    <td class="p-2">
      <div class="text-left font-medium text-indigo-500">
        {author_td}
      </div>
    </td>
    <td class="p-2">
      <div class="flex justify-center">
        <img
          src={editImage}
          className="flex-shrink-0 w-4 h-4 ml-2 mt-2 cursor-pointer"
          alt="Cancel"
          onClick={() => handleEdit(_id)}
        />
        <button onClick={() => dispatch(deleteBlog(_id))}>
          <svg
            class="w-8 h-8 hover:text-blue-600 rounded-full hover:bg-gray-100 p-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            ></path>
          </svg>
        </button>
      </div>
    </td>
  </tr>
  )
}

export default React.memo(Blog)