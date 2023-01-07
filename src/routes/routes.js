import { createBrowserRouter } from "react-router-dom";
import Blogs from "../components/Blogs";
import Dashboard from "../layout/Dashboard/Dashboard";
import Main from "../layout/Main/Main";
import AddBlog from "../pages/Dashboard/AddBlog";
import ProductList from "../pages/Dashboard/ProductList";
import ReadingHistory from "../pages/ReadingHistory/ReadingHistory";
// import About from "../pages/Main/About";
// import Cart from "../pages/Main/Cart";
// import Home from "../pages/Main/Home";
// import TopRated from "../pages/Main/TopRated";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Blogs />,
        // element: <Home />,
      },
      {
        path: "/reading_history/:id",
        element: <ReadingHistory />,
        // element: <Home />,
      },
      //   {
      //     path: "about",
      //     element: <About />,
      //   },
      //   {
      //     path: "top-rated",
      //     element: <TopRated />,
      //   },
      //   {
      //     path: "cart",
      //     element: <Cart />,
      //   },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard",
        element: <ProductList />,
      },
      {
        path: "add-blog",
        element: <AddBlog />,
      },
    ],
  },
]);

export default routes;
