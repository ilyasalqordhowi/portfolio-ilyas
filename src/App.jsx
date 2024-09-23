import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import "./index.css";
import Home from "./assets/page/Home";
import About from "./assets/component/About";
import Portfolio from "./assets/component/Portfolio";
import MyServices from "./assets/component/MyServices";
import ContactMe from "./assets/component/ContactMe";

// let persistor = persistStore(store);
const page = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);
function App() {
  return <RouterProvider router={page} />;
}

export default App;
