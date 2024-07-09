import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/Landing page/LandingPage";
import Login from "../pages/Login";
import Register from "../pages/Register";


import { adminPaths } from "./admin.route";




import { studentPaths } from "./student.route";
import AdminLayout from "../components/layout/AdminLayout";
import ProtectedRoute from "../components/ProtectedRoute";
import StudentSidebarLayout from "../components/layout/StudentSidebarLayout";


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
        <StudentSidebarLayout></StudentSidebarLayout>
      </ProtectedRoute>
    ),

    children: studentPaths,
  },
]);

export default router;
