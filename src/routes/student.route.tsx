import { RouteObject } from "react-router-dom";
import EditProfile from "../pages/student/EditProfile";
import DashboardContent from "../pages/student/StudentDashboardContent";
import AllCourse from "../pages/student/AllCourse";
import SingleCoursePreview from "../pages/student/SingleCoursePreview";
import FileUploaded from "../pages/student/FileUploaded";
import FullCounsellingLayout from "../pages/student/FullCounsellingLayout";
import GroupStudyCreate from "../pages/student/GroupStudyCreate";
import GroupStudyTop from "../pages/student/GroupStudyTop";
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
    path: "Counselling",
    element: <FullCounsellingLayout></FullCounsellingLayout>,
  },
  {
    path: "GroupStudyTop",
    element: <GroupStudyTop />,
  },
  {
        path: "GroupStudyCreate",
        element: <GroupStudyCreate />,
  },
    
 
  {
    path: "ForumPage",
    element: <ForumPage />,
  },
];
