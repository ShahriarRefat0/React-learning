import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css"

import App from "./routes/App.jsx";
import Home from "./routes/Home.jsx";
import Bag from "./routes/Bag.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home/> /*, loader: postLoader*/ },
      {
        path: "/bag",
        element: <Bag/>,
        /*action: createPostAction,*/
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
