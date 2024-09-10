import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import { useGetWhoLogInQuery } from "../../redux/features/Student Management/getWhoLogInAPI";
import Loader from "../../components/Loader";
import React from "react";

// Define a type for the ProfileItem component props
interface ProfileItemProps {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; // Type for Icon
  label: string;
  value: string | number;
}

// A reusable component for displaying profile items in a card format
const ProfileItem: React.FC<ProfileItemProps> = ({ Icon, label, value }) => (
  <div className="border rounded-lg p-4 shadow-lg bg-white">
    <div className="flex items-center">
      <Icon className="h-6 w-6 text-blue-500 mr-3" aria-hidden="true" />
      <div>
        <h4 className="text-sm font-medium text-gray-700">{label}</h4>
        <p className="text-sm text-gray-900">{value}</p>
      </div>
    </div>
  </div>
);

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
    <div>
      <div>
        <img
          className="h-32 w-full object-cover lg:h-48"
          src={profile.backgroundImage}
          alt="Cover"
        />
      </div>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
          <div className="flex">
            <img
              className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
              src={profile.avatar}
              alt=""
            />
          </div>
          <div className="mt-11 flex-col  sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
            <div className="mt-6 min-w-0 flex-1 block  md:block ">
              <h1 className="truncate text-2xl font-bold text-gray-900">
                {profile.name}
              </h1>
            </div>
            <div className="pl-24 mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
              <div className=" inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                <EnvelopeIcon
                  className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                <span>{profile.email}</span>
              </div>
              <div className="inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                <EnvelopeIcon
                  className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                <span>{profile.id}</span>
              </div>
              <div className="inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                <EnvelopeIcon
                  className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                <span>{profile.role}</span>
              </div>
              <div className="inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                <PhoneIcon
                  className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                <span>{profile.role}</span>
              </div>
              <div className="inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                <PhoneIcon
                  className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                <span>{profile.phone}</span>
              </div>
              <div className="inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                <PhoneIcon
                  className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                <span>{profile.status}</span>
              </div>
              <div className="inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                <PhoneIcon
                  className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                <span>{profile.program}</span>
              </div>
              <Link
                to="EditProfile"
                className="inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                <PhoneIcon
                  className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                <span>Edit</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-6 hidden min-w-0 flex-1 sm:block md:hidden">
          <h1 className="truncate text-2xl font-bold text-gray-900">
            {profile.name}
          </h1>
        </div>
      </div>
    </div>
  );
}
