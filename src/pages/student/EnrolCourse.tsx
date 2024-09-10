<<<<<<< HEAD

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
=======
import { BookOpenIcon } from "@heroicons/react/20/solid";
>>>>>>> d04c6545056eb6890f4515d744b1ee2fd4f47381
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";
<<<<<<< HEAD
import { useGetWhoLogInQuery } from "../../redux/features/Student Management/getWhoLogInAPI";
import { EyeIcon } from "@heroicons/react/24/solid";
=======
>>>>>>> d04c6545056eb6890f4515d744b1ee2fd4f47381

export interface ICourse {
  Description: string;
  _id: string;
  courseName: string;
  files: string[];
  createdAt: Date;
  updatedAt: Date;
  imageUrl?: string;
  description?: string;
}

export default function EnrolCourse() {
  const user = useSelector(selectCurrentUser);
  const { data } = useGetWhoLogInQuery(undefined);

  if (!data) {
    return (
      <div className="flex justify-center items-center h-screen">
        No data available
      </div>
    );
  }

  const profile = {
    courses: data.data.courses,
  };

<<<<<<< HEAD
=======
  const defaultImageUrl =
    "https://img.freepik.com/free-vector/blue-shiny-abstract-background_1123-44.jpg?t=st=1725273710~exp=1725277310~hmac=9932daa2eb31bc07403d20fd6a1a67ab161457d9284f2cffe90d1d572cbf2001&w=740";

>>>>>>> d04c6545056eb6890f4515d744b1ee2fd4f47381
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Slide}
      />

<<<<<<< HEAD
      <ul
        role="list"
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-14">
        {profile.courses && profile.courses.length > 0 ? (
          profile.courses.map((course: ICourse) => (
            <li
              key={course._id}
              className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow">
              <div className="flex flex-1 flex-col p-8">
                <img
                  className="mx-auto flex-shrink-0 rounded-full"
                  src={
                    course.imageUrl ||
                    "https://img.freepik.com/free-vector/students-watching-webinar-computer-studying-online_74855-15522.jpg?t=st=1725497751~exp=1725501351~hmac=6011ac615b935914772d908f044e02c61f229a341354afa4f47609de6c3d8e81&w=996"
                  }
                  alt={course.courseName}
                />
                <dd className="mt-3">
                  <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                    {course.courseName}
                  </span>
                </dd>
                <dl className="mt-1 flex flex-grow flex-col justify-between">
                  <dt className="sr-only">Title</dt>
                  <dd className="text-sm text-gray-500">
                    {course.Description || "No description available"}
                  </dd>
                </dl>
              </div>
              <div>
                <div className="-mt-px flex divide-x divide-gray-200">
                  <div className="-ml-px flex w-0 flex-1">
                    <Link
                      to={`/${user?.role}/course/${course._id}`}
                      className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900">
                      <EyeIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      Preview
                    </Link>
=======
      <div className="p-6 bg-[#C7E0F2] rounded-lg shadow-lg">
        <ul
          role="list"
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          {profile.courses && profile.courses.length > 0 ? (
            profile.courses.map((course: ICourse) => (
              <li
                key={course._id}
                className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white shadow-xl"
              >
                <div className="flex flex-1 flex-col p-8 items-center text-center">
                  <img
                    className="mx-auto h-32 w-32 flex-shrink-0 rounded-full"
                    src={course.imageUrl || defaultImageUrl}
                    alt={course.courseName}
                  />
                  <h3 className="mt-6 text-sm font-medium text-gray-900">
                    {course.courseName}
                  </h3>
                  <dl className="mt-1 flex flex-grow flex-col justify-center items-center">
                    <dt className="sr-only">Title</dt>
                    <dd className="text-sm text-gray-500">
                      {course.description || "No description available"}
                    </dd>
                    <dt className="sr-only">Role</dt>
                    <dd className="mt-3">
                      <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                        {course.courseName}
                      </span>
                    </dd>
                  </dl>
                </div>
                <div>
                  <div className="-mt-px flex divide-x divide-gray-200">
                    <div className="-ml-px flex w-0 flex-1">
                      <Link
                        to={`/${user?.role}/course/${course._id}`}
                        className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                      >
                        <BookOpenIcon
                          className="h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                        Preview
                      </Link>
                    </div>
>>>>>>> d04c6545056eb6890f4515d744b1ee2fd4f47381
                  </div>
                </div>
              </li>
            ))
          ) : (
            <div className="flex justify-center items-center h-screen">
              No courses available
            </div>
          )}
        </ul>
      </div>
    </>
  );
}
