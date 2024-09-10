import { EnvelopeIcon, PhoneIcon, IdentificationIcon, UserIcon, StarIcon, AcademicCapIcon, PencilSquareIcon } from "@heroicons/react/20/solid";
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

export default function AdminDashboardProfile() {
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
    <div className="max-w-5xl mx-auto p-6 bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
        <img
          className="w-full h-48 object-cover"
          src={profile.backgroundImage}
          alt={profile.backgroundImage}
        />
        <div className="p-6">
          <div className="flex items-center">
            <img
              className="h-24 w-24 rounded-full border-4 border-white -mt-12"
              src={profile.avatar}
              alt="Profile avatar"
            />
            <div className="ml-6">
              <h2 className="text-2xl font-semibold text-gray-800">{profile.name}</h2>
              <p className="text-gray-600">{profile.role}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Using the reusable ProfileItem component for each data point */}
        <ProfileItem Icon={EnvelopeIcon} label="Email" value={profile.email} />
        <ProfileItem Icon={IdentificationIcon} label="ID" value={profile.id} />
        <ProfileItem Icon={UserIcon} label="Role" value={profile.role} />
        <ProfileItem Icon={PhoneIcon} label="Phone" value={profile.phone} />
        <ProfileItem Icon={StarIcon} label="Status" value={profile.status} />
        <ProfileItem Icon={AcademicCapIcon} label="Program" value={profile.program} />
      </div>

      <div className="mt-6">
        <Link to="EditProfile" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
          <PencilSquareIcon className="h-5 w-5 mr-2" aria-hidden="true" />
          Edit Profile
        </Link>
      </div>
    </div>
  );
}
