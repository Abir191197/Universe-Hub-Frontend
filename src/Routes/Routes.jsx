import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Login from "../components/Auth/Login/Login";
import SignUp from "../components/Auth/Sign UP/SignUp";
import StudentDash from "../Layout/StudentDash/StudentDash";

import Courses from "../components/Student/Courses/Courses";
import Resource from "../components/Student/Resource/Resource";
import STDashboardContent from "../components/Student/STDashboardContent/STDashboardContent";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/SignUp",
    element: <SignUp />,
  },
  {
    path: "/LogIn",
    element: <Login />,
  },
  {
    path: "/Dashboard",
    element: <StudentDash />,
    children: [
      {
        path: "/Dashboard",
        element:<STDashboardContent></STDashboardContent>,
      },
      {
        path: "/Dashboard/courses",
        element: <Courses></Courses>,
      },
      {
        path: "/Dashboard/resource",
        element: <Resource></Resource>,
      },
    ],
  },
]);
