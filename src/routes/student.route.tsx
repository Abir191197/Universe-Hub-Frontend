import { RouteObject } from "react-router-dom";
import EditProfile from "../pages/student/EditProfile";
import DashboardContent from "../pages/student/StudentDashboardContent";
import AllCourse from "../pages/student/AllCourse";
import SingleCoursePreview from "../pages/student/SingleCoursePreview";
import FileUploaded from "../pages/student/FileUploaded";
import GroupStudyTop from "../pages/student/GroupStudyTop";
import GroupStudyCreate from "../pages/student/GroupStudyCreate";
import ForumPage from "../pages/student/FormPage";


export const studentPaths: RouteObject[] = [
  {
    index: true,
    element: <DashboardContent />,
  },
  {
    path: "dashboard",
    element: <DashboardContent />,
  },
  {
    path: "EditProfile",
    element: <EditProfile />,
  },
  {
    path: "dashboard/EditProfile",
    element: <EditProfile />,
  },
  {
    path: "AllCourse",
    element: <AllCourse />,
  },
  {
    path: "course/:id",
    element: <SingleCoursePreview />,
  },
  {
    path: "fileUpload/:id",
    element: <FileUploaded></FileUploaded>,
  },
  {
    path: "GroupStudyTop",
    element: <GroupStudyTop></GroupStudyTop>,
  },
  {
    path: "GroupStudyCreate",
    element: <GroupStudyCreate></GroupStudyCreate>,
  },
  {
    path: "ForumPage",
    element: <ForumPage></ForumPage>,
  },

];
