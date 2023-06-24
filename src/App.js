import React from "react";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import store from "./Utils/store";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import Watch from "./components/Watch";

const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "watch",
          element: <Watch />,
        },
      ],
    },
  ]);
  return (
    <Provider store={store}>
      <div>
        <Header />
        <RouterProvider router={appRouter} />
        <Footer />
      </div>
    </Provider>
  );
};

export default App;
