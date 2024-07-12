import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/Landing page/LandingPage";
import Login from "../pages/Login";
import Register from "../pages/Register";


import { adminPaths } from "./admin.route";




import { studentPaths } from "./student.route";
import AdminLayout from "../components/layout/AdminLayout";
import ProtectedRoute from "../components/ProtectedRoute";
import StudentSidebarLayout from "../components/layout/StudentSidebarLayout";
import Nofound from "../pages/Landing page/Nofound";


const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage></LandingPage>,
    //errorElement: <Nofound></Nofound>,
  },
  {
    path: "/login",
    element: <Login></Login>,
    errorElement: <Nofound></Nofound>,
  },
  {
    path: "/register",
    element: <Register></Register>,
    //errorElement: <Nofound></Nofound>,
  },
  

  {
    path: "/admin",
    element: (
      <ProtectedRoute>
        <AdminLayout></AdminLayout>
      </ProtectedRoute>
    ),
    children: adminPaths,
    //errorElement: <Nofound></Nofound>,
  },

  {
    path: "/student",

    element: (
      <ProtectedRoute>
        <StudentSidebarLayout></StudentSidebarLayout>
      </ProtectedRoute>
    ),

    children: studentPaths,
    //errorElement: <Nofound></Nofound>,
  },
]);

export default router;
