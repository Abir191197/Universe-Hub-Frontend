import { Menu, Transition } from "@headlessui/react";
import ChevronDownIcon from "@heroicons/react/24/solid/ChevronDownIcon";
import { Fragment, useEffect, useState } from "react";
import { Slide, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../../components/Loader";
import { useActiveUserMutation } from "../../redux/features/Admin Management/ActiveUser";
import { useGetAllUserQuery } from "../../redux/features/Admin Management/getAllUser";
import { useRoleChangeToAdminMutation } from "../../redux/features/Admin Management/RoleChangeToAdmin";
import { useSuspendUserMutation } from "../../redux/features/Admin Management/UserSuspended";
import { TUser } from "../../redux/features/auth/authSlice";

export default function AllUserManage() {
  const { data, isLoading, error } = useGetAllUserQuery(undefined);
  const [roleChangeToAdmin] = useRoleChangeToAdminMutation();
  const [suspendUser] = useSuspendUserMutation();
  const [activateUser] = useActiveUserMutation();

  const [users, setUsers] = useState<TUser[]>([]);

  // Update users only when data changes
  useEffect(() => {
    if (data?.data && JSON.stringify(data.data) !== JSON.stringify(users)) {
      setUsers(data.data);
    }
  }, [data, users]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    toast.error("Error fetching users", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
      transition: Slide,
    });
  }

  const handleRoleChange = async (userId: string) => {
    try {
      await roleChangeToAdmin(userId).unwrap();
      toast.success("User role updated", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
        transition: Slide,
      });
    } catch (error: any) {
      toastError(error, "An error occurred while updating user role.");
    }
  };

  const handleSuspendUser = async (userId: string) => {
    try {
      await suspendUser(userId).unwrap();
      toast.success("User has been suspended", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
        transition: Slide,
      });
    } catch (error: any) {
      toastError(error, "An error occurred while suspending the user.");
    }
  };

  const handleActivateUser = async (userId: string) => {
    try {
      await activateUser(userId).unwrap();
      toast.success("User has been activated", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
        transition: Slide,
      });
    } catch (error: any) {
      toastError(error, "An error occurred while activating the user.");
    }
  };

  const toastError = (error: any, defaultMessage: string) => {
    const errorMessage =
      error?.data?.message || error?.message || defaultMessage;
    toast.error(`Error: ${errorMessage}`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
      transition: Slide,
    });
  };

  const currentUser = users.find(
    (user) => user.email === "current_user@example.com"
  );

  return (
    <>
      <div className="min-h-screen p-6 ">
        <div className="max-w-7xl mx-auto">
          <div className="sm:flex sm:items-center mb-6">
            <div className="sm:flex-auto">
              <h1 className="text-2xl font-semibold text-gray-800">Users</h1>
              <p className="mt-2 text-lg text-gray-700 ">
                Manage all the users in your account, including their name,
                email, role, and status.
              </p>
            </div>
          </div>

          <div className=" bg-[#fffff6] shadow-md rounded-lg pb-64 ">
            <table className="min-w-full divide-y divide-gray-300 ">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">
                    ID
                  </th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">
                    Name
                  </th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">
                    Email
                  </th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">
                    Phone
                  </th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">
                    Role
                  </th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">
                    Status
                  </th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-[#fffff6] ">
                {users.map((user: TUser) => (
                  <tr key={user._id}>
                    <td className="py-4 px-4 text-sm text-gray-900">
                      {user.id}
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-900">
                      {user.name}
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-900">
                      {user.email}
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-900">
                      {user.phone}
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-900">
                      {user.role}
                    </td>
                    <td className="py-4 px-4 text-sm">
                      <span
                        className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${
                          user.status === "Active"
                            ? "bg-green-50 text-green-700 ring-green-600/20"
                            : "bg-red-50 text-red-700 ring-red-600/20"
                        }`}>
                        {user.status}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-sm ">
                      <Menu
                        as="div"
                        className="relative inline-block text-left">
                        <div>
                          <Menu.Button className="inline-flex w-full justify-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Action
                            <ChevronDownIcon
                              className="h-5 w-5 text-gray-400 ml-2"
                              aria-hidden="true"
                            />
                          </Menu.Button>
                        </div>

                        <div>
                          <Transition as={Fragment}>
                            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right bg-white shadow-lg ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 rounded-md focus:outline-none">
                              <div className="py-1">
                                {user.status === "Suspended" ? (
                                  <Menu.Item>
                                    {({ active }) => (
                                      <button
                                        onClick={() =>
                                          handleActivateUser(user._id)
                                        }
                                        className={`block px-4 py-2 text-sm w-full text-left ${
                                          active
                                            ? "bg-gray-100 text-gray-900"
                                            : "text-gray-700"
                                        }`}>
                                        Activate User
                                      </button>
                                    )}
                                  </Menu.Item>
                                ) : (
                                  <Menu.Item>
                                    {({ active }) => (
                                      <button
                                        onClick={() =>
                                          handleSuspendUser(user._id)
                                        }
                                        className={`block px-4 py-2 text-sm w-full text-left ${
                                          active
                                            ? "bg-gray-100 text-gray-900"
                                            : "text-gray-700"
                                        }`}>
                                        Suspend User
                                      </button>
                                    )}
                                  </Menu.Item>
                                )}
                                <Menu.Item>
                                  {({ active }) => (
                                    <button
                                      onClick={() => handleRoleChange(user._id)}
                                      className={`block px-4 py-2 text-sm w-full text-left ${
                                        active
                                          ? "bg-gray-100 text-gray-900"
                                          : "text-gray-700"
                                      }`}>
                                      Change Role
                                    </button>
                                  )}
                                </Menu.Item>
                              </div>
                            </Menu.Items>
                          </Transition>
                        </div>
                      </Menu>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
