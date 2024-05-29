import React, { lazy, Suspense, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Error from "./Components/Error";
import RestaurantMenu from "./Components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Shimmer from "./Components/Shimmer";
import Usercontext from "./Utils/UserContext";
import { useState } from "react";
import Usercontext from "./Utils/UserContext";


const Grocery = lazy(() => import("./Components/Grocery"));

const AppLayout = () => {
  const [userName, setUserName] = useState();

  useEffect(()=>{
    const data= {
      name: "Nishi Surti"
    };
    setUserName(data.name)
  },[])
  return (

    <Usercontext.Provider value={{loggedinUser: userName}}>
      <div className="App">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </Usercontext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
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
        path: "/restaurants/:resId", //: dynemic data
        element: <RestaurantMenu />,
      },
      {
        path: "/grocery", //: dynemic data
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
