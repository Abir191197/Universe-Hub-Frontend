
import AdminDashboardContent from "../pages/admin/AdminDashboardContent";

import EditProfile from "../pages/student/EditProfile";
import AllCourseAndCreate from "../pages/admin/AllCourseAndCreate";
import SingleCoursePreview from "../pages/student/SingleCoursePreview";
import FileUploaded from "../pages/student/FileUploaded";


import CreateCounseling from "../pages/admin/CreateCounselling";
import CounsellingPage from "../pages/admin/CounsellingPage";


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
    path: "EditProfile",
    element: <EditProfile />,
  },
  {
    path: "dashboard/EditProfile",
    element: <EditProfile />,
  },
  {
    path: "AllCourse",
    element: <AllCourseAndCreate />,
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
    element: <CounsellingPage></CounsellingPage>,
  },
  {
    path: "Counselling/CreateCounselling",
    element: <CreateCounseling></CreateCounseling>,
  },
];
