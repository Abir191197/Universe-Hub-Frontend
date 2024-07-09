
import AllCourses from "../pages/admin/AllCourse";
import AdminDashboardContent from "../pages/admin/AdminDashboardContent";
import CreateCourse from "../pages/admin/CreateCourse";

export const adminPaths = [
  {
    index: true,
    element: <AdminDashboardContent></AdminDashboardContent>,
  },
  {
    path: "dashboard",
    element: <AdminDashboardContent></AdminDashboardContent>,
  },

  {
    path: "create courses",
    element: <CreateCourse></CreateCourse>,
  },
  {
    path: "All Course",
    element: <AllCourses></AllCourses>
  },
];
