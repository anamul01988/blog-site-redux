import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import searchIcon from "../assets/search.svg";
import { BiSearchAlt } from "react-icons/bi";
import {
  authorImgChecked,
  authorTitleChecked,
  categoryChecked,
  titleChecked,
} from "../redux/blogs/actions";
import { clickCategory } from "../redux/filters/actions";
import { useEffect } from "react";
import fetchBlogs from "../redux/thunk/blogs/fetchBlogs";
// import useDebounce from "./hooc/UseDebounce";

// const debounce = (fn, delay) => {
//   let timeOut;
//   return (...args) => {
//     if (timeOut) {
//       clearTimeout(timeOut);
//     }
//     timeOut = setTimeout(() => {
//       fn(...args);
//     }, delay);
//   };
// };

function Blogs() {
  // const [search, setSearch] = useState("");
  //debounce end
  const dispatch = useDispatch();
  const blogsData = useSelector((state) => state.blogs.blogs);
  const filters = useSelector((state) => state.filters);
  console.log(filters);
  // console.log(blogsData);

  // DeBounce Function
  //    useDebounce(() => {
  //     setFilteredTitle(
  //       blogs.filter((d) => d.title.toLowerCase().includes(search.toLowerCase()))
  //     );
  //   }, [blogs, search], 800
  // );

  // const handleSearch = debounce((e) => setSearch(e.target.value), 800);

  const handleCheckCategory = (e) => {
    console.log("get parameter", e);
    //    console.log(typeof e);
    dispatch(categoryChecked(e));
    dispatch(clickCategory(e));
  };
  const handleCheckTitle = (e) => {
    console.log("get parameter", e);
    //    console.log(typeof e);
    dispatch(titleChecked(e));
  };
  const handleCheckAuthorImg = (e) => {
    console.log("get parameter", e);
    //    console.log(typeof e);
    dispatch(authorImgChecked(e));
  };
  const handleCheckAuthorTitle = (e) => {
    console.log("get parameter", e);
    //    console.log(typeof e);
    dispatch(authorTitleChecked(e));
  };

  //  DeBounce Function

  //    useDebounce(() => {

  //   }, [search], 800
  // );

  const searchByTitle = (item) => {
    // console.log("searchByTitle",item)
    // return todo.title.toLowerCase().includes(search.toLowerCase());
  };
  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);
  return (
    <>
      {/* for header start  */}
      <nav className="h-14 bg-stone-100 rounded-full m-2 max-w-7xl mx-auto px-5">
        <ul className="h-full  mx-auto flex justify-between items-center gap-3 font-semibold text-indigo-900">
          <h1>Moon Tech</h1>

          <li className="flex bg-white mx-auto h-8 w-full max-w-lg  rounded-full pr-3">
            <input
              className="h-8 rounded-full w-full text-sm border-0 focus:ring-0 outline-none"
              type="search"
              name="search"
              placeholder="Search"
              onChange={handleSearch}
            />
            <button>
              <BiSearchAlt />
            </button>
            {/* <div class="border mt-6 border-slate-200 flex items-center w-11/12 lg:w-1/4 mx-auto bg-gray-50 h-3 px-8 lg:px-12 rounded-lg text-sm ring-emerald-200">
              <input
                class="outline-none border-none bg-gray-50 h-full w-full mr-2"
                type="search"
                name="search"
                placeholder="Search"
                onChange={handleSearch}
              />
              <img
                class="inline h-6 cursor-pointer"
                src={searchIcon}
                alt="Search"
              />
            </div> */}
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          {/* <li>
            <Link to="/top-rated">Top Rated</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li> */}
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          {/* <Link to='/'>
          <li title='Wishlist' className='bg-indigo-500 p-2 rounded-full'>
            <IoIosListBox className='text-white' />
          </li>
        </Link>
        <Link to='/cart'>
          <li title='cart' className='bg-indigo-500 p-2 rounded-full'>
            <BsFillCartFill className='text-white ' />
          </li>
        </Link> */}
        </ul>
      </nav>
      {/* for header end  */}

      <section class="relative bg-gray-50 pt-8 pb-20  sm:px-6 lg:pt-16 lg:pb-16 px-8 lg:px-12">
        <div class="absolute inset-0">
          <div class="bg-white h-1/3 sm:h-2/3"></div>
        </div>
        <div class="relative max-w-7xl mx-auto">
          <div class="text-center">
            <h2 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              ALL BLOGS ARE HERE
            </h2>
            <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
              libero labore natus atque, ducimus sed.
            </p>
          </div>

          {/* <!-- card grid  --> */}
          <div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            {/* <!-- single card  --> */}
            {/* {blogsData?.filter(searchByTitle).map((item) => ( */}
            {blogsData?.map((item) => (
              <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div class="flex-shrink-0">
                  <img class="h-48 w-full object-cover" src={item.img} alt="" />
                </div>

                <div class="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div class="flex-1">
                    <p
                      onClick={() => handleCheckCategory(item.category)}
                      class="text-sm font-medium text-indigo-600"
                    >
                      <span class="inline-flex cursor-pointer items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                        {item.category}
                      </span>
                    </p>
                    <div
                      onClick={() => handleCheckTitle(item.title)}
                      // href="#"
                      class="block mt-1 "
                    >
                      <p class="text-xl cursor-pointer font-semibold text-gray-900">
                        {item.title}
                      </p>
                    </div>
                    <div
                      onClick={() => handleCheckTitle(item.title)}
                      // href="#"
                      class="block mt-1 "
                    >
                      <p class="text-sm cursor-pointer font-normal text-gray-900">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                       magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                       consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<Link to={`reading_history/${item._id}`}><span class="cursor-pointer font-normal text-red-700">Read More</span></Link>
                      </p>
                    </div>
                  </div>
                  <div class="mt-6 flex items-center">
                    <div
                      onClick={() => handleCheckAuthorImg(item.author_img)}
                      class="flex-shrink-0"
                    >
                      <img
                        class="h-10 w-10 rounded-full"
                        src={item.author_img}
                        alt=""
                      />
                    </div>
                    <div class="ml-3">
                      <p
                        onClick={() =>
                          handleCheckAuthorTitle(item.author_title)
                        }
                        class="text-sm cursor-pointer font-medium text-gray-900 hover:underline"
                      >
                        {item.author_title}
                      </p>
                      <div class="flex space-x-1 text-sm text-gray-500">
                        <time datetime="2020-03-16">{item.author_td}</time>
                        <span aria-hidden="true">&middot;</span>
                        <span> {item.author_time} </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default React.memo(Blogs);
