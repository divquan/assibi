import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Sell from "./pages/Sell/Sell";
import RentOut from "./pages/RentOut/RentOut";
import AboutUs from "./pages/AboutUs/AboutUs";
import Register from "./pages/Register/Register";
import Cart from "./pages/Cart/Cart";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/sell", element: <Sell /> },
      { path: "/rent-out", element: <RentOut /> },
      { path: "/about-us", element: <AboutUs /> },
      { path: "/cart", element: <Cart /> },
      // { path: "/register", element: <Register /> },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
