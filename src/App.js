import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/userContext";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import AboutV2 from "./components/AboutV2";

const AboutV2Lazy = lazy(() => import("./components/AboutV2"));

const AppLayout = () => {
  // console.log(<Body />);
  const [userName, setUserName] = useState("Elon Musk");
  useEffect(() => {
    // API for auth//
    setUserName(userName);
  }, []);

  return (
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div className="app">
        <Header />
        {/** if path = /  */}
        {/* <Body /> */}
        {/** if path = /about  */}
        {/* <About /> */}
        {/** if path = /contact  */}
        {/* <Contact /> */}
        <Outlet />
        <Footer />
      </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
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
        // element: <About />,
        element: (
          <Suspense fallback={<div>AboutV2Lazy is loading</div>}>
            <AboutV2Lazy />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
  // {
  //   path: '/about',
  //   element: <About />,
  // },
  // {
  //   path: '/contact',
  //   element: <Contact />,
  // },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
