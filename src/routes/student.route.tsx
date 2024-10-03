import { RouteObject } from "react-router-dom";
import Message from "../pages/admin/Message";
import AllCourse from "../pages/student/AllCourse";
import EditProfile from "../pages/student/EditProfile";
import FileUploaded from "../pages/student/FileUploaded";
import FullCounsellingLayout from "../pages/student/FullCounsellingLayout";
import GroupStudy from "../pages/student/GroupStudy";
import GroupStudyCreate from "../pages/student/GroupStudyCreate";
import SingleCoursePreview from "../pages/student/SingleCoursePreview";
import DashboardContent from "../pages/student/StudentDashboardContent";
import Forum from "../pages/student/Forum";
import SingleForum from "../pages/student/SingleForum";
import FaqBot from "../pages/student/FaqBot";
import AiTutor from "../pages/student/AiTutor";

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
    path: "messages",
    element: <Message></Message>,
  },
  {
    path: "GroupStudy",
    element: <GroupStudy></GroupStudy>,
  },
  {
    path: "GroupStudy/CreateCounselling",
    element: <GroupStudyCreate></GroupStudyCreate>,
  },
  {
    path: "Forum",
    element: <Forum></Forum>,
  },
  {
    path: "Forum/posts/:postId",
    element: <SingleForum></SingleForum>,
  },
  {
    path: "FaqBot",
    element: <FaqBot></FaqBot>,
  },
  {
    path: "AiTutor",
    element: <AiTutor></AiTutor>,
  },
];
