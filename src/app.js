import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import {createBrowserRouter,RouterProvider,Outlet} from 'react-router-dom'
import About from "./components/About";
import Footer from "./components/Footer";
import Restorent from "./components/Restortent";
import Error from "./components/Error";

const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([{
  Path:'/',
  element:<AppLayout />,
  errorElement:<Error />,
  children:[
    {
      path:'/',
      element:<Body />
    },
    {
      path:'/about',
      element:<About />
    }
    ,{
      path:'/restorent/:restorentId',
      element:<Restorent />
    }
  ]

}])
root.render(<RouterProvider router={router}/> );
