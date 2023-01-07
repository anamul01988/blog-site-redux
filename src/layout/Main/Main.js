import React,{ useState }from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
// import searchIcon from "../assets/search.svg";
import { BiSearchAlt } from "react-icons/bi";
const debounce = (fn, delay) => {
  let timeOut;
  return (...args) => {
    if (timeOut) {
      clearTimeout(timeOut);
    }
    timeOut = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};
const Main = () => {
  const [search, setSearch] = useState("");
  const handleSearch = debounce((e) => setSearch(e.target.value), 800);
  return (
    <>
       {/* for header start  */}
       <nav className="h-14 bg-stone-100 rounded-full m-2 max-w-7xl mx-auto px-5">
        <ul className="h-full  mx-auto flex justify-between items-center gap-3 font-semibold text-indigo-900">
          <h1>Blog Site</h1>

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
      <div className='px-10'>
      {/* <Navbar /> */}
      <Outlet />
    </div>
    </>
  
  );
};

export default React.memo(Main);
