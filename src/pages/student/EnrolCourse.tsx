import { PhoneIcon } from "@heroicons/react/20/solid";


import { Slide, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useGetAllCoursesQuery } from "../../redux/features/Student Mangment/getAllCourseAPI";
import { usePutSingleCourseInProfileMutation } from "../../redux/features/Student Mangment/putSingleCourseInProfile";

export interface ICourse {
  _id: string;
  courseName: string;
  files: string[];
  createdAt: Date;
  updatedAt: Date;
  imageUrl?: string;
  description?: string;
}

export default function EnrolCourse() {
  const { data, isLoading, isError } = useGetAllCoursesQuery(undefined);
  const [putSingleCourseInProfile] = usePutSingleCourseInProfileMutation();

  console.log(data);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading courses</div>;
  }

  const handleEnrol = async (id: string) => {
    console.log(id);
    try {
      const response = await putSingleCourseInProfile({ id }).unwrap();
      toast.success("Course Added Successfully", {
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
      console.log("Course enrolled successfully:", response);
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
      console.error("Failed to enrol in course:", error);
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
    </>
  );
}
