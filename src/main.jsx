import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/layout/Home/Home.jsx";
import Signup from "./components/user/Signup.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement:<Error/>,
    children: [
      {
        path: "/blog",
        element: <Home />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);

const root = createRoot(document.getElementById("root"));

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

root.render(<RouterProvider router={router} />);
