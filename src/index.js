import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LayoutGeneral from "./components/LayoutGeneral";
import Home from "./pages/Home";
import Book from "./pages/Book/Book";
import Author from "./pages/Author/Author";
import Profile from "./pages/Profile";
import BookCreate from "./pages/Book/BookCreate";
import BookSingle from "./pages/Book/BookSingle";
import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/Login";
import User from "./pages/User/User";
import UserCreate from "./pages/User/UserCreate";
import UserSingle from "./pages/User/UserSingle";

const router = createBrowserRouter([
  {
    element: <LayoutGeneral />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/books",
        element: <Book />,
      },
      {
        path: "/books/create",
        element: <BookCreate />,
      },
      {
        path: "/books/:id",
        element: <BookSingle />,
      },
      {
        path: "/users",
        element: <User />,
      },
      {
        path: "/users/create",
        element: <UserCreate />,
      },
      {
        path: "/users/:id",
        element: <UserSingle />,
      },
      {
        path: "/authors",
        element: <Author />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
    errorElement: <ErrorPage />,
  },
  {
    path: "login",
    element: <Login />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
