import EnrolCourse from "../pages/student/EnrolCourse";
import EditProfile from "../pages/student/EditProfile";
import DashboardContent from "../pages/student/StudentDashboardContent";


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
    index: true,
    path: "EditProfile",
    element: <EditProfile></EditProfile>,
  },
  {
    path: "EnrolCourse",
    element: <EnrolCourse></EnrolCourse>,
  },
];
