import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Auth from "./components/Auth.jsx";
import { ToastContainer } from "react-toastify";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Auth />,
  },
  {
    path: "/chats",
    element: <div>chat page</div>,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToastContainer autoClose={1500} />
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
