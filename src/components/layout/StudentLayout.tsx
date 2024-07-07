import { Fragment, useState } from "react";
import { Dialog, Menu, Transition, DialogPanel } from "@headlessui/react";
import { Link, Outlet, useLocation } from "react-router-dom";
import {
  Bars3Icon,
  BellIcon,
  ChatBubbleLeftRightIcon,
  Cog6ToothIcon,
  FolderIcon,
  HomeIcon,
  UserGroupIcon,
  XMarkIcon,
  QrCodeIcon,
  SwatchIcon,
  LightBulbIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,

  SparklesIcon,
  ChatBubbleLeftEllipsisIcon,
} from "@heroicons/react/20/solid";
import { useAppDispatch } from "../../redux/hook";
import { logout } from "../../redux/features/auth/authSlice";

const navigation = [
  { name: "Dashboard", to: "/student/dashboard", icon: HomeIcon },
  { name: "Courses", to: "/student/courses", icon: QrCodeIcon },
  { name: "Resource", to: "/student/resource", icon: FolderIcon },
  { name: "Counselling", to: "/student/counselling", icon: UserGroupIcon },
  { name: "Study Plan", to: "/student/study-plan", icon: SwatchIcon },
  { name: "F.A.Q Bot", to: "/student/faq-bot", icon: LightBulbIcon },
  {
    name: "Messages",
    to: "/student/messages",
    icon: ChatBubbleLeftEllipsisIcon,
  },
  {
    name: "Group Study",
    to: "/student/group-study",
    icon: ChatBubbleLeftRightIcon,
  },
  { name: "AI Tutor", to: "/student/ai-tutor", icon: SparklesIcon },
];

const userNavigation = [
  { name: "Your profile", to: "/profile" },
  { name: "Sign out", action: "signout",to:'/login' },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function StudentLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  //const history = useHistory();
  const dispatch = useAppDispatch();

  // Handle sign out
  const handleSignOut = () => {
    dispatch(logout()); // Dispatch logout action to clear authentication state
    //history.push("/login"); // Redirect to login page after logout
  };

  return (
    <>
      {/* Sidebar and Main Content */}
      <div>
        {/* Sidebar (Mobile) */}
        <Transition show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-50 lg:hidden"
            onClose={setSidebarOpen}>
            {/* Sidebar Overlay */}
            <Transition
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0">
              <div className="fixed inset-0 bg-gray-900/80" />
            </Transition>

            {/* Sidebar Content */}
            <div className="fixed inset-0 flex">
              <Transition
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full">
                <DialogPanel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0">
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button
                        type="button"
                        className="-m-2.5 p-2.5"
                        onClick={() => setSidebarOpen(false)}>
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition>

                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-100 px-6 pb-4">
                    {/* Sidebar Logo */}
                    <div className="flex h-16 shrink-0 items-center">
                      <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Your Company"
                      />
                    </div>

                    {/* Sidebar Navigation */}
                    <nav className="flex flex-1 flex-col">
                      <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <li>
                          <ul role="list" className="-mx-2 space-y-1">
                            {/* Render Sidebar Navigation Items */}
                            {navigation.map((item) => (
                              <li key={item.name}>
                                <Link
                                  to={item.to}
                                  className={classNames(
                                    item.to === location.pathname
                                      ? "bg-gray-50 text-indigo-600"
                                      : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50",
                                    "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                                  )}>
                                  <item.icon
                                    className={classNames(
                                      item.to === location.pathname
                                        ? "text-indigo-600"
                                        : "text-gray-400 group-hover:text-indigo-600",
                                      "h-6 w-6 shrink-0"
                                    )}
                                    aria-hidden="true"
                                  />
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </li>

                        {/* Settings Link */}
                        <li className="mt-auto">
                          <Link
                            to="#"
                            className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600">
                            <Cog6ToothIcon
                              className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                              aria-hidden="true"
                            />
                            Settings
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </DialogPanel>
              </Transition>
            </div>
          </Dialog>
        </Transition>

        {/* Sidebar (Desktop) */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-52 lg:flex-col">
          <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-gray-200 px-6 pb-4">
            {/* Sidebar Logo */}
            <div className="flex h-16 shrink-0 items-center">
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company"
              />
            </div>

            {/* Sidebar Navigation */}
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-1">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {/* Render Sidebar Navigation Items */}
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <Link
                          to={item.to}
                          className={classNames(
                            item.to === location.pathname
                              ? "bg-gray-50 text-indigo-600"
                              : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50",
                            "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                          )}>
                          <item.icon
                            className={classNames(
                              item.to === location.pathname
                                ? "text-indigo-600"
                                : "text-gray-400 group-hover:text-indigo-600",
                              "h-6 w-6 shrink-0"
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>

                {/* Settings Link */}
                <li>
                  <Link
                    to="#"
                    className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600">
                    <Cog6ToothIcon
                      className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                      aria-hidden="true"
                    />
                    Settings
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:pl-48">
          <div className="sticky top-0 z-40 flex h-12 shrink-0 items-center gap-x-4 border-black  bg-orange-100 rounded-lg px-4 shadow-sm sm:px-6 lg:px-3">
            {/* Open Sidebar (Mobile) Button */}
            <button
              type="button"
              className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
              onClick={() => setSidebarOpen(true)}>
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>

            {/* Divider (Mobile) */}
            <div
              className="h-6 w-px bg-gray-200 lg:hidden"
              aria-hidden="true"
            />

            {/* Search Input (Desktop) */}
            <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
              <div className="relative flex flex-1 mx-72 mt-4">
               All course search 
              </div>

              {/* Notification Bell (Desktop) */}
              <div className="flex items-center gap-x-4 lg:gap-x-6">
                <button
                  type="button"
                  className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500">
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Divider (Desktop) */}
                <div
                  className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200"
                  aria-hidden="true"
                />

                {/* User Menu (Desktop) */}
                <Menu as="div" className="relative">
                  <Menu.Button className="-m-1.5 flex items-center p-1.5">
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full bg-gray-50"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <span className="hidden lg:flex lg:items-center">
                      <span
                        className="ml-4 text-sm font-semibold leading-6 text-gray-900"
                        aria-hidden="true">
                        Tom Cook
                      </span>
                      <ChevronDownIcon
                        className="ml-2 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </Menu.Button>
                  {/* User Menu Items */}
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95">
                    <Menu.Items className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                      {/* Render User Menu Items */}
                      {userNavigation.map((item) => (
                        <Menu.Item key={item.name}>
                          {({ active }) => (
                            <Link
                              to={item.to}
                              className={classNames(
                                active ? "bg-gray-50" : "",
                                "block px-3 py-1 text-sm leading-6 text-gray-900"
                              )}
                              onClick={() =>
                                item.action === "signout"
                                  ? handleSignOut()
                                  : undefined
                              }>
                              {item.name}
                            </Link>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <main className="py-10">
            <div className="px-1 sm:px-4 lg:px-1">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
