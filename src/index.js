import React from "react";
import ReactDOM from "react-dom";
import Register from "./Pages/Register";
import './index.css';
import App from "./App";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
  } from "react-router-dom";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>
    },
    {
      path: "about",
      element: <div>About</div>,
    },
    {
        path: "Register",
        element: <Register/>,
      }
  ]);
  const root=ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={router}/>);
