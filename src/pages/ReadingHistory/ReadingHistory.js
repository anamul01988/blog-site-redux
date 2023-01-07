import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import fetchBlogs from "../../redux/thunk/blogs/fetchBlogs";

const ReadingHistory = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const blogsData = useSelector((state) => state.blogs.blogs);
  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);
  console.log("id", id);
  console.log("blogsData", blogsData);
  return (
    <div>
      <div class="flex justify-center mt-5">
        {blogsData
          ?.filter((item) => item._id === id)
          .map((item) => (
            <div class="flex w-2/5 flex-col rounded-lg shadow-lg overflow-hidden">
              <div class="flex-shrink-0">
                <img class="h-48 w-full object-cover" src={item.img} alt="" />
              </div>

              <div class="flex-1 bg-white p-6 flex flex-col justify-between">
                <div class="flex-1">
                  <p
                    //   onClick={() => handleCheckCategory(item.category)}
                    class="text-sm font-medium text-indigo-600"
                  >
                    <span class="inline-flex cursor-pointer items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                      {item.category}
                    </span>
                  </p>
                  <div
                    //   onClick={() => handleCheckTitle(item.title)}
                    // href="#"
                    class="block mt-1 "
                  >
                    <p class="text-xl cursor-pointer font-semibold text-gray-900">
                      {item.title}
                    </p>
                  </div>
                  <div
                    //   onClick={() => handleCheckTitle(item.title)}
                    // href="#"
                    class="block mt-1 "
                  >
                    <p class="text-sm cursor-pointer font-normal text-gray-900">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                      {/* <Link to={`reading_history/${item._id}`}><span class="cursor-pointer font-normal text-red-700">Read More</span></Link> */}
                    </p>
                  </div>
                </div>
                <div class="mt-6 flex items-center">
                  <div
                    //   onClick={() => handleCheckAuthorImg(item.author_img)}
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
                      // onClick={() =>
                      //   handleCheckAuthorTitle(item.author_title)
                      // }
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
      <div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
      {blogsData
       ?.filter((item) => item._id !== id)
      ?.map((item) => (
        <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
          <div class="flex-shrink-0">
            <img class="h-48 w-full object-cover" src={item.img} alt="" />
          </div>

          <div class="flex-1 bg-white p-6 flex flex-col justify-between">
            <div class="flex-1">
              <p
                //   onClick={() => handleCheckCategory(item.category)}
                class="text-sm font-medium text-indigo-600"
              >
                <span class="inline-flex cursor-pointer items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                  {item.category}
                </span>
              </p>
              <div
                //   onClick={() => handleCheckTitle(item.title)}
                // href="#"
                class="block mt-1 "
              >
                <p class="text-xl cursor-pointer font-semibold text-gray-900">
                  {item.title}
                </p>
              </div>
              <div
                //   onClick={() => handleCheckTitle(item.title)}
                // href="#"
                class="block mt-1 "
              >
                <p class="text-sm cursor-pointer font-normal text-gray-900">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Duis aute irure dolor in reprehenderit in voluptate velit
                  esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                  {/* <Link to={`reading_history/${item._id}`}><span class="cursor-pointer font-normal text-red-700">Read More</span></Link> */}
                </p>
              </div>
            </div>
            <div class="mt-6 flex items-center">
              <div
                //   onClick={() => handleCheckAuthorImg(item.author_img)}
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
                  // onClick={() =>
                  //   handleCheckAuthorTitle(item.author_title)
                  // }
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
  );
};

export default ReadingHistory;
