import React ,{lazy,Suspense} from "react";

import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Grocery from "./components/Grocery"; 
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const Grocery=lazy(()=>import("./components/Grocery")) 

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>  
  );
};

const appRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Body />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contactus",
          element: <ContactUs />,
        },
        {
          path: "/grocery",
          element:(
          <Suspense fallback={<h1>Loading......</h1>}> 
          <Grocery/>
          </Suspense>
        ),
        },
        {
          path: "/restaurant/:resId",
          element: <RestaurantMenu />,
        },
      ],
      errorElement: <Error />,
    },
  ],
  {
    future: {
      v7_startTransition: true,
    },
  }
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
