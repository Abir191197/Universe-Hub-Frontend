import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Login from "../components/Auth/Login/Login";
import SignUp from "../components/Auth/Sign UP/SignUp";
import StudentDash from "../Layout/StudentDash/StudentDash";
import TestCourse from "../components/TestCourse";

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
        path: "/Dashboard/test-course", // Corrected relative path
        element: <TestCourse></TestCourse>,
      },
    ],
  },
]);
