import { useState } from "react";
import { useGetAllCoursesQuery } from "../../redux/features/Student Management/getAllCourseAPI";
import { usePutSingleCourseInProfileMutation } from "../../redux/features/Student Management/putSingleCourseInProfile";
import { HeartIcon, ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/20/solid";


import { Slide, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {  MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Loader from "../../components/Loader";

export interface ICourse {   // add course varriable 
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
  const [searchKeyWord, setSearchKeyWord] = useState("");
  const limit = 6;

  const { data, isLoading, isError } = useGetAllCoursesQuery({
    searchKeyWord,
    page,
    limit,
  });
 
  const [putSingleCourseInProfile] = usePutSingleCourseInProfileMutation();

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
    if (page < data.data.length) {
      setPage(page + 1);
    }
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  

  if (isLoading) {
    return <Loader></Loader>;
  }

  if (isError) {
    return <div>Error loading courses</div>;
  }

  return (
    <>
      <div className="mb-6 w-2/5">
        <label
          htmlFor="search"
          className="block text-xl font-extrabold leading-6 text-black">
          Search Course:
        </label>
        <div className="mt-2 flex rounded-md shadow-sm">
          <div className="relative flex flex-grow items-stretch focus-within:z-10">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <MagnifyingGlassIcon  
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </div>
            <input
              type="text"
              name="search"
              id="search"
              className="block w-full rounded-none rounded-l-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Enter search keyword"
              value={searchKeyWord}
              onChange={(e) => setSearchKeyWord(e.target.value)}
            />
          </div>
          {/* <button
            type="button"
           
            className="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
            <BarsArrowUpIcon
              className="-ml-0.5 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            Search
          </button> */}
        </div>
      </div>

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
  src={course.imageUrl || "https://img.freepik.com/free-vector/blue-shiny-abstract-background_1123-44.jpg?t=st=1725273710~exp=1725277310~hmac=9932daa2eb31bc07403d20fd6a1a67ab161457d9284f2cffe90d1d572cbf2001&w=740"} // Default image URL
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
              <button
  onClick={() => handleEnrol(course._id)}
  className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900">
  <HeartIcon
    className="h-5 w-5 text-gray-400"
    aria-hidden="true"
  />
  Subscribe!
</button>


              </div>
            </div>
          </li>
        ))}
      </ul>
      <nav className="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0 mt-4">
        <div className="-mt-px flex w-0 flex-1">
          <button
            onClick={handlePreviousPage}
            disabled={page === 1}
            className="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-xl font-bold text-black hover:border-gray-300 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed">
            <ArrowLeftIcon
              className="mr-3 h-5 w-5 text-black font-extrabold"
              aria-hidden="true"
            />
            Previous
          </button>
        </div>
        <div className="hidden md:-mt-px md:flex">
          {[...Array(data.data.length).keys()].map((pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => setPage(pageNumber + 1)}
              className={`inline-flex items-center border-t-2 px-4 pt-4 text-sm font-medium ${
                pageNumber + 1 === page
                  ? "border-indigo-500 text-indigo-600"
                  : "border-transparent text-black hover:border-gray-300 hover:text-gray-700"
              }`}
              aria-current={pageNumber + 1 === page ? "page" : undefined}>
              {pageNumber + 1}
            </button>
          ))}
        </div>
        <div className="-mt-px flex w-0 flex-1 justify-end">
          <button
            onClick={handleNextPage}
            disabled={page === data.data.length}
            className="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-xl font-bold text-black hover:border-gray-300 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed">
            Next
            <ArrowRightIcon
              className="ml-3 h-5 w-5 text-black font-extrabold"
              aria-hidden="true"
            />
          </button>
        </div>
      </nav>
    </>
  );
}
