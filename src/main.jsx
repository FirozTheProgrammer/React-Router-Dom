import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import About from "./Component/About/About";
import Home from "./Component/Home/Home";
import Contact from "./Component/Contact/Contact";
import Users from "./Component/Users/Users";
import UserDeatails from "./Component/Users/UserDeatails";
import Post from "./Component/Post/Post";
import PostDetails from "./Component/Post/PostDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        element: <Users></Users>,
      },
      {
        path: "/users/:id",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`),
        element: <UserDeatails></UserDeatails>,
      },
      {
        path: "/post",
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
        element: <Post></Post>,
      },
      {
        path: "/post/:postid",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/posts/${params.postid}`),
        element: <PostDetails></PostDetails>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
