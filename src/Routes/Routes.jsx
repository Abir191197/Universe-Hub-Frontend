import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../components/Auth/Login/Login";
import SignUp from "../components/Auth/Sign UP/SignUp";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "/SignUp",
    element: <SignUp></SignUp>
  },
  {
    path: "/LogIn",
    element: <Login></Login>
  },
]);