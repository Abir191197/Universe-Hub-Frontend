import DashboardContent from "../pages/student/DashboardContent";
import EnrolCourse from "../pages/student/EnrolCourse";

export const studentPaths = [
  {
    index: true,
    element: <DashboardContent></DashboardContent>,
  },
  {
    path: "dashboard",
    element: <DashboardContent></DashboardContent>,
  },
  {
    path: "courses",
    element: <EnrolCourse></EnrolCourse>,
  },
];
