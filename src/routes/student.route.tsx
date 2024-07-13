
import EditProfile from "../pages/student/EditProfile";
import DashboardContent from "../pages/student/StudentDashboardContent";
import AllCourse from "../pages/student/AllCourse";


export const studentPaths = [
  {
    index: true,
    element: <DashboardContent></DashboardContent>,
  },
  {
    index: true,
    path: "dashboard",
    element: <DashboardContent></DashboardContent>,
  },
  {
    path: "EditProfile",
    element: <EditProfile></EditProfile>,
  },
  {
    path: "dashboard/EditProfile",
    element: <EditProfile></EditProfile>,
  },
  {
    path: "AllCourse",
    element: <AllCourse></AllCourse>,
  },
];
