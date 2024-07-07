import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/Landing page/LandingPage";
import Login from "../pages/Login";
import Register from "../pages/Register";


import { adminPaths } from "./admin.route";



import StudentLayout from "../components/layout/StudentLayout";
import { studentPaths } from "./student.route";
import AdminLayout from "../components/layout/AdminLayout";
import ProtectedRoute from "../components/ProtectedRoute";


const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage></LandingPage>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },

  {
    path: "/admin",
    element: (
      <ProtectedRoute >
        <AdminLayout></AdminLayout>
      </ProtectedRoute>
    ),
    children: adminPaths,
  },

  {
    path: "/student",

    element: (
      <ProtectedRoute>
        <StudentLayout></StudentLayout>
      </ProtectedRoute>
    ),

    children: studentPaths,
  },
]);

export default router;
