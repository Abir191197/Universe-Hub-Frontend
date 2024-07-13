/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  PhoneIcon,
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/20/solid"; // Ensure these icons are what you need

import { Slide, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useState } from "react";
import { useGetAllCoursesQuery } from "../../redux/features/Student Management/getAllCourseAPI";
import { usePutSingleCourseInProfileMutation } from "../../redux/features/Student Management/putSingleCourseInProfile";

export interface ICourse {
  _id: string;
  courseName: string;
  files: string[];
  createdAt: Date;
  updatedAt: Date;
  imageUrl?: string;
  description?: string;
}

export default function AllCourse() {
  const [page, setPage] = useState(1);
  const limit = 6; // Define your limit here
console.log(page);
  const { data, isLoading, isError } = useGetAllCoursesQuery({
    page,
    limit,
  });
  const [putSingleCourseInProfile] = usePutSingleCourseInProfileMutation();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading courses</div>;
  }

  const handleEnrol = async (id: string) => {
    try {
      const response = await putSingleCourseInProfile({ id }).unwrap();
      toast.success(`${response.message}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
      });
    } catch (error) {
      toast.error("Failed to enrol in course", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
      });
    }
  };

  const handleNextPage = () => {
    if (data.data.length > page) {
      setPage(page + 1);
    }
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

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
      <ul
        role="list"
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.data.map((course: ICourse) => (
          <li
            key={course._id}
            className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow">
            <div className="flex flex-1 flex-col p-8">
              <img
                className="mx-auto h-32 w-32 flex-shrink-0 rounded-full"
                src={course.imageUrl || "default_image_url_here"}
                alt={course.courseName}
              />
              <h3 className="mt-6 text-sm font-medium text-gray-900">
                {course.courseName}
              </h3>
              <dl className="mt-1 flex flex-grow flex-col justify-between">
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
                  <button
                    onClick={() => handleEnrol(course._id)}
                    className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900">
                    <PhoneIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    Enrol
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <nav className="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0 mt-4 ">
        <div className="-mt-px flex w-0 flex-1">
          <button
            onClick={handlePreviousPage}
            disabled={page === 1}
            className="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-xl font-bold text-black hover:border-gray-300 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed">
            <ArrowLongLeftIcon
              className="mr-3 h-5 w-5 text-black font-extrabold"
              aria-hidden="true"
            />
            Previous
          </button>
        </div>
        <div className="hidden md:-mt-px md:flex">
          {[...Array(data.data.length).keys()].map((pageNumber) => (
            <a
              key={pageNumber}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setPage(pageNumber + 1);
              }}
              className={`inline-flex items-center border-t-2 px-4 pt-4 text-sm font-medium ${
                pageNumber + 1 === page
                  ? "border-indigo-500 text-indigo-600"
                  : "border-transparent text-black text-2xl font-bold hover:border-gray-300 hover:text-gray-700"
              }`}
              aria-current={pageNumber + 1 === page ? "page" : undefined}>
              {pageNumber + 1}
            </a>
          ))}
        </div>
        <div className="-mt-px flex w-0 flex-1 justify-end">
          <button
            onClick={handleNextPage}
            disabled={page === data.data.length}
            className="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-xl font-bold text-black hover:border-gray-300 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed">
            Next
            <ArrowLongRightIcon
              className="ml-3 h-5 w-5 text-black font-extrabold"
              aria-hidden="true"
            />
          </button>
        </div>
      </nav>
    </>
  );
}
