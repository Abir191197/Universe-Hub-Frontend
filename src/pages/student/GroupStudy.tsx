import { Menu, Transition } from "@headlessui/react";
import { EllipsisHorizontalIcon } from "@heroicons/react/20/solid";
import {  useEffect } from "react";
import { Link } from "react-router-dom";
import {
  useGetAllGroupStudyQuery,
  useUpdateGroupStudyMutation,
} from "../../redux/features/Student Management/GroupStudy";
import { Slide, toast } from "react-toastify";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";

// Define the status type and statuses for participants
type Status = "Participant";
const statuses: Record<Status, string> = {
  Participant: "text-green-700 bg-green-50 ring-green-600/20",
};

export default function GroupStudy() {
  // Fetch all group studies
  const { data } = useGetAllGroupStudyQuery(undefined);
  const [updateGroupStudy, { isSuccess, error }] =
    useUpdateGroupStudyMutation();

  const user = useSelector(selectCurrentUser);


  
  // Show toast notifications based on mutation result using useEffect
  useEffect(() => {
    if (isSuccess) {
      toast.success("Successfully joined the group study!", {
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
    } else if (error) {
     
      toast.error(error.data.message, {
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
  }, [isSuccess, error]); // This ensures the toast is shown only when `isSuccess` or `error` changes

const clients =
  data?.data?.map((study) => ({
    id: study._id, 
    name: study.topic,
    imageUrl: "https://tailwindui.com/img/logos/48x48/tuple.svg",
    lastInvoice: {
      dateTime: new Date(study.selectDate).toLocaleString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }), // Correctly formatted with options for month, day, and time
      description: study.Description,
      link: study.MeetLink,
      status: "Participant" as Status,
      TotalJoin: study.TotalJoin || 0,
      alreadyJoined: study.BookedByEmail.includes(user?.email), // Check if the current user has already joined
    },
  })) || [];


  return (
    <div>
      <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-20 -mx-8 -mt-11">
        <img
          src="https://img.freepik.com/free-photo/young-students-learning-together-group-study_23-2149211067.jpg?t=st=1725297474~exp=1725301074~hmac=bb91371714767cb312e27e823fb967e37a26c0fa6328353feb984be43ff16cfe&w=826"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-blue-900 opacity-50 rounded-lg"></div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Group Study
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Join a group study to collaborate and learn together.
            </p>
          </div>
        </div>
      </div>

      <Link to="CreateCounselling">
        <button className="mb-8 px-4 py-2 bg-blue-500 text-black rounded-md hover:bg-blue-300 mt-6">
          Create Group Study
        </button>
      </Link>

      <ul
        role="list"
        className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8">
        {clients.map((client) => (
          <li
            key={client.id}
            className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg">
            <dl className="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6">
              <div className="flex justify-between gap-x-4 py-3">
                <dt className="text-gray-500">Topic Name</dt>
                <dd className="text-gray-700">{client.name}</dd>
              </div>
              <div className="flex justify-between gap-x-4 py-3">
                <dt className="text-gray-500">Description</dt>
                <dd className="text-gray-700">
                  {client.lastInvoice.description}
                </dd>
              </div>
              <div className="flex justify-between gap-x-4 py-3">
                <dt className="text-gray-500">Date & Time</dt>
                <dd className="text-gray-700">{client.lastInvoice.dateTime}</dd>
              </div>
              <div className="flex justify-between gap-x-4 py-3">
                <dt className="text-gray-500">Link</dt>
                <dd className="text-gray-700">
                  <a
                    href={client.lastInvoice.link}
                    className="text-blue-500 hover:underline">
                    {client.lastInvoice.link}
                  </a>
                </dd>
              </div>
              <div className="flex justify-between items-center gap-x-4 py-3">
                <dt className="text-gray-500">Participants</dt>
                <dd className="flex items-center gap-x-2">
                  <div
                    className={`rounded-md py-1 px-2 text-xs font-medium ring-1 ring-inset ${statuses.Participant}`}>
                    {client.lastInvoice.TotalJoin}
                  </div>
                  <button
                    onClick={() => updateGroupStudy(client.id)}
                    disabled={client.lastInvoice.alreadyJoined} // Disable button if already joined
                    className={`ml-auto px-3 py-1 ${
                      client.lastInvoice.alreadyJoined
                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                        : "bg-green-400 text-white hover:bg-green-300"
                    } rounded-md`}>
                    {client.lastInvoice.alreadyJoined ? "Joined" : "Join"}
                  </button>
                </dd>
              </div>
            </dl>
          </li>
        ))}
      </ul>
    </div>
  );
}
