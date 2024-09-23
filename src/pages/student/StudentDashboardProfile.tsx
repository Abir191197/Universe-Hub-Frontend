import {
  EnvelopeIcon,
  PhoneIcon,
  IdentificationIcon,
  UserIcon,
  StarIcon,
  AcademicCapIcon,
  PencilSquareIcon,
} from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import { useGetWhoLogInQuery } from "../../redux/features/Student Management/getWhoLogInAPI";
import Loader from "../../components/Loader";



export default function StudentDashboardProfile() {
  const { data, isLoading } = useGetWhoLogInQuery(undefined);

  if (isLoading) {
    return <Loader />;
  }

  const profile = {
    id: data.data.id,
    name: data.data.name,
    email: data.data.email,
    avatar: data.data.imageLink,
    backgroundImage: data.data.coverLink,
    status: data.data.status,
    program: data.data.program,
    phone: data.data.phone,
    course: data.data.course,
    role: data.data.role,
  };

  return (
    <div className="bg-white shadow rounded-lg">
      <div>
        <img
          className="h-32 w-full object-cover lg:h-48 rounded-t-lg"
          src={profile.backgroundImage}
          alt="Cover"
        />
      </div>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative -mt-16 sm:-mt-20 flex items-center">
          <div className="flex-shrink-0">
            <img
              className="h-32 w-32 rounded-full ring-4 ring-white"
              src={profile.avatar}
              alt="Avatar"
            />
          </div>
          <div className="ml-4">
            <div className="bg-white p-4 rounded-md shadow-md">
              <h1 className="text-3xl font-bold text-gray-900">
                {profile.name}
              </h1>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Email */}
          <div className="flex items-center bg-gray-50 p-4 rounded-lg shadow-sm">
            <EnvelopeIcon
              className="h-6 w-6 text-indigo-500 mr-3"
              aria-hidden="true"
            />
            <span className="text-gray-700">{profile.email}</span>
          </div>

          {/* ID */}
          <div className="flex items-center bg-gray-50 p-4 rounded-lg shadow-sm">
            <IdentificationIcon
              className="h-6 w-6 text-indigo-500 mr-3"
              aria-hidden="true"
            />
            <span className="text-gray-700">{profile.id}</span>
          </div>

          {/* Role */}
          <div className="flex items-center bg-gray-50 p-4 rounded-lg shadow-sm">
            <UserIcon
              className="h-6 w-6 text-indigo-500 mr-3"
              aria-hidden="true"
            />
            <span className="text-gray-700 capitalize">{profile.role}</span>
          </div>

          {/* Phone */}
          <div className="flex items-center bg-gray-50 p-4 rounded-lg shadow-sm">
            <PhoneIcon
              className="h-6 w-6 text-indigo-500 mr-3"
              aria-hidden="true"
            />
            <span className="text-gray-700">{profile.phone}</span>
          </div>

          {/* Status */}
          <div className="flex items-center bg-gray-50 p-4 rounded-lg shadow-sm">
            <StarIcon
              className="h-6 w-6 text-indigo-500 mr-3"
              aria-hidden="true"
            />
            <span className="text-gray-700 capitalize">{profile.status}</span>
          </div>

          {/* Program */}
          <div className="flex items-center bg-gray-50 p-4 rounded-lg shadow-sm">
            <AcademicCapIcon
              className="h-6 w-6 text-indigo-500 mr-3"
              aria-hidden="true"
            />
            <span className="text-gray-700">{profile.program}</span>
          </div>

          {/* Edit Profile */}
          <Link
            to="EditProfile"
            className="flex items-center justify-center bg-indigo-500 p-2 rounded-lg shadow-sm text-white hover:bg-indigo-600 transition duration-300 border-4 border-white mt-8 mx-4 mb-4 border-b-8">
            <PencilSquareIcon
              className="h-5 w-5 text-white mr-2"
              aria-hidden="true"
            />
            <span className="text-sm">Edit Profile</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
